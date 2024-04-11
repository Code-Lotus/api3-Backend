import PlanilhaVendas from './planilhaVendas';

export default class Vendas {
    private vendas: Array<PlanilhaVendas>
    private meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
    constructor(){}

    public calculaQtdDoMes(mes: string): Array<number>{
        const mesAtual = this.meses.indexOf(mes)
        const calculoDosMeses: Array<number> = []
        let mes1, mes2, mes3, mes4, mes5 = 0
        this.vendas.forEach((venda) => {
            switch(venda.data.getMonth()) {
                case mesAtual:
                    mes1++
                    break;
                case mesAtual - 1:
                    mes2++
                    break;
                case mesAtual - 2:
                    mes3++
                    break;
                case mesAtual - 3:
                    mes4++
                    break;
                case mesAtual - 4:
                    mes5++
                    break;
            }
        })
        calculoDosMeses.push(mes1)
        calculoDosMeses.push(mes2)
        calculoDosMeses.push(mes3)
        calculoDosMeses.push(mes4)
        calculoDosMeses.push(mes5)

        return calculoDosMeses
    }
    
    public calculaGanhoDoMes(mes: string): Array<Number>{
        const mesAtual = this.meses.indexOf(mes)
        const calculoDosMeses: Array<number> = []
        let mes1, mes2, mes3, mes4, mes5 = 0
        this.vendas.forEach((venda) => {
            switch(venda.data.getMonth()) {
                case mesAtual:
                    mes1+=venda.valor
                    break;
                case mesAtual - 1:
                    mes2+=venda.valor
                    break;
                case mesAtual - 2:
                    mes3+=venda.valor
                    break;
                case mesAtual - 3:
                    mes4+=venda.valor
                    break;
                case mesAtual - 4:
                    mes5+=venda.valor
                    break;
            }
        })
        calculoDosMeses.push(mes1)
        calculoDosMeses.push(mes2)
        calculoDosMeses.push(mes3)
        calculoDosMeses.push(mes4)
        calculoDosMeses.push(mes5)

        return calculoDosMeses
    }
}