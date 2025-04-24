const slider = () => {
    const slideButton = document.querySelectorAll(".slide-container .buttons");
    const imageList = document.querySelector(".slide-container .images");


    slideButton.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prevbtn" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
        });
    });

    const handleslidebtn = () => {
        const maxScroll = imageList.scrollWidth - imageList.clientWidth;
        slideButton[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButton[1].style.display = imageList.scrollLeft >= maxScroll ? "none" : "block";
    }

    imageList.addEventListener("scroll", () => {
        handleslidebtn();
    });
}

window.addEventListener("load", slider);