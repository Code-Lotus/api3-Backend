import prismaClient from "../../prisma";

interface ListaUnicoProdutoProps {
    produto_id: number;
}

export default class ListaUnicoProdutoService {
    async execute({ produto_id }: ListaUnicoProdutoProps) {

        if(!produto_id) {
            throw new Error("Preencha todos os campos")
        }

        let produto = await prismaClient.produtos.findFirst({
            where: {
                produto_id: produto_id
            }
        })

        return produto
    }
}