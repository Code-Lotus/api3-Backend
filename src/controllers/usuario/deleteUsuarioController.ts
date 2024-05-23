import { FastifyRequest, FastifyReply } from "fastify";
import DeleteUsuarioService, {} from '../../services/usuario/deleteUsuarioService';

export default class DeleteUsuarioController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { usuario_id } = request.query as {usuario_id: number}

        const costumerService = new DeleteUsuarioService();
        const costumer = await costumerService.execute({ usuario_id });

        return `Usuario ${usuario_id} apagado`
    }
}