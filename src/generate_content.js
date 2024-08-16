import kookaburra_img from "./static/kookaburra.jpg"

function generate_home(document) {
    const content = document.querySelector("#content");

    const header = document.createElement("h1");
    header.innerText = "Kookaburra restaurant";
    content.appendChild(header);

    const img = document.createElement("img");
    img.src = kookaburra_img;
    img.alt = "kookaburra";
    content.appendChild(img);
}

function generate_menu(document) {
    const content = document.querySelector("#content");

    const header = document.createElement("h1");
    header.innerText = "Menu";
    content.appendChild(header);

    const blank = document.createElement("div");
    blank.innerText = "Nothing here :(";
    content.appendChild(blank);
}

function generate_about(document) {
    const content = document.querySelector("#content");

    const header = document.createElement("h1");
    header.innerText = "About";
    content.appendChild(header);

    const author = document.createElement("div");
    author.innerText = "Made by Alexdat2000";
    content.appendChild(author);
}

export {generate_home, generate_menu, generate_about};
