export default function checkToDo() {   

    let liList = document.getElementsByTagName('li');
    var checkedList = [];
    for (let i = 0; i < liList.length; i++) {
        liList[i].onclick = function() {
            checkedList += liList[i].innerText;
            this.classList.add('liChecked');
            console.log('test checkedList', checkedList[i])
        }
    }
}
