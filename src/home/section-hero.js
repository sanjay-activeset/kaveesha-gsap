import gsap from "gsap";

export const heroAnimation = () => {
  tl.from(".home_hero_bottom_title", {
    opacity: 0,
    duration: 1,
  });
};

gsap.from(".home_hero_bottom_title", {
  // This is the same as the above code
  opacity: 0,
  duration: 1,
});
