function displayMenu() {

    menu = document.querySelector( '.nav' );

    if( menu.style.display == "none" ) {

      menu.style.maxHeight = "100em";
      menu.style.display = "block";
    }
    else{

      menu.style.maxHeight = "0";
      menu.style.display = "none";
    }

  }



  let scrollContainer = document.querySelector(".gallery");
  let backBtn = document.getElementById("previous-button");
  let nextBtn = document.getElementById("next-button");

  nextBtn.addEventListener("click", () => {

        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 900;
  })

  backBtn.addEventListener("click", () => {

    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})



