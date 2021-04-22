const students=[
    {id:101,name:"Jahid Hasan"},
    {id:102,name:"Nazmul Hasan"},
    {id:103,name:"Mahbub Alam"},
    {id:104,name:"Sakil Hasan"}

];

const name=students.map(student => student.name);
console.log(name);

const idS=students.map(student => student.id);
console.log(idS);

const ids=students.filter(student => student.id < 104);
console.log(ids);

const studentId=students.find(student => student.id < 103 );
console.log(studentId);