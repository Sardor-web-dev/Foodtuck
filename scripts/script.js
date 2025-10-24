renderAchievements(arr)
renderFoodTypes(foodTypes)
renderRecentPosts(recentPosts)
renderMenuItems(menuItems)
renderChefs(chefs)
renderBlogs(blogs)

const swiperBtn = document.querySelectorAll(".swiper__btn")

swiperBtn.forEach((btn) => {
    btn.onclick = () => {
        swiperBtn.forEach(b => {
            b.classList.add("disactive")
            b.classList.remove("active")
        });
        
        btn.classList.remove("disactive")
        btn.classList.add("active")

    }
})