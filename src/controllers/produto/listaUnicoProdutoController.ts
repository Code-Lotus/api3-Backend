import { FastifyRequest, FastifyReply } from "fastify";
import ListaUnicoProdutoService from "../../services/produto/listaUnicoProdutoService";

export default class ListaUnicoProdutoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { produto_id } = request.body as { produto_id: number }

        const produtoService = new ListaUnicoProdutoService();
        const produto = await produtoService.execute({ produto_id });

        reply.send(produto)
    }
}