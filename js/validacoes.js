// ===============================
// MÁSCARA CPF
// ===============================


document.addEventListener("DOMContentLoaded", () => {

    const cpfCliente = document.getElementById("cpfCliente");
    const cpfAutorizado = document.getElementById("cpfAutorizado");


    if(cpfCliente){

        cpfCliente.addEventListener("input", function(){

            this.value = formatarCPF(this.value);

        });

    }


    if(cpfAutorizado){

        cpfAutorizado.addEventListener("input", function(){

            this.value = formatarCPF(this.value);

        });

    }


});




// ===============================
// MENSAGENS DO SISTEMA
// ===============================


function mostrarMensagem(texto,tipo){

    const mensagem = document.getElementById("mensagem");


    if(!mensagem) return;


    mensagem.innerHTML = texto;

    mensagem.className = tipo;



    setTimeout(()=>{


        mensagem.innerHTML = "";

        mensagem.className = "";


    },5000);


}





// ===============================
// FORMATADOR CPF
// ===============================


function formatarCPF(valor){


    valor = valor.replace(/\D/g,"");



    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );


    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );


    valor = valor.replace(
        /(\d{3})(\d{1,2})$/,
        "$1-$2"
    );


    return valor;

}