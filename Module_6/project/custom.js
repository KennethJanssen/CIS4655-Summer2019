(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();

// Needed to get Toast Notifications to work
// A $( document ).ready() block.
$( document ).ready(function() {
  $( "#showToast" ).click(function() {
    $('.toast').toast('show');
  });
});

$("#form1").on("submit",function(e) {
   e.preventDefault(); // cancel submission
   window.location.replace("ratings.html");
});

window.onload=function() {
  document.getElementById("form1").onsubmit=function() {
    window.location.replace("ratings.html");
    return false;
  }
}
