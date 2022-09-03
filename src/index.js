const baseURl = 'http://localhost:3000/movies/'


const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let inputValue = event.target.children[1].value
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        await fetch(`${baseURl}${inputValue}`)
        .then(async response => {
            if (!response.ok) {
                // get error message from response status
                title.innerText = 'Data not found';
                summary.innerText = 'Data not found';
                throw new Error(`Something went wrong! \nHTTP response code: ${response.status}`);    
            }
            return await response.json();
        })
        .then(data => {
            title.innerText = data.title;
            summary.innerText = data.summary;
        })
        .catch(err =>  {
            alert(err)
            console.error(err)
        });
    });
  
}


document.addEventListener('DOMContentLoaded', init);