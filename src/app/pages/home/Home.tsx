import React from "react";
import { PageWrapper } from "../wrapper/PageWrapper";
import { Hero } from "../../components/hero/Hero";

export const Home: React.FC = () => {
  return (
    <PageWrapper title="Welcome to ICCC">
      <div className="home-content">
        <Hero />
      </div>
    </PageWrapper>
  );
};
