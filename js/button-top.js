const d = document,
      w = window;
function scrollTopButton() {
    const $scrollBtn= d.querySelector(".fa-arrow-circle-up");

    w.addEventListener("scroll", e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        if(scrollTop > 600) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }

        console.log(w.pageYOffset, d.documentElement.scrollTop);
    });


    d.addEventListener("click", e => {
        if(e.target.matches(".fa-arrow-circle-up")) {
            w.scrollTo({
                behavior: "smooth",
                top: 0
            });
        }
    });
    
}

scrollTopButton();