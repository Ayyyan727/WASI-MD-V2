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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUQ4d3R3YW5UeGNjNEREanIxTld2Rm9wZEhDSmdXOS9IanVzK1hpYkRrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2FqTjlaRGpSZ2FyeXluMi9xVWtOK2NyVkVjSWltMnlneXBsV20renJEST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TjNIa3B1Q3g3UUVVdVBaNHAvdEZ0SWNpUDdtL2JLMHZyZ3BvQ2lBdTI0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QjlpMG01ZVRCSGU3V0hYRmZNUis0RUNMVitva01RcEhjZm0rYWM3SmpRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitISC85bkFoMU1jb2drRkNxRWlDQ2ZHcUJMTXhKcjNMcE12cGxFcTBEbk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRmTFFYQmV6aFhYdlBJRTMxMVdJakk5UUpaa24vRjArQ3N1QUxEZDFnRnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZON21JM2VNWUNJZ1dpcjlzcVpXc1lSeE9vbnhnT1RaaHlzbDZ1b21WZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibm44QlREM3ladmRQcThzNmFqRUU0SWMwTVNhVUt5K09WMzIxYSttUjZraz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlViTXZvKytWemJXMDhnaHZuazI3Nkgwd3dMdVFhdDVGTUNsWHFOdGh2NEh0ajdhalhpNUZ5c2RTclkySlUxYmlDZTMxeDBmT3FUUzViWTVTMng0QUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiJvSFEvRmlXV21GUDJvRGxTNUhoYU1yMzZpUmlMSkJqd1FXT0NXZVdRQW1rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE0Mzc3ODEyNTU2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMwNTZGRkJCMTI3MjAwNDJDNDU2NkE1QzZBOEZEQ0ZEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIyNzQ4NTN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE0Mzc3ODEyNTU2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZGNzkwMERBRTdBRDRGMjBBODY3NTRBRDI2OThERDFCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIyNzQ4NTN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InZjcVJyMTk2UzhPa0szT2poR2VCVlEiLCJwaG9uZUlkIjoiYWQzYmQ2NjItZmRkZS00YjMzLWExNjktYmNiMzQwZDM1YzFiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQvaWZiVGpJUS9NZkJ4aUJQazBudkZsQXRibz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJscTYrVzNDRWJBbEE1bUZsZEU4aFZHT05vRGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTkE0MTJTRkUiLCJtZSI6eyJpZCI6IjE0Mzc3ODEyNTU2OjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01XS3gzc1FscWlmdFFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRxb2RDeDZSR2FlR2JES0VaVWpmQXNpd2FXbFIwdmVqMXZoNHVSMlFWSEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdlSEZxbFNpcWV0eW94Q2RQcC8vWEJ6QkRkZnpJS3d0b1dOMCsveFl4WmxwVk8yWXNqV3Q0bktkdGd4QWFZU0hGUEtmM3YwMXVTcDg0cHpKVFFrdUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0N0w4UUg4dkw5UVcrQ3dZcCs2RFlxSjBuWFhaNjk0a0lJeUVId1Nxck9POEUxZHEyQ1gxLzZnUUp2UVpPTEdkbzA2cXZaajVneVlCSExxR3dWVnJEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE0Mzc3ODEyNTU2OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVTZxSFFzZWtSbW5obXd5aEdWSTN3TElzR2xwVWRMM285YjRlTGtka0ZSdyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjI3NDg1MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEL00ifQ=="
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
