"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var telegraf_1 = require("telegraf");
var open = require("open"); //Way to import node modules/javascript with typescript
var _a = require('child_process'), exec = _a.exec, spawn = _a.spawn; //Execute Script files
var telegraf_question_1 = require("telegraf-question"); //To do questions
var bot = new telegraf_1.Telegraf("6231746650:AAG43wJNq4AmAPpodZgQhCcMV_EJtoAg3XY");
bot.use((0, telegraf_question_1["default"])({
    cancelTimeout: 300000 // 5 min
})); //Time to do a questions
var usernmae = "Carlos";
bot.action('change_username', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newUsername;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ctx.answerCbQuery();
                return [4 /*yield*/, ctx.ask('Send new username:')];
            case 1:
                newUsername = _a.sent();
                if (newUsername === null) {
                    return [2 /*return*/, next()];
                }
                username = newUsername.message.text;
                next();
                return [2 /*return*/];
        }
    });
}); });
bot.use(function (ctx) {
    ctx.reply("Hi ".concat(username, "."), telegraf_1.Markup.inlineKeyboard([
        [telegraf_1.Markup.callbackButton('Change username', 'change_username')],
    ]).extra());
});
//Envia cualquier mensaje de texto
// bot.on(message('text'), async (ctx) => {
//   // Explicit usage
//   await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);
//   // Using context shortcut
//   //await ctx.reply(`Hello ${ctx.state.role}`);
// });
bot.command("chido", function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ctx.reply("Empieza lo chido")];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//Play a song on the server command telegraf
bot.command(['p', 'P'], function (ctx) {
    //ctx.reply('Memoria Total : '+os.totalmem)
    console.log("Reproduciendo...");
    //openBozbulanikYT()//Funcion to play sound in browser
    playSoundLocalSever(); //Play song funcion server local... Works
    ctx.reply("...Bozbulanik");
});
//Abrir Script File
bot.command("retro", function (ctx) {
    scriptFileExec(); //Funcion para ejecutar script .bat con Exec
    //scriptFileSpawn();//Funcion para ejecutar script .bat con Spawn
    console.log("...Ejecutando");
    ctx.reply("Se logro papi...The Perfect Girl");
});
bot.launch();
// Enable graceful stop
process.once('SIGINT', function () { return bot.stop('SIGINT'); });
process.once('SIGTERM', function () { return bot.stop('SIGTERM'); });
//***Funciones */
//Open browser function with "open module"
var openBozbulanikYT = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, open("https://www.youtube.com/watch?v=7gb80APJKzc", { app: { name: 'msedge' } })]; //Open with edge browser
            case 1:
                _a.sent(); //Open with edge browser
                return [2 /*return*/];
        }
    });
}); };
//Play local machine song
var playSoundLocalSever = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // player.play('./resources/bozbulanik.mp3', function (err) {
            //     if (err) throw err;
            //     console.log("Audio finished");
            //   });
            return [4 /*yield*/, open("./resources/bozbulanik.mp3", { wait: true })]; //Second way with "open module"
            case 1:
                // player.play('./resources/bozbulanik.mp3', function (err) {
                //     if (err) throw err;
                //     console.log("Audio finished");
                //   });
                _a.sent(); //Second way with "open module"
                return [2 /*return*/];
        }
    });
}); };
//Execute Script 
var scriptFileExec = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exec('sh openMareuxRetro.bat', function (error, stdout, stderr) {
                    console.log(stdout);
                    console.log(stderr);
                    if (error !== null) {
                        console.log("exec error: ".concat(error));
                    }
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var scriptFileSpawn = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, spawn('start', ['openMareuxRetro.bat'])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); }; //Spawn ejecuta comandos , Pendiente no jala
