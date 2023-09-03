function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    const fullName = document.forms["signupForm"]["fullName"].value;
    const email = document.forms["signupForm"]["email"].value;
    const password = document.forms["signupForm"]["password"].value;

    // Get the user's IP address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;

            // Check if the user is from Pakistan
            fetch(`https://ipapi.co/${ipAddress}/country/`)
                .then(response => response.text())
                .then(country => {
                    if (country.trim().toLowerCase() === 'pk') {
                        // User is from Pakistan
                        alert('Sign up Successful!');
                    } else {
                        // User is not from Pakistan
                        alert('You cannot register, Only Pakistani users can Sign up.');
                    }
                })
                .catch(error => {
                    console.error(error);
                    alert('An error occurred while checking the user location.');
                });
        })
        .catch(error => {
            console.error(error);
            alert('An error occurred while retrieving the user IP address.');
        });
}
