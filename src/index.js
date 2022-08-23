// libraries:
import { Telegraf, Markup } from "telegraf";
import Messages from "./utils/messages.js";
import fs from "fs";

// bot configs:
const botToken = "5577282725:AAElt04_o_wpcibpF_vQ57RJfrALg28-0cA";
const bot = new Telegraf(process.env.BOT_TOKEN || botToken);

// bot start command:
bot.start(
  async (ctx) =>
    await ctx.reply(Messages.welcome, Markup.keyboard(["کارجو", "کارفرما"]))
);

// bot job-seeker callback query:
bot
  .hears("کارفرما", async (ctx) => {
    await ctx.reply(`
    به دنبال کدام یک از نوع کار به عنوان کارفرما میباشید
    `, Markup.keyboard(["اصناف", "شرکتی"]))
  });



  bot.hears("شرکتی", async (ctx) => {
    await ctx.reply(' برای ارسال مدارک خود در این سایت میتوانید مدارک خود را ارسال کنید ', 
      {
        reply_markup: {
            inline_keyboard: [
                /* Also, we can have URL buttons. */
                [ { text: " استخدام شرکتی ", url: "https://formaloo.com/job-sherkati" } ]
            ]
        }}
      )
  });


  
  bot.hears("اصناف", async (ctx) => {
    await ctx.reply(' برای ارسال مدارک خود در این سایت میتوانید مدارک خود را ارسال کنید ', 
      {
        reply_markup: {
            inline_keyboard: [
                /* Also, we can have URL buttons. */
                [ { text: " استخدام اصناف ", url: "https://formaloo.com/job-asnaf" } ]
            ]
        }}
      )
  });



  
  
  bot.hears("کارجو", async (ctx) => {
    await ctx.reply(' برای ارسال مدارک خود در این سایت میتوانید مدارک خود را ارسال کنید ', 
      {
        reply_markup: {
            inline_keyboard: [
                /* Also, we can have URL buttons. */
                [ { text: " استخدام کارجو ", url: "https://formaloo.com/job-karjo" } ]
            ]
        }}
      )
  });

// launch bot and show bot token:
bot
  .launch()
  .then(() => console.log(`\nBot started on ${bot.telegram.token}\n`))
  .catch(console.error);
