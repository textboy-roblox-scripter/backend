import fetch from "node-fetch";

export async function handler(event, context) {
  try {
    const data = JSON.parse(event.body);

    const webhookUrl = "https://discord.com/api/webhooks/1419598770211127358/XwtQCk1Dl6wDuhG2CFBWwJWAIFkcnuyVFXdkgRY8jQpIOMQDpRwT8p4zxfO0Aj6XBFOz"; // your real webhook

    let content = data.content;
    if (!content && data.ticketId) {
      content = `@here 🚨 New ticket opened by **${data.username}**\nLink: https://paradise-community.netlify.app/ticket.html?id=${data.ticketId}`;
    }

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content })
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
