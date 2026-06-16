import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, CheckCircle, ArrowRight, Building2, Truck, Users } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [distForm, setDistForm] = useState({ company: '', contact: '', email: '', city: '', region: '', experience: '', message: '' });
  const [distSubmitted, setDistSubmitted] = useState(false);
  const [distLoading, setDistLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await supabase.from('contact_messages').insert([form]);
    setLoading(false);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleDistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDistLoading(true);
    await supabase.from('distributor_inquiries').insert([distForm]);
    setDistLoading(false);
    setDistForm({ company: '', contact: '', email: '', city: '', region: '', experience: '', message: '' });
    setDistSubmitted(true);
    setTimeout(() => setDistSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">

      {/* ── HEADER ──────────────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-gradient-to-br from-green-950 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] block mb-6">Get in Touch</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>Contact Us</h1>
          <p className="text-green-100/80 text-xl leading-relaxed max-w-xl mx-auto">
            Questions about products, bulk orders, partnerships, or just want to say hello — we're here for you.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO + FORM ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left — info */}
            <div className="lg:col-span-1 space-y-8">
              {[
                { icon: Phone, label: 'Phone', value: '+91 99999 99999', href: 'tel:+919999999999' },
                { icon: Mail, label: 'Email', value: 'hello@tatvamasiorganics.com', href: 'mailto:hello@tatvamasiorganics.com' },
                { icon: MapPin, label: 'Location', value: 'Mumbai, Maharashtra, India' },
                { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us instantly', href: 'https://wa.me/919999999999' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-900 font-semibold hover:text-green-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="p-6 bg-green-50 rounded-2xl border border-green-200 mt-8">
                <h3 className="font-bold text-gray-900 mb-4">Response Times</h3>
                <ul className="space-y-2.5 text-sm">
                  {[
                    { channel: "WhatsApp", time: "Within 1 hour" },
                    { channel: "Email", time: "Within 24 hours" },
                    { channel: "Phone", time: "Mon–Fri, 10 AM–6 PM IST" },
                  ].map(r => (
                    <li key={r.channel} className="flex items-center justify-between">
                      <span className="text-gray-600">{r.channel}</span>
                      <span className="text-green-700 font-medium">{r.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { key: 'name', label: 'Full Name', placeholder: 'Your name', required: true },
                    { key: 'email', label: 'Email', placeholder: 'your@email.com', required: true, type: 'email' },
                  ].map(field => (
                    <div key={field.key}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                      <input
                        type={field.type || 'text'}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input type="text" placeholder="How can we help?" value={form.subject} onChange={e => setForm(prev => ({ ...prev, subject: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={5} placeholder="Your message..." value={form.message} onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none" />
                </div>

                <button type="submit" disabled={loading} className="w-full py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                  {submitted ? (
                    <><CheckCircle className="w-5 h-5" /> Message Sent!</>
                  ) : loading ? 'Sending...' : (
                    <>Send Message <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISTRIBUTOR INQUIRY ─────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — content */}
            <div>
              <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Partner With Us</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
                Distributor Inquiry
              </h2>
              <p className="text-gray-600 text-lg leading-[1.8] mb-10">
                We're actively expanding our distribution network across India. If you're a distributor, retailer, or wellness entrepreneur, we'd love to build a partnership with you.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Building2, title: 'Attractive Margins', desc: 'Competitive distributor pricing with tiered margin structures as your business scales.' },
                  { icon: Truck, title: 'Reliable Supply Chain', desc: 'Consistent stock availability, cold-chain logistics support, and dedicated account management.' },
                  { icon: Users, title: 'Marketing Support', desc: 'Co-branded materials, digital assets, and customer acquisition support for your territory.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-[1.7]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Apply to Distribute</h3>
              <form onSubmit={handleDistSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input type="text" required placeholder="Your company" value={distForm.company} onChange={e => setDistForm(p => ({ ...p, company: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                    <input type="text" required placeholder="Your name" value={distForm.contact} onChange={e => setDistForm(p => ({ ...p, contact: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Email</label>
                  <input type="email" required placeholder="business@company.com" value={distForm.email} onChange={e => setDistForm(p => ({ ...p, email: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input type="text" placeholder="City" value={distForm.city} onChange={e => setDistForm(p => ({ ...p, city: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State / Region</label>
                    <input type="text" placeholder="State" value={distForm.region} onChange={e => setDistForm(p => ({ ...p, region: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Distribution Experience</label>
                  <select value={distForm.experience} onChange={e => setDistForm(p => ({ ...p, experience: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Select experience level</option>
                    <option value="new">New to distribution</option>
                    <option value="1-3">1–3 years</option>
                    <option value="3-7">3–7 years</option>
                    <option value="7+">7+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tell Us About Your Network</label>
                  <textarea rows={3} placeholder="Number of retailers, current brands, territory coverage..." value={distForm.message} onChange={e => setDistForm(p => ({ ...p, message: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
                </div>

                <button type="submit" disabled={distLoading} className="w-full py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                  {distSubmitted ? (
                    <><CheckCircle className="w-5 h-5" /> Application Received!</>
                  ) : distLoading ? 'Submitting...' : (
                    <>Submit Application <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
