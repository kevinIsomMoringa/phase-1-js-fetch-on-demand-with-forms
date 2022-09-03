const baseURl = 'http://localhost:3000/movies/'


const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let inputValue = event.target.children[1].value
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        fetch(`${baseURl}${inputValue}`)
        .then(response => {
            if (!response.ok) {
                // get error message from response status
                console.error('Something went wrong',response?.status);
                title.innerText = 'Data not found';
                summary.innerText = 'Data not found';
            } else if (response.ok) {
                return response.json()
            }
        })
        .then(data => {
            title.innerText = data.title;
            summary.innerText = data.summary;
        })
        .catch(err =>  {
            alert('There was an error!', err)
            console.error('There was an error!', err)});
    });
  
}


document.addEventListener('DOMContentLoaded', init);