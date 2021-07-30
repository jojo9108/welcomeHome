// const object = new Object();
// object.name = 'Lee';
// object.age = 30;     // 자바에서 활용
// 자바스크립트에서는 최대한 ⬇ 이것으로 활용할것
const obj = {
    name: 'Hong', //key : value
    age: 20,
    hobby: ['teleporation', 'swimming', 'travel']
};
console.log('이름: ' + obj.name);
console.log('나이: ' + obj['age']);
console.log('취미: ' + obj.hobby[0]);
console.log('취미: ' + obj['hobby'][1]);
let hob = 'hobby';
console.log('취미: ' + obj[hob][2]);

const mem1 = {
    id: 'user1',
    name: '홍길동',
    passwd: '1234'
}

const mem2 = {
    id: 'user2',
    name: '콩쥐',
    passwd: '1212'
}

const mem3 = {
    id: 'user3',
    name: '팥쥐',
    passwd: '3333'
}
for (field in mem3) {
    console.log(field + ', ' + mem3[field]);
}
const members = [mem1, mem2, mem3];
for (let i = 0; i < members.length; i++) {
    // console.log('아이디: ' + members[i].id);
    // console.log('이름: ' + members[i].name);
    // console.log('비밀번호: ' + members[i].passwd);
    for (field in members[i]) {
        console.log(field + ', ' + members[i][field]);
    }

    console.log('-------------------');
}