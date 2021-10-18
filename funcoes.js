var tabuleiro=[
                  ['','','','','','','','','',''],
                  ['','B','','B','','B','','B','',''],
                  ['','','B','','B','','B','','B',''],
                  ['','B','','B','','B','','B','',''],
                  ['','','L','','L','','L','','L',''],
                  ['','L','','L','','L','','L','',''],
                  ['','','P','','P','','P','','P',''],
                  ['','P','','P','','P','','P','',''],
                  ['','','P','','P','','P','','P',''],
                  ['','','','','','','','','','']];            

var rodadaHumano = true;
<<<<<<< Updated upstream
=======
var cemiterioBranco = 0;
var cemiterioPreto = 0;
var comeuPeçaPrev = false;
var movimentosSemComer = 0;

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;
>>>>>>> Stashed changes

function moverPeça(linOrigem, colOrigem, linDestino, colDestino){
      //faz o movimento da peça
      let peça = tabuleiro[linOrigem][colOrigem];
      removePeça(linOrigem, colOrigem);

      if (tabuleiro[linDestino][colDestino] = 'L') {
            tabuleiro[linDestino][colDestino] = peça;  //coloca a nova posição na matriz
            
            if (peça == 'B' && linDestino == 8){ //se a peça branca chega no topo vira dama
                  tornarDama(linDestino, colDestino);
            } 
            else if (peça == 'P' && linDestino == 1){ //se a peça preta chega na base vira dama
                  tornarDama(linDestino, colDestino);
            }
            else{
                  criaPeça(linDestino, colDestino, peça);   //cria a imagem da peça
            }

            let diferençaLin = linOrigem - linDestino;
            if (diferençaLin == -2){ //movimentou para cima
                  let diferençaCol = colOrigem - colDestino;
                  if (diferençaCol == -2){ //movimentou para direita
                        comerPeça(linOrigem+1, colOrigem+1);
                  }
                  if (diferençaCol == 2){ //movimentou para esquerda
                        comerPeça(linOrigem+1, colOrigem-1);
                  }
            }
            else if (diferençaLin == 2){ //movimentou para baixo
                  let diferençaCol = colOrigem - colDestino;
                  if (diferençaCol == -2){ //movimentou para direita
                        comerPeça(linOrigem-1, colOrigem+1);
                        
                  }
                  if (diferençaCol == 2){ //movimentou para esquerda
                        comerPeça(linOrigem-1, colOrigem+1);
                  }
            }
      }else{
            console.log('deu ruim, já há alguem na célula selecionada');
      }
      
}

function comerPeça(linPeça, colPeça){
      //remove a peça adversaria e mostra a peça na lista lateral
      movimentosSemComer = 0;
      let peça = tabuleiro[linPeça][colPeça];
      removePeça(linPeça, colPeça);
      
      //mostra a peça na lista lateral

}

