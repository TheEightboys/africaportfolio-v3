
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { isAuthenticated, user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      setIsProfileDropdownOpen(false);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleViewProfile = () => {
    navigate('/profile');
    setIsProfileDropdownOpen(false);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

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
              <Link to="/about" className="text-blue-600 font-medium">
                About
              </Link>
              <Link to="/initiatives" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Initiative
              </Link>
              <Link to="/stakeholders" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Stakeholders
              </Link>
              <Link to="/agenda" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Agenda
              </Link>
              <Link to="/publications" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Publications
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
                        onClick={handleLogout}
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
                <Link to="/about" className="text-blue-600 font-medium">
                  About
                </Link>
                <Link to="/initiatives" className="text-gray-700 hover:text-blue-600 font-medium">
                  Initiative
                </Link>
                <Link to="/stakeholders" className="text-gray-700 hover:text-blue-600 font-medium">
                  Stakeholders
                </Link>
                <Link to="/agenda" className="text-gray-700 hover:text-blue-600 font-medium">
                  Agenda
                </Link>
                <Link to="/publications" className="text-gray-700 hover:text-blue-600 font-medium">
                  Publications
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
                        handleLogout();
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

      <main>
        {/* Hero Section */}
        <section
          className="relative py-32 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=African%20leaders%20and%20business%20executives%20in%20a%20modern%20conference%20hall%20discussing%20economic%20development%2C%20professional%20meeting%20with%20diverse%20participants%2C%20contemporary%20architecture%20with%20African%20cultural%20elements%2C%20dignified%20cooperation%20and%20strategic%20partnerships&width=1920&height=800&seq=about-hero&orientation=landscape')`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About the Africa Economic Forum
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              A pan-African and global platform for economic dialogue, strategic cooperation, and sovereign development. More than an event, the AEF is a movement that repositions Africa as a strategic partner and co‑architect of the world's future.
            </p>
          </div>
        </section>

        {/* What We Are Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Are</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    The Africa Economic Forum (AEF) is a pan-African and global platform for economic dialogue,
                    strategic cooperation, and sovereign development. More than an event, the AEF is a movement
                    that brings together African leaders, governments, investors, entrepreneurs, intellectuals,
                    and international allies to co‑create new models of growth, leadership, and global engagement.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Founded as a response to decades of imbalanced development models, the AEF repositions Africa
                    not as a continent in need, but as a strategic partner, solution provider, and co‑architect
                    of the world's future.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20African%20business%20district%20with%20skyscrapers%20and%20economic%20development%2C%20bustling%20financial%20center%20with%20contemporary%20architecture%2C%20symbol%20of%20African%20economic%20sovereignty%20and%20strategic%20partnerships%2C%20dignified%20cooperation&width=600&height=500&seq=what-we-are&orientation=portrait"
                  alt="Africa Economic Development"
                  className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                To catalyze economic transformation and sovereignty in Africa through strategic cooperation and visionary
                leadership.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-handshake-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Win-Win Cooperation</h3>
                <p className="text-gray-600 text-center">
                  Designing win-win cooperation frameworks between Africa and global partners based on mutual respect
                  and shared prosperity.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-user-star-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Visionary Leadership</h3>
                <p className="text-gray-600 text-center">
                  Promoting ethical, inclusive and visionary leadership across the continent that builds institutions and
                  creates lasting change.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-links-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Strategic Connections</h3>
                <p className="text-gray-600 text-center">
                  Connecting African opportunities with capital, technology, and talent to unlock the continent's full
                  potential.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-megaphone-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Narrative Elevation</h3>
                <p className="text-gray-600 text-center">
                  Elevating Africa's narrative and value in the global order by challenging stereotypes and amplifying
                  African voices.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-community-line text-2xl text-teal-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Community Empowerment</h3>
                <p className="text-gray-600 text-center">
                  Building ecosystems that empower youth, women, and local communities to shape and lead the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
            <p className="text-2xl text-blue-100 max-w-5xl mx-auto leading-relaxed">
              To position Africa as a sovereign economic power, a center of innovation, and a global co‑leader —
              shaping the future through strategic alliances, dignified cooperation, and purpose‑driven leadership.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and shape our approach to creating transformational change across
                Africa.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">🌍</div>
                  <h3 className="text-xl font-semibold text-gray-900">Sovereignty &amp; Self-Determination</h3>
                </div>
                <p className="text-gray-600">
                  We believe Africa must define its own path, develop on its own terms, and build strategic autonomy in
                  economy, media, culture, science, and governance.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">🤝</div>
                  <h3 className="text-xl font-semibold text-gray-900">Equity &amp; Win-Win Cooperation</h3>
                </div>
                <p className="text-gray-600">
                  We advocate for fair partnerships based on mutual benefit, respect, and shared prosperity — not charity
                  or dependency.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">🔥</div>
                  <h3 className="text-xl font-semibold text-gray-900">Transformational Leadership</h3>
                </div>
                <p className="text-gray-600">
                  We promote ethical, servant, and purpose-driven leadership that builds institutions, uplifts people, and
                  creates lasting change.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">📣</div>
                  <h3 className="text-xl font-semibold text-gray-900">Narrative Justice</h3>
                </div>
                <p className="text-gray-600">
                  We challenge stereotypes and amplify African voices, successes, and world‑changing contributions.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">💡</div>
                  <h3 className="text-xl font-semibold text-gray-900">Innovation &amp; Excellence</h3>
                </div>
                <p className="text-gray-600">
                  We nurture local talents, ideas and technologies that offer bold solutions to Africa's and the world's
                  challenges.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">👥</div>
                  <h3 className="text-xl font-semibold text-gray-900">Inclusion &amp; Intergenerational Empowerment</h3>
                </div>
                <p className="text-gray-600">
                  We create space for youth, women, and communities to shape and lead the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Building bridges between Africa and the world through strategic partnerships and transformational initiatives.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">54</div>
                <div className="text-gray-600">African Countries Engaged</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">1000+</div>
                <div className="text-gray-600">Global Leaders Connected</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">$50B+</div>
                <div className="text-gray-600">Investment Opportunities Facilitated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">25+</div>
                <div className="text-gray-600">Strategic Partnerships Formed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Organizing Committee */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Organizing Committee</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the distinguished leaders guiding Africa's economic transformation through strategic vision,
                executive leadership, and scientific expertise.
              </p>
            </div>

            {/* Founder Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">🌟 Founder</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Visionary leadership driving Africa's economic transformation and global strategic partnerships.
                </p>
              </div>
              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/billy-issa.jpg"
                    alt="Dr. Billy Issa"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Billy Issa</h4>
                    <p className="text-sm text-blue-600 mb-3">Visionary Founder &amp; Host</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Visionary leader and architect of the Africa Economic Forum, dedicated to repositioning Africa as a strategic global partner and driving sustainable economic transformation across the continent through innovative partnerships and sovereign development initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AEF Strategic Advisory Board */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">AEF Strategic Advisory Board</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Former heads of state and distinguished global leaders providing strategic guidance and vision.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* H.E. Ameenah Gurib-Fakim */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/ameenah-gurib-fakim.jpg"
                    alt="H.E. Ameenah Gurib-Fakim"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">H.E. Ameenah Gurib-Fakim</h4>
                    <p className="text-sm text-blue-600 mb-3">Former President of Mauritius (2015–2018)</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Internationally recognized biodiversity scientist and entrepreneur. Advocate for sustainable development, women in science, and innovation ecosystems across Africa. Serves on numerous global boards promoting climate resilience, research, and youth empowerment.
                    </p>
                  </div>
                </div>

                {/* H.E. Rosalia Arteaga */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/rosalia-arteaga.jpg"
                    alt="H.E. Rosalia Arteaga"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">H.E. Rosalia Arteaga</h4>
                    <p className="text-sm text-blue-600 mb-3">Former President of Ecuador</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Distinguished advocate for education, democracy, and sustainable development. Founder of international initiatives on environmental governance and women's leadership. Prominent voice on Amazon protection and intercultural dialogue.
                    </p>
                  </div>
                </div>

                {/* H.E. Ana Helena Chacón */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/ana-helena-chacon.jpg"
                    alt="H.E. Ana Helena Chacón"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">H.E. Ana Helena Chacón</h4>
                    <p className="text-sm text-blue-600 mb-3">Former Vice President of Costa Rica (2014–2018)</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Global advocate for human rights, gender equality, and social inclusion. Diplomat and policy shaper with extensive experience in governance, public policy, and international cooperation.
                    </p>
                  </div>
                </div>

                {/* H.E. Vladimir Norov */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/vladimir-norov.jpg"
                    alt="H.E. Vladimir Norov"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">H.E. Vladimir Norov</h4>
                    <p className="text-sm text-blue-600 mb-3">Former Foreign Minister of Uzbekistan</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Former Secretary-General of the Shanghai Cooperation Organization (2019–2021). Veteran diplomat with decades of experience representing Uzbekistan to the EU, NATO, and key European capitals. Recognized for advancing regional security, connectivity, and multilateral diplomacy.
                    </p>
                  </div>
                </div>

                {/* H. E. Muhammad Azfar Ahsan */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/mohammad-azfar-ahsan.jpg"
                    alt="H. E. Muhammad Azfar Ahsan"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">H. E. Muhammad Azfar Ahsan</h4>
                    <p className="text-sm text-blue-600 mb-3">Executive Board Member, Africa Economic Forum</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Former Minister of State and Chairman of the Board of Investment, Pakistan. International entrepreneur, public policy leader, and founder of Corporate Pakistan Group—a leading platform uniting business, government, and thought leaders. Recognized for driving investment diplomacy and fostering global economic partnerships. A respected voice in emerging market development, he bridges the public and private sectors to promote inclusive growth, innovation, and cross-border collaboration.
                    </p>
                  </div>
                </div>

                {/* Dr. Daere Akobo */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/daere-akobo.jpg"
                    alt="Dr. Daere Akobo"
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Daere Akobo</h4>
                    <p className="text-sm text-blue-600 mb-3">Chairman of Pana Holdings</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Leading Nigerian entrepreneur. Specialist in oilfield services, technology, and infrastructure. Philanthropist and investor advancing industrialization, capacity building, and innovation across West Africa.
                    </p>
                  </div>
                </div>

                {/* Dr. M'zée Fula-Ngenge */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/mzee-fula-ngenge.jpg"
                    alt="Dr. M'zée Fula-Ngenge"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. M'zée Fula-Ngenge</h4>
                    <p className="text-sm text-blue-600 mb-3">Chairman of Pan-African Business and Development Initiatives</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dr M'zée Fula Ngenge, Chairman of the African Diamond Council (ADC), is a Mining Engineer and highly respected Senior Strategy Advisor who celebrated 40 years in the global diamond industry this year. He acts as a professional liaison within the international diamond trade and is well-positioned to influence, both the public and private sectors.
                    </p>
                  </div>
                </div>

                {/* Dr. Nigel Chanakira */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/nigel-chanakira.jpg"
                    alt="Dr. Nigel Chanakira"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Nigel Chanakira</h4>
                    <p className="text-sm text-blue-600 mb-3">Zimbabwean Economist & Investor</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Founder of Kingdom Financial Holdings. Private equity leader driving SME growth and pan‑African investment strategies. Advisor on financial innovation and entrepreneurship development across Africa.
                    </p>
                  </div>
                </div>

                {/* Dr. Sunday Adelaja */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/sunday-adelaja.jpg"
                    alt="Dr. Sunday Adelaja"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Sunday Adelaja</h4>
                    <p className="text-sm text-blue-600 mb-3">Nigerian Thought Leader & Reform Advocate</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Renowned author and reform advocate. Founder of one of Europe's largest multicultural churches. Influential in leadership transformation, governance reform, and nation‑building strategies. Global speaker shaping values‑driven leadership.
                    </p>
                  </div>
                </div>

                {/* Diego Massimiliano De Giorgi */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/diego-de-giorgi.jpg"
                    alt="Diego Massimiliano De Giorgi"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Diego Massimiliano De Giorgi</h4>
                    <p className="text-sm text-blue-600 mb-3">Global Investment Strategist & Entrepreneur</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Global investment strategist and entrepreneur with extensive experience in international finance, infrastructure, and sustainable development. Founder and CEO of multiple ventures bridging European capital with emerging market opportunities. Advocate for responsible investment and cross‑continental partnerships fostering Africa's industrial transformation. Combines deep market insight with a commitment to ethical leadership and long‑term value creation.
                    </p>
                  </div>
                </div>

                
              </div>
            </div>

            {/* AEF Executive Board */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">⚖ AEF Executive Board</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Executive leaders driving operational excellence and strategic implementation.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* H.E. Abraham Dwuma Odoom */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/abraham-dwuma-odoom.jpg"
                    alt="H.E. Abraham Dwuma Odoom"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">H.E. Abraham Dwuma Odoom</h4>
                    <p className="text-sm text-blue-600 mb-3">Former Member of Parliament and Deputy Minister of Agriculture, Ghana</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Architect of Ghana's agricultural transformation through pro‑poor policies. Internationally respected expert on agribusiness, rural development, and food security strategies.
                    </p>
                  </div>
                </div>

                {/* Dr. Justina Mutale */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/justina-mutale.jpg"
                    alt="Dr. Justina Mutale"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Justina Mutale</h4>
                    <p className="text-sm text-blue-600 mb-3">Founder &amp; President, Justina Mutale Foundation</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Global award‑winning leader on gender equality and women's empowerment. International keynote speaker and mentor to emerging African women leaders. Recognized among the most influential women in Africa and beyond.
                    </p>
                  </div>
                </div>

                {/* Amina Touré */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/amina-Touré.jpeg"
                    alt="Amina Touré"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Amina Touré</h4>
                    <p className="text-sm text-blue-600 mb-3">Director of Communication, Media & Public Relations, Africa Economic Forum</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Development practitioner, researcher, and strategic communicator with a strong focus on Africa’s political economy and global narratives. Amina holds a Bachelor of Laws and an MSc in International Development & Humanitarian Emergencies from the London School of Economics, and is completing an MPhil in African Studies at the University of Cambridge, specializing in extractive industries, Chinese investment, and state–business relations in the Democratic Republic of Congo (DRC).

Her work spans policy research, media strategy, and narrative shaping. She has authored influential analyses on resource governance, value-chain upgrading, and the political economy of strategic minerals. As an independent journalist, she documents the conflict in eastern Congo and the expansion of mining operations in the south, producing field-rooted reporting that centers Congolese perspectives and brings nuance to globally misunderstood issues.

Amina brings to the AEF a unique blend of intellectual rigor, communication expertise, and geopolitical insight—crafting narratives that strengthen Africa’s voice, credibility, and influence on the global stage.
                    </p>
                  </div>
                </div>

                {/* Walid Louki*/}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/walid-loukil.jpeg"
                    alt="Walid Louki"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Walid Louki</h4>
                    <p className="text-sm text-blue-600 mb-3">Walid Loukil, AEF Regional Director for North Africa</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Walid Koulil is a senior executive and strategic leader with extensive experience in international investment, economic development, and cross-border partnerships across Africa, Europe, and the Middle East. He is recognized for his ability to bridge public and private sector stakeholders, mobilize capital, and structure high-impact initiatives aligned with long-term growth and regional integration.

With a career spanning executive leadership, advisory roles, and board governance, Mr. Koulil has been closely involved in large-scale projects at the intersection of infrastructure, finance, energy, and strategic industries. His work focuses on value creation, institutional strengthening, and positioning emerging markets within the evolving global economic order.

At the Africa Economic Forum, Walid Koulil serves as Regional Director for North Africa, where he contributes to advancing economic diplomacy, investment facilitation, and strategic alliances between Africa and global capital markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scientific Committee */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">🔬 Scientific Committee</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Leading economists and researchers providing analytical expertise and policy insights.
                </p>
              </div>
              <div className="max-w-md mx-auto">
                {/* Nathan Lewis */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/nathan-lewis.jpg"
                    alt="Nathan Lewis"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Nathan Lewis</h4>
                    <p className="text-sm text-blue-600 mb-3">International Economist &amp; Author</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Specializing in monetary policy and fiscal systems. Senior Fellow at the Discovery Institute. Contributor to global debates on sound money, sustainable finance, and economic development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Be part of Africa's transformation. Connect with visionary leaders, contribute to strategic partnerships,
              and help shape the continent's sovereign economic future.
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-lg mb-6">About us</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Our mission</Link></li>
                <li><Link to="/framework" className="text-gray-300 hover:text-white cursor-pointer">Our Institutional Framework</Link></li>
                <li><Link to="/history" className="text-gray-300 hover:text-white cursor-pointer">History</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Leadership and governance</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Our Impact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">More from the Forum</h3>
              <ul className="space-y-3">
                <li><Link to="/initiatives" className="text-gray-300 hover:text-white cursor-pointer">Centres</Link></li>
                <li><Link to="/meetings" className="text-gray-300 hover:text-white cursor-pointer">Meetings</Link></li>
                <li><Link to="/stakeholders" className="text-gray-300 hover:text-white cursor-pointer">Stakeholders</Link></li>
                <li><Link to="/agenda" className="text-gray-300 hover:text-white cursor-pointer">Forum Stories</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white cursor-pointer">Press releases</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-white cursor-pointer">Photo gallery</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white cursor-pointer">Podcasts</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white cursor-pointer">Videos</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Engage with us</h3>
              <ul className="space-y-3">
                <li>
                  {isAuthenticated && user ? (
                    <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 whitespace-nowrap cursor-pointer">
                      Logout
                    </button>
                  ) : (
                    <Link to="/signin" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                      Sign in
                    </Link>
                  )}
                </li>
                <li><Link to="/partners" className="text-gray-300 hover:text-white cursor-pointer">Become our partner</Link></li>
                <li><Link to="/join" className="text-gray-300 hover:text-white cursor-pointer">Become a member</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white cursor-pointer">Subscribe to our press releases</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white cursor-pointer">Subscribe to our newsletters</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white cursor-pointer">Contact us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick links</h3>
              <ul className="space-y-3 mb-8">
                <li><Link to="/initiatives" className="text-gray-300 hover:text-white cursor-pointer">Sustainability at the Forum</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-white cursor-pointer">Careers</Link></li>
              </ul>
              <div>
                <h4 className="font-semibold mb-4">Language editions</h4>
                <div className="flex space-x-2">
                  <Link to="/" className="text-gray-300 hover:text-white cursor-pointer">PT</Link>
                  <span className="text-gray-500">•</span>
                  <Link to="/en" className="text-gray-300 hover:text-white cursor-pointer">EN</Link>
                  <span className="text-gray-500">•</span>
                  <Link to="/es" className="text-gray-300 hover:text-white cursor-pointer">ES</Link>
                  <span className="text-gray-500">•</span>
                  <Link to="/fr" className="text-gray-300 hover:text-white cursor-pointer">FR</Link>
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
                <Link to="/privacy" className="hover:text-white cursor-pointer">
                  Privacy Policy &amp; Terms of Service
                </Link>
                
                <p>© 2025 Africa Economic Forum</p>
                <a href="https://codesignglobal.com" className="hover:text-white cursor-pointer">Code Design Global</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
