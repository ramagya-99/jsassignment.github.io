var R_Index,
table = document.getElementById("table");

// check the empty input
function checkEmptyInput()
{
var isEmpty = false,
    name = document.getElementById("name").value,
    city = document.getElementById("city").value,
    Mob_no = document.getElementById("Mob_no").value;

if(name === ""){
    alert("Name Connot Be Empty");
    isEmpty = true;
}
else if(city === ""){
    alert("City Connot Be Empty");
    isEmpty = true;
}
else if(Mob_no === ""){
    alert("Mob No Connot Be Empty");
    isEmpty = true;
}
return isEmpty;
}

// add Row
function addHtmlTableRow()
{
// get the table by id
// create a new row and cells
// get value from input text
// set the values into row cell's
if(!checkEmptyInput()){
var newRow = table.insertRow(table.length),
    td1 = newRow.insertCell(0),
    td2 = newRow.insertCell(1),
    td3 = newRow.insertCell(2),
    name = document.getElementById("name").value,
    city = document.getElementById("city").value,
    Mob_no = document.getElementById("Mob_no").value;

td1.innerHTML = name;
td2.innerHTML = city;
td3.innerHTML = Mob_no;
// call the function to set the event to the new row
selectedRowToInput();
}
}

// display selected row data into input text
function selectedRowToInput()
{

for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
      // get the seected row index
      R_Index = this.rowIndex;
      document.getElementById("name").value = this.cells[0].innerHTML;
      document.getElementById("city").value = this.cells[1].innerHTML;
      document.getElementById("Mob_no").value = this.cells[2].innerHTML;
    };
}
}
selectedRowToInput();

function removeSelectedRow()
{
table.deleteRow(R_Index);
// clear input text
document.getElementById("name").value = "";
document.getElementById("city").value = "";
document.getElementById("Mob_no").value = "";
}