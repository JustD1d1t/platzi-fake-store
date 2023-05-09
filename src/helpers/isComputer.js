export default function () {
  let isMobile = window.innerWidth > 1399;
  window.addEventListener("resize", () => {
    isMobile = window.innerWidth > 1399;
  });
  window.addEventListener("orientationchange", () => {
    isMobile = window.innerWidth > 1399;
  });
  return isMobile;
}
