//it's temporarily 1D because of ids
var boxes = new Array();

function gridTable()
{
    var ret = "<svg id='calendar-graph' height='110' width='721'><g transform='translate(20, 20)'>";
    
    //excuse the noob id approach, I'll fix it to smt that makes more sense later, too tired XD
    //just wanted teh colors to appear
    var idNum = 0;
    for(var i = 0; i <= 650 ; i += 13)
    {
        ret += "<g transform='translate(" + i + ", 0)'>";
        
	for(var j = 0; j <= 78; j += 13)
        {
	    ret += "<rect id='" + idNum + "' onclick='color(" + idNum + ")' class='day' width='11' height='11' y='" + j + "' style='fill: rgb(238, 238, 238);'></rect>";
	    boxes[idNum] = 0;
	    idNum++;
	}
        ret+="</g>";
    }
    ret += "</g></svg>";
    return ret;
}



function createGrid()
{
    var obj = document.getElementById("gridBody");
    obj.innerHTML = gridTable();
}


function color(id)
{
    console.log(id);
    //console.log("running color(" + id + ")");
    // Check the current colour and update to the next colour.
    var box = document.getElementById(id);
    switch (boxes[id])
    {
      case 0:	
	box.setAttribute("style", "fill: rgb(214, 230, 133);");
	boxes[id]++;
	break;
      case 1:
	box.setAttribute("style", "fill: rgb(140, 198, 101);")
	boxes[id]++;
	break;
      case 2:
	box.setAttribute("style", "fill: rgb(68, 163, 64);")
	boxes[id]++;
	break;
      case 3:
	box.setAttribute("style", "fill: rgb(30, 104, 35);")
	boxes[id]++;
	break;
      case 4:
	box.setAttribute("style", "fill: rgb(238, 238, 238);")
	boxes[id] = 0;
	break;
    }

}



function colorUpdate(id, array)
{
    //console.log("running color(" + id + ")");
    // Check the current colour and update to the next colour.
    var box = document.getElementById(id);
    switch (array[id])
    {
      case 0: 
      box.setAttribute("style", "fill: rgb(238, 238, 238);")
  
  break;
      case 1:
        box.setAttribute("style", "fill: rgb(214, 230, 133);");

  break;
      case 2:
        box.setAttribute("style", "fill: rgb(140, 198, 101);")

  break;
      case 3:
        box.setAttribute("style", "fill: rgb(68, 163, 64);")

  break;
      case 4:
        box.setAttribute("style", "fill: rgb(30, 104, 35);")
  
  break;
    }

}

function sendMail() {
    var link = "mailto:Your email here."
             + "?cc="
             + "&subject=" + escape("Commit Schedule")
             + "&body=" + escape(generateDates(boxes));

    window.location.href = link;
}

// sample grid to load
var save2 = new Array;

var save1 = new Array;

function save() {

  //save1 = boxes;
  for (i = 0; i < save1.length; i++){
    var box = document.getElementById(i);
    console.log(box.getAttribute("style"));
    // if (box.getAttribute("style") == "\"fill: rgb(238, 238, 238);\"") {
    //   save1[i] = 0;
    // }
    // else if (box.getAttribute("style") == "\"fill: rgb(214, 230, 133);\"") {
    //   save1[i] = 1;
    // }
    // else if (box.getAttribute("style") == "\"fill: rgb(140, 198, 101);\"") {
    //   save1[i] = 2;
    // }
    // else if (box.getAttribute("style") == "\"fill: rgb(68, 163, 64);\"") {
    //   save1[i] = 3;
    // }
    // else if (box.getAttribute("style") == "\"fill: rgb(30, 104, 35);\"") {
    //   save1[i] = 4;
    // }
    // console.log(save1[i]);

  }

}

/* 
 * The way it was before, boxes still had the previous numbers in it.
 * We need to reset boxes, because otherwise upon clicking inside the
 * previously drawn area, we jump to random colors.
 */
