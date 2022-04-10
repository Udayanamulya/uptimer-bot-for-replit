const discord = require('discord.js');
const fs = require("fs");

module.exports = {
  name: "stats",
  run: async (client, message, args ) => {
	 let data = JSON.parse(fs.readFileSync("./link.json", "utf8"));

    if (!data) return send("Something went wrong...", message, "YELLOW");

    data = data.find(x => x.id === message.author.id);

    if (!data) {
      return send(
        "<:no:957144549698986015> You do not have any site to monitor, use `.monitor` to add a website",
        message,
        "YELLOW"
      );
    }

    let embed = new discord.MessageEmbed()
      .setAuthor(`You have ${data.link.length} Website`)
      .setColor("GREEN")
      .setDescription(
        `**:white_check_mark: ${data.link.join("\n\n:white_check_mark: ")}**`
      );

    message.reply("<a:yes:958151907979952159> Check your Dm");
    message.author.send(embed).catch(err => {
      return message.channel.send(
        "<:no:957144549698986015> Your DM's Is Disabled"
      );
    });
	}
	 }
	 //--------------------------------------------------- F U N C T I O N S ---------------------------------------------

function send(content, message, color) {
  if (!color) color = "GREEN";

  return message.channel.send({
    embed: { description: content, color: color }
  });
}