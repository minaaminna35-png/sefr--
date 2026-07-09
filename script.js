

const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};



const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(80px)";

    card.style.transition = ".8s";

    observer.observe(card);

});



const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// يقفل القائمة بعد الضغط على أي لينك
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});