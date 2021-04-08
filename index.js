const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
client.queue = new Discord.Collection();



fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});


client.login('Njc3OTE3MjUzNDY2ODQ5MzQw.XkbNpA.dph_X3VhU3Qh_tbaP4EYFbwZf08');
//Login du bot

client.on("message", async(message) => {     
    if(message.channel.id === '753241203176243280'){
                    message.react("704691978868228107")
                    message.react("704691978859708512")
    }
    })
//Lorsqu'un message est envoyée dans le salon "Suggestions" le bot réagit avec UP et DOWN
client.on("message", async(message) => {     
    if(message.channel.id === '827173036343164988'){
                    message.react("704691978868228107")
                    message.react("704691978859708512")
    }
    })
 //Lorsqu'un message est envoyée dans le salon "Soirée Film" le bot réagit avec UP et DOWN
    client.on("message", async(message) => {     
        if(message.content === '!d bump'){
                        message.react("740617952579289138")
                        message.react("741300241487364136")
                        message.react("711293390561607762")
                        message.react("741688357909692448")
                        message.react("741689750167224362")
                        message.react("740617952079904811")
                        
        }
        })
    //Lorsque qu'une personne envoit !d bump le bot réagit avec des réactions
    
        client.on('message', message => {
            console.log(message.content);
        });
    //LOGS DANS L'INDEX   
    
    client.on("message", async(message) => {     
        if(message.content === 'k!Frapper'){
            message.channel.send('https://tenor.com/view/powerful-head-slap-anime-death-tragic-gif-14358509');
                        
        }
        })
        client.on("message", async(message) => {     
            if(message.content === 'k!Saluer'){
                message.channel.send('https://tenor.com/view/kisumi-wave-hi-hello-free-gif-9416181');
                            
            }
            })
            client.on("message", async(message) => {     
                if(message.content === 'k!Sourire'){
                    message.channel.send('https://tenor.com/view/hyouka-h%C5%8Dtar%C5%8Doreki-stare-look-blink-gif-17477956');
                                
                }
                })
                client.on("message", async(message) => {     
                    if(message.content === 'k!Corona'){
                        message.channel.send('https://tenor.com/view/nani-hazmat-coronavirus-anime-safety-suit-gif-16979427');
                                    
                    }
                    })
                    client.on("message", async(message) => {     
                        if(message.content === 'k!Calin'){
                            message.channel.send('https://tenor.com/view/a-whisker-away-hug-love-anime-embrace-gif-17694740');
                                        
                        }
                        })
                        client.on("message", async(message) => {     
                            if(message.content === 'k!Shrug'){
                                message.channel.send('https://tenor.com/view/shrug-smug-smile-miss-kobayashi-kobayashisan-chi-no-maid-dragon-gif-13119038');
                                            
                            }
                            })
                            client.on("message", async(message) => {     
                                if(message.content === 'k!I'){
                                    message.channel.send('I:round_pushpin: - Soyez respectueux, courtois, poli envers chacun.');
                                    message.delete()
                                }
                                })

NoXPChannels = [
    "753241230896267304",
    "759520276446314517",
    "753241227045896352",
    "753241227813453936",
    "753241202438176788",
    "753241201725014026",
    "753241200315858964"
]

