 let Discord = require("discord.hy")// import library | npm i discord.hy
 let client = new Discord.Client({ websocketstat: true });//set up client with options
  
  
 client.on("message", function(msg){//call in the 'message' event
     if(msg.content.startsWith("!ping")){//check the message content for !ping
         let Embed = new Discord.RichEmbed()
            .setTitle("Ping Command Response")
            .addField("Ping", "Pong", true)
            .addField("Ping", "Pong")//inline default to false
            .setTimestamp()
            .setColor("RANDOM");
         msg.channel.sendEmbed(Embed)//send Embed response
     }
 })
  
 client.on("ready", function(data){//call in the 'ready' event
     console.log(data)//log the ready data in the console
 })
  
  
  
 let login = client.login("super secret bot token")
