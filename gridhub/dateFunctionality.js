/*
 * Generate dates corresponding to pattern, returns a string that can be emailed to the user.
 */
function generateDateString(array){
  console.log("inside generateDateString");

  var dates = "";

  // I'm not sure how many commits it takes to achieve each shade of green so we'll change the numbers here
  // when we find out for sure.
  // It's weird but I think the number of commits for each color is different for each user :S
  // Some ppl need 50 commits for dark green. That's gonna cause us problems...
  // oh whaat that is really odd. I'll google to see if anyone tried to find a pattern
  // Update:
  // How it works is your whole commit history adjusts based on your largest contribution.
  // So if your max # of commits ever was 50, then the darkest green appears only for 50 commits.
  // There are different levels for this, we gotta investigate. So far I know there's: 8, 12, ..., 50, ..., 100
  // We gotta be careful cuz if I commit 50 times tomorrow, basically all my history will become light green.
  // This is problematic for us, but not the end of the world. If ppl stick to the formula and don't commit
  // a lot more than they have to, we good.

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
	console.log("startingBlock chosen");
	break;
      }
      
      /*
       * If we reach this point, the grid is empty.
       */
      if (i == boxColors.length-1) {
	console.log("empty grid");
	return "The grid is empty, go draw something!";
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

/*
 * Converts the given day, month, and year
 * numerical values into an easy-to-read date.
 */
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