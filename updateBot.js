const SERDEETS = require("./serverDetails.json"); // contains tokens and other server stuff
const genStr = require("./genStr.json"); // contains bash script stuff
const Discord = require("discord.js");
const BOT = new Discord.Client();



BOT.login(BOTCONF.token).then(() => {
    console.log("Bot Engaged");
    // Get GUILD ID
    const pcrGuild = bots.guilds.get(SERDEET["pcRec"]["guildId"]);
    var pcrChannels = [];
    
    // Get list of channels in json
    for (i=0;i<SERDEETS["pcRec"]["channels"].length;i++) {
        for (var key in SERDEETS["pcRec"]["channels"][i]) {
            pcrChannels.push(SERDEETS["pcRec"]["channels"][i][key])
        }
    }

    if (pcrGuild) {
       for (i=0;i<2;i++) {
           if (pcrGuild.channels.get(CONSTS.pcrGuild['channels'][i])); // check channels if avaliable
            avChannels.push(pcrGuild['channels'][0])
       }

       if (pcrChannels.length) {
           for (i=0;i<pcrChannels.length;i++) {
               if ()
           }
       }
    }
    
    BOT.destroy();
});
