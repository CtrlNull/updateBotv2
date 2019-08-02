const BOTCONF = require("./botconfig.json");
const CONSTS = require("./consts.json");
const Discord = require("discord.js");
const BOT = new Discord.Client();

BOT.login(BOTCONF.token).then(() => {
    console.log("Bot Engaged");
    // Get GUILD ID
    const pcrGuild = bots.guilds.get(CONST.pcrGuild['guildId']);
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
