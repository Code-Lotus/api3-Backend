import prismaClient from "../../prisma";

interface DeleteVendaProps {
    venda_id: number;
}

export default class DeleteVendaService {
    async execute({ venda_id }: DeleteVendaProps) {

        if(!venda_id) {
            throw new Error("Preencha todos os campos")
        }

        let venda = await prismaClient.vendas.delete({
            where: {
                venda_id: venda_id
            }
        })
    }
}