const SERDEETS = require("./serverDetails.json"); // contains tokens and other server stuff
const genStr = require("./genStr.json")
const Discord = require("discord.js");
const BOT = new Discord.Client();

BOT.login(SERDEETS["serverDeets"]["token"]).then(() => {
    console.log("Bot Engaged");
    // Get GUILD ID
    const pcrGuild = BOT.guilds.get(SERDEETS["pcRec"]["guildId"]);
    var pcrChannels = [];
    
    // Get list of channels in json
    for (i=0;i<SERDEETS["pcRec"]["channels"].length;i++) {
        for (var key in SERDEETS["pcRec"]["channels"][i]) {
            pcrChannels.push(SERDEETS["pcRec"]["channels"][i][key])
        }
    }
    if (pcrGuild) {
    //    for (i=0;i<2;i++) {
    //        if (pcrGuild.channels.get(SERDEETS["pcRec"]["channels"][i]))
    //        if (pcrGuild.channels.get(CONSTS.pcrGuild['channels'][i])); // check channels if avaliable
    //         avChannels.push(pcrGuild['channels'][0])
    //    }

       if (pcrChannels.length) {
           for (i=0;i<pcrChannels.length;i++) {
               if (pcrGuild.channels.get(pcrChannels[i])) {
                   pcrGuild.channels.get(pcrChannels[i]).send(genStr["verb"] + " " + genStr["repo"] + " " + genStr["increment"]); // fill this in w/json
               }
           }
       }
    }
    
    BOT.destroy();
});
