
import { useState, useEffect } from 'react';
import AuthModal from '../../components/auth/AuthModal';
import { supabase } from '../../supabase/client';

export default function Partners() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    organization: '',
    country: '',
    email: '',
    phone: '',
    website: '',
    partnershipTypes: [] as string[],
    areasOfInterest: [] as string[],
    engagementLevel: '',
    otherEngagement: '',
    message: '',
    agreeContact: false,
    subscribeNewsletter: false
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitAddr, setSubmitAddr] = useState('');

  // Check for logged-in user on component mount
  useEffect(() => {
    // Check localStorage first
    const savedUser = localStorage.getItem('aef_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        console.error('Failed to parse saved user:', err);
        localStorage.removeItem('aef_user');
      }
    }

    // Check Supabase session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user && !savedUser) {
        // Get user profile data
        const { data: profileData } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .single();

        const userData = {
          id: session.user.id,
          email: session.user.email,
          name: profileData ? `${profileData.first_name} ${profileData.last_name}` : session.user.email?.split('@')[0],
          firstName: profileData?.first_name || '',
          lastName: profileData?.last_name || '',
          organization: profileData?.organization || '',
          position: profileData?.position || '',
          avatar_url: profileData?.avatar_url || null
        };

        localStorage.setItem('aef_user', JSON.stringify(userData));
        setUser(userData);
      }
    };

    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_OUT') {
        localStorage.removeItem('aef_user');
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Get form URL on component mount
  useEffect(() => {
    const getFormUrl = async () => {
      try {
        const response = await fetch('/api/form-url', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: 'partner-with-us' }),
        });

        if (response.ok) {
          const data = await response.json();
          setSubmitAddr(data.submitAddr);
        }
      } catch (error) {
        console.error('Failed to get form URL:', error);
      }
    };

    getFormUrl();
  }, []);

  const handleSignIn = () => {
    setShowSignInModal(true);
  };

  const handleLogin = (userData: any) => {
    setUser(userData);
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      localStorage.removeItem('aef_user');
      setUser(null);
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'partnershipTypes' || name === 'areasOfInterest') {
        setFormData(prev => ({
          ...prev,
          [name]: checked
            ? [...prev[name as keyof typeof prev] as string[], value]
            : (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeContact) {
      alert('Please agree to be contacted by the Africa Economic Forum team.');
      return;
    }

    if (formData.message.length > 500) {
      alert('Message must be 500 characters or less.');
      return;
    }

    setSubmitStatus('submitting');

    try {
      const submitData = new URLSearchParams();
      submitData.append('fullName', formData.fullName);
      submitData.append('title', formData.title);
      submitData.append('organization', formData.organization);
      submitData.append('country', formData.country);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('website', formData.website);
      submitData.append('partnershipTypes', formData.partnershipTypes.join(', '));
      submitData.append('areasOfInterest', formData.areasOfInterest.join(', '));
      submitData.append('engagementLevel', formData.engagementLevel === 'other' ? formData.otherEngagement : formData.engagementLevel);
      submitData.append('message', formData.message);
      submitData.append('agreeContact', formData.agreeContact ? 'Yes' : 'No');
      submitData.append('subscribeNewsletter', formData.subscribeNewsletter ? 'Yes' : 'No');

      const response = await fetch(submitAddr, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: submitData.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          title: '',
          organization: '',
          country: '',
          email: '',
          phone: '',
          website: '',
          partnershipTypes: [],
          areasOfInterest: [],
          engagementLevel: '',
          otherEngagement: '',
          message: '',
          agreeContact: false,
          subscribeNewsletter: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img
                  src="https://static.readdy.ai/image/433d1257c1dbc1f8bb2f3f1c418f6689/0727857f21d196505f8ef18cfc1cd897.png"
                  alt="Africa Economic Forum"
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="/initiatives" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Initiatives
              </a>
              <a href="/stakeholders" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Stakeholders
              </a>
              <a href="/agenda" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Agenda
              </a>
              <a href="/publications" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Publications
              </a>
              <a href="/meetings" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Meetings
              </a>
              <a href="/contact" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <a href="/profile" className="text-gray-700 hover:text-teal-600 font-medium">
                    Welcome, {user.name}
                  </a>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 whitespace-nowrap cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSignIn}
                  className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 whitespace-nowrap cursor-pointer"
                >
                  Sign In
                </button>
              )}
            </div>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 cursor-pointer"
            >
              <i className={`ri-${showMobileMenu ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                About
              </a>
              <a
                href="/initiatives"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Initiatives
              </a>
              <a
                href="/stakeholders"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Stakeholders
              </a>
              <a
                href="/agenda"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Agenda
              </a>
              <a
                href="/publications"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Publications
              </a>
              <a
                href="/meetings"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Meetings
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Contact
              </a>
              <div className="pt-4 pb-2">
                {user ? (
                  <div className="space-y-2">
                    <a
                      href="/profile"
                      className="block text-gray-700 hover:text-teal-600 font-medium px-3 py-2"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      Welcome, {user.name}
                    </a>
                    <button
                      onClick={() => {
                        handleLogout();
                        setShowMobileMenu(false);
                      }}
                      className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 font-medium whitespace-nowrap cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      handleSignIn();
                      setShowMobileMenu(false);
                    }}
                    className="w-full bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Partner With Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join the Africa Economic Forum in driving economic transformation across the continent.
              Together, we can create lasting impact through strategic partnerships and collaborative initiatives.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form id="partner-form" data-readdy-form onSubmit={handleSubmit} className="space-y-8">
              {/* Section 1: Contact Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <i className="ri-user-line text-blue-600 mr-3"></i>
                  Contact Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                      Title / Position *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Your job title or position"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization / Company *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Your organization or company"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Your country"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                      Website / LinkedIn
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="https://www.example.com or LinkedIn profile"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Partnership Type */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <i className="ri-handshake-line text-blue-600 mr-3"></i>
                  Partnership Type
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Sponsorship',
                    'Strategic Partnership',
                    'Institutional / Government Cooperation',
                    'Media Partnership',
                    'Investment Collaboration',
                    'South-South Cooperation'
                  ].map((type) => (
                    <label key={type} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="partnershipTypes"
                        value={type}
                        checked={formData.partnershipTypes.includes(type)}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Section 3: Areas of Interest */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <i className="ri-focus-3-line text-blue-600 mr-3"></i>
                  Areas of Interest
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Business & Investments',
                    'Infrastructure & Energy',
                    'Technology & Innovation',
                    'Trade & South-South Cooperation',
                    'Climate & Sustainability',
                    'Youth & Women Empowerment',
                    'Health & Education',
                    'Peace & Governance'
                  ].map((area) => (
                    <label key={area} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="areasOfInterest"
                        value={area}
                        checked={formData.areasOfInterest.includes(area)}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Section 4: Engagement Level */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <i className="ri-bar-chart-line text-blue-600 mr-3"></i>
                  Engagement Level
                </h2>
                <div className="space-y-3">
                  {[
                    'Annual Meeting Partner (Dubai)',
                    'Regional Forum Partner',
                    'Thematic Forum Partner (Youth, Women, Health, etc.)',
                    'Long-term Institutional Partner',
                    'Other'
                  ].map((level) => (
                    <label key={level} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="engagementLevel"
                        value={level.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                        checked={formData.engagementLevel === level.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{level}</span>
                    </label>
                  ))}
                </div>
                {formData.engagementLevel === 'other' && (
                  <div className="mt-4">
                    <input
                      type="text"
                      name="otherEngagement"
                      value={formData.otherEngagement}
                      onChange={handleInputChange}
                      placeholder="Please specify your engagement preference"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                )}
              </div>

              {/* Section 5: Message / Proposal */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <i className="ri-message-3-line text-blue-600 mr-3"></i>
                  Message / Proposal
                </h2>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us how you would like to collaborate with the Africa Economic Forum
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength={500}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    placeholder="Describe your collaboration ideas, partnership goals, and how you envision working with the Africa Economic Forum..."
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    {formData.message.length}/500 characters
                  </p>
                </div>
              </div>

              {/* Section 6: Consent & Follow-up */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <i className="ri-shield-check-line text-blue-600 mr-3"></i>
                  Consent & Follow-up
                </h2>
                <div className="space-y-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeContact"
                      checked={formData.agreeContact}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to be contacted by the Africa Economic Forum team. *
                    </span>
                  </label>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="subscribeNewsletter"
                      checked={formData.subscribeNewsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      Subscribe me to AEF Newsletter & Updates.
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="w-full bg-blue-900 text-white py-4 px-6 rounded-md hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium text-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  {submitStatus === 'submitting' ? 'Submitting...' : 'Partner with Us'}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-green-600 mr-3"></i>
                    <p className="text-green-800 font-medium">
                      Thank you for your partnership application! We will review your submission and contact you soon.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-600 mr-3"></i>
                    <p className="text-red-800 font-medium">
                      There was an error submitting your application. Please try again.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-lg mb-6">About us</h3>
              <ul className="space-y-3">
                <li><a href="/about" className="text-gray-300 hover:text-white cursor-pointer">Our mission</a></li>
                <li><a href="/framework" className="text-gray-300 hover:text-white cursor-pointer">Our Institutional Framework</a></li>
                <li><a href="/history" className="text-gray-300 hover:text-white cursor-pointer">History</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white cursor-pointer">Leadership and governance</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white cursor-pointer">Our Impact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">More from the Forum</h3>
              <ul className="space-y-3">
                <li><a href="/initiatives" className="text-gray-300 hover:text-white cursor-pointer">Centres</a></li>
                <li><a href="/meetings" className="text-gray-300 hover:text-white cursor-pointer">Meetings</a></li>
                <li><a href="/stakeholders" className="text-gray-300 hover:text-white cursor-pointer">Stakeholders</a></li>
                <li><a href="/agenda" className="text-gray-300 hover:text-white cursor-pointer">Forum Stories</a></li>
                <li><a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">Press releases</a></li>
                <li><a href="/gallery" className="text-gray-300 hover:text-white cursor-pointer">Photo gallery</a></li>
                <li><a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">Podcasts</a></li>
                <li><a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">Videos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Engage with us</h3>
              <ul className="space-y-3">
                <li>
                  {user ? (
                    <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 whitespace-nowrap cursor-pointer">
                      Logout
                    </button>
                  ) : (
                    <button onClick={handleSignIn} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                      Sign in
                    </button>
                  )}
                </li>
                <li><a href="/partners" className="text-gray-300 hover:text-white cursor-pointer">Partner with us</a></li>
                <li><a href="/join" className="text-gray-300 hover:text-white cursor-pointer">Become a member</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white cursor-pointer">Sign up for our press releases</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white cursor-pointer">Subscribe to our newsletters</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white cursor-pointer">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick links</h3>
              <ul className="space-y-3 mb-8">
                <li><a href="/about" className="text-gray-300 hover:text-white cursor-pointer">Sustainability at the Forum</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white cursor-pointer">Careers</a></li>
              </ul>
              <div>
                <h4 className="font-semibold mb-4">Language editions</h4>
                <div className="flex space-x-2">
                  <a href="/" className="text-gray-300 hover:text-white cursor-pointer">EN</a>
                  <span className="text-gray-500">•</span>
                  <a href="/" className="text-gray-300 hover:text-white cursor-pointer">ES</a>
                  <span className="text-gray-500">•</span>
                  <a href="/" className="text-gray-300 hover:text-white cursor-pointer">中文</a>
                  <span className="text-gray-500">•</span>
                  <a href="/" className="text-gray-300 hover:text-white cursor-pointer">日本語</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white cursor-pointer">Privacy Policy &amp; Terms of Service</a>

              <p>© 2025 Africa Economic Forum</p>
              <a href="https://codesignglobal.com" className="hover:text-white cursor-pointer">Code Design Global</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showSignInModal}
        onClose={() => setShowSignInModal(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}
