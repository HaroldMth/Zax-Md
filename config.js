const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "zaxmd001@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "postgresql://thomas_nse0_user:DNcjvbg1wtgeAW8hPvxLwUIEYTOTgbZe@dpg-cse5hcjtq21c73850jvg-a.oregon-postgres.render.com/thomas_nse0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Xiangzaoh/Zax-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/JgAR7WJ.jpg";
global.devs = "237696900612";
global.sudo = process.env.SUDO || "255688930205";
global.owner = process.env.OWNER_NUMBER || "237696900612";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://zax-md-beae6ed77007.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU05Q3JBdVRCd3JIWVYxbnJEbWF6YjQ4aFNjY2JZZDVneXovWFR3UGFHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSG03eFZqZm5tbGszQ1RRUWJTV0V1bnBCWmRCWWdiS1JWMWkzWjRWR01rOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQlFHaEZYN2NuQWFSUWthUXlKYk1TOVRkeGFJRDdNcmU4eDdDWWZ6SG4wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0dW5pMnJZU3VNd25qQXg4Y1ZwcEdaL013VlRmaTJFOXUzRzRrV2FQZlFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLNXVSam1hTk4zd3o0NGpjOUFyNlRKdm56RWpKVS8rUy9lTk1hMzZGVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR2WmZtWUFhdmJHQmhhSFM2T2N3VkNtRVVmZDFRMnBiZ1R6UEo2K1k5WFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpPanNKRFNaM21XTlkvc0RZeVhmRU01ZGtEZUhGU1RCaHl3dUU1M1FYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkdNVC9xWXVKa3lFWW9CZTQxeEJLV05wVHZmMWVFRjhsOHcxQjhuVExSVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRvbWp0UHc2ZmFBN2laZ2FKZTUrcU9nQmcvRTB6d2ExT1kzZEJDdlhBY3hpUFBzYkRoTWhnck96bjAzOGl3TWV2RU0xZHZHRGhkNmRmc0hlUTNoWmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiIwdzNZQ3FyS0kyTEZpY2RtZzVCL1JZV3lRWGxnUEZGYkduZzQ3WlhYQ2tzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImFjY291bnQiOnsiZGV0YWlscyI6IkNKZkNpZXNDRUthZ21Mc0dHQ3NnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFRGtIMW9zSWl2YnM3WWNUa29UbjZGQjRYY0tGYWV2VnFUQnYzQkJ0alVJPSIsImFjY291bnRTaWduYXR1cmUiOiJQMGpkaW05R3p6UzhOWXdXQ3FwTnZ6YXRTYlNsTUdZRlU0MjdUeUU2MW9sbjZ5ZzZvMzQrVFpSUG1JYnZPV05Ja29yeXZqU2dDbkJoOE5RZkdadjJBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiazRnbmxXZldzSTdYS0phcFZrK01iTGtpNkVjWDJQK1EyNHcrd1RWUFFvM0gvcmhQWjlCQnhOcWxkN0FlR2REbFJyb0hEZi80YmxtK0loZzVKTVRkZ0E9PSJ9LCJtZSI6eyJpZCI6IjIzNzY5NjkwMDYxMjo3NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZm38J2aivCdmpfwnZqcIPCdmoPwnZqO8J2ajPCdmpEg4oCgIiwibGlkIjoiMTIxNjU1Mzg0ODY2ODY4Ojc1QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2OTY5MDA2MTI6NzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkE1QjlhTENJcjI3TzJIRTVLRTUraFFlRjNDaFducjFha3diOXdRYlkxQyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0NzQyMDY4LCJsYXN0UHJvcEhhc2giOiJJWG9EcCJ9";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©zᴀxᴍᴅ",
  author: process.env.PACK_AUTHER || "zᴀx-ᴍᴅ",
  packname: process.env.PACK_NAME || "zᴀx-bot",
  botname: process.env.BOT_NAME || "zᴀx ᴍᴅ",
  ownername: process.env.OWNER_NAME || "MrXhriss",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "zᴀx").toUpperCase(),
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
