const delay = ms => new Promise(res => setTimeout(res, ms));



async function start() {

    await delay(900);
    
    function melhoraTela(){            
        
    }
    melhoraTela();

    setInterval(function(){    
        Array.from(document.getElementsByClassName('alert alert-warning mb-5 d-block'))[0].style.visibility= 'hidden';                    
        
        Array.from(document.getElementsByClassName('bootstrap-autocomplete dropdown-menu show')).forEach((element)=> {
            element.style.width = "450px";        
        });

    },50);

}
start();