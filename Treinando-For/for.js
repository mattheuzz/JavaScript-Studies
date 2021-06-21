const box_for = document.querySelector('.box-for')
const creating = document.createElement('div')

const element = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'} 
]

for (let i = 0; i < element.length; i++){
    let {tag, texto} = element[i]
    let creatTag = document.createElement(tag)
    creatTag.innerHTML = texto
    creating.appendChild(creatTag)
}

box_for.appendChild(creating)