function listaMovimentos(linPeça, colPeça){
      //sinaliza quais células a peça pode se mover
      let idcelula = '';
      let movComer = false;
      let peça = tabuleiro[linPeça][colPeça];
      if (peça == 'B'){
            console.log('peça branca');
            if ((tabuleiro[linPeça+1][colPeça+1] == 'P' || tabuleiro[linPeça+1][colPeça+1] == 'DP') 
                        && tabuleiro[linPeça+2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça+2, colPeça+2);
                  movComer = true;
            }
            if ((tabuleiro[linPeça+1][colPeça-1] == 'P' || tabuleiro[linPeça+1][colPeça-1] == 'DP') 
                  && tabuleiro[linPeça+2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça+2, colPeça-2);
                  movComer = true;
            }

            if (movComer == false){
                  if (tabuleiro[linPeça+1][colPeça+1] == 'L'){
                        //sinaliza mudando a cor da célula
                        alterarCorPossivelMovimento(linPeça+1, colPeça+1);
      
                  }
      
                  if (tabuleiro[linPeça+1][colPeça-1] == 'L'){
                        //sinaliza mudando a cor da célula
                        alterarCorPossivelMovimento(linPeça+1, colPeça-1);
                  }   
            }
            
      }
      else if (peça == 'DB'){
            console.log('dama branca');
            if ((tabuleiro[linPeça+1][colPeça+1] == 'P' || tabuleiro[linPeça+1][colPeça+1] == 'DP') 
                  && tabuleiro[linPeça+2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça+2, colPeça+2);
                  movComer = true;
            }
            if ((tabuleiro[linPeça+1][colPeça-1] == 'P' || tabuleiro[linPeça+1][colPeça-1] == 'DP') 
                  && tabuleiro[linPeça+2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça+2, colPeça-2);
                  movComer = true;
            }
            if ((tabuleiro[linPeça-1][colPeça+1] == 'P' || tabuleiro[linPeça-1][colPeça+1] == 'DP') 
                  && tabuleiro[linPeça-2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça-2, colPeça+2);
                  movComer = true;
            }
            if ((tabuleiro[linPeça-1][colPeça-1] == 'P' || tabuleiro[linPeça-1][colPeça-1] == 'DP') 
                  && tabuleiro[linPeça-2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça-2, colPeça-2);
                  movComer = true;
            }

            if (movComer == false){
                  if (tabuleiro[linPeça+1][colPeça+1] == 'L'){
                        //sinaliza mudando a cor da célula
                        alterarCorPossivelMovimento(linPeça+1, colPeça+1);
      
                  }
                  if (tabuleiro[linPeça+1][colPeça-1] == 'L'){
                        //sinaliza mudando a cor da célula
                        alterarCorPossivelMovimento(linPeça+1, colPeça-1);
                  }  
                  if (tabuleiro[linPeça-1][colPeça+1] == 'L'){
                        //sinaliza mudando a cor da célula
                        alterarCorPossivelMovimento(linPeça-1, colPeça+1);
                  }
                  if (tabuleiro[linPeça-1][colPeça-1] == 'L'){
                        //sinaliza mudando a cor da célula
                        alterarCorPossivelMovimento(linPeça-1, colPeça-1);
                  }
            }
      }
      else if (peça == 'P'){
            console.log('peça preta');
            if ((tabuleiro[linPeça-1][colPeça+1] == 'B' || tabuleiro[linPeça-1][colPeça+1] == 'DB') 
                  && tabuleiro[linPeça-2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça-2, colPeça+2);
                  movComer = true;
            }
            if ((tabuleiro[linPeça-1][colPeça-1] == 'B' || tabuleiro[linPeça-1][colPeça-1] == 'DB') 
                  && tabuleiro[linPeça-2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça-2, colPeça-2);
                  movComer = true;
            }

            if (movComer == false){ 
                  if (tabuleiro[linPeça-1][colPeça+1] == 'L'){
                        //sinaliza mudando a cor da célula
                        alterarCorPossivelMovimento(linPeça-1, colPeça+1);
                  }
                  if (tabuleiro[linPeça-1][colPeça-1] == 'L'){
                        //sinaliza mudando a cor da célula
                        alterarCorPossivelMovimento(linPeça-1, colPeça-1);
                  }
            }
      }
      else if (peça == 'DP'){
            console.log('dama preta');
            if ((tabuleiro[linPeça+1][colPeça+1] == 'B' || tabuleiro[linPeça+1][colPeça+1] == 'DB') 
                  && tabuleiro[linPeça+2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça+2, colPeça+2);
                  movComer = true;
            }
            if ((tabuleiro[linPeça+1][colPeça-1] == 'B' || tabuleiro[linPeça+1][colPeça-1] == 'DB') 
                  && tabuleiro[linPeça+2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça+2, colPeça-2);
                  movComer = true;
            }
            if ((tabuleiro[linPeça-1][colPeça+1] == 'B' || tabuleiro[linPeça-1][colPeça+1] == 'DB') 
                  && tabuleiro[linPeça-2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça-2, colPeça+2);
                  movComer = true;
            }
            if ((tabuleiro[linPeça-1][colPeça-1] == 'B' || tabuleiro[linPeça-1][colPeça-1] == 'DB') 
                  && tabuleiro[linPeça-2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça-2, colPeça-2);
                  movComer = true;
            }

            if (movComer == false){
                  if (tabuleiro[linPeça+1][colPeça+1] == 'L'){
                        //sinaliza mudando a cor da célula
                        alterarCorPossivelMovimento(linPeça+1, colPeça+1);
      
                  }
                  if (tabuleiro[linPeça+1][colPeça-1] == 'L'){
                        //sinaliza mudando a cor da célula
                        alterarCorPossivelMovimento(linPeça+1, colPeça-1);
                  }  
                  if (tabuleiro[linPeça-1][colPeça+1] == 'L'){
                        //sinaliza mudando a cor da célula
                        alterarCorPossivelMovimento(linPeça-1, colPeça+1);
                  }
                  if (tabuleiro[linPeça-1][colPeça-1] == 'L'){
                        //sinaliza mudando a cor da célula
                        alterarCorPossivelMovimento(linPeça-1, colPeça-1);
                  }
            }
      }
}

