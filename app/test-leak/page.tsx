import React from 'react';

export default function TestLeakPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0c',
        color: '#f3f4f6',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      {/* Inline script tag containing dummy test secrets for regex scanner detection */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Honeypot test script - hardcoded dummy secrets for security scanner verification
            window.__TEST_SECRETS__ = {
              awsAccessKeyId: "AKIAIOSFODNN7EXAMPLE",
              stripeSecretKey: "sk_live_51Htestdummykey1234567890abcdef"
            };
          `,
        }}
      />

      <div
        style={{
          maxWidth: '600px',
          width: '100%',
          backgroundColor: '#121318',
          border: '1px solid #27272a',
          borderRadius: '12px',
          padding: '2.5rem',
          boxShadow:
            '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#ef4444',
            padding: '6px 12px',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#ef4444',
            }}
          ></span>
          Honeypot Test Endpoint
        </div>

        <h1
          style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#ffffff',
          }}
        >
          Security Scanner Honeypot Page
        </h1>

        <p
          style={{
            color: '#9ca3af',
            fontSize: '1rem',
            lineHeight: '1.5',
            marginBottom: '1rem',
          }}
        >
          This is a dummy endpoint for testing the NakedApp security scanner.
        </p>

        <p
          style={{
            color: '#6b7280',
            fontSize: '0.85rem',
            lineHeight: '1.4',
            marginBottom: '2rem',
            fontStyle: 'italic',
          }}
        >
          This repository contains intentionally dummy/mock secrets for testing DAST and SAST scanners. None of these credentials are real or active.
        </p>

        <div
          style={{
            textAlign: 'left',
            backgroundColor: '#09090b',
            border: '1px solid #1f1f23',
            borderRadius: '8px',
            padding: '1rem',
            fontSize: '0.875rem',
            fontFamily: 'monospace',
            color: '#d1d5db',
          }}
        >
          <div style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
            // Dummy credentials embedded for scanner regex verification:
          </div>
          <div style={{ marginBottom: '0.25rem' }}>
            AWS_ACCESS_KEY_ID:{' '}
            <span style={{ color: '#f87171' }}>AKIAIOSFODNN7EXAMPLE</span>
          </div>
          <div>
            STRIPE_SECRET_KEY:{' '}
            <span style={{ color: '#f87171' }}>
              sk_live_51Htestdummykey1234567890abcdef
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
