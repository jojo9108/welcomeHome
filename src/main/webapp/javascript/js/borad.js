function submitBrd(e) {
    e.preventDefault();
    let list = document.querySelector('#list>tbody')

    let num = document.brd.num.value;
    let title = document.brd.title.value;
    let writer = document.brd.writer.value;
    let regDate = document.brd.regDate.value;

    let childCnt = list.children.length;
    console.log(childCnt);
    // 0, null, '' => false
    // 1, 'val' => true
    if (childCnt % 2 == 0) {
        let liTag = createTr(num, title, writer, regDate);
        liTag.setAttribute('class', 'altRow');
        //liTag.className = 'altRow';
        list.appendChild(liTag);
    } else {
        list.appendChild(createTr(num, title, writer, regDate));
    }
    document.brd.num.value = childCnt + 1;
}

function createTr(num, title, writer, regDate, checkbox) {

    let trTag = document.createElement('tr');

    for (let i = 0; i < arguments.length; i++) {
        let tdTag = document.createElement('td');
        tdTag.setAttribute('class', 'td' + (i + 1));
        let text = document.createTextNode(arguments[i]);
        tdTag.appendChild(text); //<td>name</td>
        trTag.appendChild(tdTag); //<tr><td>...</td></tr>
    }
    let tdTag = document.createElement('td');
    let inputTag = document.createElement('input');
    inputTag.setAttribute('type', 'checkbox')
    trTag.appendChild(tdTag);
    tdTag.appendChild(inputTag);

    return trTag;
}
// return false;

// 기존 생성되어있는 tr에 이벤트등록.
function addTrEvent() {
    let trs = document.querySelectorAll('#list > tbody > tr');
    console.log(trs);
    for (let i = 0; i < trs.length; i++) {
        trs[i].addEventListener('click', function () {
            console.log('내용: ', this.children[2].innerHTML);
            //form 화면의 각 요소의 값 <= this.children[2].innerHTML
            document.getElementById('num').value = this.children[0].innerHTML;
            document.getElementById('title').value = this.children[1].innerHTML;
            document.getElementById('writer').value = this.children[2].innerHTML;
            document.getElementById('regDate').value = this.children[3].innerHTML;
        }); //매개값(event, funciton);
    }
}
// 수정 버튼을 클릭하면 실행될 eventHandler(코드);
let updateBtn = document.querySelector('#inputForm > form > input[type="button"]');
console.log(updateBtn);
updateBtn.addEventListener('click', function () {
    //폼태그 안에 사용자가 수정한 값을 테이블에서 찾아와서 (tr=id) 하위요소 값 변경.
    let numInput = document.getElementById('num');
    let titInput = document.getElementById('title');
    let wrtInput = document.getElementById('writer').value;
    let regInput = document.getElementById('regDate');

    console.log(numInput.value); // 수정하고자 하는 게시판의 글번호.
    let searchId = numInput.value;
    let findTr = document.getElementById(searchId);
    console.log('findTr');
    // 제목: 
    findTr.children[1].innerHTML = titInput.value;
    // 이름: 
    findTr.children[2].innerHTML = wrtInput;
    // 날짜:
    findTr.children[3].innerHTML = regInput.value;
});

// 선택삭제 버튼 클릭하면 선택값만 삭제처리.
document.getElementById('delBtn').addEventListener('click', function () {
    //체크박스가 선택된 요소 가지고 와야한다.
    let checkedBox = document.querySelectorAll('#list > tbody > tr > td > input[type="checkbox"]:checked');
    console.log(checkedBox);
    for (let i = 0; i < checkedBox.length; i++) {
        checkedBox[i].parentNode.parentNode.remove();

    }
})