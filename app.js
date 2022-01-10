// var ale = document.getElementById("ale")
// ale.innerHTML = "<h1 class="alert alert-dark" role="alert">
// Form Submited Successfully
// </h1>"

// ale.innerHTML = "<P> Hello</p>"

// function myFunction() {
   
//     alert("Form Submitted Successfully" );
//   }

var nextStep = document.querySelector('#nextStep');



  nextStep.addEventListener('click', function (e) {

    e.preventDefault();

    // Hide first view

    document.getElementById('my_form').style.display = 'none';



    // Show thank you message element

    document.getElementById('thank_you').style.display = 'block';




  });