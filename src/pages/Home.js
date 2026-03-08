import React from 'react';
import { useSections, useSection } from '@/hooks/useSections';

import Left from '@/components/home/Left';
import Right from '@/components/home/Right';

const Home = () => {
    const { data: heroSection, isLoading: isLoadingHero, error: errorHero } = useSection('projects-section');

    return (
        <div className="Home_page_layout pb-32 pt-20 lg-break:pt-0"
            style={{ color: 'var(--text-primary)', backgroundColor: 'var(--bg-primary)' }}>
            <div className='content max-w-7xl xl:max-w-5xl lg:max-w-4xl mx-auto flex justify-between p-4 lg-break:flex-col'>
                <Left />
                <Right />

                {/* Displaying API integration result block */}
                {/* <div className='max-w-7xl mx-auto p-4 flex flex-col gap-8'>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Hero Section API Data (by identifier)</h2>
                        {isLoadingHero && <p>Loading hero section from backend...</p>}
                        {errorHero && <p className="text-red-500">Error loading section: {errorHero?.message || String(errorHero)}</p>}
                        {heroSection ? (
                            <pre className="bg-gray-800 text-blue-400 p-4 rounded-md overflow-x-auto text-sm">
                                {JSON.stringify(heroSection, null, 2)}
                            </pre>
                        ) : !isLoadingHero && <p>Hero section not found.</p>}
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Home;
