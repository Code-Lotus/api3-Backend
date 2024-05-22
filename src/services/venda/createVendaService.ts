import prismaClient from "../../prisma";

interface CreateVendaProps {
    venda_data: Date,
    venda_produto: string
}

export default class CreateVendaService {
    async execute({ venda_data, venda_produto }: CreateVendaProps) {
        
        if(!venda_data || !venda_produto) {
            throw new Error("Preencha todos os campos")
        }

        let venda;
        venda = await prismaClient.vendas.create({
            data:{
                venda_data,
                venda_produto
            }
        })
        
        return venda
    }
}