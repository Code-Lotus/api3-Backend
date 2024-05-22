import fastify, { FastifyRequest, FastifyReply } from "fastify";
import ListaProdutoService from "../../services/produto/listaProdutosService";

export default class ListaProdutoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listaProdutoService = new ListaProdutoService()

        const produtos = await listaProdutoService.execute()

        reply.send(produtos)
    }
}
