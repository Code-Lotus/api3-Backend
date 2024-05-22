import prismaClient from "../../prisma";

interface DeleteProdutoProps {
    produto_id: number;
}

export default class DeleteProdutoService {
    async execute({ produto_id }: DeleteProdutoProps) {
        
        if(!produto_id) {
            throw new Error("Preencha todos os campos")
        }

        let produto;
        produto = await prismaClient.produtos.delete({
            where: {
                produto_id: produto_id
            }
        })
    }
}
