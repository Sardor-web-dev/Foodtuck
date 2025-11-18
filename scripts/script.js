renderAchievements(arr)
renderFoodTypes(foodTypes)
renderRecentPosts(recentPosts)
renderMenuItems(menuItems)
renderChefs(chefs)
renderBlogs(blogs)

const trigger = document.querySelector(".dropdown-trigger");
const menu = document.querySelector(".dropdown-menu");
const slides = document.querySelectorAll(".slide");
const buttons = document.querySelectorAll(".swiper__btn");

let currentIndex = 0;

function goToSlide(index) {
    if (index === currentIndex) return;

    const direction = index > currentIndex ? 1 : -1;

    const current = slides[currentIndex];
    const next = slides[index];

    next.style.left = direction === 1 ? "100%" : "-100%";
    next.classList.add("moving-in");

    requestAnimationFrame(() => {
        current.classList.add("moving-out");
        current.style.transform = `translateX(${direction === 1 ? -100 : 100}%)`;

        next.style.transform = "translateX(0)";
        next.style.left = "0";
    });

    setTimeout(() => {
        current.classList.remove("active-slide", "moving-out");
        current.style.transform = "";
        current.style.left = "100%";

        next.classList.add("active-slide");
        next.classList.remove("moving-in");

        currentIndex = index;
    }, 450);

    buttons.forEach(btn => {
        btn.classList.add("disactive");
        btn.classList.remove("active");
    });
    buttons[index].classList.add("active");
    buttons[index].classList.remove("disactive");
}

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        goToSlide(index);
    });
});


trigger.addEventListener("click", () => {
    const isOpen = menu.style.display === "flex";
    menu.style.display = isOpen ? "none" : "flex";
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
        menu.style.display = "none";
    }
});
