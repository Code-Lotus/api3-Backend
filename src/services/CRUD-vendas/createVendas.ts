import { PrismaClient,Prisma, usuario, cliente  } from "@prisma/client";


 const prisma = new PrismaClient();

    interface CreateVendaProps {
            venda_data:Date;
            venda_produto:Number;
            cliente_id:Number;
            venda_valor:Number;
            usuario_id:Number;
            cliente:string;
            usuario:string;
}
 


export default class CreateVenda{

    async execute({venda_data, venda_produto,cliente_id,venda_valor,usuario_id,cliente ,usuario}:CreateVendaProps){

        let venda: Prisma.vendasCreateInput
        venda={

            venda_data: 'de onde vai receber'
            venda_produto:
            cliente_id:
            venda_valor:
            usuario_id:
            cliente:
            usuario:

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