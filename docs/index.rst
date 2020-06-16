Welcome to Discord.hy's documentation!
==================================================

.. image:: https://readthedocs.org/projects/discordhydocs/badge/?version=latest
:target: https://discordhydocs.readthedocs.io/en/latest/?badge=latest
:alt: Documentation Status

Installation
------------

.. code-block:: text

   npm i discord.hy

Example Bot
-----------

.. code-black:: javascript
   
   const Discord = require('discord.hy');
   let client = new Discord.Client()

   client.on("message", msg => {
       if(msg.content === "HM!test"){
          let embed = new Discord.RichEmbed()
               .setTitle("test");
        client.channels.cache.get("715249602479259669").send(embed)
       }
   })

   client.on('ready', () => {
       console.log(`ready with ${client.users.cache.size} users`);
       console.timeEnd('magic');
     });
   
   client.login(token)
   
