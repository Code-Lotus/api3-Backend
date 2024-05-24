import { FastifyRequest, FastifyReply } from "fastify";
import UpdateUsuarioService from "../../services/usuario/updateUsuarioService";

export default class UpdateUsuarioController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { usuario_id, usuario_nome, usuario_cpf, usuario_email, usuario_senha } = request.body as { usuario_id: number, usuario_nome: string, usuario_cpf: string, usuario_email: string, usuario_senha: string }

        const usuarioService = new UpdateUsuarioService()
        const usuario = await usuarioService.execute({ usuario_id, usuario_nome, usuario_cpf, usuario_email, usuario_senha })

        reply.send(usuario)
    }
}