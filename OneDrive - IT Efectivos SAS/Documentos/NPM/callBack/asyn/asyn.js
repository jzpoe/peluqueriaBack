function llamadoCallBack(data){
    console.log(data);
    console.log("despues del llamado");
    }
    function CallBackl(llamado){
        llamado({
            name: "jose",
            apellido: "rodriguez",
            edad:"35"
        })  
    }
    CallBackl(llamadoCallBack)


    