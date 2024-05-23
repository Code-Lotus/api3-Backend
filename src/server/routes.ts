import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import CreateUsuarioController from "../controllers/usuario/createUsuarioController";
import ListUsuariosController from "../controllers/usuario/listaUsuariosController";
import DeleteUsuarioController from "../controllers/usuario/deleteUsuarioController";
import ListaVendasController from "../controllers/venda/listaVendasController"
import CreateVendaController from "../controllers/venda/createVendaController";
import ListaProdutoController from "../controllers/produto/listaProdutoController";
import CreateProdutoController from "../controllers/produto/createProdutoController";
import UpdateProdutoController from "../controllers/produto/updateProdutoController";
import DeleteProdutoController from "../controllers/produto/deleteProdutoController";
import CreateClienteController from "../controllers/cliente/createClienteController";
import ListaClientesController from "../controllers/cliente/listaClienteController";
import UpdateClienteController from "../controllers/cliente/updateClienteController";
import DeleteClienteController from "../controllers/cliente/deleteClienteController";
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

    fastify.put("/usuario", async (request: FastifyRequest, reply: FastifyReply) => {
        // return new UpdateUsuarioController().handle(request, reply);
    })

    //////////////////////////////////////////

    // Vendas
    fastify.get("/vendas", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListaVendasController().handle(request, reply);
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

    // Clientes
    fastify.get("/clientes", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListaClientesController().handle(request, reply)
    })

    fastify.post("/cliente", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateClienteController().handle(request, reply)
    })

    fastify.put("/cliente", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateClienteController().handle(request, reply)
    })

    fastify.delete("/cliente", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteClienteController().handle(request, reply)
    })
}