const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault();

    let inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    movieTitle.textContent = inputField.value;


    const list = document.querySelector('ul')
    list.appendChild(movie)

    inputField.value = ''

}    

document.querySelector('form').addEventListener('submit', addMovie)

const deleteMovie = (event) => {event.target.parentNode.remove()
    message.textContent = 'That movie is gonzo!'
}


const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked') === true) 
    {
        message.textContent = 'You have seen this one!'
    }
    else {
        message.textContent = 'Put this one back on the list!'
    }
}

