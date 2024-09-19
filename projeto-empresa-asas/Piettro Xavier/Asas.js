let regiao = "norte" /* Seleciona a Região Para Qual Será Realizada a Viagem */ 
let criancaeconomica = 4 /* Indica Quantas Crianças Irão Viajar na Classe Econômica */
let adultoeconomica = 1 /* Indica Quantos Adultos Irão Viajar na Classe Econômica */
let criancaexecutiva = 3 /* Indica Quantas Crianças Irão Viajar na Classe Executiva */
let adultoexecutiva = 2 /* Indica Quantaos Adultos Irão Viajar na Classe Executiva */

if (regiao == "norte") { /* Determina Condição Caso A Região Seja O Norte do Brasil */
console.log ()
console.log ("A quantidade de Passageiros Adultos é:", adultoeconomica + adultoexecutiva) /* Calcula a Quantidade de Passageiras Adultos */
console.log ()
console.log ("A quantidade de Passageiros Crianças é:", criancaeconomica + criancaexecutiva) /* Calcula a Quantidade de Passageiras Crianças */
console.log ()
console.log ("Destino escolhido:", regiao) /* Exibe Para onde Será a Viagem */
console.log ()
console.log ("A quantidade de pessoas na classe econômica é:", criancaeconomica + adultoeconomica) /* Calcula a Quantidade de Passageiras Na Classe Econômica */
console.log ("Sendo:", criancaeconomica, "criança(s) &", adultoeconomica, "adulto(s)") /* Exibe a Quantidade de Adultos e Crianças Separadamente*/
console.log ()
console.log ("A quantidade de pessoas na classe executiva é:", criancaexecutiva + adultoexecutiva) /* Calcula a Quantidade de Passageiras Na Classe Executiva */
console.log ("Sendo:", criancaexecutiva, "criança(s) &", adultoexecutiva, "adulto(s)") /* Exibe a Quantidade de Adultos e Crianças Separadamente*/
console.log ()
console.log ("o valor total da viagem é: R$", (criancaeconomica * 1800) + (adultoeconomica * 2500) + (criancaexecutiva * (1800 + 1800 * 10/100)) + (adultoexecutiva * (2500 + 2500 + 20/100))) /*Calcula o Valor Total da Viagem*/
console.log ()
}

else if (regiao == "sul") { /* Determina Condição Caso A Região Seja O Sul do Brasil */
console.log ()
console.log ("A quantidade de Passageiros Adultos é:", adultoeconomica + adultoexecutiva) /* Calcula a Quantidade de Passageiras Crianças */
console.log ()
console.log ("A quantidade de Passageiros Crianças é:", criancaeconomica + criancaexecutiva)  /* Calcula a Quantidade de Passageiras Crianças */
console.log ()
console.log ("Destino escolhido:", regiao) /* Exibe Para onde Será a Viagem */
console.log ()
console.log ("A quantidade de pessoas na classe econômica é:", criancaeconomica + adultoeconomica) /* Calcula a Quantidade de Passageiras Na Classe Econômica */
console.log ("Sendo:", criancaeconomica, "criança(s) &", adultoeconomica, "adulto(s)") /* Exibe a Quantidade de Adultos e Crianças Separadamente */
console.log ()
console.log ("A quantidade de pessoas na classe executiva é:", criancaexecutiva + adultoexecutiva) /* Calcula a Quantidade de Passageiras Na Classe Executiva */
console.log ("Sendo:", criancaexecutiva, "criança(s) &", adultoexecutiva, "adulto(s)") /* Exibe a Quantidade de Adultos e Crianças Separadamente */
console.log ()
console.log ("o valor total da viagem é: R$", ((criancaeconomica + adultoeconomica) * 3000) + ((criancaexecutiva + adultoexecutiva) * 4000)) /* Calcula o Valor Total da Viagem */
}

