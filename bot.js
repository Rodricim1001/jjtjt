const{ Client, Partials, Discord, MessageAutoDeleteTrigger, EmbedBuilder } = require('discord.js')
const client = new Client({ intents: 131071, partials: Object.values(Partials).filter(x => typeof x === "string"), shards: 'auto' })
const { botid, token } = require("./ayarlar.json")
require("./slash")(client)
client.login(process.














             
             env.












             
             token)
require("advanced-logs")
console.setConfig({
  background: false,
  timestamp: false
})

//7/24//
const express = require('express');
const app = express();
const port = 3100;//buraya karışmayın.

app.get('/', (req, res) => res.send('minigema'));//değiştirebilirsiniz.

app.listen(port, () =>
console.log(`Bot bu adres üzerinde çalışıyor: http://localhost:${port}`)//port
);
///7/24///
//sa
client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send('Aleyküm Selam Gardaş, Welcome');
  }
});
client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'Sa') {
    msg.channel.send('Aleyküm Selam Gardaş, Welcome!');
  }
});
client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'Selam') {
    msg.channel.send('Selam Gardaşım, Welcome!');
  }
});
client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'Slm') {
    msg.channel.send('Slm Cnm, Welcome!');
  }
});
client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'Selamun Aleyküm') {
    msg.channel.send('Aleyküm Selam Gardaş, Welcome!');
  }
});
client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'Selamm') {
    msg.channel.send('Selamm, Welcome!');
  }
});
client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'Selammm') {
    msg.channel.send('Selammm, Welcome!');
  }
});
client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'Selammmm') {
    msg.channel.send('Selammmm, Welcome!');
  }
});
client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'Selamunaleyküm') {
    msg.channel.send('Aleyküm Selam Gardaş, Welcome!');
  }
});
client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'Selamunaleykum') {
    msg.channel.send('Aleyküm Selam Gardaş, Welcome!');
  }
});
client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'Selamun aley') {
    msg.channel.send('Doğru Selam Versene İmansız!!');
  }
});
//as

//eklendim atildim
client.on('guildCreate', guild => {
  
  const Eklendim = new EmbedBuilder()
     .setColor("Green")
     .setTitle("Bir sunucuya eklendim")
     .addFields({name: `**Sunucu adı**`, value: `${guild}`})
     .addFields({name: `**Sunucu id**`, value: `${guild.id}`})
     .addFields({name: `**Toplam sunucu**`, value: `${client.guilds.cache.size}`})
     .addFields({name: `**Toplam kullanıcı**`, value: `${client.users.cache.size}`})
  client.channels.cache.get('1189946754427261060').send({embeds: [Eklendim]})})

  client.on('guildDelete', guild => {
    
    const Atıldım = new EmbedBuilder()
     .setColor("Red")
     .setTitle("Bir sunucudan atıldım")
     .addFields({name: `**Sunucu adı**`, value: `${guild}`})
     .addFields({name: `**Sunucu id**`, value: `${guild.id}`})
     .addFields({name: `**Toplam sunucu**`, value: `${client.guilds.cache.size}`})
     .addFields({name: `**Toplam kullanıcı**`, value: `${client.users.cache.size}`})
  client.channels.cache.get('1189946754427261060').send({embeds: [Atıldım]})})
//eklendim atıldım