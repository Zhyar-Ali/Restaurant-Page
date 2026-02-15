import back from "../img/rest-back.jpg"
import pasta from "../img/pasta.jpeg";
import pizza from "../img/pizza.jpeg";

const loadMenu = (function (){

    const content = document.getElementById("content");

    const load = () => {

        const pastaimg = document.createElement("img");
        pastaimg.src = pasta;
        pastaimg.classList.add("menuimg");

        const h3pasta = document.createElement("h3");
        h3pasta.textContent = "Pasta";
        h3pasta.classList.add("menuname");

        const pastadiv = document.createElement("div");
        pastadiv.append(pastaimg,h3pasta);
        pastadiv.classList.add("menuitem");

        const pizzaimg = document.createElement("img");
        pizzaimg.src = pizza;
        pizzaimg.classList.add("menuimg");

        const h3pizza = document.createElement("h3");
        h3pizza.textContent = "Pizza";
        h3pizza.classList.add("menuname");

        const pizzadiv = document.createElement("div");
        pizzadiv.append(pizzaimg,h3pizza);
        pizzadiv.classList.add("menuitem");

        const img = document.createElement("img");
        img.src = back;
        img.classList.add("background");

        const div = document.createElement("div");
        div.append(pastadiv,pizzadiv);
        div.classList.add("menu-container");

        content.append(div,img);
    };

    return { load };
})();

export {loadMenu};