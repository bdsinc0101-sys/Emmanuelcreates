import React, { useState } from 'react';
import { Header } from './components/Header';
import { Page } from './types';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 flex flex-col">
                <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
};

export default App;