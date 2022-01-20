export default function closeToDo() {   

    let liList = document.getElementsByTagName('li');
    console.log(liList)

    for (let i = 0; i < liList.length; i++) {

        if (liList[i].lastChild.className == 'close') {
            console.log('déja une croix')
        } else {
            const span = document.createElement('span');
            span.innerText = "\u00D7";
            span.classList.add('close');
            liList[i].append(span);
        }
    }

    let closeName = document.getElementsByClassName("close");
    for (let i = 0; i < closeName.length; i++) {
        closeName[i].onclick = function() {
            const parent = this.parentElement;
            parent.remove()
        }
    }

}