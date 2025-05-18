function Ai() {
  window.addEventListener('load', function () {
    const btn = document.getElementById("aibtn");
    if (btn) {
      btn.addEventListener("click", function () {
        if (window.botpress) {
          window.botpress.toggle(true); 
        } else {
          console.error("Botpress not loaded yet!");
        }
      });
    }
  });

  window.botpress.on("webchat:ready", () => {

  });
  window.botpress.init({
    "botId": "0cefe9fa-4ac2-4c4f-bbf5-fb4c1eabe1fc",
    "configuration": {
      "composerPlaceholder": "Ask anything.",
      "botName": "TravAI",
      "botAvatar": "https://files.bpcontent.cloud/2025/04/25/09/20250425094543-T1F8KAUC.png",
      "botDescription": "TravAI - your Travel Ally",
      "website": {},
      "email": {},
      "phone": {},
      "termsOfService": {},
      "privacyPolicy": {},
      "color": "#ffffff",
      "variant": "solid",
      "themeMode": "dark",
      "fontFamily": "rubik",
      "radius": 1,
      "additionalStylesheetUrl": "https://files.bpcontent.cloud/2025/04/25/10/20250425103316-6WHN0EX8.css",
      "allowFileUpload": true,
      "storageLocation": "localStorage"
    },
    "clientId": "a85b9567-bd0d-4885-aac3-45dca7e4c659",
    "selector": "#webchat"
  });
}
Ai()


function loco() {

  gsap.registerPlugin(ScrollTrigger);

  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smartphone: {
      smooth: true
    },
    tablet: {
      smooth: true
    }
  });

  scroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? scroll.scrollTo(value, 0, 0)
        : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  
  ScrollTrigger.addEventListener("refresh", () => scroll.update());
  ScrollTrigger.refresh();

  
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        scroll.scrollTo(target);
      }
    });
  });

}
loco()

function gsapanime() {
  var tl = gsap.timeline()


  tl.from(".nav-bar", {
    y: -1000,
    duration: 1.5,
    opacity: 0
  })
  tl.from(".hero-section h1 ,.page-p", {
    y: 800,
    duration: 1,

  })
  tl.from("#aibtn", {
    y: 50,
    opacity: 0
  })
  tl.from(".explore-content h1, .explore-content p", {
    y: 800,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top bottom",
      end: "top 30%",
      scrub: 4


    }
  })
  gsap.from(".gallery-item", {
    scrollTrigger: {
      trigger: "#travel-gallery",
      start: "top 80%",
      toggleActions: "play none none reset",
      scroller: "#main",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  });




}
gsapanime()


function sheryjs(){
  Shery.imageEffect(".image-div", {
  style: 5,
  config: { "a": { "value": 3.89, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7272695760684946 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 2.59, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.69, "range": [0, 10] }, "metaball": { "value": 0.5, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.32, "range": [0, 2] }, "noise_scale": { "value": 12.98, "range": [0, 100] } },
  gooey: true,
});
}
sheryjs()

function canva() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  const frame = {
    currentIndex: 0,
    maxIndex: 810
  }
  let imageloaded = 0
  const images = [];
  function preloadImage() {
    for (var i = 1; i <= frame.maxIndex; i++) {
      const imageUrl = `./Assests/TravAiFrames/frame_${i.toString().padStart(4, "0")}.jpeg`
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        imageloaded++;
        if (imageloaded === frame.maxIndex) {
          // console.log("all images are loaded")
          loadImage(frame.currentIndex);
          startAnimation();
        }
      }
      images.push(img);
    }
  }
  function loadImage(index) {
    if (index >= 0 && index <= frame.maxIndex) {
      const img = images[index];
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);

      const newWidth = img.width * scale;
      const newHeight = img.height * scale;

      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      frames.currentIndex = index;
    }
  }
  function startAnimation() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".p3-main",
        scroller: "#main",
        start: "top top",
        pin: true,
        pinType: "transform",
        scrub: 2,
        


      }
    })
    tl.to(frame, {
      currentIndex: frame.maxIndex,
      onUpdate: function () {
        loadImage(Math.floor(frame.currentIndex))
      }
    })
  }
  preloadImage()


}
canva()


function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}
openModal()

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
closeModal()
