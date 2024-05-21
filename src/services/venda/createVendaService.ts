import prismaClient from "../../prisma";

interface CreateVendaProps {
    venda_data: Date,
    venda_produto: string,
    venda_valor: number
}

export default class CreateVendaService {
    async execute({ venda_data, venda_produto, venda_valor }: CreateVendaProps) {
        
        if(!venda_data || !venda_produto || !venda_valor) {
            throw new Error("Preencha todos os campos")
        }

        let venda;
        if(!venda_data || !venda_produto || !venda_valor){
            venda = await prismaClient.vendas.create({
                data:{
                    venda_data,
                    venda_produto,
                    venda_valor
                }
            })
        } else {
            venda = await prismaClient.vendas.create({
                data:{
                    venda_data,
                    venda_produto,
                    venda_valor
                }
            })
        }

        return venda
    }
}