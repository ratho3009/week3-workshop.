$(document).ready(function () {
    $('#loginForm').on('submit', function (e) {
      e.preventDefault();
  
      const email = $('input[name="email"]').val();
      const password = $('input[name="password"]').val();
  
      $.post('/login', { email, password }, function (response) {
        if (response.valid) {
          // go to account
          window.location.href = '/account';
        } else {
          // show error message
          $('#errormsg').removeClass('d-none').addClass('d-block');
        }
      });
    });
  });