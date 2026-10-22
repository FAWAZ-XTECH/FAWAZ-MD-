module.exports = async (sock, m) => {
    try {
        const { remoteJid } = m.key;

        const aliveTemplate = `╭━━━〔 *FAWAZ-MD* 〕━━━⬣
┃ 🛰️ *Status:* \`Online & Stable\`
┃ ⚙️ *Version:* \`2.0.0\`
┃ 💎 *Platform:* \`Pterodactyl / Cloud\`
╰━━━━━━━━━━━━━━━━━━━━⬣

> *Rift Md is fully operational and ready to serve.* 💜`.trim();

        // Send the image along with the text as caption and channel info
        await sock.sendMessage(remoteJid, { 
            image: { url: "https://files.catbox.moe/91175g.png" }, // Change image link if needed
            caption: aliveTemplate,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363431332968389@newsletter",
                    newsletterName: "FAWAZ-MD",
                    serverMessageId: 100
                }
            }
        }, { quoted: m });

        // Send the voice note (PTT) afterwards
        await sock.sendMessage(remoteJid, { 
            audio: { url: " " }, 
            mimetype: 'audio/mp4', 
            ptt: true 
        }, { quoted: m });

    } catch (error) {
        console.error("Error in alive command:", error);
    }
};
