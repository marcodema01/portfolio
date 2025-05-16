// nav-bar animation
const navButtonWorks = document.querySelector(".navbutton-works");
const navButtonAbout = document.querySelector(".navbutton-about");
const navButtonPlayground = document.querySelector(".navbutton-playground");
const navButtonContact = document.querySelector(".navbutton-contact");
const animatedBar = document.querySelector(".animated-bar");

const animateTextW = document.querySelector(".animate-text-w");
const animateTextA = document.querySelector(".animate-text-a");
const animateTextP = document.querySelector(".animate-text-p");
const animateTextC = document.querySelector(".animate-text-c");

// split the text in characters
let splitWClone = SplitText.create(".nav-text-w-clone", {
  type: "chars",
  mask: "chars",
});
let splitW = SplitText.create(".nav-text-w", {
  type: "chars",
  mask: "chars",
});
let splitAClone = SplitText.create(".nav-text-a-clone", {
  type: "chars",
  mask: "chars",
});
let splitA = SplitText.create(".nav-text-a", {
  type: "chars",
  mask: "chars",
});
let splitPClone = SplitText.create(".nav-text-p-clone", {
  type: "chars",
  mask: "chars",
});
let splitP = SplitText.create(".nav-text-p", {
  type: "chars",
  mask: "chars",
});
let splitCClone = SplitText.create(".nav-text-c-clone", {
  type: "chars",
  mask: "chars",
});
let splitC = SplitText.create(".nav-text-c", {
  type: "chars",
  mask: "chars",
});

//Hide clone text
gsap.set(splitWClone.chars, {
  autoAlpha: 0,
});
gsap.set(splitAClone.chars, {
  autoAlpha: 0,
});
gsap.set(splitPClone.chars, {
  autoAlpha: 0,
});
gsap.set(splitCClone.chars, {
  autoAlpha: 0,
});

// Animate the black bar everytime the user hovers on the navbuttons
[navButtonWorks, navButtonAbout, navButtonPlayground, navButtonContact].forEach(
  function (navButtons) {
    navButtons.addEventListener("mouseenter", () => {
      gsap.to(".animated-bar", {
        duration: 0.7,
        scaleY: "130",
        "-webkit-filter": "invert(100%)",
        filter: "invert(100%)",
      });

      gsap.to(".filter", {
        duration: 0.7,
        "-webkit-filter": "invert(100%)",
        filter: "invert(100%)",
      });
    });
  }
);

// nav-text animation (contacts) - mouseenter
animateTextC.addEventListener("mouseenter", () => {
  //clone text coming from below
  gsap.fromTo(
    splitCClone.chars,
    {
      y: 15,
      stagger: 0.05,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      "-webkit-filter": "invert(100%)",
      filter: "invert(100%)",
      // color: "white",
      fontFamily: "neueHaas",
      fontWeight: "500",
    }
  );

  // nav-text going on top
  gsap.fromTo(
    splitC.chars,
    {
      y: 0,
      stagger: 0.05,
    },
    {
      y: -15,
      duration: 2,
      "-webkit-filter": "invert(100%)",
      filter: "invert(100%)",
    }
  );
});

// nav-text animation (playground) - mouseenter
animateTextP.addEventListener("mouseenter", () => {
  //clone text coming from below
  gsap.fromTo(
    splitPClone.chars,
    {
      y: 15,
      stagger: 0.05,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      "-webkit-filter": "invert(100%)",
      filter: "invert(100%)",
      // color: "white",
      fontFamily: "neueHaas",
      fontWeight: "500",
    }
  );

  // nav-text going on top
  gsap.fromTo(
    splitP.chars,
    {
      y: 0,
      stagger: 0.05,
    },
    {
      y: -15,
      duration: 2,
      "-webkit-filter": "invert(100%)",
      filter: "invert(100%)",
    }
  );
});

// nav-text animation (about) - mouseenter
animateTextA.addEventListener("mouseenter", () => {
  //clone text coming from below
  gsap.fromTo(
    splitAClone.chars,
    {
      y: 15,
      stagger: 0.05,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      "-webkit-filter": "invert(100%)",
      filter: "invert(100%)",
      // color: "white",
      fontFamily: "neueHaas",
      fontWeight: "500",
    }
  );

  // nav-text going on top
  gsap.fromTo(
    splitA.chars,
    {
      y: 0,
      stagger: 0.05,
    },
    {
      y: -15,
      duration: 2,
      "-webkit-filter": "invert(100%)",
      filter: "invert(100%)",
    }
  );
});

// nav-text animation (works) - mouseenter
animateTextW.addEventListener("mouseenter", () => {
  //clone text coming from below
  gsap.fromTo(
    splitWClone.chars,
    {
      y: 15,
      stagger: 0.05,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      "-webkit-filter": "invert(100%)",
      filter: "invert(100%)",
      // color: "white",
      fontFamily: "neueHaas",
      fontWeight: "500",
    }
  );

  // nav-text going on top
  gsap.fromTo(
    splitW.chars,
    {
      y: 0,
      stagger: 0.05,
    },
    {
      y: -15,
      duration: 2,
      "-webkit-filter": "invert(100%)",
      filter: "invert(100%)",
    }
  );

  // title appearing will be figured out on day
});

