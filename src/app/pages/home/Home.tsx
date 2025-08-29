import React from 'react';
import { PageWrapper } from '../wrapper/PageWrapper';

export const Home: React.FC = () => {
    return (
        <PageWrapper title="Welcome to ICCC">
            <div className="home-content">
                <p>This is the home page content. The header and footer are automatically included!</p>
                <p>Add your home page content here...</p>
            </div>
        </PageWrapper>
    );
};