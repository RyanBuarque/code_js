/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

console.log("01 -->");

function calcBasic1(a, b) {
    console.log(
        a + b + " /", a - b + " /", a * b + " /", a / b + " /"
        )
    };

calcBasic1(1, 2);

/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

console.log("\n 02 -->");

function triangulo(l1, l2, l3) {
    if(l1 == l2 && l2 == l3){
        console.log("Equilátero")
    } else if (l1 != l2 && l2 != l3 && l3 != l1){
        console.log("Escaleno")
    } else {
        console.log("Isósceles")}
    };

    triangulo(1, 2, 3);
    triangulo(1, 1, 2);
    triangulo(1, 1, 1);

/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/

console.log("\n 03 -->");

function exponencial(base, ex) {
    console.log(base ** ex)
    };

exponencial(2, 3);

/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

console.log("\n 04 -->");

function div(divd, divs) {
    console.log("Resultado: " + Math.floor(divd / divs));
    console.log("Resto: " + divd % divs)
    };

div(2, 2);

/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

console.log("\n 05 -->");

function dinh(rea1, rea2) {
    console.log("R$" + (rea1 + rea2).toFixed(2).toString().replace(".", ","));
    };

dinh(0.1, 0.2);

/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

console.log("\n 06 -->");

function juros(c, i, n) {
    console.log("Juros = R$" + (c*i/100*n).toFixed(2).toString().replace(".", ","))
};

function montante(c, i, n) {
    console.log("Montante = R$" + (c * (1 + i/100) **n).toFixed(2).toString().replace(".", ","))
};

juros(520, 1, 3);
montante(8000, 1.2, 6);

/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

console.log("\n 07 -->");

function bhaskara(ax2, bx , c) {
     delta = (bx ** 2) - (4 * ax2 * c);
        if(delta < 0) {
            console.log("Delta é negativo")
        } else {
            console.log("x| = " + (- bx + Math.sqrt(delta)) / (2 * ax2));
            console.log("x|| = " + (- bx - Math.sqrt(delta)) / (2 * ax2));
        }
};

bhaskara(1, 3, 2);
bhaskara(3, 1, 2);

/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/

console.log("\n 08 -->");

function jogos(point, point2, point3, point4) {   
    let resultado = [];
    resultado.push(point, point2, point3, point4);
    let soma = 0;
    let maiorPontuacao = 0;
    let menorPontuacao = resultado[0];
    for(let i = 0; i < resultado.length; i++) {
        soma += resultado[i]
    };
    let media = soma / resultado.length;
    for(let i = 0; i < resultado.length; i++) {
        if(resultado[i] > media) {
            maiorPontuacao++
            console.log("Posição ponto(s) acima da media: " + (i + 1))
        } else if (resultado[i] < menorPontuacao) {
            menorPontuacao = resultado[i]
            console.log("Posição da menor pontuação: " + (i + 1))
        } 
    };
    return [resultado, "media = " + media]
};

console.log(jogos(20, 0, 60, 60));

//-----------------------------------------------------------------

console.log("\n 08.2 -->");

function jogos2(points) {   

    if(points.length <= 0) {
        return [0, 0]
    }

    let melhor = parseInt(points[0]);
    let countMelhor = 0;
    let pior = parseInt(points[0]);
    let positionPior = 0;
   
    for(let i = 1; i < points.length; i++) {
        let parsedNum = parseInt(points[i])
        if(parsedNum > melhor) {
            melhor = parsedNum
            countMelhor++
        } else if (parsedNum < pior) {
           pior = parsedNum
           positionPior = (i + 1)
        } 
    };
    return [countMelhor, positionPior]
};

console.log(jogos2(["20", "5", "30", "60", "100"]));

/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

console.log("\n 09 -->");

function boletim(nota) {
    let nota2 = arredondar(nota)
    if (nota2 >= 40) {
        console.log(`Aprovado com nota ${nota2}`);
    } else {
        console.log(`Reprovado com nota ${nota2}`);
    }
}

function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    } 
}

boletim(37);
boletim(45);
boletim(58);
boletim(57);


/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

console.log("\n 10 -->");

function teste(numero) {
    if(numero % 3 == 0){
        console.log(true)
    }else{
        console.log(false)
    }
}

teste(10);
teste(6);

/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

console.log("\n 11 -->");

function bissexto(ano) {
    
    if(ano <= 0) {
        console.log(`false`)
    } else if(ano % 400 == 0) {
        console.log(`${ano} é um ano bissexto`)
    } else if(ano % 100 == 0) {
        console.log(`${ano} não é um ano bissexto`)
    } else if(ano % 4 == 0){
        console.log(`${ano} é um ano bissexto`)
    } else {
        console.log(`${ano} não é um ano bissexto`)
    }
    
}

