
const idArray = document.getElementById('idArray');
const inputName = document.getElementById('txtName');
const inputAge = document.getElementById('txtAge');
const inputGender = document.getElementById('txtGender');
const inputGrade1 = document.getElementById('txtGrade1');
const inputGrade2 = document.getElementById('txtGrade2');
const inputGrade3 = document.getElementById('txtGrade3');

const registerBtn = document.getElementById('btnRegister');
let students = [];
let cont=0;

// Object literal
let school = {
    name: "FCITEC",
    address: {
        street: "No name",
        number: "123456789"
    },
    hour: {
        open: "08:00",
        close: "17:00"
    }
}

// Object constructor
function Student(id, name, age, gender, grade1, grade2, grade3){

    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.grade1 = grade1;
    this.grade2 = grade2;
    this.grade3 = grade3;
    this.gpa = (Number (grade1) + Number (grade2) + Number (grade3)) / 3;

}

function register(){
    // Create new student
    
    cont++;
    let newStudent = new Student(cont, inputName.value, inputAge.value, inputGender.value, inputGrade1.value, inputGrade2.value, inputGrade3.value);
    students.push(newStudent);
    console.log(students);
    displayRow();

}

function init(){
    // Hook events
    registerBtn.addEventListener('click', register);

}

function remove(studentId){

    students = students.filter(student => student.id !== studentId);
    // Volver a mostrar las filas sin el estudiante eliminado
    displayRow();

}

window.onload = init; // Wait to render the HTML