const burgerBtn = document.getElementById('header__burger_btn')

let isClicked = false
burgerBtn.addEventListener('click', (e) => {
    isClicked = !isClicked
    if(isClicked) {
        document.body.classList.add('noscroll')
    }
    else {
        document.body.classList.remove('noscroll')
    }
})
