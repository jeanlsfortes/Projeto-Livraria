function validar(){
    let nome = document.getElementById("nomeCliente").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const senhaConfirmar = document.getElementById("senhaConfirmar").value;
    console.log(nome);
    console.log(sobrenome);
    console.log(email);
    console.log(senha);
    console.log(senhaConfirmar); 

    if(senha == "" || senha.length <= 5){
        alert("Preencha o campo com no mínimo 6 caracteres ");
    }
    // não entra nesse fi
    if(senha == confirmarSenha){
        alert("As senhas são iguais") ;    
    }else{
        alert("As senhas são diferentes") ;    
        
    }
} 