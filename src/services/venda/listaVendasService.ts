import prismaClient from "../../prisma";

export default class ListaVendasService {
    async execute() {
        const vendas = await prismaClient.vendas.findMany();

        return vendas;
    }
}