async function sendMessage() {
    const webhookURL = "YOUR_DISCORD_WEBHOOK_URL"; // Replace with your Discord webhook URL
    const message = document.getElementById("messageInput").value;

    if (!message) {
        alert("Please enter a message!");
        return;
    }

    // Create the payload for the webhook
    const payload = {
        embeds: [
            {
                title: "Cookie alert!",
                description: message,
                color: 65280 // Green color for the embed
            }
        ]
    };

    try {
        // Send the payload to the Discord webhook
        const response = await fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("Message sent successfully!");
        } else {
            alert("Failed to send message. Please check your webhook URL.");
        }
    } catch (error) {
        console.error("Error sending message:", error);
        alert("An error occurred while sending the message. Please try again.");
    }
}
