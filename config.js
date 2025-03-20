//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2347031607829";
global.owner = process.env.OWNER_NUMBER || "2347031607829";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RvVjBlSGI3T1JFRmg1cEdBeTdoU01lMVBzUTl1Q0lZWXd3ODhjV1hXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDFWSEl3OG1rRHJ0WnFjWkJqUWdVYmpia2JIbHJtWW15Y3FZTXcvV3VrQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxS0VrQTNtdVJDVVVRbHEyMk95V3hGM0p1OTF1eHZORTdySkJIQ2xJV1ZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUzhLU2k0MVBxYzMrU3hHaFc1NTgxN240NnFSMEtOUjY3ZHVnVkxha0ZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllBZHRZYStaREppQURlemY3bXlMUmhhRHo1Ry9FVFpJSjlNWlVHYlVvbUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IcFNLazFHbXdNM2ZyVzVIaTlab2VjY09MOTFXbjZ3U1NUZWlrUkR4eVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUF5OUtlazNNRWM3cDVPR1RlVk1NZU1Uc1BCanUwanJqWG5ZekF0K3lFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlhsTU5hZEgzdVlZdjdpSG5nOC8wZ2RCM3JuSmlITlE5TVRFUkdOM09Scz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitNbEV0Z1pNbmM4dkhqRzlGWkVCQTA2ZlQzY2RaaWtLRVRCRzdHMFVZaFJRQlBBTlBORWVlMlp0NzR6THJheTZTc2ZsWWJpSk9CTE9oVHozSmVzQWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIxLCJhZHZTZWNyZXRLZXkiOiJqM3ZwRXFGNlhwTWpOcG96L04xZVJRQURqenR4OTNVcHJmSkQrOWwrRXQ0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwMzE2MDc4MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzI5M0I1N0VFMTJBNDA5QTg5ODc3NThCQjE3MjdBRkMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MjQ1NTYyNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzAzMTYwNzgyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCQUI1Njg5OTY3MEQ5QjIyNTBDMTIyQTNFOEQxRDkyMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQyNDU1NjM5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDMxNjA3ODI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU0NURDNEZCMTFGNjBEN0NDMEJBODFCNkQ3QzAzMDMwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDI0NTU2NDd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InE2VmdfckJvU05TUEJDcW1sUEFocEEiLCJwaG9uZUlkIjoiMjM3NTU0NTQtMjY5Ni00ZjdmLWFhYzktOTVkYmNlNmMyOTk5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNcjVmU0xrMDFjOUc5R2xQZ3l2OTh4RHpETT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpa1ZteWFUT0hxanFrMmZlTHlvbTFxdHR2cXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRFZEMjZMNkYiLCJtZSI6eyJpZCI6IjIzNDcwMzE2MDc4Mjk6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPcmllbnRhbCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzZac3FNRUVMZUc3NzRHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiK1JIR1lWN2Q5UDdyTFlJR1FJZGozZDVETkJ0eEx4YVozL0txdmVqZGd5ND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS21MdWJVcnNxLzJQa255REsyV3lMZmQ2eWk3d2JkSzRQR3NYMVVONXlkUmRmaHJQVGZsSzBOVGRwWDRqc29wamJuZi85UFY3dllqQmk0WDhMR3hoQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IndldEJHM3N3Q2tldjFhNjduM0FodHl1a2Rxa2V2QmFLbXhEeTRZS0k4RmdLSHRrSENzejA0VGsydm5mQ04vZmZWaUs4bURHcU1KLzdRbDRjNXRjNGlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzAzMTYwNzgyOTo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZrUnhtRmUzZlQrNnkyQ0JrQ0hZOTNlUXpRYmNTOFdtZC95cXIzbzNZTXUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDI0NTU4MTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT25aIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
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
