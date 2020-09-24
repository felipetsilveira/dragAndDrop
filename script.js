const cards = document.querySelectorAll('.card')
const dropzone = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    dropzone.forEach(zone => {
        zone.classList.add('highlight')
    })

    this.classList.add('arrastando')
}

function drag() {}

function dragend() {
    dropzone.forEach(zone => {
        zone.classList.remove('highlight')
    })

    this.classList.remove('arrastando')
}

dropzone.forEach(dropz => {
    dropz.addEventListener('dragenter', dragenter)
    dropz.addEventListener('dragover', dragover)
    dropz.addEventListener('dragleave', dragleave)
    dropz.addEventListener('dragdrop', dragdrop)
})

function dragenter() {

}

function dragover() {
    this.classList.add('em-cima')

    const itemSendoArrastado = document.querySelector('.arrastando')
    this.appendChild(itemSendoArrastado)
}

function dragleave() {
    this.classList.remove('em-cima')
}

function dragdrop() {
    this.classList.remove('em-cima')
}