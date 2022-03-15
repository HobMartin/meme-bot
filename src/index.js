const { Telegraf } = require('telegraf');
require('dotenv').config();
const getMeme = require('./meme');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Привіт. Хочеш мем?'));

bot.hears(/\/meme/i, async (ctx) => {
  const meme = await getMeme();
  return ctx.replyWithPhoto(
    { url: meme.url },
    { caption: `Мем для: @${ctx.message.from.username}` },
  );
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
