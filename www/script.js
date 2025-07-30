$(document).ready(function () { // Run this function when fully loaded
    $('#loginForm').on('submit', function (e) { // when submit button is pressed
      e.preventDefault(); // Prevents default form submission behavior which is page reload
  
      const email = $('input[name="email"]').val(); // retrieve email input field value
      const password = $('input[name="password"]').val(); // retrieve password input field value
  
      $.post('/login', { email, password }, function (response) { // SendS POST request to server with the email and password
        if (response.valid) {  // go to account if valid login
          window.location.href = '/account';
        } else { // show error message if non valid login. 
          $('#errormsg').removeClass('d-none').addClass('d-block');
        }
      });
    });
  });