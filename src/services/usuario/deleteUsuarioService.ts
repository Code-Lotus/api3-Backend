import prismaClient from "../../prisma";

interface DeleteUsuarioProps {
    id: number;
}

export default class DeleteUsuarioService {
    async execute({id}: DeleteUsuarioProps){
        if(!id){
            throw new Error("Solicitação inválida.")
        }

        const findUsuario = await prismaClient.usuarios.findFirst({
            where: {
                usuario_id: id
            }
        })

        if(!findUsuario){
            throw new Error("Usuario não existe!")
        }

        await prismaClient.usuarios.delete({
            where: {
                usuario_id: findUsuario.usuario_id
            }
        })
        
        return {message: "Deletado com sucesso!"}
    }
}