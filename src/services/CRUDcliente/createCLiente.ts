import { PrismaClient,Prisma } from "@prisma/client";

const prisma = new PrismaClient()







export default class CreateCliente{

    async execute (cliente_nome:string, cliente_cpfcnpj:string,cliente_segmento:string){

            let cliente: Prisma.clienteCreateInput={

                cliente_nome: cliente_nome,
                cliente_cpfcnpj: cliente_cpfcnpj,
                cliente_segmento: cliente_segmento
            }


            try{

                const CreateCliente = await prisma.cliente.create({data:cliente});
                console.log(`cliente cadastrado`);
            }
            
            catch (error){

                console.error(`Problema `, error);
            }

            finally{

                await prisma.$disconnect();
            }
    }


}







