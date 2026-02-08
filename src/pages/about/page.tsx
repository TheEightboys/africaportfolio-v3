
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isWhatWeAreExpanded, setIsWhatWeAreExpanded] = useState(false);
  const [isFounderBioExpanded, setIsFounderBioExpanded] = useState(false);
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
              A pan-African and global platform for strategic dialogue, sovereign cooperation, and long-term economic transformation. More than an event, the AEF is a permanent architecture for aligning leadership, capital, and policy to shape Africa's role in the world economy.
            </p>
          </div>
        </section>

        {/* What We Are Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Are</h2>

                {/* Always visible preview */}
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The Africa Economic Forum (AEF) is a pan-African and global platform for strategic cooperation, sovereign development, and high-level economic alignment. It brings together African governments, global investors, institutions, and thought leaders to co-create new models of growth, partnership, and long-term value creation.
                </p>

                {/* Expandable full content */}
                {isWhatWeAreExpanded && (
                  <div className="space-y-8 mt-8">
                    {/* Our History */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our History</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">2022 – Origins</h4>
                          <p className="text-gray-600 leading-relaxed">
                            The Africa Economic Forum began in 2022 under the name ICN Global Summit and Award, created as a platform to celebrate inspiring leaders and foster dialogue on Africa's role in the world.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">2022 – First Edition, Kinshasa</h4>
                          <p className="text-gray-600 leading-relaxed">
                            The inaugural edition in Kinshasa honored Dr. Denis Mukwege, Nobel Peace Prize laureate, and Mrs. Julienne Lusenge, Aurora Prize laureate and Time 100 honoree. The Summit convened senators, parliamentarians, business leaders, and international investors.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">2023 – Second Edition, Kinshasa</h4>
                          <p className="text-gray-600 leading-relaxed">
                            The Forum returned to Kinshasa with broader recognition and global reach. Distinguished speakers included H.E. Rosalía Arteaga, former President of Ecuador, and H.E. Guy Loando, Minister of Territorial and Land Management of the DRC. The edition also celebrated the presence of Innoss'B, renowned superstar and humanitarian, highlighting the Forum's commitment to cultural influence and social impact. Hundreds of government officials, entrepreneurs, and investors from across Africa and beyond participated.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">2024 and Beyond – Evolution into AEF</h4>
                          <p className="text-gray-600 leading-relaxed">
                            Building on its early momentum, the initiative rebranded as the Africa Economic Forum (AEF), consolidating its identity as a premier global platform. Today, AEF convenes governments, investors, and thought leaders to drive investment, shape Africa's global agenda, and build equitable international partnerships.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Our Institutional Framework */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Institutional Framework</h3>

                      {/* A. Win-win Cooperation */}
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">A. Win-Win, Equitable and Ethical Economic Cooperation</h4>
                        <p className="text-lg font-medium text-gray-800 mb-2">Rethinking and Reshaping Cooperation Models with Africa</p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          A Strategic Imperative of the Africa Economic Forum
                        </p>

                        <h5 className="font-semibold text-gray-900 mb-2">Why This Rethink Matters</h5>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          For decades, cooperation with Africa has often been defined by asymmetries — in power, in perception, and in value creation. The AEF calls for a decisive shift:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                          <li>From aid dependency to economic sovereignty</li>
                          <li>From foreign-led agendas to African-owned strategies</li>
                          <li>From short-term fixes to systems change and sustainable growth</li>
                        </ul>

                        <h5 className="font-semibold text-gray-900 mb-2">The AEF's Contribution to a New Cooperation Paradigm:</h5>
                        <div className="space-y-3 text-gray-600">
                          <div>
                            <span className="font-semibold">1. Platform for Policy Dialogue:</span> Bringing together heads of state, ministers, CEOs, investors, and thought leaders to co-design policies and frameworks that serve long-term African and global interests.
                          </div>
                          <div>
                            <span className="font-semibold">2. Investment Matchmaking:</span> Connecting African opportunities with global capital, with a focus on infrastructure, green energy, tech, health, agriculture, and the creative economy.
                          </div>
                          <div>
                            <span className="font-semibold">3. Narrative Reset:</span> Positioning Africa as a solution provider — not a problem to be solved. AEF elevates success stories, champions innovation, and celebrates Africa's global contributors.
                          </div>
                          <div>
                            <span className="font-semibold">4. Geopolitical Rebalancing:</span> In a shifting global order, the AEF asserts Africa's place at the table — not as a guest, but as a co-architect of the world's future.
                          </div>
                          <div>
                            <span className="font-semibold">5. Inclusive Development Models:</span> Promoting partnerships that empower youth, women, entrepreneurs, and local communities, ensuring that economic growth translates into shared prosperity.
                          </div>
                        </div>
                      </div>

                      {/* B. Quality Leadership */}
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">B. Quality Leadership and Governance in Africa</h4>

                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">1. Rethinking Leadership: From Power to Purpose</h5>
                            <p className="text-gray-600 leading-relaxed mb-2">
                              <span className="font-medium">Current Challenge:</span> Leadership is too often centered on the accumulation of personal or clan-based power.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-2">
                              <span className="font-medium">New Paradigm:</span> A transformational leadership rooted in purpose, accountability, ethics, and long-term impact.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                              Examples of models to follow: Servant leadership, Leadership inspired by African values such as Ubuntu
                            </p>
                          </div>

                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">2. Reshaping Governance: Institutions That Serve People</h5>
                            <p className="text-gray-600 leading-relaxed mb-2">
                              <span className="font-medium">Objective:</span> Shift from extractive institutions to inclusive and accountable institutions.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-2 font-medium">Key intervention areas:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                              <li>Participatory constitutional reform</li>
                              <li>Digitalization of public administration</li>
                              <li>Strengthening mechanisms for transparency and citizen auditing</li>
                              <li>Real and effective decentralization</li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">3. New Patterns: Leadership Ecosystems & Collaborative Governance</h5>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                              <li>From verticality to horizontality: Promote the co-creation of public policies with citizens, the diaspora, youth, and local communities</li>
                              <li>Multi-stakeholder coalitions: Governments + businesses + civil society + traditional institutions</li>
                              <li>Distributed leadership: Create environments where every citizen becomes an agent of change</li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">4. African Solutions to African Challenges</h5>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                              <li>Integrating African wisdom: Governance inspired by traditional systems (chiefdoms, councils of elders) adapted to contemporary challenges</li>
                              <li>Revaluing Africa's cultural and spiritual capital in governance models</li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">5. Youth & Women as New Pillars of Governance</h5>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                              <li>Intergenerational leadership: Build bridges between generations</li>
                              <li>Access to power for women and youth: Smart quotas, campaign financing, and capacity building</li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">6. Strategic Actions for Change</h5>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                              <li>Establish an African Center for Leadership and Innovative Governance</li>
                              <li>Launch inter-country dialogue forums on institutional reform</li>
                              <li>Set up public policy labs led by African youth and intellectuals</li>
                              <li>Train a new generation of leaders through pan-African governance schools</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* C. Africa's Economic Sovereignty */}
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">C. Africa's Economic Sovereignty</h4>
                        <p className="text-lg font-medium text-gray-800 mb-4">Reclaiming and Reasserting African Sovereignty: Our Fight at the Africa Economic Forum</p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          The Africa Economic Forum stands as a pivotal platform for advancing the continent's collective mission: the reappropriation and reconquest of African sovereignty in all its dimensions. This struggle is not merely ideological but a practical necessity for Africa's true emancipation and prosperity. Below are the key pillars of this sovereign revolution:
                        </p>

                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">1. Economic Sovereignty: An African Market Dominated by African Products</h5>
                            <p className="text-gray-600 leading-relaxed mb-2">
                              Africa remains overly dependent on imports, with intra-African trade accounting for only 15-18% of total trade, compared to 60% in Europe and 40% in Asia (AfDB, 2022). To reverse this, we must:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                              <li>Strengthen local production and value-added industries to reduce reliance on foreign goods</li>
                              <li>Accelerate the African Continental Free Trade Area (AfCFTA), which could boost intra-African trade by 52% by 2035 (World Bank)</li>
                              <li>Implement protectionist policies strategically to nurture homegrown industries while fostering fair and equitable global trade partnerships</li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">2. Win-Win South-South and Global Cooperation Based on Equality</h5>
                            <p className="text-gray-600 leading-relaxed mb-2">
                              Africa must redefine its global engagements, moving away from asymmetric partnerships that perpetuate dependency. Instead, we advocate for:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                              <li>Strengthened South-South alliances (e.g., BRICS+, ASEAN-Africa collaborations) to enhance bargaining power</li>
                              <li>Technology and knowledge transfer agreements that prioritize Africa's long-term development</li>
                              <li>Debt justice and fair financing, as African nations spend more on debt servicing (up to 25% of revenues in some cases) than on healthcare or education (UNECA)</li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">3. Media Sovereignty: Controlling Our Narrative</h5>
                            <p className="text-gray-600 leading-relaxed mb-2">
                              Over 75% of Africa's media content is sourced from Western outlets (Reuters Institute), distorting perceptions and stifling African perspectives. We must:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                              <li>Invest in Pan-African media networks (e.g., Africa News Agency, Afrocentric digital platforms)</li>
                              <li>Regulate foreign media monopolies to ensure balanced representation</li>
                              <li>Promote journalistic training and investigative reporting rooted in African realities</li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">4. Cultural Sovereignty: Reclaiming Our Heritage</h5>
                            <p className="text-gray-600 leading-relaxed mb-2">
                              From repatriating stolen artifacts (only 10% of Africa's cultural heritage remains on the continent) to resisting cultural imperialism, we must:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                              <li>Revitalize indigenous languages (over 1,000 African languages are endangered – UNESCO)</li>
                              <li>Support Afrocentric education and creative industries (Nollywood, Afrobeats, and African literature as global soft power tools)</li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">5. Scientific Sovereignty: Innovation on Our Terms</h5>
                            <p className="text-gray-600 leading-relaxed mb-2">
                              Africa contributes less than 1% of global research output (World Bank), yet holds untapped potential. Solutions include:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                              <li>Increasing R&D investment (currently below 0.5% of GDP in most African nations, vs. 2.5%+ in developed countries)</li>
                              <li>Establishing African-led research hubs in AI, renewable energy, and medicine</li>
                              <li>Ending brain drain by creating competitive opportunities for African scientists and innovators</li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">6. Philosophical Sovereignty: Decolonizing African Thought</h5>
                            <p className="text-gray-600 leading-relaxed mb-2">
                              The dominance of Western epistemological frameworks continues to shape African policies and mindsets. We must:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                              <li>Promote endogenous knowledge systems (Ubuntu, Negritude, African feminist thought)</li>
                              <li>Decolonize education curricula to reflect Africa's historical and philosophical contributions</li>
                              <li>Foster critical thinking that aligns with Africa's socio-economic realities</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Read More/Show Less Button */}
                <button
                  onClick={() => setIsWhatWeAreExpanded(!isWhatWeAreExpanded)}
                  className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {isWhatWeAreExpanded ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Strategic Role Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Strategic Role</h2>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  The Africa Economic Forum is designed as a permanent strategic platform — not a one-off event. Its role is to align African sovereign priorities with global capital, policy frameworks, and execution capacity in a structured and continuous manner.
                </p>

                <p>
                  Through sector-specific forums, high-level deal rooms, and year-round engagement, the AEF enables governments, investors, and institutions to move beyond dialogue into concrete partnerships, co-investment structures, and policy alignment.
                </p>

                <p>
                  The AEF operates as a bridge between strategy and execution — ensuring that political vision, private capital, and institutional capacity are brought into the same architecture, with Africa setting the agenda and defining the terms of cooperation.
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

        {/* The Concept: The Perpetual Forum & The African Table */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Concept: The Perpetual Forum & The African Table
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                A new approach to economic diplomacy: continuous,strategic, and sovereign.
              </p>
            </div>

            {/* Intro Text */}
            <div className="max-w-5xl mx-auto mb-16">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Africa Economic Forum is not a gathering. It is an architecture. It operates as a <strong>perpetual, year-round platform</strong> designed to align African sovereign priorities with global capital flows, institutional frameworks, and execution capacity. This model redefines how Africa positions itself in the global economy—not as a destination for donor conferences, but as <strong>the convening authority setting the terms of engagement</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Three interconnected pillars define the AEF Model:
              </p>
            </div>

            {/* Three Core  Pillars */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* 1. The Perpetual Forum */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md border-b-4 border-blue-900">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-calendar-event-line text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">1. The Perpetual Forum</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Unlike episodic summits, the AEF runs a continuous cycle of sector-specific forums, ensuring strategic continuity and measurable outcomes.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Year-Round Engagement:</strong> Sustained dialogue between African governments, global investors, and institutions.</li>
                  <li><strong>Sector-Driven Precision:</strong> From critical minerals to infrastructure, each forum zeroes in on concrete deal structures and investment vehicles.</li>
                  <li><strong>Africa Sets the Clock:</strong> The Forum adapts to African policy cycles, resource extraction timelines, and political priorities—not external agendas.</li>
                </ul>
              </div>

              {/* 2. The African Table */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg shadow-md border-b-4 border-teal-900">
                <div className="w-16 h-16 bg-teal-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-team-line text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">2. The African Table</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sovereignty begins with control of the agenda. The African Table means Africa invites, Africa convenes, and Africa defines the terms of cooperation.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Agenda Sovereignty:</strong> Topics reflect African priorities, not external frameworks or geopolitical impositions.</li>
                  <li><strong>Strategic Matchmaking:</strong> Investors are curated based on alignment with long-term African development, not short-term extraction.</li>
                  <li><strong>Deal-Oriented Diplomacy:</strong> Every panel, every roundtable, every closed-door session is structured to move from dialogue to signed commitments.</li>
                </ul>
              </div>

              {/* 3. Host Country Partnership */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-md border-b-4 border-purple-900">
                <div className="w-16 h-16 bg-purple-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-government-line text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">3. Host Country Partnership</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Each sector forum is hosted by an African nation that has committed to leading the agenda in that domain, ensuring the highest level of government engagement and deal-making potential.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>National Champions:</strong> The forum host demonstrates sovereign ownership of the sector's strategic vision.</li>
                  <li><strong>Infrastructure for Execution:</strong> Forums integrate national project pipelines, regulatory frameworks, and investment climate reforms.</li>
                  <li><strong>Permanent Regional Hub:</strong> Host nations become nodes of expertise and investment, sustaining sectoral networks beyond the event.</li>
                </ul>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="max-w-5xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md border-l-4 border-blue-900">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                For decades, Africa has been the subject of conferences designed elsewhere. The AEF reverses this dynamic. It positions Africa as a <strong>global convening power</strong>, not a beneficiary of external goodwill. It is where African heads of state, finance ministers, and sovereign wealth funds align their strategies with the world's leading investors, development institutions, and industrial actors.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold text-blue-900">
                The Perpetual Forum ensures continuity. The African Table ensures sovereignty. The Host Country Partnership ensures execution.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                This is how Africa designs its future, sector by sector, deal by deal.
              </p>
            </div>
          </div>
        </section>

        {/* A Message from the Chairman */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">A Message from the Chairman</h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left column - Text */}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  The world is recalibrating. The old paradigms are shifting, and in this new geopolitical and economic landscape, Africa emerges not as a spectator but as a definitive arena of opportunity. The Africa Economic Forum is the platform where this new reality is forged.
                </p>

                <p>
                  We are The African Table. It is Africa that extends the invitation, sets the agenda, and defines the terms of a truly strategic, win-win cooperation. Our model is deliberate: a perpetual, year-long journey across the continent, diving deep into each critical sector.
                </p>

                <p>
                  In this new era of global realignments, our mission is clear: to connect global capital with Africa's immense opportunities, to build alliances that matter, and to unlock strategic value through structured cooperation.
                </p>

                <p>
                  This is not just another forum. This is where the future of Africa is designed — deal by deal. I invite you to join us at The African Table.
                </p>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-xl font-semibold text-gray-900">— Dr. Billy Issa</p>
                  <p className="text-gray-600 italic">Visionary Founder & Host</p>
                </div>
              </div>

              {/* Right column - Chairman Photo */}
              <div className="relative">
                <img
                  src="/images/billy-issa.jpg"
                  alt="Dr. Billy Issa - Chairman"
                  className="w-full h-[500px] object-cover object-top rounded-lg shadow-xl"
                />
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
                    <p className="text-sm text-blue-600 mb-3">Visionary Founder & Host</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Visionary leader and architect of the Africa Economic Forum, dedicated to repositioning Africa as a strategic global partner and driving sustainable economic transformation across the continent through innovative partnerships and sovereign development initiatives.
                    </p>

                    {/* Expandable content */}
                    {isFounderBioExpanded && (
                      <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                        <h5 className="text-lg font-bold text-gray-900">THE FOUNDER</h5>
                        <h6 className="text-base font-semibold text-gray-900">Dr. Billy Issa</h6>
                        <p className="text-sm text-blue-600 italic">Founder, Africa Economic Forum (AEF)</p>

                        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                          <p>
                            Dr. Billy Issa is the Founder of the Africa Economic Forum (AEF), a premier platform convening governments, investors, thought leaders, and global institutions to shape Africa's role in the new global order. With a vision to position Africa at the center of international dialogue, Dr. Issa is redefining economic cooperation models through strategic partnerships that advance investments, alliances, and innovation across the continent.
                          </p>

                          <p>
                            A thinker and leader on transformational leadership, diplomacy, and economic development, Dr. Issa has dedicated his career to bridging Africa with the world. His work spans initiatives that foster win-win cooperation, inclusive growth, and sustainable transformation, making the AEF not only an event but a movement shaping Africa's agenda.
                          </p>

                          <p>
                            Passionate about empowering the next generation, Dr. Issa also champions youth leadership, entrepreneurship, and the integration of Africa into global value chains. His efforts bring together heads of state, ministers, investors, philanthropists, and innovators to mobilize capital and ideas for Africa's prosperity.
                          </p>

                          <p>
                            Recognized for his ability to convene high-level leaders and inspire collective action, Dr. Issa continues to position the Africa Economic Forum as a global diplomatic and investment platform, where Africa's voice and vision are amplified on the world stage.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => setIsFounderBioExpanded(!isFounderBioExpanded)}
                      className="mt-4 w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      {isFounderBioExpanded ? 'Show Less' : '👉 Discover more about Billy Issa'}
                    </button>
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
                {/* H.E. John Agyekum Kufuor */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/john-agyekum-kufuor.jpeg"
                    alt="H.E. John Agyekum Kufuor"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">H.E. John Agyekum Kufuor</h4>
                    <p className="text-sm text-blue-600 mb-3">Former President of Ghana (2001–2009)</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Distinguished statesman and advocate for democratic governance and economic reform in Africa. Widely recognized for leading Ghana's peaceful democratic consolidation and advancing macroeconomic stability, regional integration, and private-sector–led development. Continues to serve on international advisory boards and foundations, promoting good governance, leadership, and sustainable development across Africa and globally.
                    </p>
                  </div>
                </div>

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
                    src="/images/amina-toure-new.png"
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
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Walid Loukil</h4>
                    <p className="text-sm text-blue-600 mb-3">Industrial & Infrastructure Investment Leader</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Senior executive and business leader with extensive experience in diversified industrial, infrastructure, and engineering sectors. Actively involved in regional and international expansion across Africa and Europe, supporting large-scale projects in industry, technology, and trade. Brings strategic leadership in cross-border investment, industrial development, and private sector growth.
                    </p>
                  </div>
                </div>

                {/* Tasen Metsegharun */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/Oritsesantasen Metseagharun.jpeg"
                    alt="Tasen Metsegharun"
                    className="w-full h-64 object-contain object-center bg-gray-100"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Tasen Metsegharun</h4>
                    <p className="text-sm text-blue-600 mb-3">International Trade & Economic Intelligence Specialist</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      International trade analyst and economic intelligence professional with a focus on data-driven trade mapping and market opportunity analysis. Experienced in leveraging advanced analytics tools to support sustainable investment strategies and the development of international trade corridors. Actively engaged in strengthening economic linkages between Africa and global markets through evidence-based insights and strategic intelligence.
                    </p>
                  </div>
                </div>

                {/* Jorge Sebastião */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/Jorge Sebastiao.jpeg"
                    alt="Jorge Sebastião"
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Jorge Sebastião</h4>
                    <p className="text-sm text-blue-600 mb-3">Technology, Innovation & Digital Transformation Expert</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      International technology leader, author, and mentor specializing in blockchain, artificial intelligence, cybersecurity, Web3, and digital transformation. With over three decades of experience across telecommunications, finance, public sector, and emerging technologies, he supports innovation-driven growth and startup acceleration. Recognized speaker and advisor on digital infrastructure, cybersecurity, and next-generation technology ecosystems.
                    </p>
                  </div>
                </div>

                {/* Jean-Bosco Bukuru Senani */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/Jean-Bosco Bakuru Senani.jpeg"
                    alt="Jean-Bosco Bukuru Senani"
                    className="w-full h-64 object-contain object-center bg-gray-100"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Jean-Bosco Bukuru Senani</h4>
                    <p className="text-sm text-blue-600 mb-3">International Investment & Trade Advisor</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      International business executive and board advisor specializing in cross-border investment, trade facilitation, and strategic partnerships across Africa, Europe, and North America. Experienced in infrastructure, ICT, agriculture, commodities, and investment promotion. Works closely with governments, investors, and enterprises to structure partnerships and attract capital into high-impact African markets.
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
