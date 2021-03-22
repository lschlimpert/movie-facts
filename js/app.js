const submitButton = document.querySelector('button#submit_btn');
const inputField = document.querySelector('input#search_input');

submitButton.addEventListener('click', (e) => {
  e.preventDefault()

  document.querySelector('section').style.display = 'block';
  document.querySelector('main').style.display = 'none';

  let inputValue = inputField.value

  fetch(`http://www.omdbapi.com/?apikey=c2241110&t=${inputValue}`)
  .then( response => response.json() )
  .then( data => {
    console.log(data)

    document.querySelector('section img').src = data.Poster;
    console.log(data.Poster)
    
  })

})
