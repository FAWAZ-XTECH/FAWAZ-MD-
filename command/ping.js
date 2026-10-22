module.exports = async (sock, m, args) => {
    const chatId = m.key.remoteJid;

    const start = Date.now();

    const msg = await sock.sendMessage(
        chatId,
        {
            text: ",🚀 Pinging..."
        },
        { quoted: m }
    );

    const latency = Date.now() - start;

    await sock.sendMessage(
        chatId,
        {
            text:
`╭━━━〔 *FAWAZ-MD PING* 〕━━━⬣
┃ 🚀 *Ping!*
┃ ⚡ *Speed:* ${latency} ms
┃ 🤖 *Bot:* FAWAZ-MD
╰━━━━━━━━━━━━━━━━━━━━⬣`
        },
        { quoted: m }
    );
};
