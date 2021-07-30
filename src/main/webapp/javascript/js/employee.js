function makeRow(obj) {
    // <tr><td>id</td><td>first_name</td><td>last_name</td></tr>
    let tr = document.createElement('tr');
    tr.addEventListener('mouseover', mover, true);
    tr.addEventListener('mouseout', mout, true);
    tr.addEventListener('click', trClick, true); // 상위요소 => 하위요소.
    // 필드의 갯수만큼 반복할때 for .. in 반복문 사용.
    for (let field in obj) {
        console.log('필드: ' + field + '값: ' + obj[field]);
        console.log(`필드: ${field}, 값: ${obj[field]}`);
        let td = document.createElement('td');
        let text = document.createTextNode(obj[field]);
        td.appendChild(text);
        tr.appendChild(td);

    }
    //삭제버튼생성.
    let td = document.createElement('td');
    let btn = document.createElement('input');
    btn.type = 'button';
    btn.value = '삭제';
    btn.addEventListener('click', deleteRow); // call back 함수
    td.appendChild(btn);
    tr.appendChild(td);
    
    return tr;
}

 let deleteRow = (arg) => {
     arg.stopPropagation(); // 이벤트의 전파를 차단.
      // arrow function 일 경우에는 this 키워드는 window 오브젝트.
    arg.target.parentElement.parentElement.remove(); 
    //target 지정한 요소에 대한 삭제, parentNode tr태그에 대한 삭제
    // 열 전체 삭제를 하려면 parentNode or Element 두번 입력.
}

let mover = function(arg) {
    // arrow function 일 경우에는 this 키워드는 window 오브젝트.
    this.style.backgroundColor = 'teal';
}

let mout = function(arg) {
    // function 일 경우에는 this 키워드는 event 대상.
    this.style.backgroundColor = 'white';
}

let trClick = function() {
    window.alert(this.children[0].innerHTML);

}