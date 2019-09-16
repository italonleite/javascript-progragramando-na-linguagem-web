var tabela = document.querySelector("table");
    
    //evento é uma bolha vai passando por toda hierarquia, subindo até o body
    tabela.addEventListener("dblclick", function (event) {        
        
     //   event.target.parentNode.classList.add("fadeout");
         var alvoEvento = event.target; //TD - Filho
        var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
        paiDoAlvo.classList.add("fadeout");
        setTimeout(function () {
            paiDoAlvo.remove();
        }, 500);
       
    });

