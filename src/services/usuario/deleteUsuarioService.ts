import prismaClient from "../../prisma";

interface DeleteUsuarioProps {
    usuario_id: number;
}

export default class DeleteUsuarioService {
    async execute({usuario_id}: DeleteUsuarioProps){

        if(!usuario_id) {
            throw new Error("Preencha todos os campos")
        }

        let usuario = await prismaClient.usuarios.delete({
            where: {
                usuario_id: usuario_id
            }
        })
    }
}