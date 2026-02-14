import "./styles.css"
import { loadMain } from "./home.js";
import { loadAbout } from "./about.js";
import { loadMenu } from "./menu.js";

loadMain.load();

const loadPage = (function (){
    const content = document.getElementById("content");
    const homeButton = document.getElementById("home");
    const aboutButton = document.getElementById("about");
    const menuButton = document.getElementById("menu");

    const loadHomePage = () => {
        homeButton.addEventListener("click", () => {
            content.innerHTML = "";
            loadMain.load();
        });
    };

    const loadAboutPage = () => {
        aboutButton.addEventListener("click", () => {
            content.innerHTML = "";
            loadAbout.load();
        });
    };

    const loadMenuPage = () => {
        menuButton.addEventListener("click", () => {
            content.innerHTML = "";
            loadMenu.load();
        });
    };

    return { loadHomePage, loadAboutPage, loadMenuPage };

})();

loadPage.loadHomePage();
loadPage.loadAboutPage();
loadPage.loadMenuPage();