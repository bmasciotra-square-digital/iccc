import React from "react";
import { NavigationBar } from "../../components/navigation/NavigationBar";
import "./PageWrapper.scss";
import { Footer } from "../../components/footer/Footer";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = "" }) => {
  return (
    <div className={`iccc-page-wrapper ${className}`}>
      <header className="iccc-page-wrapper__header">
        <NavigationBar />
      </header>
      <main className="iccc-page-wrapper__main">
        <div className="iccc-page-wrapper__content">{children}</div>
      </main>
      <footer className="iccc-page-wrapper__footer">
        <Footer />
      </footer>
    </div>
  );
};
