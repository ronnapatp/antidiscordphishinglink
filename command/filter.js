module.exports = (client) => {
  client.on('messageCreate', async (message) => {
    const msg = message.content.toLowerCase();


    const Link = require('../Link/Link');

    for (const words of Link) {
      for (let i = 0; i < words.fileContent.length; i++) {
        if (words.fileContent[i].includes(msg)) {
          await message.delete();
          // You can add action that bot do to people that uing badword ex. message.author.send("Stop use badword")

          console.log(message.author.username, 'is using a badword');

          return await message.channel.send(
            `Badword removed! badword has been sent from <@${message.author.id}> `
          );
        }
      }
    }
  });
};
