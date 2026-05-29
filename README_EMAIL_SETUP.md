# Contact form email setup (EmailJS)

The portfolio contact form can send messages to **`aditinikam0123@gmail.com`** using EmailJS (no backend required).

## 1) Create an EmailJS account

- Go to EmailJS and create an account.
- Add an email service (Gmail or any provider).

## 2) Create an email template

Create a template with these variables:

- `from_name`
- `reply_to`
- `message`
- `to_email`

Set the **To email** in the template to use `{{to_email}}` (or directly to your email if you prefer).

## 3) Add environment variables

Create a `.env` file in the project root (same level as `package.json`) and paste:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

You can copy from `.env.example`.

## 4) Restart dev server

Stop `npm run dev` and start it again:

```
npm run dev
```

## 5) Test

Fill the contact form and click **Send Message**.

