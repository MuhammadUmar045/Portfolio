// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add your email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  USER_ID: 'YOUR_EMAILJS_USER_ID', // Replace with your EmailJS User ID
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
  TO_EMAIL: 'farazcui007@gmail.com', // Your email address where you want to receive messages
};

// EmailJS Template Variables (these should match your EmailJS template)
export const EMAILJS_TEMPLATE_VARS = {
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  subject: '{{subject}}',
  message: '{{message}}',
  to_email: '{{to_email}}',
};
