import prismaClient from "../../prisma";

interface CreateProdutoProps {
    produto_nome: string;
    produto_valor: number;
    produto_data: Date
}

export default class CreateProdutoService {
    async execute({ produto_nome, produto_valor, produto_data }: CreateProdutoProps) {

        if(!produto_nome || !produto_valor || !produto_data) {
            throw new Error("Preencha todos os campos")
        }

        let produto;
        produto = await prismaClient.produtos.create({
            data: {
                produto_nome,
                produto_valor,
                produto_data
            }
        })

        return produto
    }
}
