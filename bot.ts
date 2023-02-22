import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import open = require("open");

const bot = new Telegraf("6231746650:AAG43wJNq4AmAPpodZgQhCcMV_EJtoAg3XY");


//Envia cualquier mensaje de texto
// bot.on(message('text'), async (ctx) => {
//   // Explicit usage
//   await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);

//   // Using context shortcut
//   //await ctx.reply(`Hello ${ctx.state.role}`);
// });

bot.command("retro",async (ctx)=>{

    await ctx.reply("Empieza lo chido");

})

//Play a song on the server command telegraf
bot.command(['p','P'], (ctx) =>{     
    //ctx.reply('Memoria Total : '+os.totalmem)
    console.log("Reproduciendo...")
    
    openBozbulanikYT()//Funcion to play sound in browser
    //playSoundLocalSever()//Play song funcion server local... Works
 
    ctx.reply("...Bozbulanik")  

})




bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));



//***Funciones */
    //Open browser function with "open module"
    const openBozbulanikYT = async ()=>{
        await open("https://www.youtube.com/watch?v=7gb80APJKzc",{app: {name: 'msedge'}})//Open with edge browser
    }

    //Play local machine song
    const playSoundLocalSever=async ()=>{
    // player.play('./resources/bozbulanik.mp3', function (err) {
    //     if (err) throw err;
    //     console.log("Audio finished");
    //   });
    await open("./resources/bozbulanik.mp3",{wait:true})//Second way with "open module"

    }
  