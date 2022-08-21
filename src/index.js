// libraries:
import { Telegraf } from "telegraf";

// bot configs:
const botToken = "5613115963:AAF9vVVnzxh0OoVSLMzmzQKpzGhWcYbWDZI";
const bot = new Telegraf(process.env.BOT_TOKEN || botToken);

bot.start((ctx) => ctx.reply("Welcome"));

// launch bot and show bot token:
bot
  .launch()
  .then(() => console.log(`Bot started on ${bot.telegram.token}`))
  .catch(console.error);
