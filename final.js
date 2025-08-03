// Javascript file for form data collection
 document.getElementById('mailingListForm').addEventListener('submit', async function (event) {
      event.preventDefault(); 

      const email = document.getElementById('email').value;
      const responseMessage = document.getElementById('responseMessage');

      try {
        // This is where the URL would go, if this data were added to an actual database
        const apiUrl = '';

        // This below section sends the entered email address, name, and band to the database/website
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {  //This portion returns a successful message if the data colletion is successful, otherwise it'll return a failure message
          responseMessage.textContent = 'Thank you for your submission. You have been added to our list!';
          responseMessage.style.color = 'green';
        } else {
          responseMessage.textContent = 'Failure, please try again.';
          responseMessage.style.color = 'red';
        }
      }
    });