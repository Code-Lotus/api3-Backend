import { FastifyRequest, FastifyReply } from "fastify";
import ListVendasService from '../../services/venda/listaVendasService';

export default class ListaVendasController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listaVendasService = new ListVendasService();

        const vendas = await listaVendasService.execute();

        reply.send(vendas);

    }
}