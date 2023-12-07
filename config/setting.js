const fs = require("fs");
const chalk = require("chalk");
global.creAtor = "6281293100679@s.whatsapp.net";
global.owner = ["6281293100679"];
global.ownerNumber = ["6281293100679@s.whatsapp.net"];
global.nomerOwner = "6281293100679";
global.namabotnya = "Tokito | Bot";
global.namaownernya = "Zyn";
global.packname = "© Created By";
global.author = "AbotMD";
global.sessionName = "session";
global.group = "";
global.youtube = "";
global.website = "";
global.github = "";
global.keyopenai = "ISI_APIKEY_OPENAI_DISINI";
global.keyopenai = "2d2703d1";
global.nomorowner = "https://wa.me/628126915328";
global.region = "I`m From Indonesia";
global.prefa = ["", "!", ".", "#", "-", "•"];
global.thumb = fs.readFileSync("./function/image/thumb.jpg");
global.krmd = {
  success: "```Success✅```",
  admin: "```Fitur Khusus Admin Group!!!```",
  botAdmin: "```Bot Harus Menjadi Admin Terlebih Dahulu!!!```",
  owner: "```Fitur Khusus Owner Bot!!!```",
  group: "```Fitur Digunakan Hanya Untuk Group!!!```",
  private: "```Fitur Digunakan Hanya Untuk Private Chat!!!```",
  bot: "```Fitur Khusus Pengguna Nomor Bot!!!```",
  error:
    "```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```",
  wait: "```Waittt...```",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`));
  delete require.cache[file];
  require(file);
});