DicLevels = {
    "1" : 500,
    "2" : 1000,
    "3" : 1500,
    "4" : 2000,
    "5" : 2500,
    "6" : 3000,
    "7" : 3500,
    "8" : 4000,
    "9" : 4500,
    "10" : 5000,
    "11" : 5500,
    "12" : 6000,
    "13" : 6500,
    "14" : 7000,
    "15" : 7500,
    "16" : 8000,
    "17" : 8500,
    "18" : 9000,
    "19" : 9500,
    "20" : 10000,
    "21" : 10500,
    "22" : 11000,
    "23" : 11500,
    "24" : 12000,
    "25" : 12500,
    "26" : 13000,
    "27" : 13500,
    "28" : 14000,
    "29" : 14500,
    "30" : 15000,
    "31" : 15500,
    "32" : 16000,
    "33" : 16500,
    "34" : 17000,
    "35" : 17500,
    "36" : 18000,
    "37" : 18500,
    "38" : 19000,
    "39" : 19500,
    "40" : 20000,
    "41" : 20500,
    "42" : 21000,
    "43" : 21500,
    "44" : 22000,
    "45" : 22500,
    "46" : 23000,
    "47" : 23500,
    "48" : 24000,
    "49" : 24500,
    "50" : 25000,
    "51" : 25500,
    "52" : 26000,
    "53" : 26500,
    "54" : 27000,
    "55" : 27500,
    "56" : 28000,
    "57" : 28500,
    "58" : 29000,
    "59" : 29500,
    "60" : 30000,
    "61" : 30500,
    "62" : 31000,
    "63" : 31500,
    "64" : 32000,
    "65" : 32500,
    "66" : 33000,
    "67" : 33500,
    "68" : 34000,
    "69" : 34500,
    "70" : 35000,
    "71" : 35500,
    "72" : 36000,
    "73" : 36500,
    "74" : 37000,
    "75" : 37500,
    "76" : 38000,
    "77" : 38500,
    "78" : 39000,
    "79" : 39500,
    "80" : 40000,
    "81" : 40500,
    "82" : 41000,
    "83" : 41500,
    "84" : 42000,
    "85" : 42500,
    "86" : 43000,
    "87" : 43500,
    "88" : 44000,
    "89" : 44500,
    "90" : 45000,
    "91" : 45500,
    "92" : 46000,
    "93" : 46500,
    "94" : 47000,
    "95" : 47500,
    "96" : 48000,
    "97" : 48500,
    "98" : 49000,
    "99" : 49500,
    "100" : 50000
}

client.on("message", async(message) => {

    levels = fs.readFileSync("levels.json")
    levels = JSON.parse(levels)

    multixp = 1 // Multiplicateur d'xp

    if(message.author.id in levels){
        multxp_player = multixp - (parseInt(levels[message.author.id]["lv"]) * 0.05)
        if(multxp_player < 0.5 * multixp){
            multxp_player = 0.5 * multixp
        }
        console.log(multxp_player)
    }
    else{
        levels[message.author.id] = {"lv" : 1, "xp" : 0}
        multxp_player = multixp
    }

    // Detecte l'utilisateur et son lv / xp

    if(message.author.bot) return; // Empeche un bot de gagner de l'xp^

    if(NoXPChannels.includes(message.channel.id)) return; // Ne fais pas gagner d'xp dans des salons spécifiques

    else{

        // Ajoute l'xp

        levels[message.author.id]["xp"] += message.content.length * multxp_player

        // Verifie le lv et l'xp

        if(DicLevels[levels[message.author.id]["lv"]] <= levels[message.author.id]["xp"]){

            levels[message.author.id]["xp"] = levels[message.author.id]["xp"] - DicLevels[levels[message.author.id]["lv"]]
            levels[message.author.id]["lv"] += 1
            message.channel.send("<@!" + message.author.id + "> est maintenant lv " + levels[message.author.id]["lv"] + " !")

        }

    }

    levels = JSON.stringify(levels)
    fs.writeFileSync("levels.json", levels, (err)=>{
        if(err) throw err;
    })

    if(message.content === 'k!info'){
    
        levels = fs.readFileSync("levels.json")
        levels = JSON.parse(levels)
    
        if(message.author.id in levels){
        }
        else{
            levels[message.author.id] = {"lv" : 1, "xp" : 0}
        }
    
        message.channel.send("Utilisateur : <@!" + message.author.id + ">\nLevel : " + levels[message.author.id]["lv"] + "\nXP : " + Math.floor(levels[message.author.id]["xp"]) + " / " + DicLevels[levels[message.author.id]["lv"]])
    
        levels = JSON.stringify(levels)
        fs.writeFileSync("levels.json", levels, (err)=>{
            if(err) throw err;
        })
    
    }

})
