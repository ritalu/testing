/*
 * keep as a 1D array, 2D array isn't necessary.
 * boxColors contains the current color for each box of the grid.
 */
var boxColors = new Array();

/*
 * Generates the HTML code which displays the grid.
 * <svg> tag allows us to draw the rectangles.
 */
function generateGridTable()
{
    // String containing all the HTML to be displayed.
    var ret = "<svg id='calendar-graph' height='110' width='721'><g transform='translate(20, 20)'>";
    
    // Guess we're keeping this approach for now. Not ideal but it works.
    // Create a <g> tag for each column in the grid, and a <rect> tag for
    // each box in the grid.
    var idNum = 0;
    for(var i = 0; i <= 650 ; i += 13)
    {
        ret += "<g transform='translate(" + i + ", 0)'>";
        
	for(var j = 0; j <= 78; j += 13)
        {
	    ret += "<rect id='" + idNum + "' onclick='color(" + idNum + ")' class='day' width='11' height='11' y='" + j + "' style='fill: rgb(238, 238, 238);'></rect>";
	    // Set the color for each box and move to the next one.
	    boxColors[idNum] = 0;
	    idNum++;
	}
        ret+="</g>";
    }
    ret += "</g></svg>";
    return ret;
}

/*
 * Main function which gets called in index.html and sets the inner HTML
 * of the gridBody <div> tag. 
 */
function createGrid()
{
    var obj = document.getElementById("gridBody");
    obj.innerHTML = generateGridTable();
}

/*
 * Updates the color of the box with the given id. Called when
 * a user clicks on a box.
 */
function color(id)
{
    console.log(id);
    // Check the current colour and update to the next colour.
    var box = document.getElementById(id);
    switch (boxColors[id])
    {
      case 0:	
	box.setAttribute("style", "fill: rgb(214, 230, 133);");
	boxColors[id]++;
	break;
      case 1:
	box.setAttribute("style", "fill: rgb(140, 198, 101);")
	boxColors[id]++;
	break;
      case 2:
	box.setAttribute("style", "fill: rgb(68, 163, 64);")
	boxColors[id]++;
	break;
      case 3:
	box.setAttribute("style", "fill: rgb(30, 104, 35);")
	boxColors[id]++;
	break;
      case 4:
	box.setAttribute("style", "fill: rgb(238, 238, 238);")
	boxColors[id] = 0;
	break;
    }

}

/*
 * Used in clearing the grid, loading sample drawings, and of course,
 * boss mode.
 * Copies over the color from the box specified by id in the given array
 * and updates the displayed grid.
 */
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

/*
 * Fills the grid with all dark boxes. This mode is reserved for
 * bosses. Inspired by Toby.
 */
function bossMode() {
  for (i = 0; i < boxColors.length; i++) {
    boxColors[i] = 4;
    colorUpdate(i, boxColors);
  }
}

function sendMail() {
    var link = "mailto:Your email here."
             + "?cc="
             + "&subject=" + escape("Commit Schedule")
             + "&body=" + escape(generateDates(boxColors));

    window.location.href = link;
}

// sample grid to load
var save2 = new Array;

var save1 = new Array;

