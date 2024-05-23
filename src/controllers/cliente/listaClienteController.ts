import fastify, { FastifyRequest, FastifyReply } from "fastify";
import ListaClientesService from "../../services/cliente/listaClientesService";

export default class ListaClientesController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listaClientesService = new ListaClientesService()

        const clientes = await listaClientesService.execute()

        reply.send(clientes)
    }
}