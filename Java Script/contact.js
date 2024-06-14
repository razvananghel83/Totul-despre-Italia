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


  function saveFormData() {
  

    localStorage.setItem('name', JSON.stringify(document.getElementById("name").value) );
    localStorage.setItem('email', JSON.stringify(document.getElementById("email").value) );
    localStorage.setItem('phoneNumber', JSON.stringify(document.getElementById("phone").value) );
    localStorage.setItem('subject', JSON.stringify(document.getElementById("subject").value) );
    localStorage.setItem('message', JSON.stringify(document.getElementById("message").value) );

    alert('Datele din formular au fost salvate local.');
    createTextBox();
}



function randomFormColor() {

    const formItems = document.querySelectorAll( ".item" );
    var color = random_color();
    console.log(formItems);
    console.log(color);

    formItems.forEach( (item) => item.style.borderColor = color );   
}

function random_color () {

  var rmd_red = Math.floor( Math.random() * 256 );
  var rmd_green = Math.floor( Math.random() * 256 );
  var rmd_blue = Math.floor( Math.random() * 256 );
  return `rgb( ${ rmd_red }, ${ rmd_green }, ${ rmd_blue } )`;
}


randomFormColor();


function createTextBox() {

  var name = localStorage.getItem("name");
  var email = localStorage.getItem("email");
  var phone = localStorage.getItem("phoneNumber");
  var subject = localStorage.getItem("subject");
  var message = localStorage.getItem("message");


  var textBox = document.createElement("textarea");
  textBox.setAttribute( "class", "local-storage-text" );
  textBox.type = "text";
  
  textBox.value = "Datele salvate sunt următoarele: \nNume: " + name + "\nE-mail: " + email + "\nNumăr de telefon: " + phone
                + "\nSubiect: " + subject + "\nMesaj: " + message;
  console.log(textBox.value);

  const button = document.getElementById("submit-button");
  button.insertAdjacentElement('afterend', textBox );
}

