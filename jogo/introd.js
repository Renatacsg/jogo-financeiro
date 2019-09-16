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