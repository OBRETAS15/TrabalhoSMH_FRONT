//testar se usuario e senha estão corretos, ou existem.
document.getElementById('botaoEntrar').addEventListener('click', function() {
    const usuario = document.getElementById('loginUsuario').value;
    const senha = document.getElementById('loginSenha').value;

    // Recupera a lista de usuários do localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o usuário existe e se a senha está correta
    const usuarioEncontrado = usuarios.find(u => u.usuario === usuario);

    if (usuarioEncontrado) {
        if (usuarioEncontrado.senha === senha) {
            alert("Login realizado com sucesso!");
            window.location.href = "home.html";
        } else {
            alert("Senha incorreta! Tente novamente.");
            return;
        }
    } else {
        alert("Usuário não encontrado! Verifique seu nome de usuário.");
        return;
    }
});