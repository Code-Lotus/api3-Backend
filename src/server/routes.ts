import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import CreateUsuarioController from "../controllers/usuario/createUsuarioController";
import ListUsuariosController from "../controllers/usuario/listUsuariosController";
import DeleteUsuarioController from "../controllers/usuario/deleteUsuarioController";
import ListVendasController from "../controllers/venda/listVendasController";
import CreateVendaController from "../controllers/venda/createVendaController";
import ListaProdutoController from "../controllers/produto/listaProdutoController";
import CreateProdutoController from "../controllers/produto/createProdutoController";
import UpdateProdutoController from "../controllers/produto/updateProdutoController";
import DeleteProdutoController from "../controllers/produto/deleteProdutoController";
// import { request } from "http";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    // Usuários
    fastify.get("/usuarios", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsuariosController().handle(request, reply);
    })
    
    fastify.post("/usuario", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUsuarioController().handle(request, reply);
    })
    
    fastify.delete("/usuario", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUsuarioController().handle(request, reply);
    })

    //////////////////////////////////////////

    // Vendas
    fastify.get("/vendas", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListVendasController().handle(request, reply);
    })

    fastify.post("/venda", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateVendaController().handle(request, reply);
    })

    //////////////////////////////////////////////////////////////

    // Produtos
    fastify.get("/produtos", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListaProdutoController().handle(request, reply);
    })

    fastify.post("/produto", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProdutoController().handle(request, reply)
    })

    fastify.put("/produto", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateProdutoController().handle(request, reply)
    })

    fastify.delete("/produto", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteProdutoController().handle(request, reply)
    })

    /////////////////////////////////////////////////////////////////////////////
}