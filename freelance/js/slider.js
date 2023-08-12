let tl = gsap.timeline({
    defaults: { duration: 2, ease: "power4.inOut" }
  });
  tl.to("#image1", { delay: 2, width: "0%" })
    .to("#image2", { width: "0%" }, "+=2")
    .to("#image3", { width: "0%" }, "+=2")
    .to("#image4", { width: "0%" }, "+=2")
    .to("#image5", { width: "0%" }, "+=2")
    .to("#image6", { width: "0%" }, "+=2")
    .to("#image7", { width: "0%" }, "+=2")
    .repeat(-1);
  