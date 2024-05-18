const btnCriar = document.querySelector('#btnCriar')
const listarFilmes = document.querySelector('#listarFilmes')
const inputUsuario = document.querySelector('#inputUsuario')
const limpar = document.querySelector('#limpar')


btnCriar.addEventListener('click', function(infoDoEvento){
    infoDoEvento.preventDefault();

    let novoFilme = document.createElement('li')
    novoFilme.innerText = inputUsuario.value

    let btnEditar = document.createElement('button')
    btnEditar.innerText = 'editar'
    novoFilme.append(btnEditar)
    listarFilmes.append(novoFilme)
    btnEditar.addEventListener('click', e => {
        novoFilme.style.color = 'red'
        novoFilme.classList.toggle('itemLista')
    

        novoFilme.innerHTML = `
        <h1> ${inputUsuario.value}</h1>
        <p>Avaliação: xxxx</p>
        <span> vinriegre </span>
        `
        let imagem = document.createElement('img')
        imagem.src= 'link da imagem'
    })
    

})
limpar.addEventListener('click', e => {novoFilme.innerText = ''})

//infoDoEvento.target = pega o html do objeto que foi criado
//infoDoEvento.target.id = pega o id do elemento que foi criado
//indoDoEvento.target.parentNode = pega o elemento pai do objeto que foi criado