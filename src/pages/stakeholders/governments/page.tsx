
import { useState } from 'react';

export default function DiplomaticClubPage() {
  const [showMembershipForm, setShowMembershipForm] = useState(false);

  const handleMembershipSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Membership application submitted successfully! We will contact you within 48 hours.');
    setShowMembershipForm(false);
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
              <a href="/stakeholders" className="text-teal-600 px-3 py-2 text-sm font-medium border-b-2 border-teal-600">
                Stakeholders
              </a>
              <a href="/agenda" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Agenda
              </a>

              <a href="/meetings" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Meetings
              </a>
              <a href="/contact" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  AEF Diplomatic Club
                </h1>
                <h2 className="text-2xl text-blue-100">
                  Bridging Diplomacy and Development for Africa's Global Future
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                  The AEF Diplomatic Club is a high-level platform launched by the Africa Economic Forum to connect African states, diplomatic missions, multilateral institutions, international organizations, and global influencers committed to advancing Africa's strategic interests worldwide.
                </p>
                <p className="text-base text-blue-100 leading-relaxed">
                  Positioned at the intersection of diplomacy, development, and investment, the Club serves as a privileged space for ambassadors, envoys, policymakers, and multilateral partners to align efforts with Africa's long-term vision.
                </p>
                <button
                  onClick={() => setShowMembershipForm(true)}
                  className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 font-medium whitespace-nowrap cursor-pointer"
                >
                  Apply for Membership
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=African%20heads%20of%20state%20and%20diplomats%20in%20formal%20diplomatic%20meeting%2C%20flags%20of%20African%20nations%2C%20prestigious%20government%20building%20interior%20with%20ceremonial%20atmosphere&width=600&height=400&seq=governments&orientation=landscape"
                alt="AEF Diplomatic Club"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Diplomacy as a Development Engine */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Diplomacy as a Development Engine</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The AEF Diplomatic Club transforms diplomacy into a strategic engine for economic cooperation, sovereign positioning, and global engagement. It facilitates trusted dialogue, intelligence sharing, and the co-creation of diplomatic and development strategies that place African leadership at the center of global decision-making.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-discuss-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xl mb-2">Diplomatic Roundtables & Global Dialogue</h3>
                    <p className="text-gray-600">High-level diplomatic roundtables and Africa-World Dialogue Series bringing together governments, multilateral institutions, and strategic partners to align global cooperation with Africa's priorities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-shield-keyhole-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xl mb-2">Strategic Missions & Closed-Door Consultations</h3>
                    <p className="text-gray-600">Confidential briefings, closed-door consultations, and strategic missions to embassies, international organizations, and regional institutions to deepen cooperation and policy alignment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-global-line text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xl mb-2">Sovereign Image, Soft Power & Cultural Diplomacy</h3>
                    <p className="text-gray-600">Programs focused on strengthening Africa's global image, soft power, and sovereign branding through cultural diplomacy, strategic communication, and international positioning.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=African%20heads%20of%20state%20and%20diplomats%20in%20formal%20diplomatic%20meeting%2C%20flags%20of%20African%20nations%2C%20prestigious%20government%20building%20interior%20with%20ceremonial%20atmosphere&width=600&height=400&seq=governments&orientation=landscape"
                alt="Diplomacy as Development Engine"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join & Membership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Who Can Join */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Who Can Join</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <i className="ri-check-line text-green-600 text-xl mr-3 mt-1"></i>
                  <span>Embassies and Diplomatic Missions</span>
                </p>
                <p className="flex items-start">
                  <i className="ri-check-line text-green-600 text-xl mr-3 mt-1"></i>
                  <span>Ministries of Foreign Affairs</span>
                </p>
                <p className="flex items-start">
                  <i className="ri-check-line text-green-600 text-xl mr-3 mt-1"></i>
                  <span>Multilateral Organizations (UN, AU, EU, OIF, etc.)</span>
                </p>
                <p className="flex items-start">
                  <i className="ri-check-line text-green-600 text-xl mr-3 mt-1"></i>
                  <span>Cultural and Development Agencies</span>
                </p>
                <p className="flex items-start">
                  <i className="ri-check-line text-green-600 text-xl mr-3 mt-1"></i>
                  <span>Honorary Consuls</span>
                </p>
                <p className="flex items-start">
                  <i className="ri-check-line text-green-600 text-xl mr-3 mt-1"></i>
                  <span>Global Envoys</span>
                </p>
                <p className="flex items-start">
                  <i className="ri-check-line text-green-600 text-xl mr-3 mt-1"></i>
                  <span>Thought Leaders in Diplomacy and Strategy</span>
                </p>
              </div>
            </div>

            {/* Membership Benefits */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Membership Benefits</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <i className="ri-star-fill text-blue-600 text-xl mr-3 mt-1"></i>
                  <span>Private access to high-level Africa-focused briefings</span>
                </p>
                <p className="flex items-start">
                  <i className="ri-star-fill text-blue-600 text-xl mr-3 mt-1"></i>
                  <span>Inclusion in diplomatic delegations and global missions</span>
                </p>
                <p className="flex items-start">
                  <i className="ri-star-fill text-blue-600 text-xl mr-3 mt-1"></i>
                  <span>Strategic networking with ministers, investors, and global leaders</span>
                </p>
                <p className="flex items-start">
                  <i className="ri-star-fill text-blue-600 text-xl mr-3 mt-1"></i>
                  <span>Enhanced visibility and soft power positioning</span>
                </p>
                <p className="flex items-start">
                  <i className="ri-star-fill text-blue-600 text-xl mr-3 mt-1"></i>
                  <span>Exclusive invitations to AEF Diplomatic Forums and Summits</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
            <p className="text-gray-600 text-lg">Advantages of collaborating with the Africa Economic Forum</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <i className="ri-map-pin-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Local Expertise</h3>
              <p className="text-gray-600">Deep understanding of African markets, cultures, and business environments</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <i className="ri-team-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Network Access</h3>
              <p className="text-gray-600">Direct connections to African governments, businesses, and civil society</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <i className="ri-rocket-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Program Implementation</h3>
              <p className="text-gray-600">Efficient delivery of development programs and initiatives</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <i className="ri-bar-chart-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Impact Measurement</h3>
              <p className="text-gray-600">Comprehensive monitoring and evaluation of development outcomes</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <i className="ri-lightbulb-line text-teal-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Innovation Hub</h3>
              <p className="text-gray-600">Platform for testing and scaling innovative development solutions</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <i className="ri-shield-check-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Risk Mitigation</h3>
              <p className="text-gray-600">Reduced operational risks through local partnerships and knowledge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA - Partner with Us */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner with Us</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join our network of diplomatic missions and international organizations working to advance Africa's strategic interests on the global stage.
          </p>
          <button
            onClick={() => setShowMembershipForm(true)}
            className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 font-medium whitespace-nowrap cursor-pointer"
          >
            Apply for Membership
          </button>
        </div>
      </section>

      {/* Membership Form Modal */}
      {showMembershipForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Apply for Membership</h3>
                <button
                  onClick={() => setShowMembershipForm(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              <form onSubmit={handleMembershipSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Type
                  </label>
                  <select
                    name="organizationType"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="embassy">Embassy/Diplomatic Mission</option>
                    <option value="ministry">Ministry of Foreign Affairs</option>
                    <option value="multilateral">Multilateral Organization</option>
                    <option value="cultural_agency">Cultural/Development Agency</option>
                    <option value="honorary_consul">Honorary Consul</option>
                    <option value="envoy">Global Envoy</option>
                    <option value="thought_leader">Thought Leader</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your diplomatic objectives and interest in joining the club..."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <label className="text-sm text-gray-700">
                    I agree to the terms and conditions of AEF membership
                  </label>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowMembershipForm(false)}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
