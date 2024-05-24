import prismaClient from "../../prisma";

interface UpdateUsuarioProps {
    usuario_id: number;
    usuario_nome: string;
    usuario_cpf: string
    usuario_email: string;
    usuario_senha: string;
    // administrador
}

export default class UpdateUsuarioService {
    async execute({ usuario_id, usuario_nome, usuario_cpf, usuario_email, usuario_senha }: UpdateUsuarioProps) {

        // ID NECESSÁRIO?
        if(!usuario_id && !usuario_nome && !usuario_cpf && !usuario_email && !usuario_senha) {
            throw new Error("Preencha no mínimo 1 campo")
        }

        let usuario
        if(usuario_nome) {
            usuario = await prismaClient.usuarios.update({
                where: {
                    usuario_id: usuario_id
                },
                data: {
                    usuario_nome: usuario_nome
                }
            })
        } if(usuario_cpf) {
            usuario = await prismaClient.usuarios.update({
                where: {
                    usuario_id: usuario_id
                },
                data: {
                    usuario_cpf: usuario_cpf
                }
            })
        } if(usuario_email) {
            usuario = await prismaClient.usuarios.update({
                where: {
                    usuario_id: usuario_id
                },
                data: {
                    usuario_email: usuario_email
                }
            })
        } if(usuario_senha) {
            usuario = await prismaClient.usuarios.update({
                where: {
                    usuario_id: usuario_id
                },
                data: {
                    usuario_senha: usuario_senha
                }
            })
        }

        return usuario
    }
}