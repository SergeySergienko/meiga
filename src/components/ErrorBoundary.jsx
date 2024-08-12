import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error('Error boundary caught an error', error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error boundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error loading Formular</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
