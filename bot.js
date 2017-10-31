var Discord = require('discord.io');

var logger = require('winston');
var auth = require('./auth.json');


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';


// Initialize Discord Bot
var bot = new Discord.Client({
    token: "Mzc0OTk5NTU0MDk5MjQ5MTUy.DNpkmw.4EwpZO7zmhByTvviJY_T89w96gY",
    autorun: true
});


bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    if(message.author.bot) return;
    
    else if ((message.indexOf('fist') > -1)&& () ) {
        bot.sendMessage({ to: channelID, message: 'Fisting is 300 bucks' });

       
    }
})
