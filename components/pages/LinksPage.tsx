
import React from 'react';
import { InstagramIcon } from '../icons/InstagramIcon';
import { FacebookIcon } from '../icons/FacebookIcon';
import { YouTubeIcon } from '../icons/YouTubeIcon';
import { BehanceIcon } from '../icons/BehanceIcon';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

const contactDetails = [
    { name: 'Instagram', value: '@theemmanueltay', url: 'https://www.instagram.com/theemmanueltay', icon: <InstagramIcon /> },
    { name: 'Facebook', value: 'Emmanuel Tay', url: 'https://www.facebook.com/share/1F43QJk2iy/?mibextid=wwXIfr', icon: <FacebookIcon /> },
    { name: 'YouTube', value: 'Emmanuel Creates', url: 'https://www.youtube.com/@filmwithfriday', icon: <YouTubeIcon /> },
    { name: 'Behance', value: 'emmanueltay5', url: 'https://www.behance.net/emmanueltay5', icon: <BehanceIcon /> },
    { name: 'WhatsApp', value: '0246052714', url: 'https://wa.me/233246052714', icon: <WhatsAppIcon /> },
];

export const LinksPage: React.FC = () => {
    return (
        <div className="w-full max-w-6xl mx-auto flex-1 flex items-center justify-center px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

                {/* Left Column: Contact Details */}
                <div className="glassmorphism rounded-xl p-6 shadow-glow">
                    <h3 className="font-bold text-white text-xl mb-6">Contact Details</h3>
                    <div className="space-y-4">
                        {contactDetails.map(item => (
                            <a 
                                href={item.url} 
                                key={item.name} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 group transition-transform duration-300 hover:scale-105"
                            >
                                <div className="text-accent">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-white">{item.name}</p>
                                    <p className="text-text-secondary text-sm">{item.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="glassmorphism rounded-xl p-6 shadow-glow">
                    <h3 className="font-bold text-white text-xl mb-6">Send a Message</h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                className="w-full bg-gray-900/50 rounded-lg border border-gray-700 px-4 py-2 text-white shadow-sm focus:ring-accent focus:border-accent transition"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                className="w-full bg-gray-900/50 rounded-lg border border-gray-700 px-4 py-2 text-white shadow-sm focus:ring-accent focus:border-accent transition"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={4}
                                className="w-full bg-gray-900/50 rounded-lg border border-gray-700 px-4 py-2 text-white shadow-sm focus:ring-accent focus:border-accent transition"
                            ></textarea>
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-accent text-primary font-bold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-400 transition-all hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};