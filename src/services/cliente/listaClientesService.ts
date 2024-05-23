import prismaClient from "../../prisma";

export default class ListaClientesService {
    async execute() {
        const clientes = await prismaClient.clientes.findMany()

        return clientes
    }
}