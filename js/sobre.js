const pessoas = document.querySelectorAll('.pessoa');

pessoas.forEach((pessoa) => {
    pessoa.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        removerSelecaoPessoa();

        pessoa.classList.add('selecionado');
        alterarImagemPessoaSelecionada(pessoa);
        alterarNomePessoaSelecionada(pessoa);
        alterarDescricaoPessoa(pessoa);
    });
});

function alterarDescricaoPessoa(pessoa){
    const descricaoPessoa = document.getElementById('descricaoPessoa');
    console.log("Descrição da pessoa:", pessoa.getAttribute('data-description')); 
    descricaoPessoa.innerText = pessoa.getAttribute('data-description');
}

function alterarNomePessoaSelecionada(pessoa){
    const nomePessoa = document.getElementById('nomePessoa');
    console.log("Nome da pessoa:", pessoa.getAttribute('data-name')); 
    nomePessoa.innerText = pessoa.getAttribute('data-name');
}

function alterarImagemPessoaSelecionada(pessoa){
    console.log("Pessoa ID:", pessoa.attributes.id.value); 
    const imagemPessoaEstampa = document.querySelector('.pessoaEstampa');
    const idPessoa = pessoa.attributes.id.value;

    imagemPessoaEstampa.src = `./imgs/card-${idPessoa}.png`;
}

function removerSelecaoPessoa(){
    const pessoaSelecionada = document.querySelector('.selecionado');
    if(pessoaSelecionada){
        pessoaSelecionada.classList.remove('selecionado')
    }
}

window.onload = function() {
    const odair = document.getElementById('odair'); 

    // Seleciona Odair inicialmente
    odair.classList.add('selecionado');

    // Atualiza as informações para Odair
    alterarImagemPessoaSelecionada(odair);
    alterarNomePessoaSelecionada(odair);
    alterarDescricaoPessoa(odair);
};

