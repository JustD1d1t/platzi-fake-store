export default function () {
  let isTablet = window.innerWidth < 1399 && window.innerWidth > 1023;
  window.addEventListener("resize", () => {
    isTablet = window.innerWidth < 1399 && window.innerWidth > 1023;
  });
  window.addEventListener("orientationchange", () => {
    isTablet = window.innerWidth < 1399 && window.innerWidth > 1023;
  });
  return isTablet;
}
