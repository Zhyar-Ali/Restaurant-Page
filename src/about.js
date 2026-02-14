import back from "../img/rest-back.jpg"

const loadAbout = (function (){

    const content = document.getElementById("content");

    const load = () => {

        const h1 = document.createElement("h1");
        h1.innerText = "About Safron Ember";
        h1.classList.add("about");

        const h3loc = document.createElement("h3");
        h3loc.innerText = "Our Location";
        h3loc.classList.add("location");

        const ploc = document.createElement("p");
        ploc.innerText = "128 Ember Street \n Riverside District \n Austin, TX 78701";
        ploc.classList.add("loc-desc");

        const h3hour = document.createElement("h3");
        h3hour.innerText = "Hours of Operation";
        h3hour.classList.add("hour");

        const phour = document.createElement("p");
        phour.innerText = "Monday – Thursday: 4:00 PM – 10:00 PM \n Friday – Saturday: 4:00 PM – 11:30 PM \n Sunday: 4:00 PM – 9:00 PM";
        phour.classList.add("hour-desc");

        const h3con = document.createElement("h3");
        h3con.innerText = "Contact Us";
        h3con.classList.add("contact");

        const pcon = document.createElement("p");
        pcon.innerText = "Owner Email: owner@safronember.com \n General Inquiries: hello@safronember.com";
        pcon.classList.add("con-desc");

        const img = document.createElement("img");
        img.src = back;
        img.classList.add("background");

        const div = document.createElement("div");
        div.append(h1, h3loc, ploc, h3hour, phour, h3con, pcon);
        div.classList.add("home-container");

        const maindiv = document.createElement("div");
        maindiv.append(div);
        maindiv.classList.add("main-container");

        content.append(maindiv, img);
    };

    return { load };
})();

export {loadAbout};