function cleargrid() {
  for (i = 0; i < boxes.length; i++) {
    boxes[i] = 0;
  }
  for (i = 0; i < boxes.length; i++) {
    colorUpdate(i, boxes);
  }

}

function load() {
  console.log("loading...");
  //dateToPrettyString(4, 10, 2014);
  //calculateDate(1);


  for (i = 0; i < boxes.length; i++){
    save2[i] = 0;
  }

  // since I won't have peresisting save done by wednesday, I painstakingly loaded a space invader so that
  // we can show the load function, generateDate() and sample email
  save2[146] = 3;
  save2[153] = 3;
  save2[167] = 3;
  save2[174] = 3;
  save2[138] = 3;
  save2[180] = 3;
  save2[179] = 3;
  save2[172] = 3;
  save2[165] = 3;
  save2[158] = 3;
  save2[151] = 3;
  save2[144] = 3;
  save2[137] = 3;
  save2[123] = 3;
  save2[124] = 3;
  save2[122] = 3;
  save2[129] = 3;
  save2[136] = 3;
  save2[143] = 3;
  save2[150] = 3;
  save2[157] = 3;
  save2[164] = 3;
  save2[171] = 3;
  save2[178] = 3;
  save2[185] = 3;
  save2[192] = 3;
  save2[193] = 3;
  save2[194] = 3;
  save2[128] = 3;
  save2[134] = 3;
  save2[140] = 3;
  save2[141] = 3;
  save2[148] = 3;
  save2[155] = 3;
  save2[184] = 3;
  save2[176] = 3;
  save2[168] = 3;
  save2[162] = 3;
  save2[169] = 3;
  save2[177] = 3;
  save2[163] = 3;
  save2[156] = 3;
  save2[149] = 3;
  save2[135] = 3;
  save2[167] = 3;
  save2[174] = 3;
  save2[180] = 3;
  save2[179] = 3;
  save2[193] = 3;
  save2[194] = 3;
  save2[192] = 3;


  generateDates(save2);

  // choose which file to load here
  boxes = save2;


  for (i = 0; i < boxes.length; i++){
      colorUpdate(i, boxes);
      if (boxes[i] != 0){
        console.log("filled " + i + " with color " + boxes[i]);
    }
  }
}

// generate dates corresponding to pattern, returns a string that we can email to the user

function generateDates(array){
  console.log("inside generates");

  var dates = "";

  // I'm not sure how many commits it takes to achieve each shade of green so we'll change the numbers here
  // when we find out for sure 


  var num1 = 1; 
    // according to empirical data gathered by yours truly, it takes 4 commits to make it to the second shade of green
  var num2 = 4;
  var num3 = 8;
  var num4 = 12;

//onsole.log(calculateDate(355));
  var i = 0;
  for (i = 0; i < boxes.length; i++) {
    //var dateString = calculateDate(i);
    switch (array[i]) {
      case 1:
        dates = dates + calculateDate(i) + " - " + num1 + " commit" + "\n\n";
      break;
      case 2:
        dates = dates + calculateDate(i) + " - " + num2 + " commits" + "\n\n";
      break;
      case 3:
        dates = dates + calculateDate(i) + " - " + num3 + " commits" + "\n\n";
      break;
      case 4: 
        dates = dates + calculateDate(i) + " - " + num4 + " commits" + "\n\n";
      break
     
    }
  }
  console.log(dates);
  return dates;

}





//////////////////////////////
// POSITION ON GRID to DATE //
//////////////////////////////

// stores information about present date

var d = new Date();
var presentDayOfWeek = d.getDay(); // 0 = Sunday, 1 = Monday, ... , 6 = Saturday
var presentDay = d.getDate();
var presentMonth = d.getMonth();;
var presentYear = d.getFullYear();

///////////
// INPUT //c
///////////

var inputRow = 0; // between 0 and 6 inclusive
var inputColumn = 0; // between 0 and 52 inclusive

