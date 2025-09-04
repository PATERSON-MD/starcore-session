const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Kervens_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function PATETSON_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Kervens_King = Kervens_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Kervens_King.ev.on('creds.update', saveCreds)
			Qr_Code_By_Kervens_King.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Kervens_King.sendMessage(Qr_Code_By_Kervens_King.user.id, { text: 'patetson~' + b64data });
	
				   let PATETSON_MD_TEXT = `
╭─═━⌬━═─⊹⊱✦⊰⊹─═━⌬━═─ 
╎   『 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃 』   
╎  ✦ PATETSON-MD SESSION
╎  ✦  ʙʏ KERVENS KING
╰╴╴╴╴

▌   『 🔐 𝐒𝐄𝐋𝐄𝐂𝐓𝐄𝐃 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 』   
▌  • Session ID:  
▌  ⛔ [ Please set your SESSION_ID ] 

╔═
╟   『 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 & 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 』  
╟  👑 𝐎𝐰𝐧𝐞𝐫: 50942737567  
╟  💻 𝐑𝐞𝐩𝐨: github.com/Kervens-King/PATETSON-MD  
╟  👥 𝐖𝐚𝐆𝐫𝐨𝐮𝐩: https://chat.whatsapp.com/GIIGfaym8V7DZZElf6C3Qh?mode=ac_t 
╟  📢 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: https://whatsapp.com/channel/0029Vb6KikfLdQefJursHm20 
╰  
✦⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅✦  
   𝐄𝐍𝐉𝐎𝐘 𝐏𝐀𝐓𝐄𝐓𝐒𝐎𝐍-𝐌𝐃!  
✦⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅⋆⋅✦  
______________________________
★彡[ᴅᴏɴ'ᴛ ғᴏʀɢᴇᴛ ᴛᴏ sᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ!]彡★`;
	 await Qr_Code_By_Kervens_King.sendMessage(Qr_Code_By_Kervens_King.user.id,{text:PATETSON_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Kervens_King.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					PATETSON_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await PATETSON_MD_QR_CODE()
});
module.exports = router
