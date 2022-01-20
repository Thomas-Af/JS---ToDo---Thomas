import createSearchBar from './createSearchBar.js';
// import createToDo from './createToDo.js';
import implementToDo from './implementToDo.js';


export default function search() {
    const divSearch = createSearchBar();

    const sectionAdresse = document.createElement('section');
    divSearch.append(sectionAdresse);
    sectionAdresse.classList.add('adresseSection');
    
    const adresse = document.createElement('p');
    sectionAdresse.append(adresse);

    const adresseSecond = document.createElement('p');
    sectionAdresse.append(adresseSecond);

    const adresseThird = document.createElement('p');
    sectionAdresse.append(adresseThird);


    divSearch.addEventListener("keydown", event => {
        let inputSearch = document.getElementById('searchBar').value;


        if(inputSearch !== '') {
            sectionAdresse.style.display = 'flex';

            console.log(inputSearch);
            let newVal = inputSearch.replace(/ /g, "%20");

            console.log(`https://api-adresse.data.gouv.fr/search/?q=${newVal}&limit=3`);

            fetch(`https://api-adresse.data.gouv.fr/search/?q=${newVal}&limit=3`)
            .then((response)=> {
            console.log("response", response);

            return response.json();
            })
            .then((data) => {
                console.log("data", data);

                console.log('tab', data.features);
                let tab = data.features;

                adresse.innerText = tab[0].properties.name + ', \n' +  tab[0].properties.city + ', ' + tab[0].properties.postcode;
                adresse.setAttribute('id','first');
                adresse.addEventListener("click", implementToDo);

                adresseSecond.innerText = tab[1].properties.name + ',\n ' + tab[1].properties.city + ', ' + tab[1].properties.postcode;
                adresseSecond.setAttribute('id','second');
                adresseSecond.addEventListener("click", implementToDo);

                adresseThird.innerText = tab[2].properties.name + ',\n ' + tab[2].properties.city + ', ' + tab[2].properties.postcode;
                adresseThird.setAttribute('id','third');
                adresseThird.addEventListener("click", implementToDo);

            })

        } else {
            console.log("Vous n'avez rien écrit")
        }
    });
}