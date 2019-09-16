let frases = [
    `Sua máquina de lavar quebrou e precisa ser concertada. `,
    `Uma visita ao shopping e algumas roupas novas não fazem mal a ninguém. `,
    `Final de semana, cinema e comida boa são ótimas combinações. `,
    `O meio ambiente é muito importante pra você. Faça uma doação. `,
    `Você precisou consultar um médico. `,
    `Você é um ótimo apostador, mas não anda com sorte ultimamemnte. `,
    `Você foi comemorar o aniversário de um amigo. `,
    `Sua casa necessitou de manutenção.`,
    `A gripe veio forte este ano. Gastos extras com medicamentos foram necessários.`,
    `O dia dos namorados está chegando e sua namorada merece um presente incrível.`,
          ];
       
    let fraseMil = [
             `Seu sorriso ficou lindo depois do tratamento odontológico.`,
             `Renove o seguro residencial.`
    ];
    
    let fraseMilQui = [
             `Você foi convidado para ser padrinho de casamento do seu melhor amigo. `,
             `É seu aniversário e você planeja uma grande comemoração. `
       ]
       
    let fraseDoisMil = [
             `Você merece um final de semana nas montanhas. `,
             `Regularize seus impostos junto a Receita Federal. `
          ]
    
     let fraseDoisQui = [
             `FÉRIASSSSS !!!!!! É tempo de curtir e relaxar. `
          ]
      
    let fraseFinal = [
             `Seu notebook quebrou, melhor comprar um novo. `
          ]
      
    //********************************************************************************* */
    class StartGame {
       constructor (name, placar, contaCorrente, despesas, custos, receita, total, semana) {
       this.name = name;
       this.placar = {
          poupança: 0,
          rendaFixa: 0,
          tesouroDireto: 0,
          acoes: 0,
          fundosInvestimentos: 0,
          };
       this.semana = semana;
       this.contaCorrente = 5000;
       this.despesas = despesas;
       this.custos = custos;
       this.receita = receita;
       this.total = this.contaCorrente;
      }
    
    // RECEBER SALÁRIO
    receitaDisplay(){
       if (this.total <= 300000){
          this.receita = 2000;
       }
       else if (this.total > 300000 && this.total <= 600000){
          this.receita = 4000;
       }
       else {
          this.receita = 6000;
       }
          return this.receita;
    }
    
    //DESCONTAR DESPESAS
    despesasDisplay() {
       if (this.total <= 300000){
          this.despesas = -1000;
       }
       else if (this.total > 300000 && this.total <= 600000){
          this.despesas = -2000;
       }
       else {
          this.despesas = -3000;
       }
          return this.despesas;
    }
         
    //DESCONTAR CUSTOS EXTRAS/ALEATÓRIOS
    custosDisplay() {
       if (this.total <= 300000){
          this.custos = 1+Math.floor(Math.random()*1100)
       }
       else if (this.total > 300000 && this.total <= 600000){
          this.custos = 1+Math.floor(Math.random()*2100)
       }
       else {
          this.custos = 1+Math.floor(Math.random()*3100)
       }
          return -this.custos;
    }
    
    //RETORNAR FRASE CUSTOS
    
    informeCustos() {
    let frase = "";
         if (this.custos <= 500){
          frase = frases[Math.floor(Math.random() * frases.length)];
          return `${frase} Pague: ${this.custos}`;
         }
         else if (this.custos <= 1000){
          frase = fraseMil[Math.floor(Math.random() * fraseMil.length)];
          return `${frase} Pague: ${this.custos}`;
       }
         else if (this.custos <= 1500){
          frase = fraseMilQui[Math.floor(Math.random()*fraseMilQui.length)]; 
          return `${frase} Pague: ${this.custos}`;
       }
       else if (this.custos <= 2000){
          frase = fraseDoisMil[Math.floor(Math.random()*fraseDoisMil.length)];
          return `${frase} Pague: ${this.custos}`;
            
       }
       else if (this.custos <= 2500){
          frase = fraseDoisQui[Math.floor(Math.random()*fraseDoisQui.length)];
          return `${frase} Pague: ${this.custos}`;
            
       }
       else {
          i = fraseFinal[Math.floor(Math.random()*fraseFinal.lenght)];
          return `${frase} Pague: ${this.custos}`;
       }
    }
    
    contaCorrenteDisplay() {
         this.contaCorrente = (this.contaCorrente + this.receita) + this.despesas - this.custos;
         return this.contaCorrente;
    }
    };
    
    const player = new StartGame;
    
    //**********************************************************************
    //POUPANCA
    
    let poupanca;
    let ccPoupanca;
    let poupancaCc
    
    function aplicarPoupanca(ccPoupanca){
       if (ccPoupanca <= player.contaCorrente) {
          player.contaCorrente = player.contaCorrente - ccPoupanca;   
          poupanca = ccPoupanca + poupanca;
          console.log(poupanca);
       }
       else if (ccPoupanca > player.contaCorrente){
          return "Saldo indisponível em conta corrente";
       }
       else {
          return "Insira um valor válido"
       }
    }
    
    function resgatarPoupanca(poupancaCc){
       if (poupancaCc <= poupanca) {
          poupanca = poupanca - poupancaCc;
          player.contaCorrente= player.contaCorrente + poupancaCc;
       }
       else if (poupancaCc > poupanca) {
          return "Saldo indisponível para esta conta";
       }
       else {
          return "Insira um valor válido";
       }
    }
    
    function rendimentoPoupanca(){
       for (let i = 0; i < 10000; i+= 1) {
          poupanca = poupanca * 1,01;
          return poupanca;
       }
    }
    
    // RENDA FIXA
    let rendaFixaCc;
    let ccRendaFixa;
    let rendaFixa;
    
    function aplicarRendaFixa(){
       if (ccRendaFixa <= player.contaCorrente) {
          player.contaCorrente = player.contaCorrente - ccRendaFixa;   
          rendaFixa = ccRendaFixa + rendaFixa;
          console.log(rendaFixa);
       }
       else if (ccRendaFixa > player.contaCorrente){
          return "Saldo indisponível em conta corrente";
       }
       else {
          return "Insira um valor válido"
       }
    }
    
       function resgatarRendaFixa(){
          if (rendaFixaCc <= rendaFixa) {
             rendaFixa = rendaFixa -rendaFixaCc;
             player.contaCorrente= player.contaCorrente + rendaFixaCc;
          }
          else if (rendaFixaCc > rendaFixa) {
             return "Saldo indisponível para esta conta";
          }
          else {
             return "Insira um valor válido";
          }
       }
       
       function rendimentoRendaFixa(){
          for (let i = 0; i < 10000; i+= 1) {
             rendaFixa = rendaFixa * 1,02;
             return rendaFixa;
          }
       }
    
       // TITULO PUBLICO FEDERAL
    let TpfCc;
    let ccTpf;
    let Tpf;
    
    function aplicarTpf(){
       if (ccRendaFixa <= player.contaCorrente) {
          player.contaCorrente = player.contaCorrente - ccTpf;   
          Tpf = ccTpf + tpf;
          console.log(tpf);
       }
       else if (ccTpf > player.contaCorrente){
          return "Saldo indisponível em conta corrente";
       }
       else {
          return "Insira um valor válido"
       }
    }
    
       function resgatarTpf(){
          if (TpfCc <= Tpf) {
             Tpf = Tpf - TpfCc;
             player.contaCorrente= player.contaCorrente + TpfCc;
          }
          else if (TpfCc > Tpf) {
             return "Saldo indisponível para esta conta";
          }
          else {
             return "Insira um valor válido";
          }
       }
       
       function rendimentoTpf(){
          for (let i = 0; i < 10000; i+= 1) {
             Tpf = tpf * 1,02;
             return Tpf;
          }
       }
    
    
    
    // ACOES
    let acoesCc;
    let ccAcoes;
    let acoes;
    
    function aplicarAcoes(){
       if (ccAcoes <= player.contaCorrente) {
          player.contaCorrente = player.contaCorrente - ccAcoes;   
          Tpf = ccAcoes + Acoes;
          console.log(Acoes);
       }
       else if (ccAcoes > player.contaCorrente){
          return "Saldo indisponível em conta corrente";
       }
       else {
          return "Insira um valor válido"
       }
    }
    
       function resgatarAcoes(){
          if (acoesCc <= acoes) {
             acoes = acoes - acoesCc;
             player.contaCorrente= player.contaCorrente + acoesCc;
          }
          else if (acoesCc > acoes) {
             return "Saldo indisponível para esta conta";
          }
          else {
             return "Insira um valor válido";
          }
       }
       
       function rendimentoAcoes(){
          for (let i = 0; i < 10000; i+= 1) {
             Acoes = acoes * 1,02;
             return acoes;
          }
       }
    
    // FUNDOS DE INVESTIMENTOS
    let fundosCc;
    let ccFundos;
    let fundos;
    
    function aplicarFuncoes(){
       if (ccFundos <= player.contaCorrente) {
          player.contaCorrente = player.contaCorrente - ccFundos;   
          fundos = ccFundos + fundos;
          console.log(fundos);
       }
       else if (ccFundos > player.contaCorrente){
          return "Saldo indisponível em conta corrente";
       }
       else {
          return "Insira um valor válido"
       }
    }
    
       function resgatarFundos(){
          if (fundosCc <= fundos) {
             fundos = fundos - fundosCc;
             player.contaCorrente= player.contaCorrente + fundosCc;
          }
          else if (fundosCc > fundos) {
             return "Saldo indisponível para esta conta";
          }
          else {
             return "Insira um valor válido";
          }
       }
       
       function rendimentoFundos(){
          for (let i = 0; i < 10000; i+= 1) {
             fundos = fundos * 1,02;
             return fundos;
          }
       }
    
    
    // TOTAL DE TODAS AS CONTAS
    function totalDisplay(){
       total = poupança + rendaFixa + Tpf + acoes + fundosInvest + player.contaCorrente;
       return total;
    }
    
    
    //*********************************************************************
    
    //START GAME
    
    
    
    */