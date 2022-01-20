export default function createSearchBar() {
    const divSearch = document.createElement('div');
    document.body.append(divSearch);
    divSearch.classList.add('divSearch');

    const inputSearch = document.createElement('input');
    divSearch.append(inputSearch);
    inputSearch.setAttribute('type','search');
    inputSearch.setAttribute('id','searchBar');
    inputSearch.setAttribute('placeholder','Chercher une adresse ...');


    // const buttonSearch = document.createElement('button');
    // divSearch.append(buttonSearch);
    // buttonSearch.innerText = "Rechercher une addresse"
    // buttonSearch.classList.add('buttonSearch');

    return divSearch
}