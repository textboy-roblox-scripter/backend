// netlify/functions/log-to-discord.js
import fetch from "node-fetch";

export async function handler(event) {
  try {
    const { content } = JSON.parse(event.body);

    const webhookUrl = "https://discord.com/api/webhooks/1419598770211127358/XwtQCk1Dl6wDuhG2CFBWwJWAIFkcnuyVFXdkgRY8jQpIOMQDpRwT8p4zxfO0Aj6XBFOz"; 
    // replace with your real webhook

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
