import prismaClient from "../../prisma";

export default class ListaUsuariosService {
    async execute() {
        const usuarios = await prismaClient.usuarios.findMany();

        return usuarios;
    }
}