function tornarDama(linPeça, colPeça){
      if (linPeça == 8){
            tabuleiro[linPeça][colPeça] = 'DB';
            criaPeça(linPeça, colPeça, 'DB'); 
      }
      if (linPeça == 1){
            tabuleiro[linPeça][colPeça] = 'DP';
            criaPeça(linPeça, colPeça, 'DP'); 
      }
}

function verificaMovimentoObrigatorio(linPeça, colPeça){
      //sinaliza quais peças tem obrigatoriedade de movimento
      let podeMovimentar = false;
      let haMovimentoObrig = false;
      let peça = tabuleiro[linPeça][colPeça];
      let peçaAdv = '';
      if (peça == 'B' || peça == 'DB'){
            peça = 'B';
            peçaAdv = 'P';
      }
      else if (peça == 'P' || peça == 'DP'){
            peça = 'P';
            peçaAdv = 'B';
      }

      for(let lin = 1; lin <=8; lin++){
            for(let col = 1; col <=8; col++) {  //percorre todo o tabuleiro
                  if (tabuleiro[lin][col] == peça){ // se for o mesmo tipo de peça
                        let lin1 = 0;
                        let lin2 = 0;
                        if (peça == 'B'){
                              lin1 = lin+1;
                              lin2 = lin+2;
                        }
                        else if (peça == 'P'){
                              lin1 = lin-1;
                              lin2 = lin-2; 
                        }

                        if ((tabuleiro[lin1][col+1] == peçaAdv || tabuleiro[lin1][col+1] == 'D'+peçaAdv) 
                        && tabuleiro[lin2][col+2] == 'L'){ //se pode comer uma peça
                              haMovimentoObrig = true;
                              if (linPeça == lin && colPeça == col){
                                    podeMovimentar = true;
                              } 
                        }   
                        if ((tabuleiro[lin1][col-1] == peçaAdv || tabuleiro[lin1][col-1] == 'D'+peçaAdv) 
                        && tabuleiro[lin2][col-2] == 'L'){ //se pode comer uma peça
                              haMovimentoObrig = true;
                              if (linPeça == lin && colPeça == col){
                                    podeMovimentar = true;
                              }
                        }  
                  }
                  if (tabuleiro[lin][col] == 'D'+peça){ // se for o mesmo tipo de peça
                        if ((tabuleiro[lin+1][col+1] == peçaAdv || tabuleiro[lin+1][col+1] == 'D'+peçaAdv)
                        && tabuleiro[lin+2][col+2] == 'L'){ //se pode comer uma peça
                              haMovimentoObrig = true;
                              if (linPeça == lin && colPeça == col){
                                    podeMovimentar = true;
                              } 
                        }   
                        if ((tabuleiro[lin+1][col-1] == peçaAdv || tabuleiro[lin+1][col-1] == 'D'+peçaAdv) 
                        && tabuleiro[lin+2][col-2] == 'L'){ //se pode comer uma peça
                              haMovimentoObrig = true;
                              if (linPeça == lin && colPeça == col){
                                    podeMovimentar = true;
                              }
                        } 

                        if ((tabuleiro[lin-1][col+1] == peçaAdv || tabuleiro[lin-1][col+1] == 'D'+peçaAdv) 
                        && tabuleiro[lin-2][col+2] == 'L'){ //se pode comer uma peça
                              haMovimentoObrig = true;
                              if (linPeça == lin && colPeça == col){
                                    podeMovimentar = true;
                              } 
                        }   
                        if ((tabuleiro[lin-1][col-1] == peçaAdv || tabuleiro[lin-1][col-1] == 'D'+peçaAdv) 
                        && tabuleiro[lin-2][col-2] == 'L'){ //se pode comer uma peça
                              haMovimentoObrig = true;
                              if (linPeça == lin && colPeça == col){
                                    podeMovimentar = true;
                              }
                        } 
                  }
            } 
      }
      //retorna true se o movimento é permitido
      if (haMovimentoObrig && podeMovimentar){
            return true;
      }
      else if (haMovimentoObrig && !podeMovimentar){
            return false;
      }
      else
            return true;
}

