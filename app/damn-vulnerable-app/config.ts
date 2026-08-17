// TEST HONEYPOT: ALL CREDENTIALS ARE SYNTHETIC AND INACTIVE FOR DAST/SAST TESTING ONLY.
// This file intentionally contains mock credentials to benchmark security scanners.

export function initAnalytics() {
  const firebaseConfig = {
    apiKey: "AIzaSyFakeApiKeyForTestingPurposesOnly123",
    authDomain: "dummy-project-leak.firebaseapp.com",
    projectId: "dummy-project-leak",
    storageBucket: "dummy-project-leak.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123def456ghi789",
    databaseURL: "https://dummy-project-leak.firebaseio.com",
  };
  
  console.log("Firebase initialized", firebaseConfig);
}

export function connectStorage() {
  const awsConfig = {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    region: "us-east-1"
  };

  const supabaseUrl = "https://xyzcompany12345.supabase.co";
  // The payload base64-decodes to {"role": "service_role"}
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjogInNlcnZpY2Vfcm9sZSJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  console.log("Storage connected", { awsConfig, supabaseUrl, supabaseKey });
}

export function paymentHandler() {
  const stripeConfig = {
    publicKey: "pk_live_51MzFakeStripePublicKey99887766554433221100",
    secretKey: "sk_live_51MzFakeStripeSecretKey99887766554433221100"
  };

  console.log("Payments configured", stripeConfig);
}

export function setupAI() {
  const openAIConfig = {
    apiKey: "sk-proj-DummyOpenAIKeyWithAtLeastFiftyCharactersForTestingPurpose123456789",
    model: "gpt-4"
  };

  console.log("AI setup complete", openAIConfig);
}

export function configureSourceControl() {
  const githubConfig = {
    personalAccessToken: "ghp_FakeGitHubPersonalAccessToken1234567890",
    fineGrainedToken: "github_pat_11AEXAMPLE0123456789_DummySecretKeyForScannerTest"
  };

  console.log("Source control configured", githubConfig);
}

export function connectBackend() {
  const dbUri = "postgres://admin:SuperSecretPass123!@db.example.internal:5432/production_db";
  
  console.log("Database connected to", dbUri);
}
