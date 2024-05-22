import prismaClient from "../../prisma";

interface CreateProdutoProps {
    produto_nome: string;
    produto_valor: number;
}

export default class CreateProdutoService {
    async execute({ produto_nome, produto_valor }: CreateProdutoProps) {

        if(!produto_nome || !produto_valor) {
            throw new Error("Preencha todos os campos")
        }

        let produto;
        produto = await prismaClient.produtos.create({
            data: {
                produto_nome,
                produto_valor
            }
        })

        return produto
    }
}