else if (regiao == "asia") { /* Determina Condição Caso A Viagem Seja Para a Ásia */
console.log ()
console.log ("A quantidade de Passageiros Adultos é:", adultoeconomica + adultoexecutiva) /* Calcula a Quantidade de Passageiras Crianças */
console.log ()
console.log ("A quantidade de Passageiros Crianças é:", criancaeconomica + criancaexecutiva) /* Calcula a Quantidade de Passageiras Crianças */
console.log ()
console.log ("Destino escolhido:", regiao) /* Exibe Para onde Será a Viagem */
console.log ()
console.log ("A quantidade de pessoas na classe econômica é:", criancaeconomica + adultoeconomica) /* Calcula a Quantidade de Passageiras Na Classe Econômica */
console.log ("Sendo:", criancaeconomica, "criança(s) &", adultoeconomica, "adulto(s)") /* Exibe a Quantidade de Adultos e Crianças Separadamente */
console.log ()
console.log ("A quantidade de pessoas na classe executiva é:", (criancaexecutiva + adultoexecutiva)) /* Calcula a Quantidade de Passageiras Na Classe Executiva */
console.log ("Sendo:", criancaexecutiva, "criança(s) &", adultoexecutiva, "adulto(s)") /* Exibe a Quantidade de Adultos e Crianças Separadamente */
console.log ()
console.log ("o valor total da viagem é: R$", ((criancaeconomica + adultoeconomica) * 4600) + ((criancaexecutiva + adultoexecutiva) * 6000)) /* Calcula o Valor Total da Viagem */
console.log ()
}

else if (regiao == "europa") { /* Determina Condição Caso A Viagem Seja Para a Europa */
console.log ()
console.log ("A quantidade de Passageiros Adultos é:", adultoeconomica + adultoexecutiva) /* Calcula a Quantidade de Passageiras Crianças */
console.log ()
console.log ("A quantidade de Passageiros Crianças é:", criancaeconomica + criancaexecutiva) /* Calcula a Quantidade de Passageiras Crianças */
console.log ()
console.log ("Destino escolhido:", regiao) /* Exibe Para onde Será a Viagem */
console.log ()
console.log ("A quantidade de pessoas na classe econômica é:", criancaeconomica + adultoeconomica) /* Calcula a Quantidade de Passageiras Na Classe Econômica */
console.log ("Sendo:", criancaeconomica, "criança(s) &", adultoeconomica, "adulto(s)") /* Exibe a Quantidade de Adultos e Crianças Separadamente */
console.log ()
console.log ("A quantidade de pessoas na classe executiva é:", criancaexecutiva + adultoexecutiva) /* Calcula a Quantidade de Passageiras Na Classe Executiva */
console.log ("Sendo:", criancaexecutiva, "criança(s) &", adultoexecutiva, "adulto(s)") /* Exibe a Quantidade de Adultos e Crianças Separadamente */
console.log ()
console.log ("o valor total da viagem é: R$", ((criancaeconomica + adultoeconomica) * 5800) + ((criancaexecutiva + adultoexecutiva) * 7300)) /* Calcula o Valor Total da Viagem */
console.log ()
}

else if (regiao == "africa") { /* Determina Condição Caso A Viagem Seja Para a África */
console.log ()
console.log ("A quantidade de Passageiros Adultos é:", adultoeconomica + adultoexecutiva) /* Calcula a Quantidade de Passageiras Crianças */
console.log ()
console.log ("A quantidade de Passageiros Crianças é:", criancaeconomica + criancaexecutiva) /* Calcula a Quantidade de Passageiras Crianças */
console.log ()
console.log ("Destino escolhido:", regiao) /* Exibe Para onde Será a Viagem */
console.log ()
console.log ("A quantidade de pessoas na classe econômica é:", criancaeconomica + adultoeconomica) /* Calcula a Quantidade de Passageiras Na Classe Econômica */
console.log ("Sendo:", criancaeconomica, "criança(s) &", adultoeconomica, "adulto(s)") /* Exibe a Quantidade de Adultos e Crianças Separadamente */
console.log ()
console.log ("A quantidade de pessoas na classe executiva é:", criancaexecutiva + adultoexecutiva) /* Calcula a Quantidade de Passageiras Na Classe Executiva */
console.log ("Sendo:", criancaexecutiva, "criança(s) &", adultoexecutiva, "adulto(s)") /* Exibe a Quantidade de Adultos e Crianças Separadamente */
console.log ()
console.log ("o valor total da viagem é: R$", ((criancaeconomica + adultoeconomica) * 4200) + ((criancaexecutiva + adultoexecutiva) * 6900)) /* Calcula o Valor Total da Viagem */
console.log ()
}