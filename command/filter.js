module.exports = (client) => {
  client.on('messageCreate', async (message) => {
    const msg = message.content.toLowerCase();


    const Link = require('../Link/Link');

    for (const words of Link) {
      for (let i = 0; i < words.fileContent.length; i++) {
        if (words.fileContent[i].includes(msg)) {
          await message.delete();

          console.log(message.author.username, 'is sending a Phishing link');

          // You can replace with ban or kick command

          return await message.channel.send(
            `Phishing link removed! Phishing link has been sent from <@${message.author.id}> `
          );
        }
      }
    }
  });
};
