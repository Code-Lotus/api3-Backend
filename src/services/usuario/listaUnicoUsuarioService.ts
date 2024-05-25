import prismaClient from "../../prisma";

interface ListaUnicoUsuarioProps {
    usuario_id: number;
}

export default class ListaUnicoUsuarioService {
    async execute({ usuario_id }: ListaUnicoUsuarioProps) {

        if(!usuario_id) {
            throw new Error("Preencha todos os campos")
        }

        let usuario = await prismaClient.usuarios.findFirst({
            where: {
                usuario_id: usuario_id
            }
        })

        return usuario
    }
}