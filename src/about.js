import back from "../img/rest-back.jpg"

const loadAbout = (function (){

    const content = document.getElementById("content");

    const load = () => {

        const img = document.createElement("img");
        img.src = back;
        img.classList.add("background");

        content.append(img);
    };

    return { load };
})();

export {loadAbout};