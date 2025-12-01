
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Meetings() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

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

  const forumsData = [
    {
      id: 1,
      title: "Africa Agriculture & Food Forum (AAFF)",
      description: "Transforming African agriculture from subsistence farming to a modern, productive, and sustainable system.",
      image: "https://readdy.ai/api/search-image?query=Modern%20African%20farmers%20using%20advanced%20agricultural%20technology%20in%20vast%20green%20farmlands%20with%20irrigation%20systems%2C%20tractors%2C%20and%20sustainable%20farming%20practices%2C%20bright%20sunny%20day%2C%20professional%20photography%20style&width=400&height=250&seq=agri1&orientation=landscape",
      overview: "The Agriculture and Food Security Forum addresses one of Africa's most critical development challenges and opportunities. Despite possessing over 60% of the world's uncultivated arable land, Africa continues to face persistent food insecurity and agricultural productivity issues. This forum serves as a dedicated platform to transform African agriculture from subsistence farming to a modern, productive, and sustainable system that can ensure food security for the continent's growing population while creating economic prosperity. The forum aligns with the African Union's Comprehensive Africa Agriculture Development Programme (CAADP) and focuses on promoting agricultural innovation, sustainable practices, value chain development, and investment in agribusiness.",
      keyAreas: [
        "Modernizing farming practices through adoption of advanced technologies, precision agriculture, and climate-resilient techniques",
        "Developing integrated value chains that connect smallholder farmers to markets, processing facilities, and distribution networks",
        "Promoting sustainable land management and water conservation practices to preserve Africa's agricultural resources",
        "Facilitating investment in agricultural infrastructure, processing facilities, and storage capabilities to reduce post-harvest losses",
        "Advancing policy reforms that support agricultural development, cross-border trade, and private sector investment"
      ]
    },
    {
      id: 2,
      title: "Africa Energy & Infrastructure Forum",
      description: "Mobilizing capital and expertise to build world-class infrastructure that connects Africa and drives economic growth.",
      image: "https://readdy.ai/api/search-image?query=Modern%20African%20infrastructure%20development%20with%20highways%2C%20bridges%2C%20and%20construction%20projects%2C%20heavy%20machinery%20and%20engineering%20equipment%2C%20professional%20construction%20workers%20in%20safety%20gear%2C%20contemporary%20African%20cityscape&width=400&height=250&seq=infra1&orientation=landscape",
      overview: "The Infrastructure Investment Forum is designed to address Africa's massive infrastructure deficit, which is estimated to require over $130 billion annually. This forum brings together governments, development finance institutions, private investors, and infrastructure companies to unlock the capital needed for transformational projects across the continent. The forum focuses on transportation networks, energy systems, telecommunications infrastructure, and urban development projects that will connect African markets, reduce trade costs, and improve quality of life for millions of people.",
      keyAreas: [
        "Transportation infrastructure including highways, railways, ports, and airports to enhance regional connectivity",
        "Energy infrastructure development focusing on renewable energy, grid modernization, and rural electrification",
        "Digital infrastructure expansion including fiber optic networks, data centers, and telecommunications systems",
        "Water and sanitation infrastructure to support urban growth and improve public health outcomes",
        "Public-private partnership models that leverage both public resources and private sector efficiency"
      ]
    },
    {
      id: 3,
      title: "Africa Digital Economy & Tech Forum (ADETF)",
      description: "Accelerating Africa's digital revolution through technology adoption, innovation, and digital skills development.",
      image: "https://readdy.ai/api/search-image?query=African%20technology%20professionals%20working%20with%20computers%20and%20digital%20devices%20in%20modern%20tech%20office%2C%20coding%20and%20software%20development%2C%20diverse%20African%20tech%20workers%2C%20contemporary%20workspace%20with%20multiple%20screens&width=400&height=250&seq=digital1&orientation=landscape",
      overview: "The Digital Transformation Summit addresses Africa's opportunity to leapfrog traditional development stages through digital innovation. With over 650 million mobile phone users and rapidly expanding internet connectivity, Africa is positioned to become a global leader in digital solutions. This forum brings together technology companies, government officials, entrepreneurs, and investors to accelerate digital adoption across sectors including fintech, e-commerce, digital government services, and online education.",
      keyAreas: [
        "Fintech innovation and digital payment systems to increase financial inclusion across the continent",
        "E-commerce platforms and digital marketplaces that connect African businesses to global markets",
        "Digital government services that improve public service delivery and reduce bureaucratic barriers",
        "EdTech solutions that expand access to quality education and digital skills training",
        "Cybersecurity frameworks that protect digital infrastructure and build trust in digital systems"
      ]
    },
    {
      id: 4,
      title: "Africa Mining & Minerals Forum (AMMF)",
      description: "The Africa Mining & Minerals Forum (AMMF) is the continental flagship forum dedicated to mineral sovereignty, strategic cooperation, and the valorization of Africa’s natural resources",
      image: "/images/Africa Mining.jpg",
      overview: "Organized under the aegis of the Africa Economic Forum, this sectoral forum is part of the platform’s broader mission: to build a pan-African economic diplomacy focused on investments, equitable partnerships, and the structural transformation of African economies.Africa holds over 30% of the world’s mineral reserves, yet continues to export mostly unprocessed raw materials. The AMMF aims to reverse this trend by promoting:",
      keyAreas: [
        "Local transformation of resources",
        "Strengthening of regional value chains",
        "And the rise of an integrated, sustainable, and sovereign African extractive ecosystem.",
        "Designed as a permanent platform for sectoral collaboration, the AMMF brings together:",
        "African governments and institutions responsible for mining policies",
        "Investors and financial institutions"
      ]
    },
    {
      id: 5,
      title: "Africa Women Forum (AWF)",
      description: "The Africa Women Forum (AWF) is the flagship platform dedicated to the economic, political, and social empowerment of African women—a critical lever for building a strong, sovereign, and inclusive Africa.",
      image: "/images/africa-women.jpg",
      overview: "This forum brings together women leaders, entrepreneurs, policymakers, innovators, and activists from public, private, civil society, and international sectors to drive strategic partnerships, strengthen capacities, and accelerate investments in projects led by and for women. The AWF places female leadership at the center of governance, innovation, and sustainable development, with a hands-on approach focused on deals, practical outcomes, and transcontinental cooperation.",
      keyAreas: [
        "Promote economic and political leadership of African women at all levels.",
        "Facilitate access to financing for women entrepreneurs and innovators.",
        "Encourage innovative public-private partnerships supporting gender equality.",
        "Support the creation and expansion of women-led businesses.",
        "Highlight inspiring female role models and promote intergenerational knowledge transfer."
      ]
    },
    {
      id: 6,
      title: "Africa Digital Economy and Technology Forum",
      description: "Strengthening financial systems, expanding access to capital, and promoting financial inclusion across Africa.",
      image: "https://readdy.ai/api/search-image?query=African%20banking%20professionals%20and%20financial%20technology%20experts%20in%20modern%20banking%20environment%2C%20mobile%20banking%20and%20digital%20financial%20services%2C%20diverse%20African%20finance%20workers%20with%20computers%20and%20financial%20data&width=400&height=250&seq=finance1&orientation=landscape",
      overview: "The Financial Services Summit addresses the critical role of financial systems in supporting Africa's economic development. With over 400 million adults still lacking access to formal financial services, there is enormous potential to expand financial inclusion through innovative solutions. This forum brings together central bank governors, commercial banks, fintech companies, and development finance institutions to strengthen financial systems and expand access to capital.",
      keyAreas: [
        "Financial inclusion initiatives that bring banking services to underserved populations",
        "Capital market development to mobilize domestic savings for long-term investment",
        "Fintech innovation including mobile money, digital lending, and blockchain applications",
        "Regional financial integration to support cross-border trade and investment",
        "Risk management and regulatory frameworks that ensure financial stability while promoting innovation"
      ]
    },
    {
      id: 7,
      title: "Africa Healthcare & Pharmaceuticals Forum",
      description: "Transforming healthcare delivery through innovation, technology, and sustainable health system strengthening.",
      image: "https://readdy.ai/api/search-image?query=African%20healthcare%20professionals%20using%20modern%20medical%20technology%2C%20doctors%20and%20nurses%20in%20contemporary%20hospital%20setting%2C%20medical%20equipment%20and%20telemedicine%20systems%2C%20diverse%20African%20medical%20staff&width=400&height=250&seq=health1&orientation=landscape",
      overview: "The Healthcare Innovation Forum addresses Africa's healthcare challenges through innovation and technology. With a growing population and increasing burden of both communicable and non-communicable diseases, Africa needs innovative solutions to improve health outcomes while building resilient health systems. This forum brings together health ministers, pharmaceutical companies, medical technology firms, and healthcare investors to accelerate the adoption of innovative healthcare solutions.",
      keyAreas: [
        "Telemedicine and digital health solutions that expand access to healthcare in remote areas",
        "Local pharmaceutical manufacturing to reduce dependence on imported medicines",
        "Health technology innovation including medical devices designed for African contexts",
        "Health system strengthening through improved infrastructure, training, and management systems",
        "Public-private partnerships that leverage private sector innovation to improve public health outcomes"
      ]
    },
    {
      id: 8,
      title: "Africa Education Forum",
      description: "The Africa Digital Economy & Tech Forum (ADETF) is the flagship platform dedicated to Africa’s strategic digital transformation, bringing together governments, tech giants, startups, investment funds, researchers, and regulatory institutions to catalyze local innovation, digital sovereignty, and inclusive connectivity.",
      image: "https://readdy.ai/api/search-image?query=African%20students%20and%20teachers%20using%20modern%20educational%20technology%2C%20digital%20learning%20platforms%20in%20contemporary%20African%20classroom%2C%20diverse%20students%20with%20computers%20and%20tablets%2C%20modern%20educational%20environment&width=400&height=250&seq=education1&orientation=landscape",
      overview: "The Education & Skills Development Conference focuses on building Africa's human capital to support economic transformation. With over 60% of Africa's population under 25, investing in education and skills development is critical for harnessing the demographic dividend. This forum brings together education ministers, universities, vocational training institutes, and EdTech companies to reform education systems and align skills development with economic opportunities.",
      keyAreas: [
        "STEM education and digital literacy programs to prepare students for the digital economy",
        "Vocational and technical education that provides practical skills for emerging industries",
        "Higher education partnerships that build research capacity and innovation ecosystems",
        "Teacher training and professional development to improve education quality",
        "EdTech solutions that expand access to quality education and personalized learning"
      ]
    },
    {
      id: 9,
      title: "Africa Tourism & Trade Forum (ATTF)",
      description: "Positioning Africa as a premier global destination through sustainable tourism development and hospitality excellence.",
      image: "https://readdy.ai/api/search-image?query=African%20tourism%20destinations%20with%20luxury%20safari%20lodges%2C%20cultural%20heritage%20sites%2C%20and%20eco-tourism%20facilities%2C%20tourists%20enjoying%20African%20wildlife%20and%20landscapes%2C%20contemporary%20hospitality%20services&width=400&height=250&seq=tourism1&orientation=landscape",
      overview: "The Tourism & Hospitality Forum focuses on unlocking Africa's vast tourism potential while ensuring sustainable development. Africa's rich cultural heritage, diverse wildlife, and stunning landscapes position the continent as a premier global destination. This forum brings together tourism ministers, hotel chains, tour operators, and conservation organizations to develop sustainable tourism strategies that create jobs, preserve natural resources, and showcase Africa's beauty to the world.",
      keyAreas: [
        "Sustainable tourism development that balances economic growth with environmental conservation",
        "Tourism infrastructure including airports, hotels, and transportation networks",
        "Cultural tourism that celebrates Africa's rich heritage while benefiting local communities",
        "Eco-tourism and wildlife conservation programs that protect natural resources",
        "Tourism marketing and branding strategies that position Africa as a must-visit destination"
      ]
    },
    {
      id: 10,
      title: "Africa Youth Forum (AYF)",
      description: "The Africa Youth Forum (AYF) is the premier platform uniting African youth, a key driver of innovation, transformation, and the continent’s sovereignty.",
      image: "/images/africa-youth.jpg",
      overview: "The forum aims to connect young leaders, entrepreneurs, innovators, activists, and decision-makers around concrete goals: accelerating access to financing, fostering strategic partnerships, and promoting strong political and economic engagement of youth in Africa’s development. AYF operates under a dynamic vision where youth are no longer mere spectators, but key actors in Africa’s major economic and diplomatic decisions.",
      keyAreas: [
        "Continental economic integration through the African Continental Free Trade Area and monetary union",
        "Resource sovereignty including value addition, local processing, and strategic resource management",
        "Technology transfer and innovation ecosystems that reduce dependence on imported solutions",
        "South-South cooperation and strategic partnerships with emerging economies",
        "Institutional capacity building for effective economic governance and policy implementation"
      ]
    }
  ];

  const toggleCard = (cardId: number) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleSignIn = () => {
    setShowSignInModal(true);
    setShowCreateAccount(false);
  };

  const handleSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    if (email && password) {
      alert('Sign in successful! Welcome back.');
      setShowSignInModal(false);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleCreateAccountSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      alert('Account created successfully! Welcome to Africa Economic Forum.');
      setShowSignInModal(false);
      setShowCreateAccount(false);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const switchToCreateAccount = () => {
    setShowCreateAccount(true);
  };

  const switchToSignIn = () => {
    setShowCreateAccount(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderExpandedContent = (forum: any) => {
    return (
      <div className="mt-6 space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Overview</h4>
          <p className="text-gray-700 leading-relaxed">{forum.overview}</p>
        </div>
        
        {forum.objectives && (
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Forum Objectives</h4>
            <ul className="space-y-2">
              {forum.objectives.map((objective: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {forum.keyAreas && (
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Focus Areas</h4>
            <ul className="space-y-2">
              {forum.keyAreas.map((area: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span className="text-gray-700">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {forum.pillars && (
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Strategic Pillars</h4>
            <div className="space-y-4">
              {forum.pillars.map((pillar: any, index: number) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">{index + 1}. {pillar.title}</h5>
                  <ul className="space-y-1">
                    {pillar.items.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-teal-600 mr-2 text-sm">•</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://static.readdy.ai/image/433d1257c1dbc1f8bb2f3f1c418f6689/0727857f21d196505f8ef18cfc1cd897.png" 
                  alt="Africa Economic Forum" 
                  className="h-10 w-auto" 
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link to="/initiatives" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Initiatives
              </Link>
              <Link to="/stakeholders" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Stakeholders
              </Link>
              <Link to="/agenda" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Agenda
              </Link>
              <Link to="/publications" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Publications
              </Link>
              <Link to="/meetings" className="text-teal-600 px-3 py-2 text-sm font-medium border-b-2 border-teal-600">
                Meetings
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
            </nav>
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
                  className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 whitespace-nowrap cursor-pointer"
                >
                  Sign In
                </Link>
              )}
            </div>
            <button 
              className="md:hidden p-2 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">
                About
              </Link>
              <Link to="/initiatives" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">
                Initiatives
              </Link>
              <Link to="/stakeholders" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">
                Stakeholders
              </Link>
              <Link to="/agenda" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">
                Agenda
              </Link>
              <Link to="/publications" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">
                Publications
              </Link>
              <Link to="/meetings" className="block px-3 py-2 text-base font-medium text-teal-600 bg-teal-50 rounded-md">
                Meetings
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">
                Contact
              </Link>
              <div className="px-3 py-2">
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 px-3 py-2">
                      {user.user_metadata?.avatar_url ? (
                        <img
                          src={user.user_metadata.avatar_url}
                          alt="Profile"
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 text-xs font-medium">
                            {getInitials(user.user_metadata?.full_name || user.email?.charAt(0) || 'U')}
                          </span>
                        </div>
                      )}
                      <span className="text-gray-700 font-medium">{user.user_metadata?.full_name || 'User'}</span>
                    </div>
                    <button 
                      onClick={() => {
                        handleViewProfile();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium text-center"
                    >
                      View Profile
                    </button>
                    <button 
                      onClick={() => {
                        handleSignOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 font-medium whitespace-nowrap cursor-pointer"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link 
                    to="/signin"
                    className="w-full bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer block text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=Large%20international%20conference%20hall%20filled%20with%20African%20business%20leaders%20and%20delegates%2C%20professional%20summit%20atmosphere%20with%20modern%20staging%20and%20lighting&width=1920&height=800&seq=meetings-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Specialized Forums</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Sector-specific gatherings that drive targeted solutions and create tangible outcomes for Africa's economic transformation.</p>
        </div>
      </section>

      {/* Forum Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Specialized Forums</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Each forum is designed to address specific challenges and opportunities, bringing together the right stakeholders to create actionable solutions.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {forumsData.map((forum) => (
              <div key={forum.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={forum.image} 
                  alt={forum.title} 
                  className="w-full h-64 object-cover object-top" 
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{forum.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{forum.description}</p>
                  
                  {expandedCard === forum.id && renderExpandedContent(forum)}
                  
                  <button 
                    onClick={() => toggleCard(forum.id)}
                    className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer flex items-center space-x-2"
                  >
                    <span>{expandedCard === forum.id ? 'Show Less' : 'Read More'}</span>
                    <i className={`ri-arrow-${expandedCard === forum.id ? 'up' : 'down'}-s-line`}></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Conversation</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Be part of Africa's transformation. Connect with leaders, share insights, and contribute to solutions that will shape the continent's future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handleSignIn}
              className="bg-white text-blue-900 px-8 py-4 rounded-md hover:bg-gray-100 font-semibold whitespace-nowrap cursor-pointer"
            >
              Register for Forums
            </button>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-blue-900 font-semibold whitespace-nowrap cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

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
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
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
                        <input 
                          type="checkbox" 
                          name="remember_me" 
                          className="cursor-pointer"
                        />
                        <span className="text-sm text-gray-600">Remember me</span>
                      </label>
                      <button 
                        type="button"
                        className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
                      >
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
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input 
                          type="text" 
                          name="last_name" 
                          required 
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          placeholder="Last name"
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
                  {user ? (
                    <button onClick={handleSignOut} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 whitespace-nowrap cursor-pointer">
                      Logout
                    </button>
                  ) : (
                    <Link to="/signin" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                      Sign in
                    </Link>
                  )}
                </li>
                <li><Link to="/partners" className="text-gray-300 hover:text-white cursor-pointer">Partner with us</Link></li>
                <li><Link to="/join" className="text-gray-300 hover:text-white cursor-pointer">Become a member</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white cursor-pointer">Sign up for our press releases</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white cursor-pointer">Subscribe to our newsletters</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white cursor-pointer">Contact us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick links</h3>
              <ul className="space-y-3 mb-8">
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Sustainability at the Forum</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-white cursor-pointer">Careers</Link></li>
              </ul>
              <div>
                <h4 className="font-semibold mb-4">Language editions</h4>
                <div className="flex space-x-2">
                  <Link to="/" className="text-gray-300 hover:text-white cursor-pointer">PT</Link>
                  <span className="text-gray-500">•</span>
                  <Link to="/" className="text-gray-300 hover:text-white cursor-pointer">EN</Link>
                  <span className="text-gray-500">•</span>
                  <Link to="/" className="text-gray-300 hover:text-white cursor-pointer">ES</Link>
                  <span className="text-gray-500">•</span>
                  <Link to="/" className="text-gray-300 hover:text-white cursor-pointer">FR</Link>
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
                <Link to="/privacy" className="hover:text-white cursor-pointer">Privacy Policy &amp; Terms of Service</Link>
               
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
