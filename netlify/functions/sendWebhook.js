// netlify/functions/sendWebhook.js
export async function handler(event, context) {
  try {
    // Parse the incoming request body
    const body = JSON.parse(event.body);

    
    const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1419598770211127358/XwtQCk1Dl6wDuhG2CFBWwJWAIFkcnuyVFXdkgRY8jQpIOMQDpRwT8p4zxfO0Aj6XBFOz";

    // Send to Discord
    const res = await fetch(DISCORD_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: body.content || "Empty message"
      })
    });

    if (!res.ok) {
      throw new Error(`Discord error: ${res.status}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
