import { Formik } from "formik";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import * as Yup from "yup";

import Button from "../../components/Button/Button";
import FormikInput from "../../components/Input/FormikInput";
import { apiRequest } from "../../services/apiService";
import { ILoginApiPayload, ILoginApiResponse } from "../../types/api/api.type";
import { defaultImage, userRole } from "../../utils/constant";

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
// eslint-disable-next-line @typescript-eslint/naming-convention
function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={async (values: ILoginApiPayload) => {
          const result = await apiRequest<ILoginApiResponse, ILoginApiPayload>(
            "authentication/login",
            "POST",
            values
          );
          if (result?.statusCode === 1) {
            localStorage.setItem("token", result?.data?.token);
            localStorage.setItem("role", result?.data?.user?.role);
            if (result?.data?.user?.role == userRole.admin) {
              navigate("/admin");
            } else {
              navigate("/");
            }
          }
        }}
      >
        {({ handleSubmit }) => (
          <div className="pb-16 pt-[12rem]">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
              <div
                className="hidden lg:block lg:w-1/2 bg-cover"
                style={{ backgroundImage: `url(${defaultImage})` }}
              ></div>
              <div className="w-full p-8 lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">
                  NIHIDA
                </h2>
                <p className="text-xl text-gray-600 text-center">
                  Welcome back!
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="border-b w-1/5 lg:w-1/4"></span>
                  <a
                    href="#"
                    className="text-xs text-center text-gray-500 uppercase"
                  >
                    login with email
                  </a>
                  <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <div className="mt-4">
                  <FormikInput
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    name="email"
                    type="email"
                    label="Email"
                  />
                </div>
                <div className="mt-4 relative">
                  <div className="text-xs text-gray-500 absolute top-[4px] right-3">
                    Forget Password?
                  </div>
                  <FormikInput
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    name="password"
                    type="password"
                    label="Password"
                  />
                </div>
                <div className="mt-8">
                  <Button
                    className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                    name="Login"
                    onClick={handleSubmit}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="border-b w-1/5 md:w-1/4"></span>
                  <Link
                    className="text-xs text-gray-500 uppercase"
                    to="/signup"
                  >
                    or sign up
                  </Link>
                  <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default LoginPage;