// closing navigation bar
[navButtonWorks, navButtonAbout, navButtonPlayground, navButtonContact].forEach(
  function (navButtons) {
    navButtons.addEventListener("mouseleave", () => {
      gsap.to(".animated-bar", {
        duration: 0.7,
        scaleY: "-1",
        "-webkit-filter": "invert(0%)",
        filter: "invert(0%)",
      });

      gsap.to(".filter", {
        duration: 0.7,
        "-webkit-filter": "invert(0%)",
        filter: "invert(0%)",
      });
    });
  }
);

// nav-text animation (contacts) - mouseleave
animateTextC.addEventListener("mouseleave", () => {
  // stop the mouseenter animation
  gsap.killTweensOf(splitCClone.chars);
  gsap.killTweensOf(splitC.chars);

  //clone text going below
  gsap.fromTo(
    splitCClone.chars,
    {
      y: 0,
      stagger: 0.05,
    },
    {
      autoAlpha: 0,
      y: 15,
      duration: 1,
      "-webkit-filter": "invert(0%)",
      filter: "invert(0%)",
      // color: "white",
      fontFamily: "neueHaas",
      fontWeight: "500",
    }
  );

  // nav-text going on top
  gsap.fromTo(
    splitC.chars,
    {
      y: -15,
      stagger: 0.05,
    },
    {
      y: 0,
      duration: 1.3,
      "-webkit-filter": "invert(0%)",
      filter: "invert(0%)",
    }
  );
});

// nav-text animation (playground) - mouseleave
animateTextP.addEventListener("mouseleave", () => {
  // stop the mouseenter animation
  gsap.killTweensOf(splitPClone.chars);
  gsap.killTweensOf(splitP.chars);

  //clone text going below
  gsap.fromTo(
    splitPClone.chars,
    {
      y: 0,
      stagger: 0.05,
    },
    {
      autoAlpha: 0,
      y: 15,
      duration: 1,
      "-webkit-filter": "invert(0%)",
      filter: "invert(0%)",
      // color: "white",
      fontFamily: "neueHaas",
      fontWeight: "500",
    }
  );

  // nav-text going on top
  gsap.fromTo(
    splitP.chars,
    {
      y: -15,
      stagger: 0.05,
    },
    {
      y: 0,
      duration: 1.3,
      "-webkit-filter": "invert(0%)",
      filter: "invert(0%)",
    }
  );
});

// nav-text animation (about) - mouseleave
animateTextA.addEventListener("mouseleave", () => {
  // stop the mouseenter animation
  gsap.killTweensOf(splitAClone.chars);
  gsap.killTweensOf(splitA.chars);

  //clone text going below
  gsap.fromTo(
    splitAClone.chars,
    {
      y: 0,
      stagger: 0.05,
    },
    {
      autoAlpha: 0,
      y: 15,
      duration: 1,
      "-webkit-filter": "invert(0%)",
      filter: "invert(0%)",
      // color: "white",
      fontFamily: "neueHaas",
      fontWeight: "500",
    }
  );

  // nav-text going on top
  gsap.fromTo(
    splitA.chars,
    {
      y: -15,
      stagger: 0.05,
    },
    {
      y: 0,
      duration: 1.3,
      "-webkit-filter": "invert(0%)",
      filter: "invert(0%)",
    }
  );
});

// nav-text animation (works) - mouseleave
animateTextW.addEventListener("mouseleave", () => {
  // stop the mouseenter animation
  gsap.killTweensOf(splitWClone.chars);
  gsap.killTweensOf(splitW.chars);

  //clone text going below
  gsap.fromTo(
    splitWClone.chars,
    {
      y: 0,
      stagger: 0.05,
    },
    {
      autoAlpha: 0,
      y: 15,
      duration: 1,
      "-webkit-filter": "invert(0%)",
      filter: "invert(0%)",
      // color: "white",
      fontFamily: "neueHaas",
      fontWeight: "500",
    }
  );

  // nav-text going on top
  gsap.fromTo(
    splitW.chars,
    {
      y: -15,
      stagger: 0.05,
    },
    {
      y: 0,
      duration: 1.3,
      "-webkit-filter": "invert(0%)",
      filter: "invert(0%)",
    }
  );
});

// ----- could be splitted here -----

// projects hovering animation
const projectImgs = document.querySelectorAll(".project-img");

// start looping
projectImgs.forEach((hoveredImg) => {
  hoveredImg.addEventListener("mouseenter", () => {
    projectImgs.forEach((img) => {
      if (img !== hoveredImg) {
        gsap.set(img, {
          filter: "grayscale(1)",
        });
      }
    });
  });

  hoveredImg.addEventListener("mouseleave", () => {
    projectImgs.forEach((img) => {
      gsap.set(img, {
        filter: "grayscale(0)",
      });
    });
  });
});

//---- could be splitted here ----

//scroll to top button
const backToTopButton = document.getElementById("backToTop");

backToTopButton.addEventListener("click", () => {
  gsap.to(window, { duration: 1, scrollTo: 0 });
});
