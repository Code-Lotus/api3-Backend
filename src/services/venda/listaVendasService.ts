import prismaClient from "../../prisma";

export default class ListVendasService {
    async execute() {
        const vendas = await prismaClient.vendas.findMany();

        return vendas;
    }
}