// Main Payment Gateway Component

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

import { IPaymentGatewayProps } from "../../../../types/component/component.types";
import { STRIPE_PUBLISHABLE_KEY } from "../../../../utils/config";
import { CardDetailScreen } from "./CardDetails.screen";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function PaymentGatewayScreen(props: IPaymentGatewayProps) {
  const { showPaymentGateway, values, setShowPaymentGateway } = props;
  const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  const [message, setMessage] = useState("");

  const handleSuccess = (paymentIntent: { id: string }) => {
    setMessage(`Payment successful! Payment ID: ${paymentIntent.id}`);
  };

  const handleError = (error: string) => {
    setMessage(`Payment failed: ${error}`);
  };

  const resetForm = () => {
    setShowPaymentGateway(false);
    setMessage("");
  };

  return (
    <>
      {showPaymentGateway && (
        <div className="min-h-screen bg-gray-50 px-4 pt-[8rem] pb-12">
          <div className="max-w-lg mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-custom_orange_1 mb-2">
                Payment Gateway
              </h1>
              <p className="text-gray-600 text-sm">
                Secure payment processing powered by Stripe
              </p>
            </div>

            {/* Payment Card */}
            <div className="bg-white rounded-xl shadow-md border border-orange-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Payment Details
                </h2>
                <button
                  onClick={resetForm}
                  className="text-custom_orange_1 hover:underline text-sm font-medium"
                >
                  ← Back
                </button>
              </div>

              {/* Amount Display */}
              <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 font-medium">
                    Amount to pay:
                  </span>
                  <span className="text-xl font-bold text-custom_orange_1">
                    ₹{values?.amount || "0.00"}
                  </span>
                </div>
              </div>

              {/* Stripe Card Input */}
              <Elements stripe={stripePromise}>
                <CardDetailScreen
                  values={values}
                  onSuccess={handleSuccess}
                  onError={handleError}
                />
              </Elements>
            </div>

            {/* Message Display */}
            {message && (
              <div
                className={`mt-6 p-4 rounded-lg text-sm font-medium ${
                  message.includes("successful")
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
