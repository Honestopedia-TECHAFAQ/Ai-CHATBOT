function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value.trim();

    if (message !== '') {
        // Display user message in the chat
        displayMessage('user', message);

        // Get AI response and display in the chat
        var aiResponse = getAIResponse(message);
        displayMessage('ai', aiResponse);

        // Clear input field after sending message
        messageInput.value = '';

        // Scroll to the bottom of the chat messages
        scrollToBottom();
    }
}

function displayMessage(sender, message) {
    var chatMessages = document.getElementById('chat-messages');
    var newMessage = document.createElement('div');
    newMessage.className = sender + '-message';
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);
}

function getAIResponse(userMessage) {
    // Here, you can implement a more sophisticated AI suggestion algorithm
    // For simplicity, let's have a predefined list of commands
    var commands = {
        'project status': 'Check the project dashboard for the latest status.',
        'team collaboration': 'Explore collaboration tools like Slack or Microsoft Teams.',
        'budget report': 'Review the financial report for detailed budget information.',
        'future plans': 'Discuss upcoming projects and strategies in the next team meeting.',
    };

    // Check if the user's message matches any predefined command
    for (var key in commands) {
        if (userMessage.toLowerCase().includes(key)) {
            return commands[key];
        }
    }

    // If no matching command, provide a generic response
    return "I'm sorry, I couldn't understand the command. Please specify a valid command.";
}

function scrollToBottom() {
    var chatMessages = document.getElementById('chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