bissexto(0);
bissexto(4);
bissexto(100);
bissexto(400);
bissexto(800);
bissexto(2020);
bissexto(2021);

/*12) Faça um algoritmo que calcule o fatorial de um número.*/

console.log("\n 12 -->");

function fatorial(nFatorial) {

    if(nFatorial == 0 || nFatorial == 1) {
        return 1
    }
    let resultado = nFatorial;
    let primeiroMultipicador = nFatorial - 1;
    for (let i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }
     
    return resultado;
}
 
console.log(fatorial(2));

/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

console.log("\n 13 -->");

function semana(dia) {

switch(dia) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        return "dia útil";
    case 1:
    case 7:
        return "fim de semana";
    default:
        return "inválido";
    };
};

console.log(semana(1));
console.log(semana(8));
console.log(semana(4));

/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

console.log("\n 14 -->");

function feira(fruta) {

switch(fruta) {
    case "maçã":
        return "Não vendemos esta fruta aqui";
    case "kiwi":
        return "Estamos com escassez de kiwis";
    case "melancia":
        return "Aqui está, são 3 reais o quilo";
    default:
        return "ERRO";
    };
};

console.log(feira(4));
console.log(feira("maçã"));
console.log(feira("kiwi"));
console.log(feira("melancia"));

/*15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

console.log("\n 15 -->");

function revendedora(categoria) {

switch(categoria) {
    case "hatch":
        return "Compra efetuada com sucesso";
    case "sedans":
    case "motocicletas":
    case "caminhonetes":
        return "Tem certeza que não prefere este modelo?";
    default:
        return "Não trabalhamos com este tipo de automóvel aqui";
    };
};

console.log(revendedora("hatch"));
console.log(revendedora("sedans"));
console.log(revendedora("motocicletas"));
console.log(revendedora("caminhonetes"));
console.log(revendedora("bicicleta"));

/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

console.log("\n 16 -->");

function calc(v1, v2, op) {

switch(op) {
    case "+":
        return v1 + v2;
    case "-":
        return v1 - v2;
    case "*":
        return v1 * v2;
    case "/":
        return v1 / v2;                
    default:
        return "Operação inválida";
    };
};

console.log(calc(1, 1, "+"));
console.log(calc(1, 1, "-"));
console.log(calc(1, 1, "*"));
console.log(calc(1, 1, "/"));
console.log(calc(1, 1, "+/"));


/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

console.log("\n 17 -->");

function novoSalario(aumento, sal) {
    
    switch (aumento) {
        case 'A':
            return sal + ( sal * 0.1)
        case 'B':
            return sal + ( sal * 0.15)
        case 'C':
            return sal + ( sal * 0.2)
        default:
            return "inválido"
    };

}

console.log("R$" + novoSalario("A", 1000));
console.log("R$" + novoSalario("B", 1000));
console.log("R$" + novoSalario("C", 1000));
console.log(novoSalario("Z", 1000));

/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

console.log("\n 18 -->");

function extenso(numero) {

    switch (numero) {
        case 0:
            console.log("Zero")
            break
        case 1:
            console.log("Um")
            break
        case 2:
            console.log("Dois")
            break
        case 3:
            console.log("Três")
            break
        case 4:
            console.log("Quatro")
            break
        case 5:
            console.log("Cinco")
            break
        case 6:
            console.log("Seis")
            break
        case 7:
            console.log("Sete")
            break
        case 8:
            console.log("Oito")
            break
        case 9:
            console.log("Nove")
            break
        case 10:
            console.log("Dez")
            break
        default:
            console.log("Numero fora do intervalo")
    };

}

extenso(0)
extenso(1)
extenso(2)
extenso(3)
extenso(4)
extenso(5)
extenso(6)
extenso(7)
extenso(8)
extenso(9)
extenso(10)
extenso(-1)

/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

console.log("\n 19 -->");

    console.log("--------- Cardapio -----------\n");
    console.log("Codigo --- Descrição --- Preço\n");
    console.log("100 / Cachorro Quente    / R$3,00");
    console.log("200 / Hambúrguer Simples / R$4,00");
    console.log("300 / Cheeseburguer      / R$5,50");
    console.log("400 / Bauru              / R$7,50");
    console.log("500 / Refrigerante       / R$3,50");
    console.log("600 / Suco               / R$2,80");
    console.log("------------------------------\n");

    function lanchonete(codigo, qtd) {
        switch (codigo) {
            case 100:
                return qtd * 3
            case 200:
                return qtd * 4
            case 300:
                return qtd * 5.5
            case 400:
                return qtd * 7.5
            case 500:
                return qtd * 3.5
            case 600:
                return qtd * 2.8
            default:
                return 'Produto não existente.'
        }
    }
    
    console.log("Total R$" + (lanchonete(100, 2) + ",00"))
    console.log("Total R$" + (lanchonete(200, 2) + ",00"))
    console.log("Total R$" + (lanchonete(300, 2) + ",00"))
    console.log("Total R$" + (lanchonete(400, 2) + ",00"))
    console.log("Total R$" + (lanchonete(500, 2) + ",00"))
    console.log("Total R$" + (lanchonete(600, 2)).toFixed(2).toString().replace(".", ",")) //testes
    console.log(lanchonete(000, 2))
    
/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

console.log("\n 20 -->");

function caixa(sacar) {

    let real200 = 0
    let real100 = 0 
    let real50 = 0
    let real20 = 0
    let real10 = 0
    let real5 = 0
    let real2 = 0
    let real1 = 0
    let real05 = 0
    let real025 = 0
    let real01 = 0
    let real005 = 0
    let valorReal = distribuicao(sacar)

    while(sacar >= valorReal) {
        switch(valorReal) {
            case 200:
            sacar -= 200
            real200++
            break;
            case 100:
            sacar -= 100
            real100++
            break;
            case 50:
            sacar -= 50
            real50++
            break;
            case 20:
            sacar -= 20
            real20++
            break;
            case 10:
            sacar -= 10
            real10++
            break;
            case 5:
            sacar -= 5
            real5++
            break;
            case 2:
            sacar -= 2
            real2++
            break;
            case 1:
            sacar -= 1
            real1++
            break;
            case 0.5:
            sacar -= 0.5
            real05++
            break;
            case 0.25:
            sacar -= 0.25
            real025++
            break;
            case 0.1:
            sacar -= 0.1
            real01++
            break;
            case 0.05:
            sacar -= 0.05
            real005++
            break;
        }

        valorReal = distribuicao(sacar)
    }

    return cedulas(real200, real100, real50, real20, real10, real5, real2, real1, real05, real025, real01, real005)
}

function distribuicao(sacar) {

    if(sacar >= 200) {
        return 200
    } else if(sacar >= 100) {
        return 100
    } else if(sacar >= 50) {
        return 50
    } else if(sacar >= 20) {
        return 20
    } else if(sacar >= 10) {
        return 10
    } else if(sacar >= 5) {
        return 5
    } else if(sacar >= 2) {
        return 2
    } else if(sacar >= 1) {
        return 1
    } else if(sacar >= 0.5) {
        return 0.5
    } else if(sacar >= 0.25) {
        return 0.25
    } else if(sacar >= 0.10) {
        return 0.10
    } else if(sacar >= 0.05) {
        return 0.05
    } 

}

function cedulas(real200, real100, real50, real20, real10, real5, real2, real1, real05, real025, real01, real005) {
    let cedulasQuant = ""

    if(real200 > 0) {
        cedulasQuant += `${real200} nota(s) de R$200 / `
    } 
    if(real100 > 0) {
        cedulasQuant += `${real100} nota(s) de R$100 / `
    } 
    if(real50 > 0) {
        cedulasQuant += `${real50} nota(s) de R$50 / `
    } 
    if(real20 > 0) {
        cedulasQuant += `${real20} nota(s) de R$20 / `
    } 
    if(real10 > 0) {
        cedulasQuant += `${real10} nota(s) de R$10 / `
    } 
    if(real5 > 0) {
        cedulasQuant += `${real5} nota(s) de R$5 / `
    } 
    if(real2 > 0) {
        cedulasQuant += `${real2} nota(s) de R$2 / `
    } 
    if(real1 > 0) {
        cedulasQuant += `${real1} moeda(s) de R$1 / `
    } 
    if(real05 > 0) {
        cedulasQuant += `${real05} moeda(s) de R$0,5 / `
    } 
    if(real025 > 0) {
        cedulasQuant += `${real025} moeda(s) de R$0,25 / `
    } 
    if(real01 > 0) {
        cedulasQuant += `${real01} moeda(s) de R$0,10 / `
    } 
    if(real005 > 0) {
        cedulasQuant += `${real005} moeda(s) de R$0,05 / `
    }
    return cedulasQuant

}

console.log(caixa(388.90));

/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

console.log("\n 21 -->");

function plano(idade) {
    if(idade < 10) {
        console.log("R$180,00")
    } else if(idade < 31) {
        console.log("R$150,00")
    } else if(idade < 61) {
        console.log("R$195,00")
    } else { 
        console.log("R$230,00")
    }
}

plano(9)
plano(10)
plano(30)
plano(15)
plano(31)
plano(60)
plano(45)
plano(61)

/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

console.log("\n 22 -->");

function anuidade(mes, valor) {
    if(mes > 0 && mes <= 12) {
        atraso = mes - 1
        return (valor * (1.05**atraso)).toFixed(2).replace(".", ",")
    } else {
        return "Inválido"
    }
}

console.log("R$" + anuidade(12, 100))

/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

console.log("\n 23 -->");

function calcularNotaFinal(alunoNome, nota1, nota2, nota3){

    let mediaFinal = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10

    console.log(`Código do Aluno: ${codigo(alunoNome)}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)

}

function codigo(AlunoNome) {

    switch(AlunoNome) {

        case "fulano":
        return "001";
        case "beltrano":
        return "002";
        case "ciclano":
        return "003";   
    }
}

calcularNotaFinal("fulano", 2.8, 6, 3.5)


/*24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.*/

