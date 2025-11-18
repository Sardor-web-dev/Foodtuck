import './styles/style.css'
import { router, navigate } from "./router.js";

router();

document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigate(e.target.href);
    }
});
