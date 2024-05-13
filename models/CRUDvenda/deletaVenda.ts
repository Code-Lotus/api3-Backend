


export default class DeletarVenda {

    
    public deletar(){
        con.connect(function(err:Error) {
            if (err) throw err;
                var sql = "DELETE FROM vendas WHERE venda_id = 'numero da venda selecionada'";
                con.query(sql, function (err:Error, result:any) {
            if (err) throw err;
                console.log("Number of records deleted: " + result.affectedRows);
            });
        });

}

}