
import React from 'react';

const projects = {
    "Film & Video": [
        {
            title: "Energy+ Launch Commercial",
            description: "Fast-paced product ad with motion design",
            imageUrl: "https://picsum.photos/seed/film1/400/225"
        },
        {
            title: "Faith Alive Series",
            description: "Church broadcast intro and live streaming visuals",
            imageUrl: "https://picsum.photos/seed/film2/400/225"
        },
        {
            title: "Street Chronicles",
            description: "Documentary exploring creative youth culture",
            imageUrl: "https://picsum.photos/seed/film3/400/225"
        },
    ],
    "Design & Branding": [
        {
            title: "Creative Oasis Ghana",
            description: "Logo, brand identity, and website layout",
            imageUrl: "https://picsum.photos/seed/design1/400/225"
        },
        {
            title: "Jesus Is Alive Church",
            description: "Modern spiritual identity",
            imageUrl: "https://picsum.photos/seed/design2/400/225"
        },
        {
            title: "FilmwithFriday",
            description: "Visual brand system for a media agency",
            imageUrl: "https://picsum.photos/seed/design3/400/225"
        },
    ],
    "Photography": [
        {
            title: "Ghana in Motion",
            description: "Street and lifestyle series",
            imageUrl: "https://picsum.photos/seed/photo1/400/225"
        },
        {
            title: "The Portrait Project",
            description: "Natural light portraits",
            imageUrl: "https://picsum.photos/seed/photo2/400/225"
        },
        {
            title: "Church Moments",
            description: "Faith and unity photo series",
            imageUrl: "https://picsum.photos/seed/photo3/400/225"
        },
    ]
};

export const PortfolioPage: React.FC = () => {
    return (
        <div className="w-full max-w-6xl mx-auto flex-1 flex items-center justify-center px-8">
            <div className="glassmorphism rounded-2xl p-4 w-full shadow-glow">
                {/* Main grid to arrange categories horizontally */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(projects).map(([category, items]) => (
                        // Each category is a column
                        <div key={category} className="space-y-3">
                            <h3 className="text-md font-bold text-accent">{category}</h3>
                            {/* Cards are stacked vertically within the category column */}
                            {items.map((project, index) => (
                                <div key={index} className="glassmorphism rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                    <img src={project.imageUrl} alt={project.title} className="w-full h-16 object-cover" />
                                    <div className="p-3">
                                        <h4 className="font-bold text-white text-xs truncate">{project.title}</h4>
                                        <p className="text-text-secondary text-xs mt-1 truncate">{project.description}</p>
                                        <a href="#" className="text-accent text-xs font-bold mt-1 inline-block hover:underline">
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
