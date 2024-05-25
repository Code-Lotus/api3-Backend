import prismaClient from "../../prisma";

interface UpdateVendaProps {
    venda_id: number;
    venda_data: Date;
    venda_forma_pagamento: string;
    cliente_id: number;
    produto_id: number;
    usuario_id: number;
}

export default class UpdateVendaService {
    async execute({ venda_id, venda_data, venda_forma_pagamento, cliente_id, produto_id, usuario_id }: UpdateVendaProps) {

        if(!venda_data && !venda_forma_pagamento && !cliente_id && !produto_id && !usuario_id) {
            throw new Error("Preencha no mínimo 1 campo")
        }

        let venda
        if(venda_data) {
            venda = await prismaClient.vendas.update({
                where: {
                    venda_id: venda_id
                },
                data: {
                    venda_data: venda_data
                }
            })
        } if(venda_forma_pagamento) {
            venda = await prismaClient.vendas.update({
                where: {
                    venda_id: venda_id
                },
                data: {
                    venda_forma_pagamento: venda_forma_pagamento
                }
            })
        } if(cliente_id) {
            venda = await prismaClient.vendas.update({
                where: {
                    venda_id: venda_id
                },
                data: {
                    cliente_id: cliente_id
                }
            })
        } if(produto_id) {
            venda = await prismaClient.vendas.update({
                where: {
                    venda_id: venda_id
                },
                data: {
                    produto_id: produto_id
                }
            })
        } if(usuario_id) {
            venda = await prismaClient.vendas.update({
                where: {
                    venda_id: venda_id
                },
                data: {
                    usuario_id: usuario_id
                }
            })
        }

        return venda
    }
}