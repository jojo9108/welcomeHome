const students = [];
        // 학생이름(name), 점수[국어(kor),수학(mat),영어(eng)] => student1 오브젝트. < 3명
        const student1 = {
            name: '박주현',
            kor: '70',
            mat: '60',
            eng: '50'
        }
        const student2 = {
            name: '홍미림',
            kor: '80',
            mat: '90',
            eng: '50'
        }
        const student3 = {
            name: '권가영',
            kor: '90',
            mat: '80',
            eng: '70'
        }
        students.push(student1);
        students.push(student2);
        students.push(student3);
       
        const fields = {
            name: '학생이름',
            kor: '국어점수',
            mat: '수학점수',
            eng: '영어점수',
        }

        document.write('<table border="1">');
        document.write('  <thead><tr>');
        for (field in fields) {
            document.write('<th>' + fields[field] + '</th>');
        }
        document.write('</tr></thead>');
        document.write('<tbody>');
        for (let i = 0; i < students.length; i++) {
            document.write('<tr>');
            for (field in students[i]) {
                document.write('<td>' + students[i][field] + '</td>');
            }
            document.write('</tr>');
        }
        document.write('  </tbody>');
        document.write('  </table>');