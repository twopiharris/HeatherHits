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
		tblString += "<td><button type = 'button'>\n";
    tblString += "edit\n"
	  tblString += "</button></td>\n";

		tblString += "<td><button type = 'button'>\n";
    tblString += "delete\n"
	  tblString += "</button></td></tr>\n";

		$("#tblTasks tbody").append(tblString);
  } // end for loop
				
		//$("#tblTasks tbody").append("<tr><td>new thing</td><td></td></td></td></tr>");
} // end loadView

function addTask(){
  // add a task to the list
  newTask = $("#txtTask").val();
  tl.push(newTask);
  document.location.href = "#main";
} // end addTask


