import React, { useRef } from "react";
import styles from "./page.module.css";
import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";
import ScrollToTopArrow from "../../ScrollToTopArrow"; // Import the ScrollToTopArrow component
import Screenshot1 from "../../assets/images/screenshot1.png";
import Screenshot2 from "../../assets/images/screenshot2.png";
import Screenshot3 from "../../assets/images/screenshot3.png";
import Frame169 from "../../assets/images/Frame169.png";
import Frame170 from "../../assets/images/Frame170.png";
import Frame171 from "../../assets/images/Frame171.png";
import SmartIntro from "./Div/SmartIntro";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Services from "./ServiceSection";
import Clients from "./ClientSection";

export default function Home() {
  const servicesRef = useRef(null);

  const OPTIONS1 = {};
  const OPTIONS2 = {};
  const SLIDES1 = [
    { img: Frame169 },
    { img: Frame170 },
    { img: Frame171 },
    { img: Frame169 },
    { img: Frame170 },
    { img: Frame171 },
  ];
  const SLIDES2 = [
    { name: "slides2", img: Screenshot1 },
    { img: Screenshot2 },
    { img: Screenshot3 },
    { img: Screenshot1 },
    { img: Screenshot2 },
    { img: Screenshot3 },
  ];

  return (
    <>
      <div className="home-page">
        <section className="hero-section">
          <HeroSection servicesRef={servicesRef} />
        </section>

        <section className="about-section">
          <AboutSection />
        </section>

        <section ref={servicesRef} className="services-section">
          <Services />
        </section>

        <section className="client-section">
          <Clients />
        </section>

        <div className={styles.container}>
          <div
            className={`${styles.carouselComponent1}`}
          >
            <div className={`${styles.brand} lg:px-20 md:px-12 sm:px-8 px-6 py-8 mt-3`}>
              <h1>
                Brand stories with <br />
                Smart technology company
              </h1>
              <p>
                Discover how <span>Smart technology company</span> has helped
                many brands succeed.
              </p>
              <p>
                We’ve worked with a variety of businesses to boost their success
                and make a real impact.
              </p>
            </div>
            <EmblaCarousel slides={SLIDES1} options={OPTIONS1} />
          </div>

          <div className={styles.carouselComponent2}>
            <h1>What Clients Say </h1>
            <EmblaCarousel slides={SLIDES2} options={OPTIONS2} />
          </div>

          <SmartIntro />

          <div className={styles.getContact}>
            <div className={styles.contain}>
              <p>See how we can elevate your brand, Let's Talk</p>
              <button>contact us</button>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopArrow /> {/* Add ScrollToTopArrow */}
    </>
  );
}
