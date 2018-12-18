var tl;

function init(){
	//pull tl from local storage
	// can we put an array in local storage?
  var tlString = localStorage.getItem("tlString");
  if (tlString == "null" || tlString == null){
    tlString = "Have a merry Christmas|Kiss the programmer";
  } // end if
  tl = arrayFromString(tlString);
	
} // end function

function arrayFromString(inString){
  var outArray = inString.split("|");
  return outArray;
} // end arrayFromString

function stringFromArray(inArray){
  var outString = "";
  for(i = 0; i < inArray.length; i++){
    outString += inArray[i];
    // Delimit all but last with | char
    if (i < inArray.length-1){
     outString += "|";
    } // end if
  } // end for loop
  return outString;
} // end stringFromArray

function saveList(){
  tlString = stringFromArray(tl);
  localStorage.setItem("tlString", tlString);
} // end saveList

function loadView(){
  // customize the loadView page based on current task list
	
	document.location.href="#viewTasks";
  // clear existing rows
	$("#tblTasks tbody tr").remove();

	// add data from tl
  for (i = 0; i < tl.length; i++){
		tblString = "<tr><td>" + tl[i] + "</td>\n";
		tblString += "<td><button type = 'button'\n";
		tblString += "            class = 'ui-btn'\n";
		tblString += "            onclick = 'loadEdit(" + i + ")'>\n";
    tblString += "edit\n"
	  tblString += "</button></td>\n";

		tblString += "<td><button type = 'button'\n";
		tblString += "            class = 'ui-btn'\n";
		tblString += "            onclick = 'deleteItem(" + i + ")'>\n";
    tblString += "delete\n"
	  tblString += "</button></td></tr>\n";

		$("#tblTasks tbody").append(tblString);
  } // end for loop
				
		//$("#tblTasks tbody").append("<tr><td>new thing</td><td></td></td></td></tr>");
} // end loadView

function loadAdd(){
  document.location.href = "#addTask";
	$("#txtAddTask").val("");
} // end loadAdd

function loadEdit(itemNum){
  document.location.href = "#editTask";
  $("#txtEditTask").val(tl[itemNum]);
  $("#itemNum").val(itemNum);
} // end loadEdit

function addTask(){
  // add a task to the list
  newTask = $("#txtAddTask").val();
  tl.push(newTask);
  document.location.href = "#main";
  saveList();
} // end addTask

function editTask(){
  // retrieve values from form
  var newValue = $("#txtEditTask").val();
  var itemNum = $("#itemNum").val();
  itemNum = parseInt(itemNum);
  tl[itemNum] = newValue;
  document.location.href = "#main";
  saveList();
}  // end editItem

function deleteItem(itemNum){
  tl.splice(itemNum, 1);
  loadView();
  saveList();
} // end deleteItem

function pickRandom(){
  var taskId = parseInt(Math.random() * tl.length);
	$("#output").text(tl[taskId]);
} // end pickRandom

