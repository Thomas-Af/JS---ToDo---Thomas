import createToDo from './createToDo.js';
import search from './search.js';

const divSearch = search();
const divtoDo = createToDo();


    const buttonSearch = document.createElement('button');
    document.body.append(buttonSearch);
    buttonSearch.innerText = "Filtrer"
    buttonSearch.classList.add('buttonFilter');
    let filtre = true;

    buttonSearch.onclick = function() { 

    const checked = document.getElementsByClassName('liChecked');
    console.log('Checked', checked);


    if (filtre) {
        for (let i = 0; i < checked.length; i++) {
            checked[i].style.display = "none";
        }
        filtre = !filtre;
    } else {
        for (let i = 0; i < checked.length; i++) {
            checked[i].style.display = "block";
        }
        filtre = !filtre;
    }

    

    // if (checked) {
    //     checked.style.color = "red";
    // }


    // checked.style.display = 'none';


    };