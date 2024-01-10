const student1 = {
    firstName: "Daniel",
    lastName: "Jones-Obot",
    age: 10,
    location: "Lagos"
};
const student2 = {
    firstName: "Utibe",
    lastName: "Obot",
    age: 17,
    location: "Canada"
};

const studentsList = [student1, student2];
const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "blue";
table.appendChild(tbody);

studentsList.forEach(function (student) {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "1px solid black";
    locationCell.style.border = "1px solid black";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
