# Jogo de Damas

## ***Autores:***

* @IgorBandasz 
* @estercardosotoja
* @rohju

## ***Motivação e Objetivo:***

A motivação desse projeto é realizar atividade da disciplina de Inteligencia Aritificial, utilizando os Agentes Reativos os quais observam o ambiente e executa uma ação e os Agente Reativo com Estados
possui um armazenamento de alguma informação para que possa executar a ação, após a observação do ambiente. 


## ***Como foi desenvolvido:***

### Para Organização do trabalho:

* **Google Meet** - para as reuniões semanais e alinhamento dos integrantes.
* **Trello** - para organização das responsabilidade e acompanhamento do progresso de desenvolvimento.
* **GitHub** - para acesso compartilhado dos códigos desenvolvidos.


### Tecnologias utilizadas:
#### *Front-End*:
* **HTML5** - utilizada para marcação e organização dos espaços do jogo em tela.
* **CSS** - em conjunto com o html auxiliando na aparência e estilo dos itens adicionados.
* **Markdown** - utilizada para desenvolvimento do README.
#### *Back- End*:
* **JavaScript** - precisamente aqui é onde a mágica acontece, onde as regras dos jogo são traduzidas para a linguagem de programação.
#### *IDE*: 
* **Visual Studio Code** - espaço para colocar a mão na massa no desenvolvimento do front e back end. 

## ***Funcionalidades:***

O jogo foi desenvolvido tal que um oponente será **Humano** e outro será a **Máquina**. Sabendo disso seguem as funcionalidades do sistema:

1. **Organiza o Tabulheiro**

    A cada movimento que é realizado é feita uma atualização das posições atuais na matriz do tabuleiro, indicando as células livres e ocupadas.

2. **SORTEIA PEÇA MÁQUINA**
   
    Diferente do Humano que escolhe as suas próprias peças para movimentar, a máquina terá um sorteador para escolher qual a peça que será movida. 

3. **VERIFICA MOVIMENTO LIVRE**

    A implementação do nosso agente entra nesta parte, onde será realizada a análise no ambiente para a movimentação, sendo que:
      1. peças **comuns** podem se mover somente para diagonal direita ou esquerda a sua frente;
      2. peças **damas** podem se mover para ambas as diagonais e para frente e para trás.
 
    Ambas com casas imediatamente livres ou com peça inimiga e livre, sendo a segunda o objeto do nosso próximo item.
   
4. **VERIFICA MOVIMENTO COMER**
   
    Realizando a análise do ambiente e percebendo que existe uma peça inimiga e após um espaço livre, será obrigatório realizar este movimento. Por conta deste movimento, o jogador ganha o direito de fazer mais um movimento, podendo comer mais uma peça ou movimentar qualquer outra de suas peças.

    
    ![md_sorteio](https://user-images.githubusercontent.com/87045785/137615477-cf256e0a-8f64-42f2-9217-f7544c7a417d.gif)


5. **RETIRAR PEÇA PARA O CEMITÉRIO**
   
    Quando é realizado o movimento comer, o sistema retirará o ícone/peça do tabuleiro e colocará no ambiente cemitério do jogador que ganhou aquele lance.

    ![md_cemintério](https://user-images.githubusercontent.com/87045785/137615652-46706dee-694d-4174-b4a2-99f0e0b6d9c2.gif)

6. **MONTAR DAMA**
   
    Verificando que a peça (preta/branca) tenha atravessado todo o tabuleiro até a última "linha" da área do oponente, o sistema retirará a peça comum e irá transformá-la em dama. Em resumo será feita uma troca de ícones.

7. **MOSTRA RODADA**

    Na barra superior da página o jogado poderá conferir de quem é a rodada atual, podendo verificar que sendo:
   1. O emoji de um robozinho :robot: será a vez da máquina;
   2. Caso apareça este emoji :grinning: é do humano.

        ![md_vez](https://user-images.githubusercontent.com/87045785/137614609-6069a82b-5b85-41e8-bd4d-986f555cdf27.gif)


## ***Regras do Jogo:***

 ### Objetivo do Jogo: 

 * Capturar ou imobilizar as peças do adversário. O jogador que conseguir capturar todas as peças do inimigo ganha a partida.

### Regras Tabuleiro:

* O jogo de damas pratica-se entre dois jogadores, num tabuleiro quadrado, de 64 casas alternadamente claras e escuras, dispondo de 12 peças brancas e 12 pretas.
  
* O tabuleiro deve ser colocado de modo que a casa angular à esquerda de cada parceiro seja escura.

* No início da partida, as peças devem ser colocadas no tabuleiro sobre as casas escuras, da seguinte forma: nas três primeiras filas horizontais, as peças brancas; e, nas três últimas, as peças pretas.


    ![tabulheiro](imagens/md_tabbuleiro.png)

### Regras de Movimentação:

* A peça movimenta-se em diagonal, sobre as casas escuras, para a frente, e uma casa de cada vez.
* A peça pode capturar a peça do adversário movendo-se para frente na diagonal.
* A peça que atingir a oitava casa adversária, parando ali, será promovida a "Dama", peça de movimentos mais amplos que a simples peça. Assinala-se a dama sobrepondo, à pedra promovida, outra da mesma cor.
* A Dama pode mover-se para trás e para frente em diagonal uma casa de cada vez, diferente das outras peças, que movimentam-se apenas para frente em diagonal. A Dama pode também tomar outra peça pela frente ou por trás em diagonal.
* Quando a uma peça tomar a peça adversária irá ter mais uma oportunidade de realizar outro movimento, não sendo necessáriamente sendo a mesma peça do primeiro movimento.

### Demais Regras:

* A **tomada é obrigatória**. A Peça e a Dama têm o mesmo valor para tomar ou ser tomada. 
* Não será promovida a Peça que, numa tomada em cadeia, apenas passe pela oitava casa adversária. 
* As Peças tomadas só deverão ser retiradas do tabuleiro depois de completo o lance.
* As **brancas têm sempre a saída**, isto é, o primeiro lance da partida. 
* O lance está completo quando O jogador tiver selecionado a casa da peça, e selecionar a casa destino movando-a para a casa destino.

### A partida termina:

#### Ganha:
* Um dos lados elimina todas as peças do adversário;

### Perde:
* Um dos lados tem suas peças todas eliminadas;


