import { Telegraf } from 'telegraf';
import { BOT_TOKEN, WEBHOOK_URL } from './config/environment';
import express, { Application } from 'express';
import { setHandlers } from './handlers';

const bot = new Telegraf(BOT_TOKEN!);
const app: Application = express();

bot
  .createWebhook({
    domain: WEBHOOK_URL!,
    drop_pending_updates: true,
    allowed_updates: ['message', 'callback_query'],
  })
  .then((data) => app.use(data));

bot.telegram.setMyCommands(
  [{ command: 'start', description: 'Start the bot' }],
  {
    scope: { type: 'all_private_chats' },
  }
);

setHandlers(bot);

export { app, bot };
