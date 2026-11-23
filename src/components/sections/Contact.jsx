import React, { useState } from 'react';
import {
  Send,
  Check,
  Instagram,
  Linkedin,
  Palette,
  Mail,
  FileDown,
  ArrowUp,
  ArrowUpRight
} from 'lucide-react';
import { profileData } from '../../data/content';

export function Contact({ onScrollTop }) {
  const { socialLinks } = profileData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    // TODO: connect Formspree/EmailJS
    setSubmitted(true);
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram className="w-5 h-5 transition-transform duration-200" />;
      case 'Linkedin':
        return <Linkedin className="w-5 h-5 transition-transform duration-200" />;
      case 'Palette':
        return <Palette className="w-5 h-5 transition-transform duration-200" />;
      case 'Mail':
        return <Mail className="w-5 h-5 transition-transform duration-200" />;
      case 'FileDown':
        return <FileDown className="w-5 h-5 transition-transform duration-200" />;
      default:
        return <ArrowUpRight className="w-5 h-5 transition-transform duration-200" />;
    }
  };

  const getGlowClass = (iconName) => {
    switch (iconName) {
      case 'Instagram':
        return 'glow-instagram';
      case 'Linkedin':
        return 'glow-linkedin';
      case 'Palette':
        return 'glow-behance';
      case 'Mail':
        return 'glow-email';
      case 'FileDown':
        return 'glow-download';
      default:
        return 'glow-linkedin';
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-36 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 lg:mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white uppercase">
            LET'S CONNECT
          </h2>
          <p className="font-sans text-base sm:text-xl text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl mx-auto">
            Have a project, production challenge, or industry opportunity? Reach out directly.
          </p>
        </div>

        {/* Stacked Layout: Contact Form on Top, Direct Contact Underneath */}
        <div className="max-w-2xl mx-auto space-y-12 sm:space-y-16 mb-16 sm:mb-24">
          
          {/* Contact Form */}
          <div className="p-5 sm:p-8 md:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 dark:text-white mb-2">
                  MESSAGE TRANSMITTED
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                  Thank you for reaching out! I will review your message and respond shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-sm focus:border-zinc-950 dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-sm focus:border-zinc-950 dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                    MESSAGE / PROJECT INQUIRY *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements, timeline, or inquiry..."
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-sm focus:border-zinc-950 dark:focus:border-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-500 font-mono">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-950 font-mono text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer btn-anim"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact & Availability — strictly UNDER the Form */}
          <div className="space-y-6 text-center pt-2">
            <div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-2 uppercase tracking-wide">
                DIRECT CONTACT
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md mx-auto">
                Feel free to email directly or connect on professional networks.
              </p>
            </div>

            {/* Just Icons Only — centered and glowing */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-1">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target={link.isDownload ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  title={link.name}
                  aria-label={link.name}
                  className={`w-12 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 flex items-center justify-center text-zinc-700 dark:text-zinc-300 direct-contact-icon ${getGlowClass(link.icon)} cursor-pointer`}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>

            {/* Quick Availability Badge */}
            <div className="max-w-md mx-auto p-4 sm:p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/50 dark:bg-emerald-950/20 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                  CURRENT AVAILABILITY
                </span>
              </div>
              <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">
                Open for full-time technical apparel positions, production technology roles, and CAD/pattern consulting engagements.
              </p>
            </div>
          </div>

        </div>

        {/* Minimal Footer */}
        <div className="pt-12 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} PRATHYAYA MV · ALL RIGHTS RESERVED</p>

          <button
            onClick={onScrollTop}
            className="flex items-center gap-2 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default Contact;