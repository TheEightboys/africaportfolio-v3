import type { Forum } from '../pages/meetings/forumsData';

interface ForumModalProps {
    isOpen: boolean;
    onClose: () => void;
    forum: Forum | null;
}

export default function ForumModal({ isOpen, onClose, forum }: ForumModalProps) {
    if (!isOpen || !forum) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div
                className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative">
                    <img
                        src={forum.image}
                        alt={forum.title}
                        className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
                    >
                        <i className="ri-close-line text-2xl"></i>
                    </button>
                </div>

                <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{forum.title}</h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Overview</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">{forum.overview}</p>
                        </div>

                        {forum.keyAreas && (
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Focus Areas</h3>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {forum.keyAreas.map((area: string, index: number) => (
                                        <li key={index} className="flex items-start bg-gray-50 p-3 rounded-md">
                                            <span className="text-teal-600 mr-2 mt-1 flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill"></i>
                                            </span>
                                            <span className="text-gray-700">{area}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {forum.stakeholders && (
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Stakeholders</h3>
                                <div className="flex flex-wrap gap-2">
                                    {forum.stakeholders.map((stakeholder: string, index: number) => (
                                        <span
                                            key={index}
                                            className="inline-block px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-medium border border-blue-100"
                                        >
                                            {stakeholder}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {forum.purpose && (
                            <div className="bg-blue-900 text-white p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3">Forum Purpose</h3>
                                <p className="leading-relaxed opacity-90">{forum.purpose}</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 font-medium transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