console.log("\n 24 -->");

function repetir11(palavra) {
    let numero = 0
    while(numero < 12) {
        switch (numero) {
            case numero:
                console.log(palavra)
                numero++
                break;
        }
    }
}

repetir11("Hello Word!")

/*25) Escrever um programa para exibir os números de 1 até 50 na tela.*/

console.log("\n 25 -->");

function contar50() {
    let numero = 1
    while(numero < 51) {
        switch (numero) {
            case numero:
                console.log(numero)
                numero++
                break;
        }
    }
}

contar50()

/*26) Fazer um programa para encontrar todos os pares entre 1 e 100.*/

console.log("\n 26 -->");

function contarPar() {
    let numero = 1
    while(numero < 101) {
        switch (numero % 2) {
            case 0:
                console.log(numero)
                numero++
                break;
            default:
                numero++
                break;
        }
    }
}

contarPar()

/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

console.log("\n 27 -->");

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));

/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

console.log("\n 28 -->");

function ContarparesImpares(vNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    let i = 0
    while(i < vNumeros.length) {
        switch (vNumeros[i] % 2) {
            case 0:
                qtdPares++
                i++
                break;
            default:
                qtdImpares++
                i++
                break;
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

ContarparesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])

console.log("-------------------------------------")

function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

paresImpares(vetor)

/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

console.log("\n 29 -->");

function intervalo(vetor) {
    let numerosIntervalo = 0
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            numerosIntervalo++
        }
    }
    return `${numerosIntervalo} números dentro do intervalo.`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(intervalo(vetor))

