$(document).ready(onReady);

function onReady() {
$('#submitBtn').on('click', submitEmployee);
$('#employeeTable').on('click', '.deleteBtn', deleteEmployee);

}

function submitEmployee() {
console.log('SUBMIT CLICKED');

    let firstName=$('#firstNameIn').val();
    let lastName=$('#lastNameIn').val();
    let idNumber=$('#idIn').val();
    let title=$('#titleIn').val();
    let salary=$('#salaryIn').val();

    let employeeAdded={firstName, lastName, idNumber, title, salary};

    console.log(employeeAdded);
    
    $('#employeeTable').append(`
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idNumber}</td>
    <td>${title}</td>
    <td>${salary}</td>
    <td><button class="deleteBtn">Delete</button>
    </tr>
    `)

    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#salaryIn').val('');



}

function deleteEmployee() {
console.log('DELETE IS CLICKED');
 let button = $(this)
 button.closest('tr').remove();

 }
 
function calculateMonthly() {

 }