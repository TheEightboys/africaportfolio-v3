
import React, { useState } from 'react';

export default function Join() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSignIn = () => {
    setShowSignInModal(true);
  };

  const handleSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      if (email && password) {
        alert('Login successful! Welcome back.');
        setShowSignInModal(false);
      } else {
        alert('Please fill in all required fields.');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  const handleMembershipSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://readdy.ai/api/form/d3j7ittsoafcrsrcqad0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        setFormSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      alert('Failed to submit application. Please try again.');
    }
  };

  const memberBenefits = [
    {
      title: 'Global Network of Leaders',
      description: 'Connect with over 2,500 African and international leaders on our exclusive platform.',
      icon: 'ri-global-line'
    },
    {
      title: 'Privileged Access to Events',
      description: 'Participate in summits, conferences and exclusive meetings with discounts or free access.',
      icon: 'ri-calendar-event-line'
    },
    {
      title: 'Economic Intelligence',
      description: 'Receive exclusive reports, market analyses and insights on African opportunities.',
      icon: 'ri-line-chart-line'
    },
    {
      title: 'Business Opportunities',
      description: 'Priority access to investment opportunities, partnerships and development projects.',
      icon: 'ri-handshake-line'
    },
    {
      title: 'Professional Development',
      description: 'Training programs, workshops and certifications in leadership and African economics.',
      icon: 'ri-graduation-cap-line'
    },
    {
      title: 'Policy Influence',
      description: "Participate in formulating policies and strategies that shape Africa's economic future.",
      icon: 'ri-government-line'
    }
  ];

  const currentMembers = [
    {
      name: 'Dr. Akinwumi Adesina',
      position: 'President of the African Development Bank',
      type: 'Institutional Member',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20distinguished%20African%20development%20bank%20president%2C%20formal%20business%20attire%2C%20confident%20leadership%20expression&width=300&height=300&seq=member-adesina&orientation=portrait'
    },
    {
      name: 'Aliko Dangote',
      position: 'Chairman of Dangote Group',
      type: 'Corporate Member',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20prominent%20African%20business%20magnate%20and%20industrialist%2C%20elegant%20business%20suit%2C%20successful%20entrepreneur&width=300&height=300&seq=member-dangote&orientation=portrait'
    },
    {
      name: 'Prof. Sarah Anyang Agbor',
      position: 'African Union Commissioner for Human Resources',
      type: 'Institutional Member',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20distinguished%20African%20female%20commissioner%2C%20formal%20diplomatic%20attire%2C%20authoritative%20and%20professional%20expression&width=300&height=300&seq=member-agbor&orientation=portrait'
    },
    {
      name: 'Strive Masiyiwa',
      position: 'Founder and Executive Chairman of Econet Group',
      type: 'Corporate Member',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20successful%20African%20telecommunications%20entrepreneur%2C%20modern%20business%20attire%2C%20innovative%20technology%20leader&width=300&height=300&seq=member-masiyiwa&orientation=portrait'
    }
  ];

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
              <button
                onClick={handleSignIn}
                className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 whitespace-nowrap cursor-pointer"
              >
                Sign In
              </button>
            </div>
            <button className="md:hidden p-2 cursor-pointer">
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="relative py-32 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=Diverse%20group%20of%20African%20professionals%20and%20leaders%20joining%20hands%20in%20unity%2C%20membership%20and%20community%20building%2C%20professional%20networking%20and%20collaboration&width=1920&height=800&seq=membership-hero&orientation=landscape')`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Become a Member
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Join an exclusive community of leaders, innovators and visionaries committed to Africa's economic transformation. Be part of the change the continent needs.
            </p>
          </div>
        </section>

        {/* Membership Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Become a Member?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                As an AEF member, you will have exclusive access to a global network of leaders and unique opportunities for growth and impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {memberBenefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Members */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Distinguished Members</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join world-renowned leaders who are already part of our African transformation community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top shadow-lg"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{member.position}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {member.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Statistics */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Community</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Numbers that reflect the growth and impact of our member community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2,500+</div>
                <div className="text-blue-100">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">54</div>
                <div className="text-blue-100">Countries Represented</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-blue-100">Member Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Application Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply for Membership</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below to start your membership process. Our team will contact you within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-check-circle-fill text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Application Submitted Successfully!</h3>
                <p className="text-green-700 mb-6">
                  Thank you for your interest in becoming an AEF member. Our membership team
                  will review your application and contact you within 24 hours with the next steps.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-green-600 hover:text-green-800 font-medium cursor-pointer"
                >
                  Submit new application
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <form onSubmit={handleMembershipSubmit} data-readdy-form id="membership-application">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="full_name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Position/Title *</label>
                      <input
                        type="text"
                        name="position"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Organization *</label>
                      <input
                        type="text"
                        name="organization"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                      <input
                        type="text"
                        name="country"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sector *</label>
                    <select
                      name="sector"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8"
                    >
                      <option value="">Select your sector</option>
                      <option value="Government">Government</option>
                      <option value="Private Sector">Private Sector</option>
                      <option value="Academia">Academia</option>
                      <option value="NGO">NGO</option>
                      <option value="International Organization">International Organization</option>
                      <option value="Financial Services">Financial Services</option>
                      <option value="Technology">Technology</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Energy">Energy</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest *</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" name="interests" value="Economic Policy" className="cursor-pointer" />
                        <span className="text-sm text-gray-700">Economic Policy</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" name="interests" value="Trade & Investment" className="cursor-pointer" />
                        <span className="text-sm text-gray-700">Trade & Investment</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" name="interests" value="Technology Innovation" className="cursor-pointer" />
                        <span className="text-sm text-gray-700">Technology Innovation</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" name="interests" value="Sustainable Development" className="cursor-pointer" />
                        <span className="text-sm text-gray-700">Sustainable Development</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" name="interests" value="Financial Services" className="cursor-pointer" />
                        <span className="text-sm text-gray-700">Financial Services</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" name="interests" value="Infrastructure" className="cursor-pointer" />
                        <span className="text-sm text-gray-700">Infrastructure</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Motivation for Membership *</label>
                    <textarea
                      name="motivation"
                      rows={4}
                      required
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                      placeholder="Describe why you want to become an AEF member and how you intend to contribute to our mission..."
                    ></textarea>
                    <div className="text-xs text-gray-500 mt-1">Maximum 500 characters</div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Relevant Experience</label>
                    <textarea
                      name="experience"
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                      placeholder="Describe your relevant experience in economic development, leadership or related areas..."
                    ></textarea>
                    <div className="text-xs text-gray-500 mt-1">Maximum 500 characters</div>
                  </div>

                  <div className="mb-6">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="terms_agreement"
                        required
                        className="mt-1 cursor-pointer"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to the membership terms and conditions and authorize AEF to process my personal data according to the privacy policy *
                      </span>
                    </label>
                  </div>

                  <div className="mb-6">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="newsletter_consent"
                        className="mt-1 cursor-pointer"
                      />
                      <span className="text-sm text-gray-600">
                        I would like to receive regular communications about AEF activities, events and opportunities
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer"
                  >
                    Submit Membership Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Sign In</h3>
                <button
                  onClick={() => setShowSignInModal(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              <form onSubmit={handleSignInSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

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
                <li><button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 whitespace-nowrap cursor-pointer">Sign In</button></li>
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
                  <a href="/pt" className="text-gray-300 hover:text-white cursor-pointer">PT</a>
                  <span className="text-gray-500">•</span>
                  <a href="/es" className="text-gray-300 hover:text-white cursor-pointer">ES</a>
                  <span className="text-gray-500">•</span>
                  <a href="/fr" className="text-gray-300 hover:text-white cursor-pointer">FR</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/17Jr8NpqZJ/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/company/the-africa-economic-forum/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="https://www.instagram.com/theafricaeconomicforum?igsh=MWowNmw1NjdueXNkbQ==" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-youtube-fill text-xl"></i>
                </a>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <a href="/privacy" className="hover:text-white cursor-pointer">
                  Privacy Policy and Terms of Service
                </a>

                <p>© 2025 Africa Economic Forum</p>
                <a href="https://codesignglobal.com/" className="hover:text-white cursor-pointer">Code Design Global</a>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
