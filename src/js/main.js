
// get data

const breeds = [];
const dropdown = document.getElementById('#breeds-dropdown');

fetch('https://dog.ceo/api/breeds/list/all')
.then(response => response.json())
.then(data => selectOptions(data));


const selectOptions = (breeds) => {
    breeds.map(breed => {
        document.createElement('option', {
            text: breed
        })
    })

    dropdown.appendChild(breeds);
    
}