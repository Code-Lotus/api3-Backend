import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import CreateUsuarioController from "../controllers/usuario/createUsuarioController";
import ListUsuariosController from "../controllers/usuario/listUsuariosController";
import DeleteUsuarioController from "../controllers/usuario/deleteUsuarioController";
import ListVendasController from "../controllers/venda/listVendasController";
import CreateVendaController from "../controllers/venda/createVendaController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/usuarios", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsuariosController().handle(request, reply);
    })
    
    fastify.post("/usuario", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUsuarioController().handle(request, reply);
    })
    
    fastify.delete("/usuario", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUsuarioController().handle(request, reply);
    })

    fastify.get("/vendas", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListVendasController().handle(request, reply);
    })

    fastify.post("/venda", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateVendaController().handle(request, reply);
    })

}