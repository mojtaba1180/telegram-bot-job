// libraries:
import { Telegraf, Markup } from "telegraf";
import Messages from "./utils/messages.js";
import fs from "fs";

// bot configs:
const botToken = "5613115963:AAF9vVVnzxh0OoVSLMzmzQKpzGhWcYbWDZI";
const bot = new Telegraf(process.env.BOT_TOKEN || botToken);

// bot start command:
bot.start(
  async (ctx) =>
    await ctx.reply(Messages.welcome, Markup.keyboard(["کارجو", "کارفرما"]))
);

// bot job-seeker callback query:
bot
  .hears("کارجو", async (ctx) => {
    await ctx.replyWithMediaGroup([
      {
        media: { source: fs.readFileSync("./src/images/card.jpg") },
        caption: Messages.jobSeeker.stepOne,
        type: "photo",
      },
    ]);
  })
  .on("message", async (ctx) => {
    const files = ctx.update.message.photo;
    console.log(files);
  });

// launch bot and show bot token:
bot
  .launch()
  .then(() => console.log(`\nBot started on ${bot.telegram.token}\n`))
  .catch(console.error);
