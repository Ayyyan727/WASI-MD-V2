//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "994404817231";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0RjM0Rmak13dE1mSkVaTHlTZzlFT2dHRTVHUUROaUR5UkJWcDNtSUMxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEc1bW5zMXhmNzVCU3l5OGU5Vmt5WWhSVmZORW5DMTRMUmduM1puTDNHbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTFRQcXl6ajIzd0NyaFFIcWN4WUtXdDNBcDJVL2F6K3l3eUdORlNrUVZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPemk0ZmwrdSt4Z0xzMjcrZG9YblpSMXNjV2xHTERDWkVTQ2ErRmZKTVJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNNTdyL2l6cHpvY2UveDdadjF5UmZ4OWhrN1o1UEd0MU1VTytjc05razg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxUVEdEUVM3ZSszdmpyNXc1amZ5Vk1kVDcwY253WUs1RFkrQ1dxTzNQUlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lhckJqRVQ5ZG5hNGFJdDVVWEFTRlNSTzg3RytHZjhJM1k1ZnU5OVgyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHMvdTFrUTVXdisvclUyUTN0YXF5TjB3QmRxemJwYXM1U3BYdnZlSjhBWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhTdEJ2d3M4Y2xDUkdjMFhSNUhNM1htSlZ4dURBejNUQmRXaG5sWkFabHN2Z2VtY2JJcTlNRitZbWgzdHZGQVlNdnNjaFh1WlVnMjUrUVdDNnFOK2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoiVWdjNktxRG5SbnhtdjdkMmFzbkxuSTlad0h0Sy9OM0lzcjRJTTlhbEpwOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIxNDM3NzgxMjU1NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGOTgxNTA3RUFDRjVFQTVGMDNEM0QzOUIzMUZGMDczMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMzU1NTEyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIxNDM3NzgxMjU1NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4MUZCNEQxNTYyMjQzRjNDRDlCNDNBRkFGRUVDNkRCMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMzU1NTEzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIxNDM3NzgxMjU1NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzMTI5NEM5RTZBMjBCMDYzN0Q1RTE3NEYyQUJEMzg4MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMzU1NTE0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIxNDM3NzgxMjU1NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxMzI5NDU0QjNCQzNBOUQ4MUE3MzhGMzVGNDY0NjQxQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMzU1NTE0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrb3dCMFlDWlNZV1RqUWx6NWNKY09nIiwicGhvbmVJZCI6ImM4Y2NmMDFlLWM4NDAtNGFkMy05ZDVmLWJlMGNmOGFkMGYzMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxY1Q2VC9yOXNkdDQ2aFpnYVNVd1hTb0NaazQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY25EWUcwa0VJRW45bW9adHlFWDB6MkZ1U2NrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJZS0FGNzJYIiwibWUiOnsiaWQiOiIxNDM3NzgxMjU1Njo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFZWUFOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJdTAwN2NIRUttZXBMVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3RzlaWjFhZms1OWl6b2drQkF1UHRVYlBsbmFqbndKWEp3NEt4bmNIZlVVPSIsImFjY291bnRTaWduYXR1cmUiOiJISFZyWFBMU1NpdlNQZTk2Skc5UTZESWkxd29hRXkrYkptYU9DTGFwNWFoKzNISFM4TEhSa2xkQW9NL2k3SDRXcDBURUZwZ2hXUFdQWUsrRjJYMVJEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUGMrV0phSkpJN3Vsd0dkaXJQK1AyUTJmMFNZKzJmODlJa2hvQjFDdUZtMlBEbS9uazRiWnpuSmFhVDRueGlvVjNhRFJIdE9kbDM4Ym53OFFpQ0NNalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNDM3NzgxMjU1Njo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNCdldXZFduNU9mWXM2SUpBUUxqN1ZHejVaMm81OENWeWNPQ3NaM0IzMUYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIzNTU1MTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT0xaIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐀𝐘𝐘𝐀𝐍-𝐗𝐃😍",
  author: process.env.PACK_AUTHER || "𝐋𝐀𝐋𝐀",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Ξ𓆩∘𝑨𝒚𝒚𝒂𝒏∘𓆪Ξ",
  ownername: process.env.OWNER_NAME || "𝄟≛⃝🖤𝑺𝑻𝐀𝑺𝑶 𝑳𝐀𝑳𝐀♥️✨੍᭄͜͡°•𓆩🖤𓆪",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
