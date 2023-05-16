export default function auth({ next }) {
  if (localStorage.getItem("jwt")) {
    return next({ name: "account" });
  }

  return next();
}
