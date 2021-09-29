import { gsap } from 'gsap';

const tl = gsap.timeline();

const fadeIn = (element) => {
  gsap.to(element, 1, {
    opacity: 1,
    y: -60,
    ease: "power4.out",
    stagger: {
      amount: 0.3
    }
  });
};

const fadeOut = (element) => {
  gsap.to(element, 1, {
    opacity: 0,
    y: -20,
    ease: "power4.out"
  })
}

export { fadeIn, fadeOut };