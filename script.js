document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // Simulate a login check
    if (email === 'test@example.com' && password === 'password') {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
    } else {
        message.textContent = 'Invalid email or password';
    }
});