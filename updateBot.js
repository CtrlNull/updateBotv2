const SERDEETS = require("./serverDetails.json"); // contains tokens and other server stuff
const Discord = require("discord.js");
const BOT = new Discord.Client();

const genStr = require("./genStr.json"); // contains bash script stuff

BOT.login(BOTCONF.token).then(() => {
    console.log("Bot Engaged");
    // Get GUILD ID
    const pcrGuild = bots.guilds.get(CONST.pcrGuild['guildId']);
    var pcrChannels = [];
    
    // Get list of channels in json
    for (i=0;i<SERDEETS["pcRec"]["channels"].length;i++) {
        for (var key in SERDEETS["pcRec"]["channels"][i]) {
            pcrChannels.push(SERDEETS["pcRec"]["channels"][i][key])
        }
    }

    var avChannels = []
    if (pcrGuild) {
       for (i=0;i<2;i++) {
           if (pcrGuild.channels.get(CONSTS.pcrGuild['channels'][i])); // check channels if avaliable
            avChannels.push(pcrGuild['channels'][0])
       }

       if (avChannels.length) {
           // Get new json object and display on channel
       }
    }
    
    BOT.destroy();
});
