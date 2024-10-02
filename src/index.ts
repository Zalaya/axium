import { Bot } from "./core/Bot";

new Bot().start().then(() => {
    console.log("Bot is running!");
}).catch((error) => {
    console.error(error);
});