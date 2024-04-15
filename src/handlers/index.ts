import { Telegraf } from "telegraf";
import { initCommandHandlers } from "./commandHandlers";


export const setHandlers = (bot: Telegraf)=>{
  initCommandHandlers(bot)
}