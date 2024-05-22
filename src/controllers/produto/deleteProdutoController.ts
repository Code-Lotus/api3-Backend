import { FastifyRequest, FastifyReply } from "fastify";
import DeleteProdutoService from "../../services/produto/deleteProdutoService";

export default class DeleteProdutoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { produto_id } = request.body as { produto_id: number }

        const produtoService = new DeleteProdutoService()
        const produto = await produtoService.execute({ produto_id })

        return "gg"
    }
}