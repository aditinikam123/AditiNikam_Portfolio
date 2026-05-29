import emailjs from '@emailjs/browser'

export async function sendContactEmail({ name, email, message }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'Missing EmailJS env vars. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY.',
    )
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      name: name,
      email: email,
      message,
      to_email: 'aditinikam0123@gmail.com',
    },
    { publicKey },
  )
}

