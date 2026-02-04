import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { spotlightArticles } from '../../data/spotlightArticles';

const categories = [
    'All',
    'Institutional Partnership',
    'Strategic Architecture',
    'Capital & Execution',
    'Continuity & Institutional Memory',
    'Flagship Platform',
    'Strategic Frameworks',
    'Policy Architecture'
];

export default function Spotlight() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

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

    const filteredArticles = selectedCategory === 'All'
        ? spotlightArticles
        : spotlightArticles.filter(article => article.category === selectedCategory);

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
                            <Link to="/initiatives" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                Initiative
                            </Link>
                            <Link to="/stakeholders" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                Stakeholders
                            </Link>
                            <Link to="/agenda" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                Agenda
                            </Link>
                            <Link to="/spotlight" className="text-blue-600 font-medium">
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
                                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
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
                                <Link to="/spotlight" className="text-blue-600 font-medium">
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
                                            onClick={handleLogout}
                                            className="block w-full text-left text-red-600 hover:text-red-700 font-medium"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                ) : (
                                    <div className="pt-4 border-t border-gray-100">
                                        <Link
                                            to="/signin"
                                            className="text-gray-700 hover:text-blue-600 font-medium"
                                        >
                                            Sign In
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Header Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold mb-6">Spotlight</h1>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-100">AEF Strategic Announcements & Institutional Milestones</h2>
                        <p className="text-lg text-blue-50 leading-relaxed">
                            Spotlight is the official platform for Africa Economic Forum's major partnerships, flagship initiatives, institutional announcements, and strategic thought leadership shaping Africa's role in global realignments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="bg-gray-50 py-8 sticky top-0 z-40 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                        <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Filter by:</span>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map(article => (
                            <Link
                                key={article.id}
                                to={`/spotlight/${article.slug}`}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                {article.image && (
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-48 object-cover"
                                    />
                                )}
                                <div className="p-6">
                                    <div className="mb-3">
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                                            {article.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {article.summary}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        <span className="text-blue-600 font-medium text-sm flex items-center">
                                            Read More <i className="ri-arrow-right-line ml-1"></i>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredArticles.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">No articles found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