/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

console.log("\n 30 -->");

function procurandoValor(vetor) {
    let valorMaior = vetor[0]
    let valorMenor = vetor[0]
    for (let i = 1; i < vetor.length; i++) {
        if(vetor[i] > valorMaior){
            valorMaior = vetor[i] 
        } else if(vetor[i] < valorMenor){
            valorMenor = vetor[i] 
        }
    }
    return `Maior ${valorMaior}. Menor ${valorMenor}`
}

vetor = [ 30, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(procurandoValor(vetor))

/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

console.log("\n 31 -->");

function procurandoNegativos(vetor) {

    let numNegativo = 0

    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0){
           numNegativo++
        }
    }

    return `Vetor tem ${numNegativo} números negativos`
}

vetor = [ -30, 8, 9, -10, 11, 12, 16, -17, 18, -19, 20, 21]

console.log(procurandoNegativos(vetor))

/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

console.log("\n 32 -->");

function meidaAritimetica(vetor) {
    let media = 0
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    media = soma / vetor.length
    console.log(soma)
    return `Vetor tem uma media aritmética de ${media.toFixed(2)}`
}

vetor = [ 30, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 20]

console.log(meidaAritimetica(vetor))

/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

console.log("\n 33 -->");

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

let vetorInteiro = [ 30, 8, 9, 10]
let vetorString = [ "teste", "8", "um", "1.5"]
let vetorDouble = [ 2.5, 1.3, 4.9, 7.1]

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))

/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

console.log("\n 34 -->"); //Revisar

function verificacaoDeString(string1, string2) {

    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }

 console.log(verificacaoDeString('abc','cba'))

/*35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.*/

console.log("\n 35 -->");

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorInicial, vetorAdicionar) {
    for(let i = 0; i < vetorAdicionar.length; i++) {
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionaVetor(vetorPilha, vetorAdiciona)

/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

console.log("\n 36 -->");






/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

console.log("\n 37 -->");







/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

console.log("\n 38 -->");







/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

console.log("\n 39 -->");





/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

console.log("\n 40 -->");




