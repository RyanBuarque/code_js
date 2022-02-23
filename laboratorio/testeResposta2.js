const readline = require('readline');
const resporta = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pergunta() {
    let b
    console.log("------ Categorias --------");
    console.log("--------------------------------------------------------\n");
    console.log("a) hatch   b) sedans   c) motocicletas   d) caminhonetes");
    console.log("--------------------------------------------------------\n");
     resporta.question("Qual categoria você quer?", function(answer) {
       b = revendedora(answer);
    })

    return b
}

function revendedora(categoria) {

switch(categoria) {
    case "a":
    case "b":
    case "c":
    case "d":
         resporta.question("Tem certeza que prefere este modelo? S/N \n", function(answer) {
            if(answer = "s") {
                  console.log("Compra efetuada com sucesso");
            } else if ("N") {
                 console.log("Escolha novamente o modelo")
                  pergunta();
            } else {
                console.log("ERRO")
            }
            resporta.close()
        });

    default:
        return "Não trabalhamos com este tipo de automóvel aqui";
    };

};

let a = pergunta()
console.log("a", a)
