export default function createToDo() {   
    
    const divToDo = document.createElement('div');
    document.body.append(divToDo);
    divToDo.classList.add('divToDo');

    const toDo = document.createElement('ul');
    toDo.setAttribute('id','listToDo');
    divToDo.append(toDo);


    return toDo;
}