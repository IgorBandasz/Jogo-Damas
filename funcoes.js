var tabuleiro=[
            ['B','','B','','B','','B',''],
            ['','B','','B','','B','','B'],
            ['B','','B','','B','','B',''],
            ['','L','','L','','L','','L'],
            ['L','','L','','L','','L',''],
            ['','P','','P','','P','','P'],
            ['P','','P','','P','','P',''],
            ['','P','','P','','P','','P']];

var vezHumanoComputador = 0;

function moverPeça(linOrigem, colOrigem, linDestino, colDestino){
      //faz o movimento da peça
      let peça = tabuleiro[linOrigem][colOrigem];
      removePeça(linOrigem, colOrigem);

      if (tabuleiro[linDestino][colDestino] = 'L') {
            tabuleiro[linDestino][colDestino] = peça;  //coloca a nova posição na matriz
            criaPeça(linDestino, colDestino, peça);   //cria a imagem da peça

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
            if (diferençaLin == 2){ //movimentou para baixo
                  let diferençaCol = colOrigem - colDestino;
                  if (diferençaCol == -2){ //movimentou para direita
                        comerPeça(linOrigem-1, colOrigem+1);
                        
                  }
                  if (diferençaCol == 2){ //movimentou para esquerda
                        comerPeça(linOrigem-1, colOrigem+1);
                  }
            }

            if (peça == 'B' && linDestino == 7){ //se a peça branca chega no topo vira dama
                  tornarDama(linDestino, colDestino);
            } 
            if (peça == 'P' && linDestino == 0){ //se a peça preta chega na base vira dama
                  tornarDama(linDestino, colDestino);
            }
      }else{
            console.log('deu ruim, já há alguem na célula selecionada');
      }
      
}

function comerPeça(linPeça, colPeça){
      //remove a peça adversaria e mostra a peça na lista lateral
      let peça = tabuleiro[linPeça][colPeça];
      removePeça(linPeça, colPeça);
      
      //mostra a peça na lista lateral

}

