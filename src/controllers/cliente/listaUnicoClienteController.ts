import { FastifyRequest, FastifyReply } from "fastify";
import ListaUnicoClienteService from "../../services/cliente/listaUnicoClienteService";

export default class ListaUnicoClienteController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { cliente_id } = request.body as { cliente_id: number }

        const clienteService = new ListaUnicoClienteService();
        const cliente = await clienteService.execute({ cliente_id });

        reply.send(cliente)
    }
}