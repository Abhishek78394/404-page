gsap.from(".navbar > div",  {
    opacity: 0,
    y: 60,
    ease: Expo.easeInOut,
    delay: 2.4,
  });
  gsap.from(".site-logo",{
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut,
    delay: 2.4,
  });
  gsap.from(".header > span",  {
    top: "-100vh",
    ease: "bounce.out",
    delay: 1,
    stagger: 0.2,
  });
  gsap.to(".footer span",  {
    y: -40,
    ease: Expo.easeInOut,
    delay: 2.4,
  });