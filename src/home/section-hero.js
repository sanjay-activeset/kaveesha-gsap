import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { InertiaPlugin } from "gsap/InertiaPlugin";

export const heroAnimation = () => {
  tl.from(".home_hero_bottom_title", {
    opacity: 0,
    duration: 1,
  });
};

gsap.from(".section_home_hero", {
  opacity: 0,
  duration: 2,
});
