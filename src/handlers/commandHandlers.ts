import { Context, Telegraf } from 'telegraf';

const start = (ctx: Context) => {
  ctx.reply('Hello dear!');
};

export const initCommandHandlers = (bot: Telegraf) => {
  bot.command('start', start);
};
