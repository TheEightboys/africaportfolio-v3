
import React, { useState } from 'react';

export default function Careers() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

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

  const jobOpenings = [
    {
      id: 1,
      title: 'Director of Economic Research',
      department: 'Research and Analysis',
      location: 'Johannesburg, South Africa',
      type: 'Full Time',
      level: 'Senior',
      // Fixed the broken salary string
      salary: '$80,000 - $120,000',
      description:
        'Lead our economic research team, developing in-depth analyses on African economic trends and investment opportunities.',
      requirements: [
        'PhD in Economics or related field',
        '10+ years of experience in economic research',
        'Proven experience in African economics',
        'Fluency in English and Portuguese',
        'Team leadership skills',
      ],
      responsibilities: [
        'Supervise production of economic reports',
        'Lead team of 8 researchers',
        'Present findings to stakeholders',
        'Develop innovative research methodologies',
      ],
      posted: '2024-12-15',
    },
    {
      id: 2,
      title: 'Strategic Partnerships Manager',
      department: 'Business Development',
      location: 'Lagos, Nigeria',
      type: 'Full Time',
      level: 'Mid-Level',
      salary: '$60,000 - $85,000',
      description:
        'Develop and manage strategic partnerships with government organizations, corporations and international institutions.',
      requirements: [
        'MBA or equivalent',
        '5+ years in partnership development',
        'Experience in African markets',
        'Established network of contacts',
        'Excellent negotiation skills',
      ],
      responsibilities: [
        'Identify partnership opportunities',
        'Negotiate strategic agreements',
        'Maintain partner relationships',
        'Develop value propositions',
      ],
      posted: '2024-12-10',
    },
    {
      id: 3,
      title: 'Digital Communications Specialist',
      department: 'Communications and Media',
      location: 'Nairobi, Kenya',
      type: 'Full Time',
      level: 'Mid-Level',
      salary: '$45,000 - $65,000',
      description:
        'Manage our digital presence, create engaging content and amplify the African narrative through digital channels.',
      requirements: [
        'Degree in Communications or Marketing',
        '3+ years in digital marketing',
        'Experience with corporate social media',
        'Knowledge of SEO and analytics',
        'Creativity and strategic thinking',
      ],
      responsibilities: [
        'Manage corporate social media',
        'Create engaging digital content',
        'Develop marketing campaigns',
        'Analyze performance metrics',
      ],
      posted: '2024-12-08',
    },
    {
      id: 4,
      title: 'Events Coordinator',
      department: 'Events and Conferences',
      location: 'Cairo, Egypt',
      type: 'Full Time',
      level: 'Junior',
      salary: '$35,000 - $50,000',
      description:
        'Support the organization and execution of high-level events, including summits, conferences and strategic meetings.',
      requirements: [
        'Degree in Administration or related field',
        '2+ years in event organization',
        'Experience with corporate events',
        'Attention to detail',
        'Exceptional organizational skills',
      ],
      responsibilities: [
        'Coordinate event logistics',
        'Manage vendors and partners',
        'Support participants and speakers',
        'Ensure flawless execution',
      ],
      posted: '2024-12-05',
    },
    {
      id: 5,
      title: 'Senior Financial Analyst',
      department: 'Finance',
      location: 'Casablanca, Morocco',
      type: 'Full Time',
      level: 'Senior',
      salary: '$70,000 - $95,000',
      description:
        'Perform complex financial analyses, support investment decisions and develop financial models for strategic projects.',
      requirements: [
        'CFA or equivalent qualification',
        '7+ years in financial analysis',
        'Experience in emerging markets',
        'Proficiency in financial modeling',
        'Knowledge of African regulations',
      ],
      responsibilities: [
        'Develop complex financial models',
        'Analyze investment opportunities',
        'Prepare executive reports',
        'Support project due diligence',
      ],
      posted: '2024-12-01',
    },
    {
      id: 6,
      title: 'Information Technology Specialist',
      department: 'Technology',
      location: 'Kigali, Rwanda',
      type: 'Full Time',
      level: 'Mid-Level',
      salary: '$55,000 - $75,000',
      description:
        "Manage technology infrastructure, develop digital solutions and support the organization's digital transformation.",
      requirements: [
        'Degree in Computer Science',
        '4+ years in systems administration',
        'Experience with cloud computing',
        'Knowledge of cybersecurity',
        'Relevant technical certifications',
      ],
      responsibilities: [
        'Maintain technology infrastructure',
        'Develop digital solutions',
        'Ensure data security',
        'Support internal users',
      ],
      posted: '2024-11-28',
    },
  ];

  const benefits = [
    {
      title: 'Competitive Compensation Package',
      description:
        'Salaries aligned with international standards, performance bonuses and profit sharing.',
      icon: 'ri-money-dollar-circle-line',
    },
    {
      title: 'Professional Development',
      description:
        'Annual budget for training, conferences and professional certifications.',
      icon: 'ri-graduation-cap-line',
    },
    {
      title: 'Work Flexibility',
      description:
        'Remote work options, flexible hours and work-life balance.',
      icon: 'ri-time-line',
    },
    {
      title: 'Comprehensive Health Insurance',
      description:
        'Complete medical coverage for employee and family, including dental and vision.',
      icon: 'ri-heart-pulse-line',
    },
    {
      title: 'Global Opportunities',
      description:
        'Work on international projects and have mobility opportunities between offices.',
      icon: 'ri-global-line',
    },
    {
      title: 'Meaningful Impact',
      description:
        "Contribute directly to Africa's economic transformation and make a difference.",
      icon: 'ri-rocket-line',
    },
  ];

  const companyValues = [
    {
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we do.',
      icon: 'ri-star-line',
    },
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and innovative solutions.',
      icon: 'ri-lightbulb-line',
    },
    {
      title: 'Collaboration',
      description: 'We work together to achieve common goals.',
      icon: 'ri-team-line',
    },
    {
      title: 'Integrity',
      description: 'We act with honesty and transparency in all situations.',
      icon: 'ri-shield-check-line',
    },
  ];

  const handleApply = (job: any) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
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
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=Diverse%20African%20professionals%20working%20together%20in%20modern%20office%20environment%2C%20career%20development%20and%20professional%20growth%2C%20collaborative%20workplace%20with%20international%20team&width=1920&height=800&seq=careers-hero&orientation=landscape')`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Careers</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Join our team of professionals dedicated to Africa's economic transformation. Build a meaningful career while contributing to continental development.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    At the Africa Economic Forum, you don't just have a career - you become part of a movement
                    that is redefining the economic future of the African continent.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our diverse and talented team works in a collaborative environment, where every contribution
                    is valued and where you can grow professionally while generating real impact.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">150+</div>
                    <div className="text-gray-600">Talented Professionals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">25+</div>
                    <div className="text-gray-600">Nationalities</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Happy%20diverse%20African%20professionals%20in%20modern%20workplace%2C%20team%20collaboration%20and%20career%20satisfaction%2C%20professional%20development%20and%20growth%20opportunities&width=600&height=500&seq=careers-why&orientation=portrait"
                  alt="AEF Team"
                  className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These values guide our organizational culture and define how we work together to achieve our mission.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${value.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits and Advantages</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive benefits package to support your well-being and professional development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${benefit.icon} text-xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current opportunities and find the perfect position for your career.
              </p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-900 mr-4">{job.title}</h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {job.level}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center text-gray-600 text-sm mb-3 gap-4">
                        <div className="flex items-center">
                          <i className="ri-building-line mr-2"></i>
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <i className="ri-map-pin-line mr-2"></i>
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <i className="ri-time-line mr-2"></i>
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <i className="ri-money-dollar-circle-line mr-2"></i>
                          {job.salary}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="text-xs text-gray-500">
                        Posted on: {new Date(job.posted).toLocaleDateString('en-US')}
                      </div>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button
                        onClick={() => handleApply(job)}
                        className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diversity & Inclusion */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Diversity and Inclusion</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We celebrate diversity and promote an inclusive environment where everyone can thrive and contribute with their unique perspectives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-global-line text-2xl text-white"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cultural Diversity</h3>
                <p className="text-blue-100 text-sm">Multicultural team representing all of Africa and beyond</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-scales-line text-2xl text-white"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Gender Equality</h3>
                <p className="text-blue-100 text-sm">Commitment to gender parity at all levels</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-star-line text-2xl text-white"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Youth Development</h3>
                <p className="text-blue-100 text-sm">Special programs for emerging young talents</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-line text-2xl text-white"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Inclusive Environment</h3>
                <p className="text-blue-100 text-sm">Culture of respect, collaboration and mutual support</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Job Application Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Apply for {selectedJob.title}</h3>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">{selectedJob.title}</h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <div>
                    {selectedJob.department} • {selectedJob.location}
                  </div>
                  <div>
                    {selectedJob.type} • {selectedJob.salary}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Job Description:</h4>
                  <p className="text-gray-600 text-sm">{selectedJob.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {selectedJob.requirements.map((req: string, idx: number) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Responsibilities:</h4>
                  <ul className="space-y-1">
                    {selectedJob.responsibilities.map((resp: string, idx: number) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <i className="ri-arrow-right-line text-blue-600 mr-2 mt-0.5"></i>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  To apply for this position, send your resume and cover letter to:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">careers@africaeconomicforum.org</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Subject: Application - {selectedJob.title} - {selectedJob.location}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Only selected candidates will be contacted. We appreciate your interest in joining our team.
                </p>
              </div>

              <div className="mt-6 flex space-x-4">
                <button
                  onClick={() =>
                    window.open(
                      `mailto:careers@africaeconomicforum.org?subject=Application - ${encodeURIComponent(
                        selectedJob.title,
                      )} - ${encodeURIComponent(selectedJob.location)}`,
                    )
                  }
                  className="flex-1 bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer"
                >
                  Send Application by Email
                </button>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium whitespace-nowrap cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white cursor-pointer">
                    Our mission
                  </a>
                </li>
                <li>
                  <a href="/framework" className="text-gray-300 hover:text-white cursor-pointer">
                    Our Institutional Framework
                  </a>
                </li>
                <li>
                  <a href="/history" className="text-gray-300 hover:text-white cursor-pointer">
                    History
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white cursor-pointer">
                    Leadership and governance
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white cursor-pointer">
                    Our Impact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">More from the Forum</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/initiatives" className="text-gray-300 hover:text-white cursor-pointer">
                    Centres
                  </a>
                </li>
                <li>
                  <a href="/meetings" className="text-gray-300 hover:text-white cursor-pointer">
                    Meetings
                  </a>
                </li>
                <li>
                  <a href="/stakeholders" className="text-gray-300 hover:text-white cursor-pointer">
                    Stakeholders
                  </a>
                </li>
                <li>
                  <a href="/agenda" className="text-gray-300 hover:text-white cursor-pointer">
                    Forum Stories
                  </a>
                </li>
                <li>
                  <a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">
                    Press releases
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="text-gray-300 hover:text-white cursor-pointer">
                    Photo gallery
                  </a>
                </li>
                <li>
                  <a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">
                    Podcasts
                  </a>
                </li>
                <li>
                  <a href="/publications" className="text-gray-300 hover:text-white cursor-pointer">
                    Videos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Engage with us</h3>
              <ul className="space-y-3">
                <li>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                    Sign In
                  </button>
                </li>
                <li>
                  <a href="/partners" className="text-gray-300 hover:text-white cursor-pointer">
                    Partner with us
                  </a>
                </li>
                <li>
                  <a href="/join" className="text-gray-300 hover:text-white cursor-pointer">
                    Become a member
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white cursor-pointer">
                    Sign up for our press releases
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white cursor-pointer">
                    Subscribe to our newsletters
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white cursor-pointer">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Quick links</h3>
              <ul className="space-y-3 mb-8">
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white cursor-pointer">
                    Sustainability at the Forum
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-gray-300 hover:text-white cursor-pointer">
                    Careers
                  </a>
                </li>
              </ul>
              <div>
                <h4 className="font-semibold mb-4">Language editions</h4>
                <div className="flex space-x-2">
                  <a href="/" className="text-gray-300 hover:text-white cursor-pointer">
                    EN
                  </a>
                  <span className="text-gray-500">•</span>
                  <a href="/pt" className="text-gray-300 hover:text-white cursor-pointer">
                    PT
                  </a>
                  <span className="text-gray-500">•</span>
                  <a href="/es" className="text-gray-300 hover:text-white cursor-pointer">
                    ES
                  </a>
                  <span className="text-gray-500">•</span>
                  <a href="/fr" className="text-gray-300 hover:text-white cursor-pointer">
                    FR
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/17Jr8NpqZJ/"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/the-africa-economic-forum/"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/theafricaeconomicforum?igsh=MWowNmw1NjdueXNkbQ=="
                  className="w-10 h-10 bg-gray-700 rounded-fs flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
                >
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
