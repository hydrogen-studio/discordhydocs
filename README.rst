Welcome to Discord.hy, the most **modern** discord bot making library, developed by Hydrogen Studio.
----------------------------------------------------------------------------------------------------

Info
----
Requires Discord.js version 12.0.0 or above

About
-----

Discord.hy is a modern discord custom bot making library. We currently only support sending messages, but more are coming everyday!

Our goal is to reached 100% api coverage at the end of 2020.

Install
-------

npm i discord.hy

Basic Bot Example
-----------------

.. code-block:: javascript
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

WE HAVE BEATEN 100% api coverage! We created this package like discord.js so that discord.js developers can migrate their bot from discord.js to discord.hy faster, with only a few thing to change.

Documentation Still in Progress.
