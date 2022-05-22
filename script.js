id = 0
library = []

function createBook(author, name, totalPages, completed) {
    this.name = name;
    this.author = author;
    this.totalPages = totalPages;
    this.completed = completed;
}

document.getElementById('to-reset').reset();
const addBook = document.querySelector('.add-book');
const closePopup = document.querySelector('.close-popup');
const addMe = document.querySelector('.add-me')

function retrieveBookData(e) { //creates book object
    const data = Array.from(document.querySelectorAll('input'));
    const data2 = data.map(a => a.value);
    data2[3] = data[3].checked;
    data2.pop();
    const book = new createBook(...data2);
    book.id = id
    return book;
}

function changeStatus(e) {
    for (const book of library) {
        if (e.target.parentElement.dataset.key == book.id) {
            book.completed = !book.completed
            const completed = document.querySelector('.complete')
            completed.src = `${book.completed}.svg`
        }
    }
}

function removeCard(e) {
    const key = e.target.parentElement.dataset.key
    const card = document.querySelector(`.card[data-key='${key}']`)
    for (let k = 0; k < library.length; k++ ) {
        if (library[k].id == key){
            library.splice(k, 1)
        }
    }
    card.remove();
}

function displayLibrary(book) {
    //displays the new book into the library
    const container = document.querySelector('.container');
    const card = document.createElement('div')
    const title = document.createElement('h2')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const remove = document.createElement('button')
    const completed = document.createElement('img')
    completed.src = `${book.completed}.svg` //puts the right image if completed or not
    completed.classList.add('complete')
    completed.title = 'Click to change book status'
    card.classList.add('card')
    card.dataset.key = id
    title.textContent = book.name
    author.textContent = 'by ' + book.author
    pages.textContent = `${book.totalPages} pages`
    remove.textContent = 'Remove book';
    remove.classList.add('remove-btn')
    card.append(title, author, pages, completed, remove);
    container.insertBefore(card, container.firstChild)
    completed.addEventListener('click', function(e) {
        changeStatus(e)
    })
    remove.addEventListener('click', function(e) {
        removeCard(e);
    })
}


addBook.addEventListener('click', function(e) {
    const form = document.querySelector('.form');
    form.style.display = 'flex'
})

closePopup.addEventListener('click', function(e){
    const form = document.querySelector('.form');
    form.style.display = 'none'
})

addMe.addEventListener('click', function(e) {
    const bookObject = retrieveBookData(e);
    displayLibrary(bookObject);
    library.push(bookObject)
    id += 1;
    const form = document.querySelector('.form');
    document.getElementById('to-reset').reset();
    form.style.display = 'none';
})

const complete = Array.from(document.querySelectorAll('.complete'))

