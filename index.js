const os = require("os");
const open = require("open")//Module to open browser in specific url and open somethings apps

var player = require('play-sound')(opts = {})//Play sound local machin ; This is meant to be used in command-line tools and scripts, not in the browser.e



//Execute Script files
const { exec } = require('child_process');

//Execute Script 
const scriptFile = async()=>{
await exec('sh openMareuxRetro.bat',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });

    }
            

console.log("Arquitectura : "+os.arch());
console.log("Sistema Operativo : "+os.platform());
//console.log("Procesador : "+os.cpus());


//Bot TELEGRAM con bot api node
// const TelegramBot = require('node-telegram-bot-api');

// // replace the value below with the Telegram token you receive from @BotFather
// const token = '6231746650:AAG43wJNq4AmAPpodZgQhCcMV_EJtoAg3XY';

// // Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramBot(token, {polling: true});

// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//     // 'msg' is the received Message from Telegram
//     // 'match' is the result of executing the regexp above on the text content
//     // of the message
  
//     const chatId = msg.chat.id;
//     const resp = match[1]; // the captured "whatever"
  
//     // send back the matched "whatever" to the chat
//     bot.sendMessage(chatId, resp);
//   });


//   // Listen for any kind of message. There are different kinds of
// // messages.
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
  
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, "Copiado Pa'");
//   });


//Bot con telegraf
const {Telegraf} = require('telegraf');
const bot = new Telegraf('6231746650:AAG43wJNq4AmAPpodZgQhCcMV_EJtoAg3XY');
//Funciones del bot
bot.start((ctx) => ctx.reply('Host : '+ os.hostname));
bot.command('memoria', (ctx) => ctx.reply('Memoria : '+os.freemem));
bot.command('os', (ctx) => ctx.reply('Memoria Libre: '+os.type));
bot.command('arch', (ctx) => ctx.reply('Arquitectura: '+os.arch));
bot.command('memoria', (ctx) => ctx.reply('Hello : '+os.freemem));
bot.command('memoriaT', (ctx) => ctx.reply('Memoria Total : '+os.totalmem));//Al invovar este metodo debemos llamarlo iniciando con / (Diagonal)
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

//AL recibir cualquier mensaje por parte del usuario ejecuta esta funcion
bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log('Response time: %sms', ms)
  })

  //Play a song on the server command telegraf
  bot.command(['p','P'], (ctx) =>{     
    //ctx.reply('Memoria Total : '+os.totalmem)
    console.log("Reproduciendo...")
    
    //openBozbulanikYT()//Funcion to play sound in browser
    playSoundLocalSever()//Play song funcion server local... Works
 
    ctx.reply("...Bozbulanik")  

})


//Funcion que regresa el mensaje que el usuario envio
bot.hears('hakuna', (ctx) => {//CTX means context instance

    const msg= ctx.message; //Objeto con informacion del mensaje enviado
    console.log(msg.text)
    ctx.reply("Tu dijiste..."+msg.text);
    

})

// bot.on("text",(ctx)=>{//Captura cualquire cosa ingresada por el usuario y la regresa 

//     const message = ctx.message.text;
//     console.log(`Texto escrito : ${message}`)
//     ctx.reply("Usted dijo..."+message)
// })

//Contestar al usuario con el nombre ingresado
//bot.on(/\/help/, async msg => {
    bot.command("nombre",async msg=>{

    const namePrompt = await msg.ask(msg.chat.id, "Hi, what's your name?", {
        reply_markup: {
            force_reply: true,
        },
    });
    bot.onReplyToMessage(msg.chat.id, namePrompt.message_id, async (nameMsg) => {
        const name = nameMsg.text;
        // save name in DB if you want to ...
        await msg.ask(msg.chat.id, `Hello ${name}!`);
    });

 });

 //Tema pendiente

bot.launch();//Importante lanzar esta funcion para que jale el bot


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
  

    //Abrir Script File

    bot.command("retro",(ctx)=>{
        scriptFile();//Funcion para ejecutar script .bat
        console.log("...Ejecutando");
        ctx.reply("Se logro papi...The Perfect Girl");
    })






//CREAR S E R V I D O R
const http = require("http");
http.createServer((req,res)=>{
    res.write("Hello WOlrd");
    
    res.end();
}).listen(3000,function(){
    console.log("server start at port 3000"); //the server object listens on port 3000);   
    
});

//http();

//Pendiente Investigar como ordenarle al bot reproducir un sonido/cancion