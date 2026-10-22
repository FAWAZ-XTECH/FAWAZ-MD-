module.exports = async (sock, m, args) => {
    const repoText = `╭━━━〔 🤖 *FAWAZ-MD REPOSITORY* 〕━━━⬣
┃ 🤖 *Bot Name:* FAWAZ-MD
┃ 👑 *Owner:* FAWAZ-XT 
┃ 📦 *GitHub:* https://github.com/FAWAZ-XTECH/FAWAZ-MD-
╰━━━━━━━━━━━━━━━━━━━━⬣`;

    const channelInfo = {
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363431332968389@newsletter',
                newsletterName: 'FAWAZ-MD',
                serverMessageId: -1
            }
        }
    };

    await sock.sendMessage(m.key.remoteJid, {
        image: { url: "https://files.catbox.moe/91175g.png" },
        caption: repoText,
        ...channelInfo
    }, { quoted: m });
};
