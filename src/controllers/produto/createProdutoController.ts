import { FastifyRequest, FastifyReply } from "fastify";
import CreateProdutoService from "../../services/produto/createProdutoService";

export default class CreateProdutoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { produto_nome, produto_valor, produto_data } = request.body as { produto_nome: string, produto_valor: number, produto_data: Date }

        const produtoService = new CreateProdutoService()
        const produto = await produtoService.execute({ produto_nome, produto_valor, produto_data })

        reply.send(produto)
    }
}