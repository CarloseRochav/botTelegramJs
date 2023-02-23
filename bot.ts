import  { Telegraf,Markup } from 'telegraf';
import { message } from 'telegraf/filters';
import open = require("open");//Way to import node modules/javascript with typescript
const { exec,spawn } = require('child_process');//Execute Script files
import TelegrafQuestion from "telegraf-question";//To do questions



const bot = new Telegraf("6231746650:AAG43wJNq4AmAPpodZgQhCcMV_EJtoAg3XY");

// bot.use(TelegrafQuestion({ //To make question
//     cancelTimeout: 300000 // 5 min
// }));//Time to do a questions

// var usernmae="Carlos";

// bot.action('change_username', async (ctx, next) => {
//     ctx.answerCbQuery();
//     let newUsername = await ctx.ask('Send new username:');
//     if (newUsername === null) {
//         return next();
//     }
//     username = newUsername.message.text;
//     next();
// });

// bot.use((ctx) => {
//     ctx.reply(`Hi ${username}.`, Markup.inlineKeyboard([
//         [Markup.callbackButton('Change username', 'change_username')],
//     ]).extra());
// });



//Envia cualquier mensaje de texto
// bot.on(message('text'), async (ctx) => {
//   // Explicit usage
//   await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);

//   // Using context shortcut
//   //await ctx.reply(`Hello ${ctx.state.role}`);
// });

bot.command("chido",async (ctx)=>{

    await ctx.reply("Empieza lo chido");

})

//Play a song on the server command telegraf
bot.command(['p','P'], (ctx) =>{     
    //ctx.reply('Memoria Total : '+os.totalmem)
    console.log("Reproduciendo...")
    
    //openBozbulanikYT()//Funcion to play sound in browser
    playSoundLocalSever()//Play song funcion server local... Works
 
    ctx.reply("...Bozbulanik")  

})



    //Abrir Script File
    bot.command("retro",(ctx)=>{
        scriptFileExec();//Funcion para ejecutar script .bat con Exec
        //scriptFileSpawn();//Funcion para ejecutar script .bat con Spawn
        console.log("...Ejecutando");
        ctx.reply("Se logro papi...The Perfect Girl");
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


    //Execute Script 
const scriptFileExec = async()=>{
    await exec('sh openMareuxRetro.bat',
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log(`exec error: ${error}`);
                }
            });
    
        }

const scriptFileSpawn = async()=>{
    await spawn('start', ['openMareuxRetro.bat'])}; //Spawn ejecuta comandos , Pendiente no jala
  