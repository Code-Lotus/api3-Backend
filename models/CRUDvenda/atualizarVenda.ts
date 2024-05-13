


export default class AtualizarVenda{
   
public atualizar(){


    con.connect(function(err:Error) {
        if (err) throw err;
        var sql = "UPDATE vendas SET nomecoluna = 'valorNovoInserido' WHERE nomeColuna = 'valorParaAcharESubstituir'";
        con.query(sql, function (err:Error, result:any) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
      });
}

   


        

}






