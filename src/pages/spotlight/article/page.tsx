import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug } from '../../../data/spotlightArticles';

export default function SpotlightArticle() {
    const { slug } = useParams<{ slug: string }>();
    const article = slug ? getArticleBySlug(slug) : undefined;

    if (!article) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
                    <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
                    <Link to="/spotlight" className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800">
                        Back to Spotlight
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-gray-50 py-4 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Link to="/" className="hover:text-blue-600">Home</Link>
                        <span>/</span>
                        <Link to="/spotlight" className="hover:text-blue-600">Spotlight</Link>
                        <span>/</span>
                        <span className="text-gray-900">{article.category}</span>
                    </div>
                </div>
            </div>

            {/* Article Header */}
            <article className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Badge */}
                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                            {article.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {article.title}
                    </h1>

                    {/* Meta Information */}
                    <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-gray-200">
                        <div className="flex items-center space-x-2">
                            <img
                                src="/images/aef-logo.jpg"
                                alt="AEF Logo"
                                className="w-10 h-10 rounded-full object-contain"
                            />
                            <div>
                                <p className="text-sm font-medium text-gray-900">Africa Economic Forum Public Relations Team</p>
                                <p className="text-xs text-gray-500">
                                    {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {article.image && (
                        <div className="mb-10">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    )}

                    {/* Article Intro */}
                    <div className="mb-8">
                        <p className="text-xl text-gray-700 leading-relaxed font-medium">
                            {article.intro}
                        </p>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                        {article.content.map((paragraph: string, index: number) => (
                            <p key={index} className="text-gray-700 leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Article Signature */}
                    <div className="mt-12 pt-8 border-t-2 border-gray-200">
                        <div className="bg-gray-50 rounded-lg p-8">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img
                                        src="/images/aef-logo.jpg"
                                        alt="AEF Logo"
                                        className="w-16 h-16 rounded-full object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Signed by:</p>
                                    <p className="text-lg font-bold text-gray-900">Africa Economic Forum Public Relations Team</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Back to Spotlight */}
                    <div className="mt-12">
                        <Link
                            to="/spotlight"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                        >
                            <i className="ri-arrow-left-line mr-2"></i>
                            Back to Spotlight
                        </Link>
                    </div>
                </div>
            </article>

            {/* Related Articles */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">More from Spotlight</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* This could be populated with related articles */}
                        <Link to="/spotlight" className="text-center">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <p className="text-blue-600 font-medium">View all Spotlight articles</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
