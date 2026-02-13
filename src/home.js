import back from "../img/rest-back.jpg"
const loadMain = (function (){

    const content = document.getElementById("content");

    const load = () => {
        const h1 = document.createElement("h1");
        h1.textContent = "Saffron Ember";

        const h3 = document.createElement("h3");
        h3.textContent = "Where Fire Meets Flavor";

        const p = document.createElement("p");
        p.textContent = "At Saffron Ember, every dish is a celebration of bold spices, slow-simmered passion, and artful presentation. Our chefs transform the freshest seasonal ingredients into unforgettable culinary experiences, blending modern elegance with comforting warmth. From the first aromatic bite to the final decadent dessert, Saffron Ember invites you to linger, savor, and indulge in an atmosphere where exceptional service and extraordinary flavor come together beautifully.At Saffron Ember, every dish is a celebration of bold spices, slow-simmered passion, and artful presentation. Our chefs transform the freshest seasonal ingredients into unforgettable culinary experiences, blending modern elegance with comforting warmth. From the first aromatic bite to the final decadent dessert, Saffron Ember invites you to linger, savor, and indulge in an atmosphere where exceptional service and extraordinary flavor come together beautifully.";

        const img = document.createElement("img");
        img.src = back;

        content.append(h1,h3,p,img);
    };

    return { load };
})();

export {loadMain};