function listaMovimentos(linPeça, colPeça){
      //sinaliza quais células a peça pode se mover
      let idcelula = '';
      let peça = tabuleiro[linPeça][colPeça];
      if (peça == 'B'){
            console.log('peça branca');
            if (tabuleiro[linPeça+1][colPeça+1] == 'L'){
                  //sinaliza mudando a cor da célula
                  alterarCorPossivelMovimento(linPeça+1, colPeça+1);

            }else if ((tabuleiro[linPeça+1][colPeça+1] == 'P' || tabuleiro[linPeça+1][colPeça+1] == 'DP') 
                        && tabuleiro[linPeça+2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça+2, colPeça+2);
            }

            if (tabuleiro[linPeça+1][colPeça-1] == 'L'){
                  //sinaliza mudando a cor da célula
                  alterarCorPossivelMovimento(linPeça+1, colPeça-1);
            }else if ((tabuleiro[linPeça+1][colPeça-1] == 'P' || tabuleiro[linPeça+1][colPeça-1] == 'DP') 
                  && tabuleiro[linPeça+2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça+2, colPeça-2);
            }
      }
      if (peça == 'DB'){
            console.log('dama branca');
            if (tabuleiro[linPeça+1][colPeça+1] == 'L'){
                  //sinaliza mudando a cor da célula
                  alterarCorPossivelMovimento(linPeça+1, colPeça+1);
            }else if ((tabuleiro[linPeça+1][colPeça+1] == 'P' || tabuleiro[linPeça+1][colPeça+1] == 'DP') 
                        && tabuleiro[linPeça+2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça+2, colPeça+2);
            }

            if (tabuleiro[linPeça+1][colPeça-1] == 'L'){
                  //sinaliza mudando a cor da célula
                  alterarCorPossivelMovimento(linPeça+1, colPeça-1);
            }else if ((tabuleiro[linPeça+1][colPeça-1] == 'P' || tabuleiro[linPeça+1][colPeça-1] == 'DP') 
                  && tabuleiro[linPeça+2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça+2, colPeça-2);
            }

            if (tabuleiro[linPeça-1][colPeça+1] == 'L'){
                  //sinaliza mudando a cor da célula
                  alterarCorPossivelMovimento(linPeça-1, colPeça+1);
            }else if ((tabuleiro[linPeça-1][colPeça+1] == 'P' || tabuleiro[linPeça-1][colPeça+1] == 'DP') 
                        && tabuleiro[linPeça-2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça-2, colPeça+2);
            }

            if (tabuleiro[linPeça-1][colPeça-1] == 'L'){
                  //sinaliza mudando a cor da célula
                  alterarCorPossivelMovimento(linPeça-1, colPeça-1);
            }else if ((tabuleiro[linPeça-1][colPeça-1] == 'P' || tabuleiro[linPeça-1][colPeça-1] == 'DP') 
                  && tabuleiro[linPeça-2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça-2, colPeça-2);
            }
      }
      if (peça == 'P'){
            console.log('peça preta');
            if (tabuleiro[linPeça-1][colPeça+1] == 'L'){
                  //sinaliza mudando a cor da célula
                  alterarCorPossivelMovimento(linPeça-1, colPeça+1);
            }else if ((tabuleiro[linPeça-1][colPeça+1] == 'B' || tabuleiro[linPeça-1][colPeça+1] == 'DB') 
                        && tabuleiro[linPeça-2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça-2, colPeça+2);
            }

            if (tabuleiro[linPeça-1][colPeça-1] == 'L'){
                  //sinaliza mudando a cor da célula
                  alterarCorPossivelMovimento(linPeça-1, colPeça-1);
            }else if ((tabuleiro[linPeça-1][colPeça-1] == 'B' || tabuleiro[linPeça-1][colPeça-1] == 'DB') 
                  && tabuleiro[linPeça-2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça-2, colPeça-2);
            }
      }
      if (peça == 'DP'){
            console.log('dama preta');
            if (tabuleiro[linPeça+1][colPeça+1] == 'L'){
                  //sinaliza mudando a cor da célula
                  alterarCorPossivelMovimento(linPeça+1, colPeça+1);
            }else if ((tabuleiro[linPeça+1][colPeça+1] == 'B' || tabuleiro[linPeça+1][colPeça+1] == 'DB') 
                        && tabuleiro[linPeça+2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça+2, colPeça+2);
            }

            if (tabuleiro[linPeça+1][colPeça-1] == 'L'){
                  //sinaliza mudando a cor da célula
                  alterarCorPossivelMovimento(linPeça+1, colPeça-1);
            }else if ((tabuleiro[linPeça+1][colPeça-1] == 'B' || tabuleiro[linPeça+1][colPeça-1] == 'DB') 
                  && tabuleiro[linPeça+2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça+2, colPeça-2);
            }

            if (tabuleiro[linPeça-1][colPeça+1] == 'L'){
                  //sinaliza mudando a cor da célula
                  alterarCorPossivelMovimento(linPeça-1, colPeça+1);
            }else if ((tabuleiro[linPeça-1][colPeça+1] == 'B' || tabuleiro[linPeça-1][colPeça+1] == 'DB') 
                        && tabuleiro[linPeça-2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça-2, colPeça+2);
            }

            if (tabuleiro[linPeça-1][colPeça-1] == 'L'){
                  //sinaliza mudando a cor da célula
                  alterarCorPossivelMovimento(linPeça-1, colPeça-1);
            }else if ((tabuleiro[linPeça-1][colPeça-1] == 'B' || tabuleiro[linPeça-1][colPeça-1] == 'DB') 
                  && tabuleiro[linPeça-2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
                  alterarCorPossivelMovimento(linPeça-2, colPeça-2);
            }
      }
}

function tornarDama(linPeça, colPeça){
      if (linPeça == 7){
            tabuleiro[linPeça][colPeça] = 'DB';
      }
      if (linPeça == 0){
            tabuleiro[linPeça][colPeça] = 'DP';
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
      if (peça == 'P' || peça == 'DP'){
            peça = 'P';
            peçaAdv = 'B';
      }

      for(let lin = 0; lin <=7; lin++){
            for(let col = 0; col <=7; col++) {  //percorre todo o tabuleiro
                  if (tabuleiro[lin][col] == peça){ // se for o mesmo tipo de peça
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
            
            if (tabuleiro[linPeça][colPeça] !== 'L'){
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
            moverPeça(idOrigem[0], idOrigem[1], linPeça, colPeça);

            console.log('moveu a peça');
            limpaSelecao();
      }
      else if (cor == 'rgb(11, 116, 236)'){ //azul está selecionado
            // retorna a cor da célula para nãoSelecionado
            limpaSelecao();
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
      for(let lin = 0; lin <=7; lin++){
            for(let col = 0; col <=7; col++) {
                  let idcelula = `${lin}${col}`;
                  let celula = document.getElementById(idcelula);
                  celula.style.backgroundColor = '';
            }   
      }
      console.log('limpou a seleção');
}

function buscarSelecionada(){
      for(let lin = 0; lin <=7; lin++){
            for(let col = 0; col <=7; col++) {
                  let idcelula = `${lin}${col}`;
                  let celula = document.getElementById(idcelula);
                  if (celula.style.backgroundColor == 'rgb(11, 116, 236)'){
                        return idcelula;
                  }
            }   
      }
}

function alterarCorPossivelMovimento(linPeça, colPeça){
      let idcelula = `${linPeça}${colPeça}`;
      let celula = document.getElementById(idcelula);
      celula.style.backgroundColor = 'rgb(11, 202, 236)';
}