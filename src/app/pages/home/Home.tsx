import React from "react";
import { PageWrapper } from "../wrapper/PageWrapper";
import { Hero } from "../../components/hero/Hero";
import { AboutUs } from "../../components/about-us/AboutUs";
import { InfoCardGrid } from "../../components/info-card-grid/InfoCardGrid";
import en from "../../../translations/en.json";
import { InfoCardProps } from "../../components/info-card/InfoCard";
import clipboard from "/images/icons/clipboard.png";
import crest from "/images/icons/crest.png";
import clock from "/images/icons/clock.png";
import lock from "/images/icons/lock.png";
import { InfoBullets } from "../../components/info-bullets/InfoBullets";
import { Contact } from "../../components/contact/Contact";

export const Home: React.FC = () => {
  const { tokens } = en;

  const cards: InfoCardProps[] = [
    {
      icon: clipboard,
      title: tokens.pages.home.infoCards.cards.one.title,
      content: tokens.pages.home.infoCards.cards.one.content,
    },
    {
      icon: crest,
      title: tokens.pages.home.infoCards.cards.two.title,
      content: tokens.pages.home.infoCards.cards.two.content,
    },
    {
      icon: lock,
      title: tokens.pages.home.infoCards.cards.three.title,
      content: tokens.pages.home.infoCards.cards.three.content,
    },
    {
      icon: clock,
      title: tokens.pages.home.infoCards.cards.four.title,
      content: tokens.pages.home.infoCards.cards.four.content,
    },
  ];
  return (
    <PageWrapper title="Welcome to ICCC">
      <div className="home-content">
        <Hero />
        <AboutUs />
        <InfoCardGrid
          title={tokens.pages.home.infoCards.title}
          subTitle={tokens.pages.home.infoCards.subTitle}
          description={tokens.pages.home.infoCards.description}
          cards={cards}
          action={{
            text: tokens.pages.home.infoCards.action,
            action: () => {
              console.log("action");
            },
          }}
        />
        <InfoBullets
          image={"/images/research.jpg"}
          title={"Industy Experience"}
          description={"Excellence In Specialised Pharmacy Solutions"}
          bullets={[
            {
              icon: "/images/icons/bullet-1.png",
              text: "Comprehensive expertise in specialised pharmacy solutions from custom compounding to oncology and clinical trials",
            },
            {
              icon: "/images/icons/bullet-2.png",
              text: "Collaborating with healthcare professionals and services",
            },
            {
              icon: "/images/icons/bullet-3.png",
              text: "Unwavering commitment to medication safety and patient outcomes",
            },
          ]}
        />
      </div>
      <Contact />
    </PageWrapper>
  );
};
