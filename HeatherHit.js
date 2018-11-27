var tl;

function init(){
	//pull tl from local storage
	// can we put an array in local storage?
	tl = ["evil plan", "world domination", "make cookies"]; 
	
} // end function

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
		tblString += "            onclick = 'editItem(" + i + ")'>\n";
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
	$("#txtTask").val("");
} // end loadAdd

function addTask(){
  // add a task to the list
  newTask = $("#txtTask").val();
  tl.push(newTask);
  document.location.href = "#main";
} // end addTask

function editItem(itemNum){
  console.log("editing item # " + itemNum);
}  // end editItem

function deleteItem(itemNum){
  tl.splice(itemNum, 1);
  loadView();
} // end deleteItem

function pickRandom(){
  var taskId = parseInt(Math.random() * tl.length);
	$("#output").text(tl[taskId]);
} // end pickRandom

