import {generate_home, generate_menu, generate_about} from "./generate_content.js"
import "./styles.css";

const content = document.querySelector("#content");

function init() {
    generate_home(document);

    document.querySelector("#home-btn").addEventListener("click", () => {
        content.innerHTML = "";
        generate_home(document);
    });
    document.querySelector("#menu-btn").addEventListener("click", () => {
        content.innerHTML = "";
        generate_menu(document);
    });
    document.querySelector("#about-btn").addEventListener("click", () => {
        content.innerHTML = "";
        generate_about(document);
    });
}

document.addEventListener("DOMContentLoaded", init);
