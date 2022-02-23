const readline = require('readline');
// import readline from 'readline'

const resporta = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const revendedora = (categoria) => {

    switch(categoria) {
        case "hatch":
            return "Compra efetuada com sucesso";

        case "sedans":
        case "motocicletas":
        case "caminhonetes":
            resporta.question("Tem certeza que prefere este modelo?\n", function(answer) {
                console.log("res", answer)
                if(answer = "s") {
                     console.log("Compra efetuada com sucesso");
                } else {
                     console.log("Escolha novamente o modelo")
                }

                resporta.close()
            });
            return
            
        default:
            return "Não trabalhamos com este tipo de automóvel aqui";
        };
    };
    
    // console.log(revendedora("hatch"));
    console.log(revendedora("sedans"));
    // console.log(revendedora("motocicletas"));
    // console.log(revendedora("caminhonetes"));
    // console.log(revendedora("bicicleta"));