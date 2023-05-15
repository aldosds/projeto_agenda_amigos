const form = document.getElementById('form-agenda');
const nomeAmigo = [];
const foneAmigo =[];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeAmigo = document.getElementById('nome-amigo');
    const inputFoneAmigo = document.getElementById('fone-amigo');

    if (nomeAmigo.includes(inputNomeAmigo.value)) {
        alert(`O amigo(a): ${inputNomeAmigo.value} já foi inserido(a)!`);
    } else {
        nomeAmigo.push(inputNomeAmigo.value);
        foneAmigo.push(inputFoneAmigo);

        let linha = '<tr>';
        linha += `<td>${inputNomeAmigo.value}</td>`;
        linha += `<td>${inputFoneAmigo.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeAmigo.value = '';
    inputFoneAmigo.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}