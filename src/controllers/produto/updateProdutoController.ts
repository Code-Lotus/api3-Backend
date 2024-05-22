import { FastifyRequest, FastifyReply } from "fastify";
import UpdateProdutoService from "../../services/produto/updateProdutoService";

export default class UpdateProdutoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { produto_id, produto_nome, produto_valor } = request.body as { produto_id: number, produto_nome: string, produto_valor: number }

        const produtoService = new UpdateProdutoService()
        const produto = await produtoService.execute({ produto_id, produto_nome, produto_valor })

        reply.send(produto)
    }
}
