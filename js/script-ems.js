// CREATE AN ARRAY OF EMPLOYEES
let employeesArray = [];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
function checkStorage() {
    let storedData = localStorage.getItem('employees');
    if (storedData) {
      employeesArray = JSON.parse(storedData);
    }
  }

// GET DOM ELEMENTS
const form = document.getElementById('employee-form');
const empTable = document.getElementById('employee-table');
const empCount = document.getElementById('employee-count');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.onload = () => {
    checkStorage();
    buildGrid();
  };
  

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // PREVENT FORM SUBMISSION

    // GET THE VALUES FROM THE TEXT BOXES
  const id = employeesArray.length + 1; // Assuming you're auto-incrementing the ID
  const name = document.getElementById('name').value;
  const extension = document.getElementById('extension').value;
  const email = document.getElementById('email').value;
  const department = document.getElementById('department').value;


    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = { id, name, extension, email, department };

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employeesArray.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('name').focus();
});



// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (confirm('Are you sure you want to delete this employee?')) {

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        const rowIndex = e.target.parentNode.parentNode.rowIndex;


        // REMOVE EMPLOYEE FROM ARRAY
        employeesArray.splice(rowIndex - 1, 1);


        // BUILD THE GRID
        buildGrid();
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.innerHTML = '';
    // REBUILD THE TBODY FROM SCRATCH
    const tbody = document.createElement('tbody');
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    employeesArray.forEach((employee) => {
        const row = `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.extension}</td>
                        <td>${employee.email}</td>
                        <td>${employee.department}</td>
                        <td><button>Delete</button></td>
                     </tr>`;
        tbody.innerHTML += row;
      });
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);
    // UPDATE EMPLOYEE COUNT
    empCount.textContent = employeesArray.length;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employeesArray));
}
