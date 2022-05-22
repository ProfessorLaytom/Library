const addBook = document.querySelector('.add-book')
const closePopup = document.querySelector('.close-popup')

addBook.addEventListener('click', function(e) {
    const form = document.querySelector('.form');
    form.style.display = 'flex'
})

closePopup.addEventListener('click', function(e){
    const form = document.querySelector('.form');
    form.style.display = 'none'
})

