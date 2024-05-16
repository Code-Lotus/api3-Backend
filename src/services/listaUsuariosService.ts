import prismaClient from "../prisma";

export default class ListUsuariosService {
    async execute() {
        const usuarios = await prismaClient.usuario.findMany();

        return usuarios;
    }
}