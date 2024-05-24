import { FastifyRequest, FastifyReply } from "fastify";
import ListaVendasService from '../../services/venda/listaVendasService';

export default class ListaVendasController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listaVendasService = new ListaVendasService();

        const vendas = await listaVendasService.execute();

        reply.send(vendas);

    }
}