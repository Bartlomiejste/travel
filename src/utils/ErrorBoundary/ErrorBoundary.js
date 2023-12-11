import { Component } from "react";
import ErrorBoundaryUI from "./ErrorBoundary.styled.jsx";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryUI />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
