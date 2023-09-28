// if we are adding any styles with .cssText we must use += when assigning it. It means we are ADDING styles to existing ones.
window.addEventListener("scroll", (e) => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});
//this works only because the += above
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
});
