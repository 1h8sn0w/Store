const costs = document.getElementById('costs')
const counts = document.getElementById('counts')
const priceSel = document.getElementById('priceSel')
const catSel = document.getElementById('catSel')
const modal = document.getElementById('modal')

for (let btn of document.getElementsByClassName('product-box__btn')) {
    btn.addEventListener('click', onClick)
}

for (let check of document.getElementsByClassName('btn-check')) {
    check.addEventListener('click', checkIn)
}

priceSel.addEventListener('change', onChange)

catSel.addEventListener('change', onChange)

function onChange() {
    for (let item of document.getElementsByClassName('product-box__item')) {
        let price = parseInt(item.children[2].children[0].textContent)
        item.style.display = 'none'
        if (item.classList.contains(catSel.value) || catSel.value === '0') {
            if (price <= priceSel.value || priceSel.value === '0') {
                item.style.display = 'flex'
            }
        }
    }
}

function onClick() {
    const parent = this.parentElement
    let number = parseInt(parent.children[1].children[0].value)
    let amount = parseInt(parent.children[0].textContent)
    if (costs.textContent === 'XXX' && counts.textContent === 'XXX') {
        costs.textContent = (amount * number).toString()
        counts.textContent = number.toString()
    } else {
        costs.textContent = (parseInt(costs.textContent) + amount * number).toString()
        counts.textContent = (parseInt(counts.textContent) + number).toString()
    }
}

function checkIn() {
    modal.style.display = 'block'
    document.getElementById('btn-send').addEventListener('click', ()=> {
        let name = document.getElementById('name')
        let email = document.getElementById('email')
        if (name.value.trim().length <= 0) {
            name.style.borderColor = 'red'
            alert('Name field is empty or to short!')
        } else {
            if (email.value.trim().length <= 0) {
                email.style.borderColor = 'red'
                alert('Email field is empty or to short!')
            } else {
                alert('Спасибо за заказ, ждите звонка менеджера!')
                modal.style.display = "none"
                costs.textContent = 'XXX'
                counts.textContent = 'XXX'
            }
        }
    })
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
