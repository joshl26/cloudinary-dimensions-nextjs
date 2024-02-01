function runDimensions(id) {
  if (!id) {
    return;
  }

  const d8sApi = window.initDimensions({
    account: "BlackrockDesign",
    // account: "cloudinary-dimensions",
    viewers: [
      window.initDimensions.VIEWERS.IMAGE,
      //   // window.initDimensions.VIEWERS.VIDEO,
      window.initDimensions.VIEWERS.THREE_D,
    ],
    imageViewer: {
      params: {},
      className: "my-ecomm-image",
    },
    // videoViewer: {
    // 	params: {
    // 		autoplay: true,
    // 		volume: 0,
    // 		loop: true,
    // 	},
    // 	className: "my-ecomm-video",
    // },
    threeDViewer: {
      viewer: {
        controls: {
          position: "center",
        },
        showLoadingProgress: false,
      },
    },
    // baseUrl: "https://res.cloudinary.com/",
  });

  const unregister = d8sApi?.on((event, ...args) => {
    const data = args[0];
    if (data?.type === "MODEL_LOADED") {
      document.getElementById("three-d-container")?.classList.add("show");
    }
  });
  //unregister(); //call to remove listener
}

function setProductTitle(id) {
  const desktopTitle = document.getElementById("title-desktop");
  const mobileTitle = document.getElementById("title-mobile");
  desktopTitle.innerHTML = PRODUCTS_INFO[id].title;
  mobileTitle.innerHTML = PRODUCTS_INFO[id].title;
}

function preloadProductZoomImage(id) {
  ZOOM_IMAGE_URL = `https://dimensions-art.cloudinary.net/d8s-BlackrockDesign/image/upload/f_auto,q_auto,w_1000/${id}/shoes/`;
  TEMPLATES.forEach((templateName) => {
    const image = new Image();
    image.src = ZOOM_IMAGE_URL + templateName;
  });
}

function zoom(e) {
  e.preventDefault();
  const container = e.currentTarget;
  let offsetX, offsetY;
  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches?.[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetY = e.touches?.[0].pageY);
  const x = Math.min(Math.max((offsetX / container.offsetWidth) * 100, 0), 100);
  const y = Math.min(
    Math.max((offsetY / container.offsetHeight) * 100, 0),
    100
  );
  container.style.backgroundPosition = x + "% " + y + "%";
}

function setZoomImage(e) {
  const container = e.currentTarget;
  const templateName = container.dataset.d8sName;
  container.style.backgroundImage = `url(${ZOOM_IMAGE_URL}${templateName})`;
}

function removeZoomImage(e) {
  const zoomer = e.currentTarget;
  zoomer.style.backgroundImage = "none";
}

function initContainers(id) {
  document.getElementById("three-d-viewer")?.setAttribute("data-d8s-id", id);

  document.querySelectorAll("div.product-image")?.forEach((img) => {
    img.setAttribute("data-d8s-id", id);

    img.addEventListener("mouseenter", setZoomImage);
    img.addEventListener("touchstart", setZoomImage);

    img.addEventListener("mousemove", zoom);
    img.addEventListener("touchmove", zoom);

    img.addEventListener("mouseleave", removeZoomImage);
    img.addEventListener("touchend", removeZoomImage);
  });
}

let ZOOM_IMAGE_URL;
const PRODUCTS_INFO = {
  "DOG-ACC-SILVER-01": {
    title: "Colorful Shoes",
  },
};
const TEMPLATES = [
  "sample-side-180",
  "sample-top-305",
  "sample-top-45",
  "sample-bottom",
  "sample-side-90",
  "sample-stand-front",
];

// const sku = window.location.search
const sku = "DOG-ACC-SILVER-01";
//   .replace("?", "")
//   .split("&")
//   .map((pair) => pair.split("="))
//   .filter(([key, value]) => key === "sku")?.[0]?.[1];

if (!sku) {
  console.warn("No product SKU present in the URL!!!");
} else {
  preloadProductZoomImage(sku);
  setProductTitle(sku);
  initContainers(sku);
  runDimensions(sku);
}

// preloadProductZoomImage(sku);
// setProductTitle(sku);

// initContainers(sku);
// runDimensions(sku);
