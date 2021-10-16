# FUNCIONALIDES:

## O jogo foi desenvolvido tal que um oponente será humano e outro será máquina. Sabendo disso seguem as funcionalidades do sistema:

1. **ORGANIZA TABULEIRO**
A cada movimento que é realizado é feita uma atualização das posições atuais na matriz do tabuleiro, indicando as células livres e ocupadas.

2. **SORTEIA PEÇA MÁQUINA**
Diferente do humano que escolhe as suas próprias peças para movimentar, a máquina terá um sorteador para escolher qual a peça que será movida. Caso contrário o sistema escolheria sempre a mesma peça para realizar a movimentação.

3. **VERIFICA MOVIMENTO LIVRE**
A implementação do nosso agente entra nesta parte, onde será realizada a análise no ambiente para a movimentação, sendo que:
   1. peças **comuns** podem se mover somente para diagonal direita ou esquerda a sua frente;
   2. peças **damas** podem se mover para ambas as diagonais e para frente e para trás.
 Ambas com casas imediatamente livres ou com peça inimiga e livre, sendo a segunda o objeto do nosso próximo item.
   
4. **VERIFICA MOVIMENTO COMER**
Realizando a análise do ambiente e percebendo que existe uma peça inimiga e após um espaço livre, será obrigatório realizar este movimento. Por conta deste movimento, o jogador ganha o direito de fazer mais um movimento, podendo comer mais uma peça ou movimentar qualquer outra de suas peças.

5. **RETIRAR PEÇA PARA O CEMITÉRIO**
Quando é realizado o movimento comer, o sistema retirará o ícone/peça do tabuleiro e colocará no ambiente cemitério do jogador que ganhou aquele lance.

6. **MONTAR DAMA**
Verificando que a peça (preta/branca) tenha atravessado todo o tabuleiro até a última "linha" da área do oponente, o sistema retirará a peça comum e irá transformá-la em dama. Em resumo será feita uma troca de ícones.

7. **MOSTRA RODADA**
Na barra superior da página o jogado poderá conferir de quem é a rodada atual, podendo verificar que sendo:
   7. o emoji de um robozinho :robot: será a vez da máquina;
   8.  caso apareça este emoji :grinning: é do humano.