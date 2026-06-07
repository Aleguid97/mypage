import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container text-center mt-5">
          <h1>Something went wrong.</h1>
          <p>Please try refreshing the page.</p>
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
