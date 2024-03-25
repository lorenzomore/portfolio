"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";
import Image from "next/image";
import * as ProjectManager from "../../utils/projectsManager";
import nextConfig from "../../../next.config.mjs";

interface props {
  projectId: string;
}

function Slide({ projectId }: props) {
  let imagesArray: string[];
  imagesArray = ProjectManager.getProjectImages(projectId);

  return imagesArray.map(function (element) {
    return (
      <div key={element} className={styles.embla__slide}>
        <Image
          src={element}
          alt={element}
          width={1000}
          height={1000}
          className={styles.carouselImage}
        />
      </div>
    );
  });
}

export default function EmblaCarousel({ projectId }: props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.carouselWrapper}>
      <button
        className={styles.carouselBtn}
        onClick={scrollPrev}
        style={{ gridArea: "1/4/1/4" }}
      >
        <Image
          width={16}
          height={16}
          src={`${nextConfig.basePath}/prevBtn.svg`}
          alt="Prev"
        />
      </button>
      <div
        className={styles.embla}
        ref={emblaRef}
      >
        <div className={styles.embla__container}>
          <Slide projectId={projectId} />
        </div>
      </div>
      <button
        className={styles.carouselBtn}
        onClick={scrollNext}
        style={{ gridArea: "1/12/1/12" }}
      >
        <Image
          width={16}
          height={16}
          src={`${nextConfig.basePath}/nextBtn.svg`}
          alt="Prev"
        />
      </button>
      <h3
        className={styles.caption}
        style={{ gridArea: "2/2/2/15", justifySelf: "center" }}
      >
        {ProjectManager.getProjectCaption(projectId)}
      </h3>
    </div>
  );
}
