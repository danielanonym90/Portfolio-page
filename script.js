function enviar(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = '5585997295089'; // com DDI 55 (Brasil)

    const texto = `Olá, me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
}

function viewproject (link) {
    window.open(link, '_blank')
}