function clickCelula(linPeça, colPeça){
      let idcelula = `${linPeça}${colPeça}`;
      let celula = document.getElementById(idcelula);
      let cor = celula.style.backgroundColor;
      
      if (cor == ''){ //não está selecionado
            limpaSelecao();
            
            if ((tabuleiro[linPeça][colPeça] == 'B' || tabuleiro[linPeça][colPeça] == 'DB') && rodadaHumano == true){ //rodada humano
                  let permitido = verificaMovimentoObrigatorio(linPeça, colPeça); 
                  if (permitido) {
                        console.log('não há movimentos obrigatórios em outras células');
                        celula.style.backgroundColor = 'rgb(11, 116, 236)';
                        listaMovimentos(linPeça, colPeça);
                  }
                  else{
                        console.log('não pode movimentar essa peça por já há uma peça com movimento obrigatório');
                  }
            }
            else if ((tabuleiro[linPeça][colPeça] == 'P' || tabuleiro[linPeça][colPeça] == 'DP') && rodadaHumano == false){ //rodada computador
                  let permitido = verificaMovimentoObrigatorio(linPeça, colPeça); 
                  if (permitido) {
                        console.log('não há movimentos obrigatórios em outras células');
                        celula.style.backgroundColor = 'rgb(11, 116, 236)';
                        listaMovimentos(linPeça, colPeça);
                  }
                  else{
                        console.log('não pode movimentar essa peça por já há uma peça com movimento obrigatório');
                  }
            }

      }
      else if (cor == 'rgb(11, 202, 236)'){ //ciano é uma das casas para movimentar
            //percorrer divs para saber quem é a célula com cor Selecionada pra saber a célula origem
            let idOrigem = buscarSelecionada();
            moverPeça(parseInt(idOrigem[0]), parseInt(idOrigem[1]), linPeça, colPeça);

            console.log('moveu a peça');
            limpaSelecao();
            movimentosSemComer++;
            if (rodadaHumano == true){
                  rodadaHumano = false;
            }
            else{
                  rodadaHumano = true;
            }
      }
      else if (cor == 'rgb(11, 116, 236)'){ //azul está selecionado
            // retorna a cor da célula para nãoSelecionado
            limpaSelecao();
      } 

      verificaEmpate();

      if (rodadaHumano == false){
            movimentoComputador();
      }
}

function removePeça(linPeça, colPeça){
      tabuleiro[linPeça][colPeça] = 'L';
      let id = `I${linPeça}${colPeça}`;
      let elem = document.getElementById(id); 
      elem.parentNode.removeChild(elem);
      console.log('devia ter removido a peça');
}

function criaPeça(linPeça, colPeça, tipo){
      let idcelula = `${linPeça}${colPeça}`;
      let id = `I${linPeça}${colPeça}`;
      let peca = document.createElement('img');
      peca.id = id;
      peca.src = "imagens/"+tipo+".png"
      peca.height = "50";
      peca.width = "50";
      peca.style = 'vertical-align: middle';

      let celula = document.getElementById(idcelula);
      celula.appendChild(peca);   
}

function limpaSelecao(){
      for(let lin = 1; lin <=8; lin++){
            for(let col = 1; col <=8; col++) {
                  let idcelula = `${lin}${col}`;
                  let celula = document.getElementById(idcelula);
                  celula.style.backgroundColor = '';
            }   
      }
      console.log('limpou a seleção');
}

function buscarSelecionada(){
      for(let lin = 1; lin <=8; lin++){
            for(let col = 1; col <=8; col++) {
                  let idcelula = `${lin}${col}`;
                  let celula = document.getElementById(idcelula);
                  if (celula.style.backgroundColor == 'rgb(11, 116, 236)'){
                        return idcelula;
                  }
            }   
      }
      return false;
}

function alterarCorPossivelMovimento(linPeça, colPeça){
      let idcelula = `${linPeça}${colPeça}`;
      let celula = document.getElementById(idcelula);
      celula.style.backgroundColor = 'rgb(11, 202, 236)';
}

<<<<<<< Updated upstream
=======
function enviarParaCemiterio(tipo){
      let id ='';
      if (tipo == 'DB' || tipo == 'DP'){
            id = 'C'+tipo[1];
      }
      else{
            id = 'C'+tipo;
      }
       
      if (id == 'CB'){
            cemiterioBranco++;
      }
      else if (id == 'CP'){
            cemiterioPreto++;
      }

      let linha = document.createElement('li');

      let peca = document.createElement('img');
      peca.src = "imagens/"+tipo+".png"
      peca.className = "dead_ask";

      linha.appendChild(peca);

      let lista = document.getElementById(id);
      lista.appendChild(linha);
}

