function verifica() {
    var nascimento = document.getElementById('idade')
    nascimento = new Date(nascimento.value)
    nascimento = nascimento.setFullYear(nascimento.getFullYear() + 7);

    if (nascimento <= new Date()) {
        window.alert('Cadastro feito com sucesso!')
        window.location.href = '../index.html'
    }
    else if (nascimento > new Date()) {
        window.alert('Você é muito jovem!')
        window.location.href = '../index.html'
    }

}

function mostra(elemento) {
    var elementsDom = [document.getElementById('agua'), document.getElementById('terra'), document.getElementById('fogo'), document.getElementById('ar')]

    const hideAllUnless = (array, exc) => {
        array.forEach(element => {
            if (element.id != exc)
                element.style.display = 'none'
            else
                element.style.display = 'block'
        });
    }
    switch (elemento) {
        case 'ar':
            hideAllUnless(elementsDom, 'ar')
            break;
        case 'agua':
            hideAllUnless(elementsDom, 'agua')
            break;
        case 'terra':
            hideAllUnless(elementsDom, 'terra')
            break;
        case 'fogo':
            hideAllUnless(elementsDom, 'fogo')
            break;
        default:
            break;
    }
}