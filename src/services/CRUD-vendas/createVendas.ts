import { PrismaClient,Prisma, usuario, cliente  } from "@prisma/client";


 const prisma = new PrismaClient();

    interface CreateVendaProps {
            venda_data:Date;
            venda_produto:string;
            cliente_id:number;
            venda_valor:number;
            usuario_id:number;
            // cliente:string;
            // usuario:string;
}
 


export default class CreateVenda{

    async execute({venda_data, venda_produto,cliente_id,venda_valor,usuario_id}:CreateVendaProps){

       

       let venda: Prisma.vendasCreateInput ={

            venda_data: venda_data,
            venda_produto: venda_produto,
            
            cliente:{

                connect:{

                    cliente_id
                }
            },

            venda_valor:venda_valor,
            usuario:{

                connect:{

                    usuario_id
                }
            }

        }

        try{ 

            const CreateVenda = await prisma.vendas.create({data:venda});
            console.log('venda cadastrada');

        }
        catch (error){

            console.error('problema: ', error);

        }
        finally{

            await prisma.$disconnect();
        }
    } }