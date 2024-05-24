import prismaClient from "../../prisma";

interface UpdateProdutoProps {
    produto_id: number;
    produto_nome: string;
    produto_valor: number;
    produto_data: Date;
}

export default class UpdateProdutoService {
    async execute({ produto_id, produto_nome, produto_valor, produto_data }: UpdateProdutoProps) {

        if(!produto_nome && !produto_valor && !produto_data) {
            throw new Error("Preencha no mínimo 1 campo")
        }

        let produto
        if(produto_nome) {
            produto = await prismaClient.produtos.update({
                where: {
                    produto_id: produto_id
                },
                data: {
                    produto_nome: produto_nome
                }
            })
        } if(produto_valor) {
            produto = await prismaClient.produtos.update({
                where: {
                    produto_id: produto_id
                },
                data: {
                    produto_valor: produto_valor
                }
            })
        } if(produto_data) {
            produto = await prismaClient.produtos.update({
                where: {
                    produto_id: produto_id
                },
                data: {
                    produto_data: produto_data
                }
            })

        }

        return produto
    }
}