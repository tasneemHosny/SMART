'use client'
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './Embla.module.css'; // Import your CSS module
import { DotButton, useDotButton } from './EmblaCarouselDotButtons'
const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
const {  scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    onSelect(); // Set initial state
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((_, index) => (
            <div
              className={`${styles.embla__slide} ${
                index === selectedIndex ? styles['is-snapped'] : ''
              }`}
              key={index}
            >
              {!slides[0]?.name ? (
                <img
                className={styles.embla__slide__imgFill}
                src={slides[index].img}
                alt={`Slide ${index}`}
                />
              ) :
              <img
              className={styles.embla__slide__imgContain}
              src={slides[index].img}
              alt={`Slide ${index}`}
              /> }
              
            </div>
          ))}
        </div>

        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={styles.embla__dot.concat(
                index === selectedIndex ?` ${styles['embla__dot--selected']}` : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
