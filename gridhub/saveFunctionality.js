// 2d array that holds all the saves
var saves;

function initializeSaves(){
  saves = new Array(10);
  for (i = 0; i < 10; i++){
    saves[i] = new Array(365);
	// Load saves from file here...
    }
}

/* 
 * Allows users to create multiple saves
 */
var fieldsCount = 0;
function populateSaveFields() {
  var fields = document.getElementById("savedFiles");
  fieldsCount++;
  var saveName = "Save Slot ".concat(fieldsCount.toString());
  var o = document.createElement("option");
  o.text = saveName;
  o.id = "save".concat(fieldsCount);
  fields.add(o, fields[fieldsCount]);
  save(fieldsCount);
}

// allows users to delete saves
function deleteSave(){
  var fields = document.getElementById("savedFiles");
  console.log(fields.value);
  fields.remove(fields.selectedIndex);

}

function initializeSave(i) {
  for (j = 0; j < boxColors.length; j++) {
    saves[i][j] = 0;
  }
}


function save(i) {
  // this puts 0's where we don't want other numbers
  initializeSave(i);

  for (j = 0; j < save1.length; j++){
  //  console.log("Box colors: " + boxColors[i]);
    save[i][j] = boxColors[j];
  }

}