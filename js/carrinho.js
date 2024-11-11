function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        quantidade: 1
    };
}

const carrinho = {
    itens: [],

    inicializar() {
        const itensSalvos = localStorage.getItem('carrinho');
        if (itensSalvos) {
            this.itens = JSON.parse(itensSalvos);
        }
    },

    adicionarProduto(produto) {
        const existente = this.itens.find(item => item.nome === produto.nome);
        if (existente) {
            existente.quantidade++;
        } else {
            this.itens.push(produto);
        }
        this.salvarCarrinho();
        alert(`${produto.nome} adicionado ao carrinho.`);
    },

    calcularTotal() {
        return this.itens.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
    },

    listarItens() {
        const listaCarrinho = document.getElementById('listaCarrinho');
        listaCarrinho.innerHTML = '';

        if (this.itens.length === 0) {
            listaCarrinho.innerHTML = "<p>O carrinho está vazio.</p>";
            return;
        }
        this.itens.forEach(produto => {
            listaCarrinho.innerHTML += `<div class="carrinho-item">${produto.nome}: R$${produto.preco.toFixed(2)} (Quantidade: ${produto.quantidade})</div>`;
        });
        listaCarrinho.innerHTML += `<strong>Total: R$${this.calcularTotal().toFixed(2)}</strong>`;
    },

    salvarCarrinho() {
        localStorage.setItem('carrinho', JSON.stringify(this.itens));
    },

    limparCarrinho() {
        this.itens = [];
        this.salvarCarrinho();
        alert("Carrinho limpo.");
    }
};

function adicionarProduto(nome, preco) {
    carrinho.adicionarProduto(criarProduto(nome, preco));
}

function listarItens() {
    carrinho.listarItens();
}

function limparCarrinho() {
    carrinho.limparCarrinho();
    listarItens();
}

carrinho.inicializar();