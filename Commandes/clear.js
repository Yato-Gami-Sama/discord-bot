const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas les permissions !');
    if (!args[0]) return message.channel.send('Vous devez spécifier un nombre de messages à supprimer !'); 
   
  

 	message.channel.bulkDelete(args[0]).then(() => {
 		message.channel.send(`**${args[0]}** messages ont été supprimés !`).then(msg => msg.delete(10000))
 	});                                                                           
};

module.exports.help = {
    name: 'clear',
    description: 'supprimer des messages'
};