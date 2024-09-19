function displayRow(){
    const TABLE = document.getElementById("studentList");
    let row = ""; // Create a variable to store the row

    for (let i = 0; i < students.length; i++){
        let student = students[i];
        row +=`
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.gender}</td>
                <td>${student.grade1}</td>
                <td>${student.grade2}</td>
                <td>${student.grade3}</td>
                <td>${student.gpa}</td>
                <td>
                    <button class="btn btn-danger" onclick="remove(${student.id})">Remove Student</button>
                </td>

            </tr>
        `;
    }

    TABLE.innerHTML = row; // Insert the row in the table
    displayTotal();
}

function displayTotal(){
    document.getElementById("total").textContent = students.length;
}