var squareNumber = 365;

//////////////////
// END OF INPUT //
//////////////////

//console.log("At position [" + inputRow + "][" + inputColumn + "] of the array, the date is:");



inputColumn++; // add 1 to offset incomplete column at the beginning

/* leap years occur on years that are divisile by 4 (with some exceptions
 * but those happend once every century or so so we'll ignore them for now) */

function calculateDate(number) {

squareNumber = number;
//console.log("Square #" + squareNumber + " corresponds to: ")

var leap = false;

if (presentYear % 4 == 0){
  leap = true;
}
// maxDays holds maximum amount of days in every month, accounting for leap and non-leap years
var maxDays = new Array();

if (leap){
  maxDays[0] = 31;
  maxDays[1] = 29;
  maxDays[2] = 31;
  maxDays[3] = 30;
  maxDays[4] = 31;
  maxDays[5] = 30;
  maxDays[6] = 31;
  maxDays[7] = 31;
  maxDays[8] = 30;
  maxDays[9] = 31;
  maxDays[10] = 30;
  maxDays[11] = 31;
}
else {

  maxDays[0] = 31;
  maxDays[1] = 28;
  maxDays[2] = 31;
  maxDays[3] = 30;
  maxDays[4] = 31;
  maxDays[5] = 30;
  maxDays[6] = 31;
  maxDays[7] = 31;
  maxDays[8] = 30;
  maxDays[9] = 31;
  maxDays[10] = 30;
  maxDays[11] = 31;

}

// calculate number of days out of 365 the present date is
var presentTotal = 0;

for (j = 0; j < presentMonth; j++){
  presentTotal = presentTotal + maxDays[j];
}
presentTotal = presentTotal + presentDay;


// calculate what the sampleTotalth day of the year is
var startingDate = (presentTotal - presentDayOfWeek + 365 + 6) - (7)*(52);

////////////
// OUTPUT //
////////////

var outputDay;
var outputMonth;
var outputYear;

///////////////////
// END OF OUTPUT //
///////////////////

var outputTotal;
if (leap) {
  // outputTotal = (inputColumn * 7 + inputRow + startingDate) % 365;
  outputTotal = (squareNumber + startingDate) % 365;

}
else {
  //outputTotal = (inputColumn * 7 + inputRow + startingDate) % 366;
  outputTotal = (squareNumber + startingDate) % 366;
}

for (i = 0; i < 12; i++){
  if (outputTotal - maxDays[i] > 0) {
    outputTotal = outputTotal - maxDays[i];
  }
  else break;

}

outputMonth = i + 1;



if (outputTotal > 0) {
  outputDay = outputTotal;
}

if ((outputMonth >= presentMonth - 1) && (outputDay >= presentDay - 1)){
  outputYear = presentYear - 1;

}
else {
  outputYear = presentYear;
}

// console.log("Month: " + outputMonth);
// console.log("Day: " + outputDay);
// console.log("Year: " + outputYear);
returnedString = dateToPrettyString(outputDay, outputMonth, outputYear);
//console.log("retunredString " + returnedString);
  return returnedString;

}

function dateToPrettyString(day, month, year){
  var storage = "";
  switch(month) {
    case 1: 
      storage = storage + "Januray ";
      break;
    case 2:
      storage = storage + "February ";
      break;
    case 3:
      storage = storage + "March ";
      break;
    case 4:
      storage = storage + "April ";
      break;
    case 5:
      storage = storage + "May ";
      break;
    case 6: 
      storage = storage + "June ";
      break;
    case 7:
      storage = storage + "July ";
      break;
    case 8:
      storage = storage + "August ";
      break;
    case 9:
      storage = storage + "September ";
      break;
    case 10:
      storage = storage + "October ";
      break;
    case 11:
      storage = storage + "November ";
      break;
    case 12:
      storage = storage + "December ";
      break;
  }

  storage = storage + day + ", " + year;
  //console.log(storage);
  return storage;

}