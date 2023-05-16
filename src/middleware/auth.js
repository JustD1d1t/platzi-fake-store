export default function auth({ next }) {
  if (!localStorage.getItem("jwt")) {
    return next({ name: "login" });
  }

  return next();
}
