import React, { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [showSignInModal, setShowSignInModal] = useState(false);

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

  const galleryImages = [
    {
      id: 1,
      title: 'Africa Economic Summit 2024',
      category: 'summits',
      date: 'March 2024',
      location: 'Accra, Ghana',
      description: 'African leaders gathered to discuss sustainable economic development strategies.',
      image: 'https://readdy.ai/api/search-image?query=African%20economic%20summit%20with%20heads%20of%20state%20and%20business%20leaders%20in%20large%20conference%20hall%2C%20professional%20gathering%20with%20African%20flags%20and%20modern%20staging&width=800&height=600&seq=gallery-summit-1&orientation=landscape',
      photographer: 'AEF Media Team'
    },
    {
      id: 2,
      title: 'Technology Innovation Forum',
      category: 'innovation',
      date: 'September 2024',
      location: 'Lagos, Nigeria',
      description: 'Young African entrepreneurs presenting innovative technological solutions.',
      image: 'https://readdy.ai/api/search-image?query=African%20tech%20innovation%20forum%20with%20young%20entrepreneurs%20presenting%20digital%20solutions%2C%20modern%20exhibition%20hall%20with%20technology%20displays%20and%20startup%20booths&width=800&height=600&seq=gallery-tech-1&orientation=landscape',
      photographer: 'Tech Africa Photography'
    },
    {
      id: 3,
      title: 'Partnership Signing Ceremony',
      category: 'partnerships',
      date: 'June 2024',
      location: 'Johannesburg, South Africa',
      description: 'Historic moment of signing bilateral economic cooperation agreements.',
      image: 'https://readdy.ai/api/search-image?query=Official%20partnership%20signing%20ceremony%20between%20African%20and%20international%20leaders%2C%20formal%20diplomatic%20setting%20with%20handshakes%20and%20document%20signing&width=800&height=600&seq=gallery-partnership-1&orientation=landscape',
      photographer: 'Diplomatic Press'
    },
    {
      id: 4,
      title: 'Sustainability Conference',
      category: 'sustainability',
      date: 'November 2024',
      location: 'Nairobi, Kenya',
      description: 'Experts discussing sustainable solutions for African development.',
      image: 'https://readdy.ai/api/search-image?query=African%20sustainability%20conference%20with%20environmental%20experts%20and%20green%20technology%20displays%2C%20eco-friendly%20venue%20with%20renewable%20energy%20themes&width=800&height=600&seq=gallery-sustainability-1&orientation=landscape',
      photographer: 'Green Africa Media'
    },
    {
      id: 5,
      title: 'Business Leaders Meeting',
      category: 'business',
      date: 'August 2024',
      location: 'Cairo, Egypt',
      description: 'CEOs and African entrepreneurs sharing experiences and growth strategies.',
      image: 'https://readdy.ai/api/search-image?query=African%20business%20leaders%20networking%20event%2C%20professional%20executives%20in%20elegant%20business%20attire%20discussing%20strategies%20in%20modern%20conference%20venue&width=800&height=600&seq=gallery-business-1&orientation=landscape',
      photographer: 'Business Africa'
    },
    {
      id: 6,
      title: 'Youth Capacity Building Program',
      category: 'youth',
      date: 'May 2024',
      location: 'Kigali, Rwanda',
      description: 'Young African leaders participating in leadership development workshops.',
      image: 'https://readdy.ai/api/search-image?query=African%20youth%20leadership%20training%20program%2C%20young%20professionals%20in%20workshop%20setting%20learning%20business%20skills%20and%20leadership%20development&width=800&height=600&seq=gallery-youth-1&orientation=landscape',
      photographer: 'Youth Africa Initiative'
    },
    {
      id: 7,
      title: 'African Products Exhibition',
      category: 'trade',
      date: 'October 2024',
      location: 'Casablanca, Morocco',
      description: 'Trade fair showcasing products and services from across Africa.',
      image: 'https://readdy.ai/api/search-image?query=African%20trade%20exhibition%20with%20diverse%20products%20and%20services%20from%20across%20the%20continent%2C%20colorful%20market%20displays%20and%20business%20networking&width=800&height=600&seq=gallery-trade-1&orientation=landscape',
      photographer: 'Trade Africa Media'
    },
    {
      id: 8,
      title: 'Women Leaders Conference',
      category: 'women',
      date: 'March 2024',
      location: 'Addis Ababa, Ethiopia',
      description: 'African women leaders discussing economic empowerment and gender equality.',
      image: 'https://readdy.ai/api/search-image?query=African%20women%20leaders%20conference%2C%20professional%20female%20executives%20and%20entrepreneurs%20in%20panel%20discussion%20about%20economic%20empowerment%20and%20gender%20equality&width=800&height=600&seq=gallery-women-1&orientation=landscape',
      photographer: 'Women in Africa'
    },
    {
      id: 9,
      title: 'Renewable Energy Summit',
      category: 'energy',
      date: 'July 2024',
      location: 'Dakar, Senegal',
      description: 'Energy experts discussing the future of renewable energy in Africa.',
      image: 'https://readdy.ai/api/search-image?query=African%20renewable%20energy%20summit%20with%20solar%20panels%20and%20wind%20turbine%20displays%2C%20clean%20energy%20experts%20presenting%20sustainable%20solutions&width=800&height=600&seq=gallery-energy-1&orientation=landscape',
      photographer: 'Clean Energy Africa'
    },
    {
      id: 10,
      title: 'Investment Forum',
      category: 'investment',
      date: 'December 2024',
      location: 'Lusaka, Zambia',
      description: 'International investors exploring investment opportunities in Africa.',
      image: 'https://readdy.ai/api/search-image?query=African%20investment%20forum%20with%20international%20investors%20and%20African%20entrepreneurs%2C%20professional%20networking%20event%20with%20financial%20presentations%20and%20deal-making&width=800&height=600&seq=gallery-investment-1&orientation=landscape',
      photographer: 'Investment Africa'
    },
    {
      id: 11,
      title: 'African Cultural Celebration',
      category: 'culture',
      date: 'September 2024',
      location: 'Abuja, Nigeria',
      description: 'Celebration of rich African cultural diversity during forum event.',
      image: 'https://readdy.ai/api/search-image?query=African%20cultural%20celebration%20with%20traditional%20music%2C%20dance%20and%20colorful%20traditional%20clothing%2C%20diverse%20African%20cultures%20represented%20in%20festive%20atmosphere&width=800&height=600&seq=gallery-culture-1&orientation=landscape',
      photographer: 'Cultural Heritage Africa'
    },
    {
      id: 12,
      title: 'Networking Session',
      category: 'networking',
      date: 'January 2024',
      location: 'Maputo, Mozambique',
      description: 'African professionals building networks of cooperation and strategic partnerships.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20networking%20session%20with%20African%20business%20professionals%2C%20elegant%20cocktail%20reception%20with%20meaningful%20conversations%20and%20partnership%20building&width=800&height=600&seq=gallery-networking-1&orientation=landscape',
      photographer: 'Network Africa'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'summits', name: 'Summits', count: galleryImages.filter(img => img.category === 'summits').length },
    { id: 'innovation', name: 'Innovation', count: galleryImages.filter(img => img.category === 'innovation').length },
    { id: 'partnerships', name: 'Partnerships', count: galleryImages.filter(img => img.category === 'partnerships').length },
    { id: 'business', name: 'Business', count: galleryImages.filter(img => img.category === 'business').length },
    { id: 'youth', name: 'Youth', count: galleryImages.filter(img => img.category === 'youth').length },
    { id: 'women', name: 'Women', count: galleryImages.filter(img => img.category === 'women').length }
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

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
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20photography%20gallery%20showcase%20with%20African%20economic%20forum%20events%2C%20elegant%20exhibition%20space%20with%20framed%20photographs%20of%20continental%20cooperation%20and%20development&width=1920&height=800&seq=gallery-hero&orientation=landscape')`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Historic moments, strategic partnerships and celebrations of African economic transformation captured through our lens.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                <div className="text-gray-600">Professional Photos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
                <div className="text-gray-600">Documented Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">25</div>
                <div className="text-gray-600">Countries Represented</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">100+</div>
                <div className="text-gray-600">Leaders Photographed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${selectedCategory === category.id
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-600 hover:text-blue-900 bg-white'
                    }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-64 object-cover object-top"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                        {image.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <i className="ri-map-pin-line mr-2"></i>
                      {image.location}
                    </div>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{image.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>📸 {image.photographer}</span>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collections</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our special collections that capture unique moments of African economic transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Collection%20of%20African%20heads%20of%20state%20at%20economic%20summit%2C%20formal%20diplomatic%20photography%20with%20multiple%20world%20leaders%20in%20elegant%20setting&width=400&height=300&seq=collection-leaders&orientation=landscape"
                  alt="African Leaders"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">African Leaders</h3>
                  <p className="text-gray-600 mb-4">
                    Historic moments with heads of state and business leaders shaping Africa's future.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">45 photos</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View Collection →
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=African%20innovation%20and%20technology%20showcase%2C%20young%20entrepreneurs%20presenting%20cutting-edge%20solutions%20and%20digital%20innovations&width=400&height=300&seq=collection-innovation&orientation=landscape"
                  alt="African Innovation"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">African Innovation</h3>
                  <p className="text-gray-600 mb-4">
                    Young entrepreneurs and their innovative solutions transforming the continent.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">32 photos</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View Collection →
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=African%20cultural%20celebration%20with%20traditional%20music%2C%20dance%20and%20diverse%20cultural%20expressions%20during%20economic%20forum%20events&width=400&height=300&seq=collection-culture&orientation=landscape"
                  alt="Culture and Tradition"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Culture and Tradition</h3>
                  <p className="text-gray-600 mb-4">
                    Celebrations of rich African cultural diversity during our events.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">28 photos</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View Collection →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="max-w-4xl w-full">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 cursor-pointer"
              >
                <i className="ri-close-line text-3xl"></i>
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-screen object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <div className="flex items-center mb-2">
                  <i className="ri-map-pin-line mr-2"></i>
                  <span className="mr-4">{selectedImage.location}</span>
                  <i className="ri-calendar-line mr-2"></i>
                  <span>{selectedImage.date}</span>
                </div>
                <p className="text-gray-200 mb-2">{selectedImage.description}</p>
                <p className="text-sm text-gray-300">📸 {selectedImage.photographer}</p>
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
