// Handle Signup Form
if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        if (email && password) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            alert('Signup successful! Redirecting to login.');
            window.location.href = 'login.html';
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Handle Login Form
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        let loginEmail = document.getElementById('loginEmail').value;
        let loginPassword = document.getElementById('loginPassword').value;

        let storedEmail = localStorage.getItem('email');
        let storedPassword = localStorage.getItem('password');

        if (loginEmail === storedEmail && loginPassword === storedPassword) {
            alert('Login successful! Redirecting...');
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid credentials or no account found.');
        }
    });
}
