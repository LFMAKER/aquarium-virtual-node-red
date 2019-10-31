var canvas = document.getElementById("myCanvas");

//Criando o Contexto
var ctx = canvas.getContext("2d");

//Preenchendo o Fundo
ctx.fillStyle = "lightblue"
ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);

//Definindo as variáveis globais

var fishArray = [];
var foodArray = [];
var coinArray = [];
var rockArray = [];
var balance = 0;
var peixes;
var tpa = 0;
var foodCount = 1;
var foodType = 1;
var pH = 7.0;
var amonia = 0;
var hour = "0";

//Váriaveis que serão exibidas no cliente
balanceText = document.getElementById("balance");
var amoniaText = document.getElementById("amonia");
