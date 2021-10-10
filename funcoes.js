var tabuleiro=[
            ['B','','B','','B','','B',''],
            ['','B','','B','','B','','B'],
            ['B','','B','','B','','B',''],
            ['','L','','L','','L','','L'],
            ['L','','L','','L','','L',''],
            ['','P','','P','','P','','P'],
            ['P','','P','','P','','P',''],
            ['','P','','P','','P','','P']];

function moverPeça(linOrigem, colOrigem, linDestino, colDestino){
      //faz o movimento da peça
      let peça = tabuleiro[linOrigem][colOrigem];
      tabuleiro[linOrigem][colOrigem] = 'L';
      if (tabuleiro[linDestino][colDestino] = 'L') {
            tabuleiro[linDestino][colDestino] = peça;
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
      tabuleiro[linPeça][colPeça] = 'L';
      //mostra a peça na lista lateral
}

function listaMovimentos(linPeça, colPeça){
      //sinaliza quais células a peça pode se mover
      let peça = tabuleiro[linPeça][colPeça];
      if (peça = 'B'){
            if (tabuleiro[linPeça+1][colPeça+1] == 'L'){
                  //sinaliza mudando a cor da célula
            }else if ((tabuleiro[linPeça+1][colPeça+1] == 'P' || tabuleiro[linPeça+1][colPeça+1] == 'DP') 
                        && tabuleiro[linPeça+2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
            }

            if (tabuleiro[linPeça+1][colPeça-1] == 'L'){
                  //sinaliza mudando a cor da célula
            }else if ((tabuleiro[linPeça+1][colPeça-1] == 'P' || tabuleiro[linPeça+1][colPeça-1] == 'DP') 
                  && tabuleiro[linPeça+2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
            }
      }
      if (peça = 'DB'){
            if (tabuleiro[linPeça+1][colPeça+1] == 'L'){
                  //sinaliza mudando a cor da célula
            }else if ((tabuleiro[linPeça+1][colPeça+1] == 'P' || tabuleiro[linPeça+1][colPeça+1] == 'DP') 
                        && tabuleiro[linPeça+2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
            }

            if (tabuleiro[linPeça+1][colPeça-1] == 'L'){
                  //sinaliza mudando a cor da célula
            }else if ((tabuleiro[linPeça+1][colPeça-1] == 'P' || tabuleiro[linPeça+1][colPeça-1] == 'DP') 
                  && tabuleiro[linPeça+2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
            }

            if (tabuleiro[linPeça-1][colPeça+1] == 'L'){
                  //sinaliza mudando a cor da célula
            }else if ((tabuleiro[linPeça-1][colPeça+1] == 'P' || tabuleiro[linPeça-1][colPeça+1] == 'DP') 
                        && tabuleiro[linPeça-2][colPeça+2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
            }

            if (tabuleiro[linPeça-1][colPeça-1] == 'L'){
                  //sinaliza mudando a cor da célula
            }else if ((tabuleiro[linPeça-1][colPeça-1] == 'P' || tabuleiro[linPeça-1][colPeça-1] == 'DP') 
                  && tabuleiro[linPeça-2][colPeça-2] == 'L'){
                  //sinaliza mudando a cor da célula indicando que irá comer uma peça
            }
      }
      if (peça = 'P'){

      }
      if (peça = 'DP'){

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
      if (peça == 'B' || peça == 'DB'){
            peça = 'B';
            let peçaAdv = 'P';
      }
      if (peça == 'P' || peça == 'DP'){
            peça = 'P';
            let peçaAdv = 'B';
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
      if (cor == naoSelecionado){ //precisa implementar essa parte da cor
            let permitido = verificaMovimentoObrigatorio(linPeça, colPeça); 
            if (permitido) {
                  listaMovimentos(linPeça, colPeça);
            }
            else{
                  console.log('não pode movimentar essa peça por já há uma peça com movimento obrigatório');
            }
      }
      if (cor == novaPosicao){ //precisa implementar essa parte da cor
            //percorrer divs para saber quem é a célula com cor Selecionada pra saber a célula origem
            moverPeça(linOrigem, colOrigem, linPeça, colPeça);
      }
      if (cor == selecionado){ //precisa implementar essa parte da cor
            // retorna a cor da célula para nãoSelecionado
      }
}

