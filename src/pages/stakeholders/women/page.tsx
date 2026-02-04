
import { useState } from 'react';

export default function WomenPage() {
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
                <img src="https://static.readdy.ai/image/433d1257c1dbc1f8bb2f3f1c418f6689/0727857f21d196505f8ef18cfc1cd897.png" alt="Africa Economic Forum" className="h-10 w-auto" />
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="/about" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
              <a href="/initiatives" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">Initiatives</a>
              <a href="/stakeholders" className="text-teal-600 px-3 py-2 text-sm font-medium border-b-2 border-teal-600">Stakeholders</a>
              <a href="/agenda" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">Agenda</a>

              <a href="/meetings" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">Meetings</a>
              <a href="/contact" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">Africa Women Forum</h1>
              <h2 className="text-2xl text-blue-100">Catalyzing Female Leadership for a Sovereign and Prosperous Africa</h2>
              <p className="text-lg text-blue-100 leading-relaxed">The Africa Women Forum is the flagship platform dedicated to advancing the economic, political, and social empowerment of African women as a strategic pillar of Africa's sovereignty and long-term prosperity.</p>
              <button onClick={() => setShowMembershipForm(true)} className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 font-medium cursor-pointer">Apply for Membership</button>
            </div>
            <div className="relative">
              <img src="https://readdy.ai/api/search-image?query=Empowered%20African%20women%20leaders%20in%20professional%20conference%20setting%2C%20gender%20equality%20advocacy%2C%20women%20empowerment%20and%20leadership%20development%20programs&width=600&height=400&seq=women&orientation=landscape" alt="Africa Women Forum" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Women at the Center of Transformation</h2>
              <p className="text-lg text-gray-700 leading-relaxed">AWF brings together women leaders, entrepreneurs, policymakers, innovators, and civil society actors to drive strategic partnerships, strengthen capacities, and accelerate investments in women-led initiatives across Africa.</p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"><i className="ri-presentation-line text-pink-600 text-xl"></i></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xl mb-2">Women Leaders Summit & Deal Room</h3>
                    <p className="text-gray-600">Investment pitches, negotiations, and structured deal rooms connecting women entrepreneurs with investors, funds, and institutions to unlock financing and scale impact.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"><i className="ri-government-line text-purple-600 text-xl"></i></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xl mb-2">Gender-Smart Governance & Policy Dialogue</h3>
                    <p className="text-gray-600">Workshops and policy platforms focused on integrating gender into governance, public policy, and corporate leadership structures.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"><i className="ri-rocket-line text-blue-600 text-xl"></i></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xl mb-2">Innovation, Entrepreneurship & Capacity Building</h3>
                    <p className="text-gray-600">Mentorship, training, tech empowerment, and pan-African business networks to support women-led innovation and enterprise growth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://readdy.ai/api/search-image?query=Empowered%20African%20women%20leaders%20in%20professional%20conference%20setting%2C%20gender%20equality%20advocacy%2C%20women%20empowerment%20and%20leadership%20development%20programs&width=600&height=400&seq=women&orientation=landscape" alt="Women at Center" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
            <p className="text-gray-600 text-lg">Advantages of collaborating with the Africa Economic Forum</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4"><div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto"><i className="ri-map-pin-line text-blue-600 text-2xl"></i></div><h3 className="font-semibold text-gray-900">Local Expertise</h3><p className="text-gray-600">Deep understanding of African markets, cultures, and business environments</p></div>
            <div className="text-center space-y-4"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"><i className="ri-team-line text-green-600 text-2xl"></i></div><h3 className="font-semibold text-gray-900">Network Access</h3><p className="text-gray-600">Direct connections to African governments, businesses, and civil society</p></div>
            <div className="text-center space-y-4"><div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto"><i className="ri-rocket-line text-purple-600 text-2xl"></i></div><h3 className="font-semibold text-gray-900">Program Implementation</h3><p className="text-gray-600">Efficient delivery of development programs and initiatives</p></div>
            <div className="text-center space-y-4"><div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto"><i className="ri-bar-chart-line text-orange-600 text-2xl"></i></div><h3 className="font-semibold text-gray-900">Impact Measurement</h3><p className="text-gray-600">Comprehensive monitoring and evaluation of development outcomes</p></div>
            <div className="text-center space-y-4"><div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto"><i className="ri-lightbulb-line text-teal-600 text-2xl"></i></div><h3 className="font-semibold text-gray-900">Innovation Hub</h3><p className="text-gray-600">Platform for testing and scaling innovative development solutions</p></div>
            <div className="text-center space-y-4"><div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto"><i className="ri-shield-check-line text-red-600 text-2xl"></i></div><h3 className="font-semibold text-gray-900">Risk Mitigation</h3><p className="text-gray-600">Reduced operational risks through local partnerships and knowledge</p></div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner with Us</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">Join our network of women leaders advancing economic empowerment and transformation across Africa.</p>
          <button onClick={() => setShowMembershipForm(true)} className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 font-medium cursor-pointer">Apply for Membership</button>
        </div>
      </section>

      {/* Membership Form Modal */}
      {showMembershipForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Apply for Membership</h3>
                <button onClick={() => setShowMembershipForm(false)} className="text-gray-400 hover:text-gray-600 cursor-pointer"><i className="ri-close-line text-2xl"></i></button>
              </div>
              <form onSubmit={handleMembershipSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label><input type="text" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">Email</label><input type="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /></div>
                </div>
                <div><label className="block text-sm font-medium text-gray-700 mb-2">Message</label><textarea name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></div>
                <div className="flex items-center space-x-2"><input type="checkbox" name="agree" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" required /><label className="text-sm text-gray-700">I agree to the terms and conditions</label></div>
                <div className="flex justify-end space-x-4">
                  <button type="button" onClick={() => setShowMembershipForm(false)} className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 cursor-pointer">Cancel</button>
                  <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
