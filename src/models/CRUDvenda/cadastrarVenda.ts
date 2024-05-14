
export default class CadastroVenda  {
    public cadastrar(){

       
        const data= 
        const vendedor = 
        const produto = 
        const cliente = 
        const valor = 
        

        con.connect(function(err:Error) {
            if (err) throw err;
            console.log("Connected!");
            var sql= 'INSERT IN TO vendas (venda_data, venda_produto, cliente_id, venda_valor, usuario_id) VALUES (data, produto, cliente, valor, vendedor)'
            con.query(sql, function (err:Error, result:any) {
              if (err) throw err;
              console.log("Uma Venda cadastrada" + result);
            });
          });
        
    


    }
    







}