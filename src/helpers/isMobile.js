export default function () {
  let isMobile = window.innerWidth < 1023;
  window.addEventListener("resize", () => {
    isMobile = window.innerWidth < 1023;
  });
  window.addEventListener("orientationchange", () => {
    isMobile = window.innerWidth < 1023;
  });
  return isMobile;
}
