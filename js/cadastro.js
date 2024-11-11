document.getElementById('botaoCadastrar').addEventListener('click', function() {
    const usuario = document.getElementById('cadastroUsuario').value;
    const senha = document.getElementById('cadastroSenha').value;
    const confirmaSenha = document.getElementById('confirmarSenha').value;

    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem, Tente Novamente!");
        return;
    }

    // Recupera a lista de usuários do localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o usuário já está cadastrado
    if (usuarios.some(u => u.usuario === usuario)) {
        alert("Usuário já cadastrado! Tente com outro nome.");
        return;
    }

    if (usuario && senha) {
        usuarios.push({ usuario, senha });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert("Cadastro realizado");
        window.location.href = "login.html";
    } else {
        alert("Por favor preencha todos os inputs");
    }
});

//testar se o usuario ja ta cadastrado

