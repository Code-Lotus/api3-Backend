



export default class LerVenda{
    

    public LerVendas(){
       
        const ecolha = ['data', 'produto', 'cliente', 'valor', 'vendedor']

        con.connect(function(err:Error) {
            if (err) throw err;
            con.query('SELECT a coluna que for selecionar FROM vendas ', function (err:Error, result:any, fields) {
              if (err) throw err;
              console.log(fields + result);
            });
          });


           
        

    }

}