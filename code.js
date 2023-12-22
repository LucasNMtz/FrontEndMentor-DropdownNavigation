const dropdownMenuButton = document.getElementById("dropdown-menu-button");
const dropdownMenuButtonIMG = document.querySelector('[alt="Menu button"]');
const dropdownMenu = document.querySelector(".dropdown-menu");
const logo = document.querySelector(".logo-container");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

dropdownMenuButton.addEventListener("click", () => {
    // Check if the dropdown menu is active.
    const DropdownMenuActive = dropdownMenu.classList.contains("active");

    if (!DropdownMenuActive) {
        dropdownMenuButtonIMG.src = dropdownMenuButtonIMG.src.replace("-menu.svg", "-close-menu.svg");
        logo.classList.toggle("dropdown-active");
        main.classList.toggle("dropdown-active");
        footer.classList.toggle("dropdown-active");
    } else {
        dropdownMenuButtonIMG.src = dropdownMenuButtonIMG.src.replace("-close-menu.svg", "-menu.svg");
        logo.classList.remove("dropdown-active");
        main.classList.remove("dropdown-active");
        footer.classList.remove("dropdown-active");
    }

    dropdownMenu.classList.toggle("dropdown-menu-active", !DropdownMenuActive);

    dropdownMenu.classList.toggle("active");
})

// Dropdown menu active:
const dropdownOptionButtons = document.querySelectorAll(".dropdown-option-button-container");
const arrows = document.querySelectorAll('[alt="Arrow"]');
const dropdownOptionContainers = document.querySelectorAll(".dropdown-option-container");

const dropdownOptionULs = document.querySelectorAll(".dropdown-option-ul"); // Desktop condition.

dropdownOptionButtons.forEach((button, index) => {
    // Hover:
    button.addEventListener("mouseenter", () => {
        arrows[index].src = arrows[index].src.replace(".svg", "-black.svg");
    });
    button.addEventListener("mouseleave", () => {
        arrows[index].src = arrows[index].src.replace("-black.svg", ".svg");
    });
    // Hover.
    button.addEventListener("click", () => {
        // Check if the options container is active.
        const isDropdownActive = dropdownOptionContainers[index].classList.contains("active");

        if (!isDropdownActive) {
            arrows[index].src = arrows[index].src.replace("-down", "-up");
        } else {
            arrows[index].src = arrows[index].src.replace("-up", "-down");
        }

        dropdownOptionContainers[index].classList.toggle("dropdown-option-upper-container-active", index === 0 && !isDropdownActive);
        dropdownOptionContainers[index].classList.toggle("dropdown-option-bottom-container-active", index !== 0 && !isDropdownActive);

        dropdownOptionContainers[index].classList.toggle("active");
        // Desktop condition:
        dropdownOptionULs[index].classList.toggle("dropdown-option-upper-ul-open", index === 0 && !isDropdownActive);
        dropdownOptionULs[index].classList.toggle("dropdown-option-bottom-ul-open", index !== 0 && !isDropdownActive);

        dropdownOptionULs[index].classList.toggle("open");
        // Desktop condition.
    })
})
// Dropdown menu active.

// Main IMG:
const mainIMG = document.querySelector('[alt="Hero image"]');

function handleResize() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1000) {
        mainIMG.src = mainIMG.src.replace("-mobile.png", "-desktop.png");
    }else{
        mainIMG.src = mainIMG.src.replace("-desktop.png", "-mobile.png");
    }
}
window.addEventListener('resize', handleResize);
handleResize();
// Main IMG.