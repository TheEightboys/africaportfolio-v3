
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function InitiativesPage() {
  // Original state
  const [activeTab, setActiveTab] = useState('magazine');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Modified state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Modal state for programs
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Original functions
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Modified functions
  const handleSignOut = async () => {
    await signOut();
    setIsProfileDropdownOpen(false);
  };

  const handleViewProfile = () => {
    navigate('/profile');
    setIsProfileDropdownOpen(false);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Open program modal
  const openProgramModal = (program: any) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

  const magazineSections = [
    {
      title: 'Deep Dives',
      description: 'Trends & challenges in key sectors (mining, energy, trade, etc.)',
      icon: 'ri-search-line'
    },
    {
      title: 'Spotlight',
      description: 'Profiles of African innovators, leaders & nations',
      icon: 'ri-spotlight-line'
    },
    {
      title: 'Sovereignty Watch',
      description: 'Policies, reforms & continental strategies',
      icon: 'ri-shield-line'
    },
    {
      title: 'Pan-African Trade Lens',
      description: 'AfCFTA and intra-African opportunities',
      icon: 'ri-global-line'
    },
    {
      title: 'Global Partnerships',
      description: 'Investment stories with China, UAE, Europe, etc.',
      icon: 'ri-handshake-line'
    },
    {
      title: 'Voices of Change',
      description: 'Youth, women, and grassroots entrepreneurs',
      icon: 'ri-mic-line'
    },
    {
      title: 'Future Africa',
      description: 'Tech, climate, innovation & development',
      icon: 'ri-rocket-line'
    }
  ];

  const programs = [
    {
      title: 'Sovereign Growth Partnerships',
      description: 'With governments to co-develop national branding & investment promotion strategies.',
      icon: 'ri-government-line',
      category: 'Government',
      fullContent: `Sovereign Growth Partnerships is AEF's platform for working directly with African governments to co-design national economic positioning, investment promotion strategies, and long-term growth narratives.

Through this initiative, AEF supports governments in structuring compelling country investment stories, aligning national priorities with global capital, and strengthening institutional frameworks for attracting high-quality, long-term investment.

The program focuses on translating policy ambition into actionable investment pipelines, helping countries move from visibility to real deal flow, partnerships, and execution.`
    },
    {
      title: 'Africa Investment & Innovation Fund (AIIF)',
      description: 'Supporting transformative startups and scalable projects across key sectors.',
      icon: 'ri-funds-line',
      category: 'Investment',
      fullContent: `The Africa Investment & Innovation Fund (AIIF) is AEF's investment facilitation and capital-mobilization platform designed to support scalable African ventures and strategic projects across priority sectors.

AIIF works to connect high-potential companies and projects with aligned investors, strategic partners, and institutional capital, helping bridge the gap between innovative ideas and deployable funding.

The fund focuses on ventures that contribute to economic sovereignty, industrial upgrading, and sustainable growth, supporting both early-stage innovation and later-stage scale-up opportunities.`
    },
    {
      title: 'AEF Labs',
      description: 'Startup incubator for early-stage African ventures.',
      icon: 'ri-flask-line',
      category: 'Incubation',
      fullContent: `AEF Labs serves as AEF's incubation and experimentation platform, designed to support early-stage African ventures, new business models, and innovative solutions.

The Labs provide structured support for entrepreneurs to refine their ideas, validate market fit, and build scalable operating models. This includes mentorship, strategic guidance, exposure to partners, and access to networks that can accelerate growth.

AEF Labs acts as a bridge between early innovation and later-stage acceleration or investment pathways within the broader AEF ecosystem.`
    },
    {
      title: 'Next Africa Accelerator',
      description: 'For growth-stage ventures & family businesses.',
      icon: 'ri-speed-up-line',
      category: 'Acceleration',
      fullContent: `The Next Africa Accelerator is AEF's growth-stage acceleration platform focused on helping promising African ventures and family businesses scale regionally and globally.

The accelerator supports companies that have demonstrated traction and are ready to expand operations, professionalize governance, and attract strategic partnerships or capital.

Through tailored support, the program helps participating ventures strengthen leadership, optimize business models, and position themselves for long-term competitiveness and cross-border growth.`
    },
    {
      title: 'Pan-African Economic Missions',
      description: 'Delegations and roadshows across Africa & globally to attract partnerships and capital.',
      icon: 'ri-plane-line',
      category: 'Missions',
      fullContent: `Pan-African Economic Missions organizes targeted delegations, roadshows, and strategic visits across Africa and to key global financial and commercial centers.

These missions are designed to facilitate direct engagement between African governments, companies, and international investors, corporates, and institutions.

The program supports deal-making, partnership formation, and relationship-building, helping convert dialogue into concrete cooperation and investment outcomes.`
    },
    {
      title: 'African Economic Intelligence Hub',
      description: 'A data platform providing fresh analysis, sector dashboards & forecasts.',
      icon: 'ri-database-line',
      category: 'Intelligence',
      fullContent: `The African Economic Intelligence Hub is AEF's analytical and insight platform, providing data-driven perspectives on African economies, sectors, and investment trends.

The Hub produces analysis, dashboards, sector intelligence, and forward-looking insights to support policymakers, investors, and business leaders in making informed strategic decisions.

It serves as a centralized resource for understanding economic dynamics, identifying opportunities, and tracking structural transformation across African markets.`
    },
    {
      title: 'Young Builders Fellowship',
      description: 'Empowering youth in policy, business & innovation.',
      icon: 'ri-user-star-line',
      category: 'Youth',
      fullContent: `The Young Builders Fellowship is AEF's leadership and capacity-building program for emerging African leaders in policy, business, innovation, and entrepreneurship.

The fellowship aims to equip young professionals with the skills, networks, and exposure needed to contribute meaningfully to Africa's economic transformation.

Participants engage in learning, mentorship, and practical engagement with real economic and development challenges, building a pipeline of future African decision-makers and builders.`
    },
    {
      title: 'Women Lead Africa Program',
      description: 'Empowering women-led enterprises and voices in the economic discourse.',
      icon: 'ri-women-line',
      category: 'Women',
      fullContent: `The Women Lead Africa Program is AEF's platform dedicated to supporting women-led enterprises and amplifying women's leadership in Africa's economic landscape.

The program focuses on strengthening women entrepreneurs, executives, and leaders by providing access to networks, visibility, strategic support, and partnership opportunities.

It aims to increase the participation and influence of women in shaping economic policy, investment, and business growth across the continent.`
    },
    {
      title: 'Global Inspiration Awards',
      description: 'An Initiative of the Africa Economic Forum - Honoring the heroes shaping a better world.',
      icon: 'ri-award-line',
      category: 'Recognition',
      fullContent: `An Initiative of the Africa Economic Forum
Honoring the heroes shaping a better world

Essence of the Awards
The Global Inspiration Awards (GIA), created by the Africa Economic Forum, are a prestigious platform to honor modern-day heroes whose vision, courage, and leadership transcend borders.

They celebrate individuals and institutions advancing humanity through peace, innovation, sustainability, and cooperation — reminding the world that Africa is not just a continent of opportunities, but also a beacon of inspiration and values-driven leadership.

Our Mission
To celebrate greatness that moves the world forward, amplifying those who embody conscience, courage, and legacy. Through the Awards, the Africa Economic Forum reinforces its mission to drive global partnerships rooted in honor, equity, and shared prosperity.

Our Distinction
The GIA are:
• A Global Platform Born in Africa: Elevating stories of global leaders while positioning Africa at the heart of the new global order.
• Beyond Borders, Politics, and Profits: Recognizing impact that is timeless and universal.
• A Call to Action: Every award is not an end, but a starting point to inspire collective responsibility.

Thematic Pillars
The Awards honor leaders across eight categories, reflecting humanity's highest priorities:
• Dr. Sunday Adelaja Voice of Democracy Award
• Peace & Humanitarian Leadership Award
• Climate & Sustainability Champions
• Ana-Helena Chacon Gender Equity & Inclusion Advocates
• Ameenah Gurib-Fakim Health & Science Innovators Award
• Youth & Education Pioneers
• Business with Purpose
• Rosalia Arteaga Global Cooperation Catalysts
• Leadership & Good Governance

Format & Experience
• Strategic Integration: Organized as a flagship initiative of the Africa Economic Forum, complementing its annual meeting and sectoral forums.
• Global Stages: Hosted in iconic locations such as Dubai, New York, Geneva, or Addis Ababa — reinforcing Africa's voice in the world.
• Leadership Convergence: Bringing together governments, philanthropists, entrepreneurs, investors, and cultural leaders.
• Legacy Beyond the Ceremony: Each edition leaves behind commitments, partnerships, and actions to advance global causes.

Why It Matters
The Africa Economic Forum believes that celebrating those who inspire is itself a strategy for change.

By showcasing exemplary figures, the GIA:
• Inspire leaders in Africa and worldwide to act with honor.
• Strengthen Africa's positioning in global conversations.
• Create a legacy of values-driven leadership for future generations.

Our Call
Because honoring greatness is how we ignite global change.`
    }
  ];

  const stats = [
    { number: '50+', label: 'Active Programs' },
    { number: '25', label: 'Countries Reached' },
    { number: '1000+', label: 'Entrepreneurs Supported' },
    { number: '$500M+', label: 'Capital Mobilized' }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="https://static.readdy.ai/image/849a2f489cee8d6814d30c5afad3a84a/b4bfbdc8f08b91298cef1ff69a069583.png"
                  alt="AEF Logo"
                  className="h-10 w-10 object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
              <Link to="/initiatives" className="text-blue-600 font-medium">
                Initiative
              </Link>
              <Link to="/stakeholders" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Stakeholders
              </Link>
              <Link to="/agenda" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Agenda
              </Link>
              <Link to="/spotlight" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Spotlight
              </Link>

              <Link to="/meetings" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Meetings
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    title={user.user_metadata?.full_name || user.email}
                  >
                    {user.user_metadata?.avatar_url ? (
                      <img
                        src={user.user_metadata.avatar_url}
                        alt="Profile"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {getInitials(user.user_metadata?.full_name || user.email?.charAt(0) || 'U')}
                      </div>
                    )}
                  </button>

                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                        <div className="font-medium">{user.user_metadata?.full_name || 'User'}</div>
                        <div className="text-gray-500">{user.email}</div>
                      </div>
                      <button
                        onClick={handleViewProfile}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        View Profile
                      </button>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/signin"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Sign In
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                  About
                </Link>
                <Link to="/initiatives" className="text-blue-600 font-medium">
                  Initiative
                </Link>
                <Link to="/stakeholders" className="text-gray-700 hover:text-blue-600 font-medium">
                  Stakeholders
                </Link>
                <Link to="/agenda" className="text-gray-700 hover:text-blue-600 font-medium">
                  Agenda
                </Link>
                <Link to="/spotlight" className="text-gray-700 hover:text-blue-600 font-medium">
                  Spotlight
                </Link>

                <Link to="/meetings" className="text-gray-700 hover:text-blue-600 font-medium">
                  Meetings
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                  Contact
                </Link>

                {user ? (
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3 mb-4">
                      {user.user_metadata?.avatar_url ? (
                        <img
                          src={user.user_metadata.avatar_url}
                          alt="Profile"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {getInitials(user.user_metadata?.full_name || user.email?.charAt(0) || 'U')}
                        </div>
                      )}
                      <span className="text-gray-700 font-medium">{user.user_metadata?.full_name || 'User'}</span>
                    </div>
                    <button
                      onClick={() => {
                        handleViewProfile();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium mb-2"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-gray-100">
                    <Link to="/signin" className="block text-gray-700 hover:text-blue-600 font-medium">
                      Sign In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=African%20business%20leaders%20collaborating%20on%20innovative%20economic%20initiatives%2C%20modern%20conference%20room%20with%20digital%20displays%20showing%20economic%20data%2C%20professional%20atmosphere%20with%20diverse%20African%20entrepreneurs%20working%20together%20on%20strategic%20projects%2C%20warm%20lighting%2C%20contemporary%20African%20business%20setting&width=1200&height=600&seq=initiatives-hero&orientation=landscape')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Strategic Initiatives</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Driving real transformation beyond dialogue through innovative programs, strategic partnerships, and impactful initiatives that empower Africa's economic sovereignty.
          </p>
        </div>
      </section>


      {/* Tab Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-1 shadow-sm">
              <button
                onClick={() => setActiveTab('magazine')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${activeTab === 'magazine'
                  ? 'bg-teal-600 text-white'
                  : 'text-gray-600 hover:text-teal-600'
                  }`}
              >
                AEF Magazine
              </button>
              <button
                onClick={() => setActiveTab('programs')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${activeTab === 'programs'
                  ? 'bg-teal-600 text-white'
                  : 'text-gray-600 hover:text-teal-600'
                  }`}
              >
                Programs &amp; Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AEF Magazine Section */}
      {activeTab === 'magazine' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AEF Magazine</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insight &amp; Influence from Africa to the World. A quarterly publication offering strategic investment and economic intelligence from an African-led perspective, promoting sovereignty and win-win cooperation.
              </p>
            </div>

            {/* Magazine Cover */}
            <div className="flex justify-center mb-16">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20African%20business%20magazine%20cover%20design%20featuring%20economic%20growth%20charts%2C%20African%20continent%20silhouette%2C%20modern%20typography%2C%20sophisticated%20layout%20with%20gold%20and%20teal%20accents%2C%20quarterly%20publication%20design%2C%20business%20intelligence%20theme%2C%20clean%20minimalist%20aesthetic&width=400&height=500&seq=magazine-cover&orientation=portrait"
                  alt="AEF Magazine Cover"
                  className="w-80 h-96 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Latest Issue
                </div>
              </div>
            </div>

            {/* Editorial Sections */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {magazineSections.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${section.icon} text-teal-600 text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              ))}
            </div>

            {/* Subscribe CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Subscribe to AEF Magazine</h3>
                <p className="text-lg mb-6 opacity-90">
                  Get quarterly insights delivered to your inbox and stay ahead of Africa's economic transformation.
                </p>
                <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Programs & Projects Section */}
      {activeTab === 'programs' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Programs, Projects &amp; Initiatives</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Driving real transformation beyond dialogue through strategic programs that empower African economic sovereignty and foster sustainable growth.
              </p>
            </div>

            {/* Programs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <i className={`${program.icon} text-teal-600 text-xl`}></i>
                    </div>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                      {program.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <button
                    onClick={() => openProgramModal(program)}
                    className="text-teal-600 font-medium hover:text-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Learn More →
                  </button>
                </div>
              ))}
            </div>

            {/* Incubators & Accelerators Highlight */}

            <div className="mt-16 bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">AEF Incubators &amp; Accelerators</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-flask-line text-blue-600 text-xl"></i>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">AEF Labs</h4>
                  <p className="text-gray-600 mb-4">Startup incubator for early-stage African ventures with innovative solutions.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-time-line mr-2"></i>
                    6-month program
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-speed-up-line text-green-600 text-xl"></i>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Next Africa Accelerator</h4>
                  <p className="text-gray-600 mb-4">For growth-stage ventures &amp; family businesses ready to scale across Africa.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-time-line mr-2"></i>
                    3-month intensive
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Strategic Initiatives</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with us to drive Africa's economic transformation through innovative programs and strategic cooperation.
          </p>
        </div>
      </section>

      {/* Footer Links */}
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
                {user ? (
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 whitespace-nowrap cursor-pointer"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <li>
                    <Link
                      to="/signin"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 whitespace-nowrap cursor-pointer inline-block"
                    >
                      Sign in
                    </Link>
                  </li>
                )}
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
                  <a href="/es" className="text-gray-300 hover:text-white cursor-pointer">ES</a>
                  <span className="text-gray-500">•</span>
                  <a href="/cn" className="text-gray-300 hover:text-white cursor-pointer">中文</a>
                  <span className="text-gray-500">•</span>
                  <a href="/jp" className="text-gray-300 hover:text-white cursor-pointer">日本語</a>
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
                <a href="/privacy" className="hover:text-white cursor-pointer">Privacy Policy &amp; Terms of Service</a>

                <p>© 2025 Africa Economic Forum</p>
                <a href="https://codesignglobal.com/" className="hover:text-white cursor-pointer">Code Design Global</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Program Details Modal */}
      {showModal && selectedProgram && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[85vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-blue-600 text-white p-8 flex justify-between items-start border-b-4 border-teal-800">
              <div>
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${selectedProgram.icon} text-white text-2xl`}></i>
                  </div>
                  <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProgram.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{selectedProgram.title}</h3>
                <p className="text-blue-100 text-lg">{selectedProgram.description}</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-white hover:text-gray-200 ml-4 flex-shrink-0"
                aria-label="Close"
              >
                <i className="ri-close-line text-3xl"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedProgram.fullContent}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t p-6 flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 font-medium cursor-pointer transition-colors"
              >
                Close
              </button>
              <button
                className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 font-medium cursor-pointer transition-colors"
              >
                Get Involved
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

