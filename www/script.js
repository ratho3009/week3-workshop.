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




  

  /*
  $(document).ready(function () {
  $('#loginForm').on('submit', function (e) {
    e.preventDefault(); // Forhindrer standard form-submission

    const email = $('#email').val();
    const password = $('#password').val();

    $.ajax({
      type: 'POST',
      url: '/login',
      contentType: 'application/json',
      data: JSON.stringify({ email, password }),
      dataType: 'json',
      success: function (response) {
        if (response.valid) {
          // Gå til account-siden ved suksess
          window.location.href = '/account';
        } else {
          // Vis feilmelding ved ugyldig login
          $('#errormsg')
            .removeClass('d-none')
            .addClass('d-block')
            .css('background-color', '#f8d7da');
        }
      },
      error: function (xhr, status, error) {
        console.error('Login request failed:', status, error);
        alert('Something went wrong with the login request.');
      }
    });
  });
});
  */