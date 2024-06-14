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


