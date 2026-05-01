import { useState } from 'react';
import { Building2, Users, TrendingUp, Gift, CheckCircle, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Corporate() {
  const [form, setForm] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    employee_count: '',
    products_interested: [] as string[],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleProduct = (product: string) => {
    setForm(prev => ({
      ...prev,
      products_interested: prev.products_interested.includes(product)
        ? prev.products_interested.filter(p => p !== product)
        : [...prev.products_interested, product],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await supabase.from('corporate_inquiries').insert([form]);
    setLoading(false);
    setForm({
      company_name: '',
      contact_name: '',
      email: '',
      phone: '',
      employee_count: '',
      products_interested: [],
      message: '',
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <Building2 className="w-14 h-14 mx-auto mb-6 text-green-300" />
          <h1 className="text-5xl font-bold mb-6">Corporate Wellness Programs</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            Invest in your employees' health. Tatvamasi's premium organic wellness solutions reduce sick days, boost morale, and drive productivity.
          </p>
        </div>
      </section>

      {/* Benefits — Why Corporate Wellness */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">
              Proven Results
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Corporate Wellness?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Evidence-backed benefits that drive real outcomes for your organization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Increased Productivity',
                desc: '23% productivity boost with improved nutrition and sustained energy levels throughout the workday.',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
              },
              {
                icon: Users,
                title: 'Better Retention',
                desc: 'Show employees you genuinely care about their health and wellbeing with premium wellness benefits.',
                image: 'https://images.pexels.com/photos/1449824/pexels-photo-1449824.jpeg',
              },
              {
                icon: Gift,
                title: 'Reduced Absenteeism',
                desc: '35% reduction in sick days with stronger immunity and preventive nutrition built into daily routines.',
                image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg',
              },
              {
                icon: CheckCircle,
                title: 'Morale & Culture',
                desc: 'Build a wellness-first company culture that employees are proud to be part of and advocate for.',
                image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
              },
              {
                icon: TrendingUp,
                title: 'ROI on Health',
                desc: 'Every rupee invested in employee wellness returns 5-8 rupees in productivity and healthcare savings.',
                image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
              },
              {
                icon: Building2,
                title: 'Brand Reputation',
                desc: 'Attract top talent and build a reputation as an employer that prioritizes employee health and growth.',
                image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-green-100 transition-all duration-500 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug" style={{ letterSpacing: '-0.01em' }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-[1.8] flex-1 pl-13">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Corporate Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">
              Solutions
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Corporate Solutions</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Flexible programs tailored to your organization's unique wellness goals</p>
          </div>

          <div className="space-y-16">
            {[
              {
                title: 'Bulk Wellness Packages',
                desc: 'Ready-to-deploy wellness programs with custom branding for your office or distributed to employees.',
                features: ['Custom quantities & branding', 'Dedicated account manager', 'Bulk pricing available', 'Monthly delivery options'],
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
                imagePosition: 'left',
              },
              {
                title: 'Employee Wellness Subscriptions',
                desc: 'Recurring monthly wellness deliveries tailored to your team\'s preferences, sent to office or homes.',
                features: ['Monthly curated boxes', 'Flexible quantities per employee', 'Personalized nutrition guidance', 'Wellness tracking dashboard'],
                image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                imagePosition: 'right',
              },
              {
                title: 'Wellness Events & Workshops',
                desc: 'Engaging on-site seminars, product sampling sessions, and expert-led workshops for employee engagement.',
                features: ['Expert nutritionist sessions', 'Live product demonstrations', 'Interactive Q&A panels', 'Premium product tastings'],
                image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg',
                imagePosition: 'left',
              },
              {
                title: 'Custom Wellness Solutions',
                desc: 'Bespoke programs designed from the ground up specifically for your organization\'s health goals.',
                features: ['Comprehensive needs assessment', 'Custom product formulation', 'Ongoing expert support', 'Annual wellness reviews'],
                image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg',
                imagePosition: 'right',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch ${
                  item.imagePosition === 'right' ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
                }`}
              >
                {/* Image — positioned based on imagePosition */}
                <div className={`${item.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative h-80 lg:h-full rounded-3xl overflow-hidden shadow-lg group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
                  </div>
                </div>

                {/* Content — positioned based on imagePosition */}
                <div className={`${item.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center`}>
                  <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em] block mb-4">
                    Solution {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="text-3xl font-bold text-gray-900 mb-4 leading-snug"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-[1.8] mb-8">
                    {item.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {item.features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-sm font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <a
                      href="#inquiry-form"
                      className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-gray-50" id="inquiry-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">
              Get Started
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get Your Quote Today</h2>
            <p className="text-gray-500 text-lg">Fill out the form below and our wellness team will contact you with a customized proposal within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 border border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {[
                { key: 'company_name', label: 'Company Name', required: true },
                { key: 'contact_name', label: 'Your Name', required: true },
                { key: 'email', label: 'Email', type: 'email', required: true },
                { key: 'phone', label: 'Phone', type: 'tel' },
              ].map(field => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                  <input
                    type={field.type || 'text'}
                    required={field.required}
                    value={form[field.key as keyof typeof form]}
                    onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Number of Employees</label>
              <select
                value={form.employee_count}
                onChange={e => setForm(prev => ({ ...prev, employee_count: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select...</option>
                <option value="50-100">50-100</option>
                <option value="100-250">100-250</option>
                <option value="250-500">250-500</option>
                <option value="500-1000">500-1000</option>
                <option value="1000+">1000+</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">Products Interested In</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Spirulina Shots', 'Organic Powders', 'Both', 'Custom Mix'].map(product => (
                  <label key={product} className="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-green-300">
                    <input
                      type="checkbox"
                      checked={form.products_interested.includes(product)}
                      onChange={() => toggleProduct(product)}
                      className="accent-green-600"
                    />
                    <span className="text-sm font-medium text-gray-700">{product}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your wellness goals..."
                value={form.message}
                onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-5 h-5" /> Request Sent!
                </>
              ) : loading ? (
                'Sending...'
              ) : (
                <>
                  Send Inquiry <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-8">
            <Building2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Workplace?</h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
            Let's build a healthier, happier, and more productive organization together with Tatvamasi's corporate wellness solutions.
          </p>
        </div>
      </section>
    </div>
  );
}
