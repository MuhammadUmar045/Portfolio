# EmailJS Setup Guide

## What is EmailJS?
EmailJS allows you to send emails directly from your frontend JavaScript code without needing a backend server. It's perfect for portfolio websites and contact forms.

## Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (you'll need this later)

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
New message from {{from_name}} - {{subject}}
```

**Email Body:**
```
You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

### Step 4: Get Your User ID
1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **Public Key** (this is your User ID)

### Step 5: Update Configuration
1. Open `src/config/emailjs.js` in your project
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  USER_ID: 'your_actual_user_id_here',
  SERVICE_ID: 'your_actual_service_id_here', 
  TEMPLATE_ID: 'your_actual_template_id_here',
  TO_EMAIL: 'farazcui007@gmail.com', // Your email address
};
```

### Step 6: Test the Contact Form
1. Start your development server: `npm start`
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email to see if you received the message

## Troubleshooting

### Common Issues:
1. **"Failed to send message" error**: Check that all your EmailJS credentials are correct
2. **No email received**: Check your spam folder and verify your email service is properly connected
3. **Template variables not working**: Make sure the variable names in your template match exactly: `{{from_name}}`, `{{from_email}}`, etc.

### EmailJS Free Plan Limits:
- 200 emails per month
- 2 email services
- 5 email templates

## Alternative Solutions

If you prefer not to use EmailJS, here are other options:

1. **Netlify Forms**: If you deploy to Netlify, you can use their built-in form handling
2. **Formspree**: Another popular form service
3. **Backend API**: Create a simple backend API with Node.js/Express to handle emails

## Security Notes

- Never expose your EmailJS private keys in client-side code
- The public key is safe to use in frontend code
- Consider rate limiting to prevent spam
- Always validate form inputs on both client and server side
