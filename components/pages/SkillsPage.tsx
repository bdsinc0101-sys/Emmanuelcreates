
import React from 'react';
import { FilmmakingIcon } from '../icons/FilmmakingIcon';
import { DesignIcon } from '../icons/DesignIcon';
import { PhotographyIcon } from '../icons/PhotographyIcon';
import { DigitalMediaIcon } from '../icons/DigitalMediaIcon';

const skills = [
    {
        icon: <FilmmakingIcon />,
        title: "Filmmaking & Video Production",
        description: "Short films, documentaries, commercials, cinematic reels."
    },
    {
        icon: <DesignIcon />,
        title: "Graphic Design & Branding",
        description: "Logos, visual identities, digital and print designs."
    },
    {
        icon: <PhotographyIcon />,
        title: "Photography",
        description: "Portraits, product photography, events, behind-the-scenes storytelling."
    },
    {
        icon: <DigitalMediaIcon />,
        title: "Digital Media & Content Creation",
        description: "Social media visuals, promotional reels, campaign visuals."
    }
];

export const SkillsPage: React.FC = () => {
    return (
        <div className="w-full max-w-6xl mx-auto flex-1 flex items-center justify-center px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="glassmorphism rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 shadow-glow h-full"
                    >
                        <div className="text-accent mb-4">
                            {skill.icon}
                        </div>
                        <h3 className="font-bold text-white text-md mb-2 flex-grow">{skill.title}</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};