function save() {

  //save1 = boxColors;
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
 * Clears the boxColors array, resetting the color
 * of each box to 0 (empty box).
 */
function clearGrid() {
  for (i = 0; i < boxColors.length; i++) {
    boxColors[i] = 0;
  }
  for (i = 0; i < boxColors.length; i++) {
    colorUpdate(i, boxColors);
  }

}

/*
 * Manually load some sample artwork while the save and
 * load functions are in the making.
 */
function loadSample() {

  for (i = 0; i < boxColors.length; i++){
    save2[i] = 0;
  }
  
  // Manually load a space invader.
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


  // Pokeball
  save2[16] = 4;
  save2[17] = 4;
  save2[18] = 4;
  save2[22] = 4;
  save2[28] = 4;
  save2[35] = 4;
  save2[42] = 4;
  save2[50] = 4;
  save2[58] = 4;
  save2[59] = 4;
  save2[60] = 4;
  save2[54] = 4;
  save2[26] = 4;
  save2[34] = 4;
  save2[41] = 4;
  save2[48] = 4;
  save2[24] = 4;
  save2[31] = 4;
  save2[45] = 4;
  save2[52] = 4;
  save2[37] = 4;
  save2[39] = 4;
  save2[23] = 2;
  save2[30] = 2;
  save2[29] = 2;
  save2[36] = 2;
  save2[43] = 2;
  save2[44] = 2;
  save2[51] = 2;

  // Mario
  save2[255] = 4;
  save2[256] = 4;
  save2[257] = 4;
  save2[260] = 3;
  save2[261] = 4;
  save2[262] = 1;
  save2[263] = 1;
  save2[264] = 4;
  save2[266] = 3;
  save2[267] = 3;
  save2[268] = 4;
  save2[269] = 4;
  save2[270] = 4;
  save2[271] = 1;
  save2[272] = 1;
  save2[273] = 3;
  save2[274] = 3;
  save2[275] = 4;
  save2[276] = 1;
  save2[277] = 4;
  save2[278] = 1;
  save2[279] = 1;
  save2[280] = 3;
  save2[281] = 3;
  save2[282] = 1;
  save2[283] = 1;
  save2[284] = 1;
  save2[285] = 1;
  save2[286] = 1;
  save2[287] = 3;
  save2[288] = 3;
  save2[289] = 1;
  save2[290] = 1;
  save2[291] = 1;
  save2[292] = 1;
  save2[293] = 1;
  save2[294] = 3;
  save2[295] = 3;
  save2[296] = 4;
  save2[297] = 4;
  save2[298] = 1;
  save2[299] = 4;
  save2[300] = 1;
  save2[302] = 3;
  save2[303] = 1;
  save2[304] = 1;
  save2[305] = 4;
  save2[306] = 4;
  save2[307] = 1;
  save2[309] = 3;
  save2[311] = 1;
  save2[312] = 1;
  save2[313] = 4;
  save2[314] = 1;
  save2[316] = 3;
  save2[318] = 1;
  save2[319] = 1;
  save2[320] = 4;
  save2[326] = 1;
  
}

// saved patterns: move this outside the load function later
// space invader: size 76
var space_invader = Array();

for (i = 0; i < 76; i++){
  space_invader[i] = save2[i+119];

}


//pokeball:

var pokeball = Array();

for (i = 0; i < 48; i++) {
  pokeball[i] = save2[i + 14];
}


function load() {
  console.log("loading...");
  //dateToPrettyString(4, 10, 2014);
  //calculateDate(1);

  loadSample();
  generateDates(save2);

  // choose which file to load here
  boxColors = save2;

  for (i = 0; i < boxColors.length; i++){
      colorUpdate(i, boxColors);
      if (boxColors[i] != 0){
        console.log("filled " + i + " with color " + boxColors[i]);
      }
  }
}

/*
 * Generate dates corresponding to pattern, returns a string that can be emailed to the user.
 */
function generateDates(array){
  console.log("inside generates");

  var dates = "";

  // I'm not sure how many commits it takes to achieve each shade of green so we'll change the numbers here
  // when we find out for sure.
  // It's weird but I think the number of commits for each color is different for each user :S
  // Some ppl need 50 commits for dark green. That's gonna cause us problems...

  var num1 = 1; 
    // according to empirical data gathered by yours truly, it takes 4 commits to make it to the second shade of green
  var num2 = 4;
  var num3 = 8;
  var num4 = 12;
  
  // Loop to find the first colored box. This will allow users to start drawing their designs right away
  // instead of having to wait till august if they drew their figure too far to the right.
  var startingBlock = 0;
  for (i = 0; i < boxColors.length; i++) {
      if (array[i] > 0) {
	startingBlock = i;
	break;
      }
  }
  
  var startDayOfWeek = startingBlock % 7; // 0 = Sunday, 1 = Monday, ... 6 = Saturday
  var offset = presentDayOfWeek + startDayOfWeek;
  var today = 0;
  if (presentDayOfWeek == startDayOfWeek) {
    today = 7;
  }

  //console.log(calculateDate(355));
  var i = 0;
  for (var i = startingBlock; i < boxColors.length; i++) {
    //var dateString = calculateDate(i);
    switch (array[i]) {
      case 1:
	// Weird calculation, I know, was playing around with the dates, I'll get around to making this more clear.
	// Basically i-startingBlock tells us how far from the first block the current block is, and we add
	// the offset % 7 to retain consistency with the current day of the week. Subtract 7 to start in the current
	// week, if possible. today keeps track of whether today is the same day of the week as the first box to be
	// drawn. If this is the case, we jump to the next week (so today's commits don't get in the way).
        dates = dates + calculateDate(i-startingBlock + (offset) - 7 + today) + " - " + num1 + " commit" + "\n\n";
      break;
      case 2:
        dates = dates + calculateDate(i-startingBlock + (offset) - 7 + today) + " - " + num2 + " commits" + "\n\n";
      break;
      case 3:
        dates = dates + calculateDate(i-startingBlock + (offset) - 7 + today) + " - " + num3 + " commits" + "\n\n";
      break;
      case 4: 
        dates = dates + calculateDate(i-startingBlock + (offset) - 7 + today) + " - " + num4 + " commits" + "\n\n";
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
// INPUT //
///////////

var inputRow = 0; // between 0 and 6 inclusive
var inputColumn = 0; // between 0 and 52 inclusive

var boxNumber = 365;

//////////////////
// END OF INPUT //
//////////////////

//console.log("At position [" + inputRow + "][" + inputColumn + "] of the array, the date is:");



inputColumn++; // add 1 to offset incomplete column at the beginning

/* 
 * Calculates the date associated with the specific box id and returns thei
 * corresponding String.
 * Leap years occur on years that are divisile by 4 (with some exceptions
 * but those happend once every century or so so we'll ignore them for now).
 */
function calculateDate(number) {

  boxNumber = number;
  //console.log("Box #" + boxNumber + " corresponds to: ")

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
    outputTotal = (boxNumber + startingDate) % 365;

  }
  else {
    //outputTotal = (inputColumn * 7 + inputRow + startingDate) % 366;
    outputTotal = (boxNumber + startingDate) % 366;
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
      storage = storage + "January ";
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
