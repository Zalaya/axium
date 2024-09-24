import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
})

client.login(process.env.TOKEN).then(() => {
    console.log("The bot is logged in!")
}).catch((error) => {
    console.error(error)
})