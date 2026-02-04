
import React, { useState } from 'react';

export default function History() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const handleSignIn = () => {
    setShowSignInModal(true);
    setShowCreateAccount(false);
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

  const handleCreateAccountSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      const confirmPassword = formData.get('confirm_password') as string;
      const firstName = formData.get('first_name') as string;
      const lastName = formData.get('last_name') as string;

      if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
      }

      if (email && password && firstName && lastName) {
        alert('Account created successfully! Welcome to the Africa Economic Forum.');
        setShowSignInModal(false);
        setShowCreateAccount(false);
      } else {
        alert('Please fill in all required fields.');
      }
    } catch (err) {
      console.error('Account creation error:', err);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  const switchToCreateAccount = () => {
    setShowCreateAccount(true);
  };

  const switchToSignIn = () => {
    setShowCreateAccount(false);
  };

  const timelineEvents = [
    {
      year: '2018',
      title: 'Conception and Vision',
      description: 'Birth of the Africa Economic Forum idea as a response to the need for a pan-African platform for economic dialogue and strategic cooperation.',
      image: 'https://readdy.ai/api/search-image?query=African%20economic%20forum%20founding%20meeting%20with%20visionary%20leaders%20discussing%20continental%20development%2C%20historical%20moment%20of%20institutional%20creation%2C%20professional%20conference%20setting&width=400&height=300&seq=history-2018&orientation=landscape',
      achievements: [
        'Development of initial concept',
        'Identification of founding leaders',
        'Definition of mission and vision'
      ]
    },
    {
      year: '2019',
      title: 'Institutional Establishment',
      description: 'Formalization of organizational structure and establishment of first regional offices, marking the official beginning of Forum operations.',
      image: 'https://readdy.ai/api/search-image?query=Official%20establishment%20ceremony%20of%20African%20economic%20institution%2C%20formal%20signing%20of%20founding%20documents%2C%20distinguished%20African%20leaders%20at%20institutional%20launch&width=400&height=300&seq=history-2019&orientation=landscape',
      achievements: [
        'Legal registration of organization',
        'Establishment of regional offices',
        'Formation of initial Advisory Council'
      ]
    },
    {
      year: '2020',
      title: 'First Continental Summit',
      description: 'Hosting of the first Africa Economic Summit, bringing together leaders from 35 countries to discuss post-pandemic development strategies.',
      image: 'https://readdy.ai/api/search-image?query=First%20African%20economic%20summit%20with%20heads%20of%20state%20and%20business%20leaders%2C%20large%20conference%20hall%20with%20African%20flags%2C%20historic%20continental%20gathering&width=400&height=300&seq=history-2020&orientation=landscape',
      achievements: [
        '35 participating countries',
        '500+ delegates present',
        'Economic Cooperation Declaration signed'
      ]
    },
    {
      year: '2021',
      title: 'Program Expansion',
      description: 'Launch of specialized programs in innovation, sustainability and capacity development, expanding continental impact.',
      image: 'https://readdy.ai/api/search-image?query=African%20innovation%20and%20sustainability%20programs%20launch%2C%20technology%20showcases%20and%20green%20development%20initiatives%2C%20modern%20conference%20with%20digital%20displays&width=400&height=300&seq=history-2021&orientation=landscape',
      achievements: [
        'Launch of AEF Labs',
        'Sustainability Program initiated',
        'Partnerships with 15 African universities'
      ]
    },
    {
      year: '2022',
      title: 'Global Partnerships',
      description: 'Establishment of strategic partnerships with international organizations and strengthening of South-South cooperation.',
      image: 'https://readdy.ai/api/search-image?query=Global%20partnership%20signing%20ceremony%20between%20African%20and%20international%20leaders%2C%20diplomatic%20handshakes%20and%20cooperation%20agreements%2C%20international%20cooperation%20setting&width=400&height=300&seq=history-2022&orientation=landscape',
      achievements: [
        'Partnerships with 8 international organizations',
        'South-South cooperation agreements',
        '$100M Investment Fund established'
      ]
    },
    {
      year: '2023',
      title: 'Digital Transformation',
      description: 'Implementation of advanced digital platforms and launch of digital transformation initiatives to accelerate economic development.',
      image: 'https://readdy.ai/api/search-image?query=Digital%20transformation%20initiative%20launch%20in%20Africa%2C%20modern%20technology%20conference%20with%20digital%20platforms%20and%20innovation%20showcases%2C%20African%20tech%20leaders%20presenting&width=400&height=300&seq=history-2023&orientation=landscape',
      achievements: [
        'AEF Connect digital platform launched',
        'Digital Transformation Program',
        '1000+ companies digitally connected'
      ]
    },
    {
      year: '2024',
      title: 'Consolidation and Growth',
      description: 'Consolidation of position as the leading African economic platform, with expansion to all 54 countries of the continent.',
      image: 'https://readdy.ai/api/search-image?query=Continental%20expansion%20celebration%20with%20representatives%20from%20all%20African%20countries%2C%20large%20assembly%20hall%20with%20diverse%20African%20delegates%2C%20unity%20and%20growth%20theme&width=400&height=300&seq=history-2024&orientation=landscape',
      achievements: [
        'Presence in all 54 African countries',
        '2000+ active members',
        '$500M+ economic impact facilitated'
      ]
    },
    {
      year: '2025',
      title: 'Vision for the Future',
      description: 'Launch of the 2025-2030 strategy focused on economic sovereignty, technological innovation and Africa\'s global leadership.',
      image: 'https://readdy.ai/api/search-image?query=Future%20vision%20strategy%20launch%20for%20African%20economic%20sovereignty%2C%20futuristic%20conference%20setting%20with%20advanced%20technology%20displays%2C%20African%20leaders%20planning%20continental%20future&width=400&height=300&seq=history-2025&orientation=landscape',
      achievements: [
        '2025-2030 Strategy launched',
        'Focus on economic sovereignty',
        'Global leadership initiatives'
      ]
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
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=Historical%20timeline%20of%20African%20economic%20development%2C%20vintage%20and%20modern%20African%20leaders%20through%20the%20decades%2C%20evolution%20of%20continental%20cooperation%20and%20economic%20progress&width=1920&height=800&seq=history-hero&orientation=landscape')`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Our History
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              A journey of continental economic transformation, from initial vision to consolidation as Africa's leading economic cooperation platform.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">A Transformative Vision</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    The Africa Economic Forum was born from a bold vision: to create a pan-African platform
                    that could catalyze the continent's economic transformation through dialogue, cooperation
                    and strategic partnerships.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    From the first concepts in 2018 to our current position as a leader in African economic
                    cooperation, our journey reflects an unwavering commitment to economic sovereignty
                    and Africa's sustainable development.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Founding%20vision%20of%20African%20economic%20cooperation%2C%20diverse%20African%20leaders%20planning%20continental%20development%2C%20inspirational%20meeting%20with%20maps%20and%20economic%20charts&width=600&height=500&seq=history-vision&orientation=portrait"
                  alt="Founding Vision"
                  className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Timeline</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Important milestones in the evolution of the Africa Economic Forum and its impact on continental development.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>

              <div className="space-y-16">
                {timelineEvents.map((event, index) => (
                  <div
                    key={event.year}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={event.image} alt={event.title} className="w-full h-48 object-cover object-top" />
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-blue-600">{event.year}</span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                              Historic Milestone
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {event.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-center">
                                  <i className="ri-check-line text-green-600 mr-2"></i>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Historical Impact</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Numbers that reflect our transformation journey and growing impact on African economic development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-global-line text-2xl text-blue-600"></i>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">54</div>
                <div className="text-gray-600">African Countries Engaged</div>
                <div className="text-sm text-gray-500 mt-1">Complete Continental Coverage</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-2xl text-green-600"></i>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">2,500+</div>
                <div className="text-gray-600">Connected Leaders</div>
                <div className="text-sm text-gray-500 mt-1">Continental Influence Network</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-funds-line text-2xl text-purple-600"></i>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">$1B+</div>
                <div className="text-gray-600">Investments Facilitated</div>
                <div className="text-sm text-gray-500 mt-1">Direct Economic Impact</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-calendar-event-line text-2xl text-orange-600"></i>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
                <div className="text-gray-600">Events Held</div>
                <div className="text-sm text-gray-500 mt-1">Dialogue Platforms Created</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Milestones */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Fundamental Milestones</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Decisive moments that shaped our trajectory and defined our role in African economic development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-lightbulb-line text-xl text-blue-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">First Vision (2018)</h3>
                <p className="text-gray-600 text-sm">
                  Conception of the revolutionary idea to create a pan-African platform for economic cooperation and sustainable development.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-building-line text-xl text-green-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Institutionalization (2019)</h3>
                <p className="text-gray-600 text-sm">
                  Formal establishment of the organization with robust governance structure and strategic regional offices.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-rocket-line text-xl text-purple-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">First Summit (2020)</h3>
                <p className="text-gray-600 text-sm">
                  Historic hosting of the first Africa Economic Summit, establishing precedent for continental cooperation.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-links-line text-xl text-orange-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Partnerships (2022)</h3>
                <p className="text-gray-600 text-sm">
                  Establishment of strategic international partnerships, positioning Africa as an equal global partner.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-smartphone-line text-xl text-teal-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Digital Era (2023)</h3>
                <p className="text-gray-600 text-sm">
                  Launch of advanced digital platforms, revolutionizing how African economic cooperation happens.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-flag-line text-xl text-red-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Economic Sovereignty (2025)</h3>
                <p className="text-gray-600 text-sm">
                  Launch of economic sovereignty strategy, focusing on Africa's self-determination and global leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy and Future */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Legacy and Future</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our history is just the beginning. We continue building a legacy of economic transformation
                that will inspire future generations of African leaders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Our Legacy</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-400 text-xl mr-3 mt-1"></i>
                    <span>Redefinition of African economic narrative on the global stage</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-400 text-xl mr-3 mt-1"></i>
                    <span>Creation of a continental network for economic cooperation</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-400 text-xl mr-3 mt-1"></i>
                    <span>Facilitation of billions in investments and partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-400 text-xl mr-3 mt-1"></i>
                    <span>Development of a new generation of African leaders</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Vision for 2030</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="ri-arrow-right-line text-blue-300 text-xl mr-3 mt-1"></i>
                    <span>Africa as global leader in innovation and sustainability</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-line text-blue-300 text-xl mr-3 mt-1"></i>
                    <span>Complete economic sovereignty of the continent</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-line text-blue-300 text-xl mr-3 mt-1"></i>
                    <span>Total economic integration through AfCFTA</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-line text-blue-300 text-xl mr-3 mt-1"></i>
                    <span>Positioning as architect of the global future</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {showCreateAccount ? 'Create Account' : 'Sign In'}
                </h3>
                <button
                  onClick={() => setShowSignInModal(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              {!showCreateAccount ? (
                <>
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
                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="remember_me" className="cursor-pointer" />
                        <span className="text-sm text-gray-600">Remember me</span>
                      </label>
                      <button type="button" className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                        Forgot password?
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer"
                    >
                      Sign In
                    </button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Don't have an account?
                      <button
                        onClick={switchToCreateAccount}
                        className="text-blue-600 hover:text-blue-800 font-medium ml-1 cursor-pointer"
                      >
                        Create Account
                      </button>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <form onSubmit={handleCreateAccountSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="first_name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          placeholder="First Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="last_name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                      <input
                        type="text"
                        name="organization"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Your organization"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                      <input
                        type="password"
                        name="password"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Create a password"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
                      <input
                        type="password"
                        name="confirm_password"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Confirm your password"
                      />
                    </div>
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="terms_agreement"
                        required
                        className="mt-1 cursor-pointer"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to the Terms of Service and Privacy Policy
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="newsletter_consent"
                        className="mt-1 cursor-pointer"
                      />
                      <span className="text-sm text-gray-600">
                        I would like to receive updates about Forum activities and events
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer"
                    >
                      Create Account
                    </button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Already have an account?
                      <button
                        onClick={switchToSignIn}
                        className="text-blue-600 hover:text-blue-800 font-medium ml-1 cursor-pointer"
                      >
                        Sign In
                      </button>
                    </p>
                  </div>
                </>
              )}

              {!showCreateAccount && (
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                      <i className="ri-google-fill text-red-500 text-lg"></i>
                      <span className="ml-2">Google</span>
                    </button>
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                      <i className="ri-linkedin-fill text-blue-600 text-lg"></i>
                      <span className="ml-2">LinkedIn</span>
                    </button>
                  </div>
                </div>
              )}
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
                <li><a href="/partners" className="text-gray-300 hover:text-white cursor-pointer">Become our partner</a></li>
                <li><a href="/join" className="text-gray-300 hover:text-white cursor-pointer">Become a member</a></li>
                <li><a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">Subscribe to our press releases</a></li>
                <li><a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">Subscribe to our newsletters</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white cursor-pointer">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick links</h3>
              <ul className="space-y-3 mb-8">
                <li><a href="/initiatives" className="text-gray-300 hover:text-white cursor-pointer">Sustainability at the Forum</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white cursor-pointer">Careers</a></li>
              </ul>
              <div>
                <h4 className="font-semibold mb-4">Language editions</h4>
                <div className="flex space-x-2">
                  <a href="/" className="text-gray-300 hover:text-white cursor-pointer">PT</a>
                  <span className="text-gray-500">•</span>
                  <a href="/en" className="text-gray-300 hover:text-white cursor-pointer">EN</a>
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
