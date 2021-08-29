import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import "../styles/Carousel.css";

const items = [
  {
    src: 'https://media.istockphoto.com/photos/portrait-of-mature-businesswoman-in-open-plan-office-with-business-picture-id1137070812?k=20&m=1137070812&s=612x612&w=0&h=hXzYFD7gQp51zZZxW56WAFPHbNrhc1WJFpzzaObT6_A=',
    altText: 'Slide 1',
    caption: '"I love my new job!"',
    name: '-Vanessa P'
  },
  {
    src: 'https://media.istockphoto.com/photos/mid-adult-businessman-at-work-picture-id1150504096?k=20&m=1150504096&s=612x612&w=0&h=Hqp44ZIDsnIB79yEVSiUQNO-MiCvSbBMNkrODNsHm_I=',
    altText: 'Slide 2',
    caption: '"Jobly made the job hunt so easy!"',
    name: '-Paul S'
  },
  {
    src: 'https://media.istockphoto.com/photos/business-people-working-in-the-office-picture-id1085389362?k=20&m=1085389362&s=612x612&w=0&h=hbU3DymQHqY5YsgkkZsW3f9vB7MEh2LuZhwKUuP4uaI=',
    altText: 'Slide 3',
    caption: '"I really enjoy my new coworkers!"',
    name: '-Aubrey C'
  }
];

const Testimonial = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption className="caption" captionText={item.name} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Testimonial;