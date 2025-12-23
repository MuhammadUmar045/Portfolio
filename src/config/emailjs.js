// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add your email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // EmailJS now calls this a "Public Key" (older docs called it "User ID")
  PUBLIC_KEY: '6p5eJ49P7YTZlXHqs', // Account → API Keys → Public Key
  USER_ID: '6p5eJ49P7YTZlXHqs', // Backwards-compatible alias (safe to remove later)
  SERVICE_ID: 'service_j659frs', // Your EmailJS Service ID (from Gmail service)
  TEMPLATE_ID: 'template_zfac73q', // Your EmailJS Template ID (from Contact Us template)
  TO_EMAIL: 'mumarfarooqkhan45@gmail.com', // Your email address where you want to receive messages
};

// EmailJS Template Variables (these should match your EmailJS template)
export const EMAILJS_TEMPLATE_VARS = {
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  subject: '{{subject}}',
  message: '{{message}}',
  reply_to: '{{reply_to}}',
  to_email: '{{to_email}}', // optional: only if your template uses it
};

// Instructions for setup:
// 1. Sign up at https://www.emailjs.com/
// 2. Add Gmail service
// 3. Create email template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}} (and optionally {{reply_to}} / {{to_email}})
// 4. Copy your User ID, Service ID, and Template ID
// 5. Replace the placeholder values above
// 6. Deploy your changes with: vercel --prod
