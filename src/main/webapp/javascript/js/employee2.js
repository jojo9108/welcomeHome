function employee2() {
    let xhtp = new XMLHttpRequest();
    xhtp.open('get', 'MOCK_DATA (1).json');
    xhtp.send();
    xhtp.onreadystatechange = function () {
        if (xhtp.readyState == 4 && xhtp.status == 200) {
            let data = JSON.parse(xhtp.response);
            console.log(data);
        }
    }
}