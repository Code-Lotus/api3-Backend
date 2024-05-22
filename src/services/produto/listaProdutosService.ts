import prismaClient from "../../prisma";

export default class ListaProdutoService {
    async execute() {
        const produtos = await prismaClient.produtos.findMany()

        return produtos
    }
}