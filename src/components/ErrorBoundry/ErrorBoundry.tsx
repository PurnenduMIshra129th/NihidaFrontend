import { Component, ReactNode } from "react";

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 px-4">
          <div className="bg-white border border-orange-200 rounded-lg shadow-lg max-w-md w-full p-6 text-center">
            <h2 className="text-2xl font-bold text-custom_orange_1 mb-2">
              Something went wrong
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              {this.state.error?.message || "An unexpected error occurred."}
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => window.history.back()}
                className="bg-gray-200 text-gray-800 font-medium px-5 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Go Back
              </button>
              <button
                onClick={() => window.location.reload()}
                className="bg-custom_orange_1 text-white font-medium px-5 py-2 rounded-md hover:bg-orange-500 transition"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
