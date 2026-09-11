import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          background: '#08080B',
          color: '#F4EFE6',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          fontFamily: 'monospace',
          gap: '20px'
        }}>
          <div style={{ color: '#C5A869', fontSize: '14px', letterSpacing: '4px' }}>
            TECHFEST 2026 — RUNTIME ERROR
          </div>
          <div style={{
            background: '#14141B',
            border: '1px solid #8B1E28',
            borderRadius: '4px',
            padding: '20px',
            maxWidth: '700px',
            width: '100%',
          }}>
            <div style={{ color: '#8B1E28', fontWeight: 'bold', marginBottom: '10px' }}>
              {this.state.error?.name}: {this.state.error?.message}
            </div>
            <pre style={{ color: '#B8A17E', fontSize: '11px', whiteSpace: 'pre-wrap', overflow: 'auto' }}>
              {this.state.error?.stack}
            </pre>
          </div>
          <div style={{ color: '#7E6631', fontSize: '11px' }}>
            Please copy this error and share it for diagnosis.
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
