//Paquete importado
require("colors");

const { bgBlue, black, green } = require("colors");
//referencia al modulo math a traves de la constante math
const math = require("./modules/math.js")

console.clear();
console.log(math);

const main = async() => {
    let x= (math.getRandomInt(10));
    let y= (math.getRandomInt(10));
    console.log("***********************************************".yellow);
    console.log("* ".red, "Funciones Matematicas".bgRed,
    "   *".blue);
    console.log("**************************************************\n".blue);
    console.log("***************************************************".blue);
    console.log("               numeros generados: "+" "+x+" "+y);
    console.log("****************************************************\n".red);

    console.log("***************************************************".red);
    console.log("//".blue + "                                                   "+"//".green);
    console.log("//".red +"                      Suma:" + math.add(x,y) + "            "+ "           //".red);
    console.log("//".blue +"                      Resta:" + math.substract(x,y) + "            "+ "   //".blue);
    console.log("//".blue +"                      Multiplicar:" + math.multiply(x,y) + "            "+ "    //".yellow);
    console.log("//".blue +"                      Dividir:" + math.divide(x,y) + "            "+ "//".yellow);

    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++".green);




 console.log(math.add(22,33));
 console.log(math.substract(10,8));
 console.log(math.multiply(25,32));
 console.log(math.divide(2,0.9));
 
}

main();
    



