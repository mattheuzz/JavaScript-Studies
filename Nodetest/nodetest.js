const ps = document.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body)
const backgroundcolorbody = estiloBody.backgroundColor

for (let p of ps) {
    p.style.backgroundColor = backgroundcolorbody
}