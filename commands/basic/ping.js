module.exports = {
    name: "ping",
    cooldown: 3,
    description: 'view the bot ping',
    aliases: ["ping"],
    run: async function(client, message, args, user) {
        var states = "<a:uptime:962512253154885692> Excellent";
        var states2 = "<a:uptime:962512253154885692> Excellent";
        var msg = `${Date.now() - message.createdTimestamp}`;
        var api = `${Math.round(client.ws.ping)}`;
        if (Number(msg) > 70) states = "<a:uptime:962512253154885692> Good";
        if (Number(msg) > 170) states = "<a:loading:957145065900363829> Not Bad";
        if (Number(msg) > 350) states = "<a:offline:962512375787946044> Soo Bad";
        if (Number(api) > 70) states2 = "<a:uptime:962512253154885692> Good";
        if (Number(api) > 170) states2 = "<a:loading:957145065900363829> Not Bad";
        if (Number(api) > 350) states2 = "<a:offline:962512375787946044> Soo Bad";
        if (message.author.bot) return;
        message.channel.send({
            embed: {
                description: `**Time Taken:** ${msg} ms <a:ping:962512526405431316> | ${states}\n**WebSocket:** ${api} ms <a:ping:962512526405431316> | ${states2}`,
                color: 0x2F3136
            }
        });
    }
};