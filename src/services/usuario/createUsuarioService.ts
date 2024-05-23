import prismaClient from "../../prisma";

interface CreateUsuarioProps {
    usuario_nome: string;
    usuario_cpf: string;
    usuario_email: string;
    usuario_senha: string;
    administrador: string;
}

export default class CreateUsuarioService {
    async execute({ usuario_nome, usuario_cpf, usuario_email, usuario_senha, administrador }: CreateUsuarioProps) {
        
        if(!usuario_nome || !usuario_email || !usuario_cpf || !usuario_senha || !administrador) {
            throw new Error("Preencha todos os campos")
        }

        let usuario;
        if(!usuario_nome || !usuario_email || !usuario_cpf || !usuario_senha){
            usuario = await prismaClient.usuarios.create({
                data:{
                    usuario_nome,
                    usuario_cpf,
                    usuario_email,
                    usuario_senha,
                    administrador: "0"
                }
            })
        } else {
            usuario = await prismaClient.usuarios.create({
                data:{
                    usuario_nome,
                    usuario_cpf,
                    usuario_email,
                    usuario_senha,
                    administrador //: false
                }
            })
        }

        return usuario
    }
}