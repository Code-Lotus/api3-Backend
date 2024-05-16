import { FastifyRequest, FastifyReply } from "fastify";
import DeleteUsuarioService, {} from '../services/deleteUsuarioService';

export default class DeleteUsuarioController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as {id: number}
        const costumerService = new DeleteUsuarioService();

        const costumer = await costumerService.execute({ id });

        reply.send(costumer);
    }
}