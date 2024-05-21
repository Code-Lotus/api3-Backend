import { FastifyRequest, FastifyReply } from "fastify";
import CreateUsuarioService from "../../services/usuario/createUsuarioService";

export default class CreateUsuarioController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { usuario_nome, usuario_cpf, usuario_email, usuario_senha, administrador } = request.body as { usuario_nome: string, usuario_cpf: string, usuario_email: string, usuario_senha: string, administrador: boolean }

        const usuarioService = new CreateUsuarioService()
        const usuario = await usuarioService.execute({ usuario_nome, usuario_cpf, usuario_email, usuario_senha, administrador })

        reply.send(usuario)
    }   
}