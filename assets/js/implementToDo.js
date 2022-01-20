import closeToDo from './closeToDo.js';
import checkToDo from './checkToDo.js';

export default function implementToDo() {   
    
    const ul = document.getElementById('listToDo');
    const a1 = document.getElementById('first');
    const a2 = document.getElementById('second');
    const a3 = document.getElementById('third');

    a1.onclick = function() { 
        const firstLi = document.createElement('li');
        let first = document.getElementById('first').innerText;

        firstLi.innerText = first;
        // console.log('firstLi');
        ul.append(firstLi);
        const functionCloseToDo = closeToDo();
        const functionCheckToDo = checkToDo()
    };

    a2.onclick = function() { 
        const secondLi = document.createElement('li');
        let second = document.getElementById('second').innerText;

        secondLi.innerText = second;
        // console.log('secondLi');
        ul.append(secondLi);
        const functionCloseToDo = closeToDo();
        const functionCheckToDo = checkToDo()
    };

    a3.onclick = function() { 
        const thirdLi = document.createElement('li');
        let third = document.getElementById('third').innerText;
    
        thirdLi.innerText = third;
        // console.log('thirdLi');
        ul.append(thirdLi);
        const functionCloseToDo = closeToDo();
        const functionCheckToDo = checkToDo()
    };

    

}


