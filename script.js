function mudarTema() {
    const cartao = document.querySelector('#cartao');
    const nome = document.querySelector('h1');
    //Verifica se a cor atual é a que você escolheu (#9b51c9)
    if (cartao.style.backgroundColor === 'rgb(155, 81, 201)') {
        cartao.style.backgroundColor ='#222'; //cor escura
        nome.style.color = 'white'; //garante que o nome apareça no fundo escuro
    } else {
        cartao.style.backgroundColor = '#9b51c9'; //volta para o roxo
        nome.style.color = 'white';// Ou a cor original que você definiu
    }
}
