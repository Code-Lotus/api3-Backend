import prismaClient from "../../prisma";

interface CreateVendaProps {
    venda_data: Date;
    cliente_id: number;
    produto_id: number;
    usuario_id: number;
}

export default class CreateVendaService {
    async execute({ venda_data, cliente_id, produto_id, usuario_id }: CreateVendaProps) {

        if(!venda_data || !cliente_id || !produto_id || !usuario_id) {
            throw new Error("Preencha todos os campos")
        }

        let venda = await prismaClient.vendas.create({
            data: {
                venda_data,
                cliente_id,
                produto_id,
                usuario_id
            }
        })

        return venda
    }
}