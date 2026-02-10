import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '1645b4a3-5f8c-4cba-8201-0369932a4c02');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8">
      <h3 className="text-2xl font-bold text-white mb-6">
        Send Me a Message
      </h3>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-6 bg-green-300 text-white px-4 py-3 rounded-xl border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-slideInLeft">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-6 bg-red-300 text-white px-4 py-3 rounded-xl border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-slideInLeft">
          Failed to send message. Please try again or email me directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm mb-2 text-gray-300 font-semibold">
            Your Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            required
            disabled={isSubmitting}
            className="w-full bg-zinc-800 border-2 border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-300 font-semibold">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            disabled={isSubmitting}
            className="w-full bg-zinc-800 border-2 border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-300 font-semibold">
            Subject
          </label>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            required
            disabled={isSubmitting}
            className="w-full bg-zinc-800 border-2 border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-300 font-semibold">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter details"
            required
            disabled={isSubmitting}
            className="w-full bg-zinc-800 border-2 border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 py-3 rounded-lg transition"
        >
          <Send className="h-5 w-5" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;