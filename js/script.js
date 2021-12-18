const dadosCPU = [];
const dadosJogador = [];

function sorteio(){
    totalCPU = 0;
    totalUser = 0;

    for (let i = 0; i < 3; i++){
        dadosCPU[i] = Math.floor(Math.random() * 6) + 1;
        totalCPU += dadosCPU[i];

        dadosJogador[i] = Math.floor(Math.random() * 6) + 1;
        totalUser += dadosJogador[i];
    }

    document.getElementById("dados-cpu").innerHTML = 
    `<img src="assets/img/dado${dadosCPU[0]}.png">
    <img src="assets/img/dado${dadosCPU[1]}.png">
    <img src="assets/img/dado${dadosCPU[2]}.png">`;

    document.getElementById("dados-user").innerHTML = 
    `<img src="assets/img/dado${dadosJogador[0]}.png">
    <img src="assets/img/dado${dadosJogador[1]}.png">
    <img src="assets/img/dado${dadosJogador[2]}.png">`;

    var mensagem ="";
    if (totalCPU > totalUser){
        mensagem = "CPU Vence o Jogo! ("+totalCPU+" a "+totalUser+")";
    }else{
        if (totalUser < totalCPU){
            mensagem = "Jogador Vence o jogo! ("+totalUser+" a "+totalCPU+")"
        } else{
            mensagem = `O jogo empatou! ${totalCPU} a ${totalUser}`
        }
    }

    document.getElementById("result").innerHTML = mensagem;
}