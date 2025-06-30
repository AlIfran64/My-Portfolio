import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        toast.success("Message sent successfully!")
        form.current.reset();
      },
      (error) => {
        toast.error("Failed to send. Try again later.", error)

      }
    );
  };

  return (
    <div className='bg-[#0f0f0f] px-4 py-20 mt-10 md:mt-32'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between'>
        {/* left */}
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>Get in Touch</h2>
          <p className='text-neutral-400 mb-8'>
            Have a question or want to work together? <br /> Send me a message!
          </p>

          <p>Address: Dhaka, Bangladesh</p>
          <p>Email: alifranrafi64@gmail.com</p>
          <p>Mobile/What'sapp: +880 1746-931375</p>
        </div>

        {/* right */}
        <div className='w-full max-w-3xl bg-[#1a1a1a]/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border border-[#2a2a2a]'>

          <form ref={form} onSubmit={sendEmail} className='space-y-6'>

            {/* Name */}
            <div>
              <label className='block text-sm text-neutral-300 mb-1'>Your Name</label>
              <input
                type='text'
                name='user_name'
                required
                className='w-full px-4 py-3 rounded-lg bg-[#1f1f1f] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#0071BD] transition-all duration-200'
              />
            </div>

            {/* Email */}
            <div>
              <label className='block text-sm text-neutral-300 mb-1'>Email Address</label>
              <input
                type='email'
                name='user_email'
                required
                className='w-full px-4 py-3 rounded-lg bg-[#1f1f1f] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#0071BD] transition-all duration-200'
              />
            </div>

            {/* Message */}
            <div>
              <label className='block text-sm text-neutral-300 mb-1'>Message</label>
              <textarea
                name='message'
                rows='5'
                required
                className='w-full px-4 py-3 rounded-lg bg-[#1f1f1f] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#0071BD] transition-all duration-200'
              ></textarea>
            </div>

            {/* Submit */}
            <div className='text-center'>
              <button
                type='submit'
                className='px-6 py-3 rounded-full bg-gradient-to-r from-[#0071BD] to-[#00C6FF] text-white font-semibold hover:opacity-90 transition duration-300 shadow-md'
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
