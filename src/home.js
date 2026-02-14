import back from "../img/rest-back.jpg"
const loadMain = (function (){

    const content = document.getElementById("content");

    const load = () => {
        const h1 = document.createElement("h1");
        h1.textContent = "Saffron Ember";
        h1.classList.add("name");

        const h3 = document.createElement("h3");
        h3.textContent = "Where Fire Meets Flavor";
        h3.classList.add("quote");

        const p = document.createElement("p");
        p.textContent = "At Saffron Ember, every dish is a celebration of bold spices, slow-simmered passion, and artful presentation. Our chefs transform the freshest seasonal ingredients into unforgettable culinary experiences, blending modern elegance with comforting warmth. From the first aromatic bite to the final decadent dessert, Saffron Ember invites you to linger, savor, and indulge in an atmosphere where exceptional service and extraordinary flavor come together beautifully.At Saffron Ember, every dish is a celebration of bold spices, slow-simmered passion, and artful presentation. Our chefs transform the freshest seasonal ingredients into unforgettable culinary experiences, blending modern elegance with comforting warmth. From the first aromatic bite to the final decadent dessert, Saffron Ember invites you to linger, savor, and indulge in an atmosphere where exceptional service and extraordinary flavor come together beautifully.";
        p.classList.add("description");

        const img = document.createElement("img");
        img.src = back;
        img.classList.add("background");

        const div = document.createElement("div");
        div.append(h1,h3,p);
        div.classList.add("home-container");

        const maindiv = document.createElement("div");
        maindiv.append(div);
        maindiv.classList.add("main-container");

        content.append(maindiv,img);
    };

    return { load };
})();

export {loadMain};