import React from 'react';

export const SummaryPage: React.FC = () => {
    return (
        <div className="page-content flex-1 flex items-center justify-center px-4">
            <div className="glassmorphism rounded-2xl p-4 sm:p-6 max-w-4xl w-full shadow-glow">
                <h3 className="text-2xl lg:text-3xl font-black text-accent mb-4">Summary</h3>
                
                <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
                    <h4 className="text-lg font-bold text-white">Who I Am</h4>
                    <p>
                        I’m Emmanuel, a multimedia creative and entrepreneur based in Accra, Ghana.
                        I specialize in filmmaking, photography, graphic design, and brand storytelling, helping individuals and brands communicate visually with purpose and style.
                    </p>
                    <p>
                        With a background in advertising and media production, I blend strategy and creativity to produce work that not only looks appealing but also works.
                    </p>
                    <p>
                        My creative approach is rooted in simplicity, emotion, and clarity. Whether I’m directing a short film, shooting a campaign, or designing a logo, my goal is the same: to make people feel something real.
                    </p>
                </div>
                
                <hr className="my-6 border-gray-700" />
                
                <div className="flex">
                    <div className="w-1 bg-accent mr-4 flex-shrink-0"></div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-white">My Philosophy</h4>
                        <div className="text-sm text-gray-300 space-y-1">
                            <p>Purpose over trend. I believe true creativity is timeless.</p>
                            <p>Emotion over perfection. People remember how visuals evoke emotions in them.</p>
                            <p>Vision over noise. The best work cuts through with clarity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};