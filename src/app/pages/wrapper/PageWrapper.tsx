
import React from 'react';
import { NavigationBar } from '../../components/navigation/NavigationBar';
import './PageWrapper.scss';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ 
  children, 
  className = '',
}) => {
  return (
    <div className={`iccc-page-wrapper ${className}`}>
      {/* Header Section */}
      <header className="iccc-page-wrapper__header">
        <NavigationBar />
      </header>

      {/* Main Content Area */}
      <main className="iccc-page-wrapper__main">
        {/* {title && (
          <div className="page-title-section">
            <h1 className="page-title">{title}</h1>
          </div>
        )} */}
        <div className="iccc-page-wrapper__content">
          {children}
        </div>
      </main>

      {/* Footer Section */}
        
    </div>
  );
};