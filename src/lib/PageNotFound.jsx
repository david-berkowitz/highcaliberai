import { Link, useLocation } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { createPageUrl } from '@/utils';
import { Home, ArrowRight, Search } from 'lucide-react';

export default function PageNotFound() {
    const location = useLocation();

    const { data: authData, isFetched } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const user = await base44.auth.me();
                return { user, isAuthenticated: true };
            } catch {
                return { user: null, isAuthenticated: false };
            }
        }
    });

    const quickLinks = [
        { label: "Home", page: "Home" },
        { label: "Services", page: "Services" },
        { label: "Partner Marketplace", page: "Partners" },
        { label: "Contact", page: "Contact" },
    ];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <div className="max-w-2xl w-full text-center">
                {/* Big 404 */}
                <div className="mb-8">
                    <span className="text-[10rem] font-black text-gray-100 leading-none select-none block">404</span>
                    <div className="-mt-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-3">Page Not Found</h1>
                        <p className="text-gray-500 text-lg">
                            That page doesn't exist — but there's plenty of good stuff where you're going.
                        </p>
                    </div>
                </div>

                {/* Quick links */}
                <div className="grid grid-cols-2 gap-3 mb-8 max-w-sm mx-auto">
                    {quickLinks.map(link => (
                        <Link key={link.page} to={createPageUrl(link.page)}
                            className="flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-xl text-sm font-medium text-gray-700 hover:text-red-600 transition-all group">
                            {link.label}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    ))}
                </div>

                {/* Go home button */}
                <Link to={createPageUrl("Home")}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                    <Home className="w-4 h-4" /> Go Home
                </Link>

                {/* Admin note */}
                {isFetched && authData?.isAuthenticated && authData?.user?.role === 'admin' && (
                    <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200 text-left max-w-sm mx-auto">
                        <p className="text-sm font-semibold text-amber-800 mb-1">Admin: Page missing</p>
                        <p className="text-xs text-amber-700">
                            This page hasn't been built yet. Ask the AI assistant to create it.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}