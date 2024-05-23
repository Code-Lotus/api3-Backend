import prismaClient from "../../prisma";

export default class ListaProdutosService {
    async execute() {
        const produtos = await prismaClient.produtos.findMany()

        return produtos
    }
}