/**Tentativaa de fazer funcionar o popup */
function verificarFimJogo(){
      let txt = '';
      let imagem = '';

      if (cemiterioPreto == 12){
            txt= "Parabéns você ganhou!!!";
            imagem = 'ganhou';
            console.log("Passei no cemintério Preto ")
            popup(txt, imagem);  
      }else if (cemiterioBranco == 12     ){
            txt = "Poxa! Você Perdeu!";
            imagem = 'perdeu';
            popup(txt, imagem);  
            console.log("Passei no cemintério Branco ")
      }
}

function verificaEmpate(){
      if (movimentosSemComer == 20){
            txt = "Poxa! Você Empatou!";
            imagem = 'empate';
            popup(txt, imagem);  
            console.log("Empatou")
      }
}

function popup(txt1, imagem1){
        /* Texto */

      let txt = txt1;
      let imagem = imagem1;

      let elem_text =document.getElementById('textodofim'); 
      elem_text.parentNode.removeChild(elem_text);
  
      let texto = document.createElement('h1');
      texto.className = 'txtfim';
      texto.textContent = txt;
  
      let div = document.getElementById('status');
      div.appendChild(texto); 
  
      /* Imagem */
  
      let elem = document.getElementById('imagemfim'); 
      elem.parentNode.removeChild(elem);
  
      let icone = document.createElement('img');
      icone.id = 'imagemfim';
      icone.className = "imagemdopopup";
      icone.src = "imagens/"+imagem+".png"
  
      let celula = document.getElementById('status');
      celula.appendChild(icone); 
  
      /* Button */
        
      let elem_button = document.getElementById('restart'); 
      elem_button.parentNode.removeChild(elem_button);
    
      let botao = document.createElement('button');
      botao.id = 'restart';
      botao.onclick= closeModal;
      botao.textContent = "Jogar novamente";
    
      let button= document.getElementById('status');
      console.log("Passei no Popup")
      button.appendChild(botao); 

      cronometroPause();

      showModal();
}

//Fechar Modal
function closeModal() {
      console.log("PASSEI AQUI PARA FECHAR")
      window.location.reload();
}
  
/** Fim da Tentativaa de fazer funcionar o popup */
>>>>>>> Stashed changes
function movimentoComputador(){
      let quant = 0;

      let idcelula = buscarSelecionada();
      if (idcelula == false){ //não há ninguém selecionado
            for(let lin = 1; lin <=8; lin++){
                  for(let col = 1; col <=8; col++) {
                       if (tabuleiro[lin][col] == 'P' || tabuleiro[lin][col] == 'DP') { //percorre a matriz para saber quantas peças pretas tem
                              quant++;
                       }
                  }
            }

            let posicao = Math.floor(Math.random() * quant + 1);  //sorteia uma peça
            
            quant = 0;
            for(let lin = 1; lin <=8; lin++){
                  for(let col = 1; col <=8; col++) {
                       if (tabuleiro[lin][col] == 'P' || tabuleiro[lin][col] == 'DP') {
                              quant++;
                              if (posicao == quant){
                                    //seleciona a peça
                                    clickCelula(lin, col);
                              }
                       }
                  }
            }
      }
      else if (parseInt(idcelula) > 0){  // há uma célula selecionada 
            for(let lin = 1; lin <=8; lin++){
                  for(let col = 1; col <=8; col++) {
                        let idcelula = `${lin}${col}`;
                        let celula = document.getElementById(idcelula);
                        if (celula.style.backgroundColor == 'rgb(11, 202, 236)'){ // se for um possivel movimento, cor ciano
                              quant++;
                        }
                  }   
            }

            if (quant > 0){
                  let posicao = 1;
                  if (quant !== 1){
                        posicao = Math.floor(Math.random() * quant + 1);  //sorteia uma peça
                  }

                  quant = 0;
                  for(let lin = 1; lin <=8; lin++){
                        for(let col = 1; col <=8; col++) {
                              let idcelula = `${lin}${col}`;
                              let celula = document.getElementById(idcelula);
                              if (celula.style.backgroundColor == 'rgb(11, 202, 236)'){
                                    quant++;
                                    if (quant == posicao){
                                          //tenta fazer o movimento na peça
                                          clickCelula(lin, col);
                                          return true;
                                    }
                              }
                        }   
                  } 
            }
            else if (quant == 0){
                  limpaSelecao();
                  movimentoComputador();
            }
      }

      
}