import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Check, CreditCard, Loader, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { apiRequest } from "../../../../services/apiService";
import {
  ICreatePaymentApiPayload,
  ICreatePaymentApiResponse,
} from "../../../../types/api/api.type";
import { ICardDetailsScreenProps } from "../../../../types/component/component.types";

// Card Element Styles
const cardElementOptions = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export function CardDetailScreen(props: ICardDetailsScreenProps) {
  const { values, onSuccess, onError } = props;
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [databaseId, setDatabaseId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  // Use ref to track if payment is already in progress
  const isPaymentInProgress = useRef(false);
  const hasInitialized = useRef(false);

  const createPaymentIntent = async () => {
    const result = await apiRequest<
      ICreatePaymentApiResponse,
      ICreatePaymentApiPayload
    >("/payment/createPayment", "POST", {
      amount: values?.amount,
      metadata: {
        name: values?.name,
        email: values?.email,
      },
      currency: "INR",
      name: values?.name,
      email: values?.email,
      message: values?.message,
      billingName: values?.billingName,
      billingAddress: values?.billingAddress,
      city: values?.city,
      state: values?.state,
      postalCode: values?.postalCode,
      country: values?.country,
    });
    if (result?.statusCode === 1) {
      setClientSecret(result?.data?.clientSecret);
      setDatabaseId(result?.data?.databaseId);
    } else if (result?.statusCode === 0) {
      onError(result?.errorMessage);
    }
  };

  useEffect(() => {
    if (hasInitialized.current || !values.amount) return;
    hasInitialized.current = true;
    createPaymentIntent();
  }, [values, onError]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !stripe ||
      !elements ||
      !clientSecret ||
      loading ||
      isPaymentInProgress.current
    ) {
      return;
    }

    // Set payment in progress flag
    isPaymentInProgress.current = true;
    setLoading(true);
    setPaymentStatus("");

    try {
      const cardElement = elements.getElement(CardElement);

      if (!cardElement) {
        throw new Error("Card element not found");
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: values.name,
              email: values.email,
              address: {
                line1: values.billingAddress,
                city: values.city,
                state: values.state,
                postal_code: values.postalCode,
                country: values.country,
              },
            },
          },
        }
      );

      if (error) {
        setPaymentStatus("failed");
        onError(error?.message || "An unexpected error occurred");
        await apiRequest(`/payment/updatePayment/${databaseId}`, "POST", {
          status: "failed",
        });
        throw new Error(error.message);
      } else if (paymentIntent?.status === "succeeded") {
        setPaymentStatus("succeeded");
        onSuccess(paymentIntent);
        await apiRequest(`/payment/updatePayment/${databaseId}`, "POST", {
          status: paymentIntent?.status,
        });
      } else {
        setPaymentStatus("failed");
        onError("Payment was not completed successfully");
        await apiRequest(`/payment/updatePayment/${databaseId}`, "POST", {
          status: paymentIntent?.status,
        });
        throw new Error(`Payment status: ${paymentIntent?.status}`);
      }
    } catch (err) {
      if (err instanceof Error) {
        setPaymentStatus("failed");
        onError(err.message || "An unexpected error occurred");
        await apiRequest(`/payment/updatePayment/${databaseId}`, "POST", {
          status: "failed",
        });
        throw err;
      } else {
        throw err;
      }
    } finally {
      setLoading(false);
      isPaymentInProgress.current = false;
    }
  };

  // Reset payment progress flag when trying again
  const handleTryAgain = () => {
    isPaymentInProgress.current = false;
    setPaymentStatus("");
    setLoading(false);
  };

  if (paymentStatus === "succeeded") {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
        <Check className="mx-auto h-12 w-12 text-green-500 mb-4" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Payment Successful!
        </h3>
        <p className="text-green-600">
          Your payment has been processed successfully.
        </p>
      </div>
    );
  }

  if (paymentStatus === "failed") {
    return (
      <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
        <X className="mx-auto h-12 w-12 text-red-500 mb-4" />
        <h3 className="text-lg font-semibold text-red-800 mb-2">
          Payment Failed
        </h3>
        <p className="text-red-600 mb-4">
          There was an issue processing your payment.
        </p>
        <button
          onClick={handleTryAgain}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  const isButtonDisabled =
    !stripe ||
    !elements ||
    !clientSecret ||
    loading ||
    isPaymentInProgress.current;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Card Details Section */}
      <div className="bg-white p-5 rounded-xl border border-orange-100 shadow-md">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Card Details
        </label>
        <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
          <CardElement options={cardElementOptions} />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isButtonDisabled}
        className={`w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
          isButtonDisabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-custom_orange_1 text-white hover:bg-orange-600"
        }`}
      >
        {loading || isPaymentInProgress.current ? (
          <>
            <Loader className="h-5 w-5 animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <CreditCard className="h-5 w-5" />
            <span>Pay ₹{values?.amount || "0.00"}</span>
          </>
        )}
      </button>

      {/* Payment Initialization Message */}
      {!clientSecret && (
        <div className="text-center text-sm text-gray-500">
          Initializing payment...
        </div>
      )}
    </form>
  );
}
