function cadastroPessoa(){
    var nomeUsuario = document.getElementById("nomeUsuario");
    var emailUsuario = document.getElementById("emailUsuario");
    var telefoneUsuario = document.getElementById("telefoneUsuario");
    
    var dados = localStorage.getItem("dadosPessoa");

    if(dados != null){
        localStorage.setItem("dadosPessoa", "[]" );
        dados = [];
    

    }
    var auxRegistro = {
        nome: nomeUsuario.value,
        email: emailUsuario.value,
        telefone: telefoneUsuario.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosPessoa", JSON.stringify(dados));

    
} 