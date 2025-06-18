import { Formik } from "formik"
import { Link, useNavigate } from "react-router"

import Button from "../../components/Button/Button"
import FormikInput from "../../components/Input/FormikInput"
import { eventBus } from "../../contexts/context/eventBus"
import { apiRequest } from "../../services/apiService"
import { ISignUpApiData } from "../../types/api/authentication.types"

// eslint-disable-next-line @typescript-eslint/naming-convention
function SignupPage() {
    const navigate = useNavigate()
    return (
        <>
            <Formik
                initialValues={{ userName: '', email: '', password: '', confirmPassword: '', role: 'user' }}
                onSubmit={async (values) => {

                    const payload = { ...values, role: values.role || "user" };

                    if (values.password !== values.confirmPassword) {
                        eventBus.emit({ type: "warning", message: "Passwords do not match" })
                    } else {
                        const result = await apiRequest<ISignUpApiData>("authentication/signUp", "POST", payload)
                        if (result?.statusCode === 1) {
                            localStorage.setItem("token", result?.data?.token)
                            localStorage.setItem("role", result?.data?.user?.role)
                            navigate("/")
                        }
                    }
                }}
            >{
                    ({ handleSubmit }) => (
                        <section className="bg-gray-50 ">
                            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                                <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                                    <img className="w-8 h-8 mr-2" src="/NIHIDA-LOGO.jpg" alt="logo" />
                                    NIHIDA
                                </div>
                                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                            Create an account
                                        </h1>
                                        <form className="space-y-4 md:space-y-6" action="#">
                                            <div>
                                                <FormikInput name="userName" type="text" placeholder="John Doe" label="Your name" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                                            </div>
                                            <div>
                                                <FormikInput name="email" type="email" placeholder="name@company.com" label="Your email" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                                            </div>
                                            <div>
                                                <FormikInput name="password" type="password" placeholder="••••••••" label="Your Password" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                                            </div>
                                            <div>
                                                <FormikInput name="confirmPassword" type="password" placeholder="••••••••" label="Confirm Password" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                                            </div>
                                            <Button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" name="create account" onClick={handleSubmit} />
                                            <p className="text-sm font-light text-gray-500 ">
                                                Already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline ">Login here</Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>

                    )
                }

            </Formik>
        </>
    )
}

export default SignupPage