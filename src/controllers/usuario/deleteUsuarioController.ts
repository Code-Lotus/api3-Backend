import { FastifyRequest, FastifyReply } from "fastify";
import DeleteUsuarioService from '../../services/usuario/deleteUsuarioService';

export default class DeleteUsuarioController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { usuario_id } = request.body as { usuario_id: number }

        const usuarioService = new DeleteUsuarioService();
        const usuario = await usuarioService.execute({ usuario_id });

        return `Usuario ${usuario_id} apagado`
    }
}