import fastify, { FastifyRequest, FastifyReply } from "fastify";
import ListaProdutosService from "../../services/produto/listaProdutosService";

export default class ListaProdutoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listaProdutosService = new ListaProdutosService()

        const produtos = await listaProdutosService.execute()

        reply.send(produtos)
    }
}