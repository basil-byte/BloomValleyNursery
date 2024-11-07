//Validate subscribe email
  document.getElementById('email').addEventListener('input', function (event) {
      const subscribeButton = document.getElementById('subscribeBtn');
      if (this.validity.valid) {
          subscribeButton.disabled = false;
      } else {
          subscribeButton.disabled = true;
      }
  });

//Store email in local storage
  document.getElementById('subscribeBtn').addEventListener('click', function () {
      const email = document.getElementById('email').value;
      localStorage.setItem('email', email);
  });

// Feedback email validation 
  document.getElementById('feedbackEmail').addEventListener('input', function (event) {
      const feedbackButton = document.getElementById('feedback');
      feedbackButton.disabled = !event.target.validity.valid;
  });
