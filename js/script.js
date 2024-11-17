// Menüyü açma fonksiyonu
function openMenu() {
    document.getElementById("overlay").style.width = "100%";
}

// Menüyü kapatma fonksiyonu
function closeMenu() {
    document.getElementById("overlay").style.width = "0%";
}

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        projectCards.forEach(card => {
            if (category === "all" || card.getAttribute("data-category") === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
