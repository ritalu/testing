/*
 * keep as a 1D array, 2D array isn't necessary.
 * boxColors contains the current color for each box of the grid.
 */
var boxColors = new Array();


// sample grid to load
var save2 = new Array;
var save1 = new Array;


/*
 * Generates the HTML code which displays the grid.
 * <svg> tag allows us to draw the rectangles.
 */
function generateGridTable()
{
    // String containing all the HTML to be displayed.
    var ret = "<svg id='calendar-graph' height='110' width='721'><g transform='translate(20, 20)'>";
    
    /*
     * Create a <g> tag for each column in the grid, and a <rect> tag for
     * each box in the grid.
     */
    var idNum = 0;
    for(var i = 0; i <= 650 ; i += 13)
    {
        ret += "<g transform='translate(" + i + ", 0)'>";
        
	for(var j = 0; j <= 78; j += 13)
        {
	    ret += "<rect id='" + idNum + "' onclick='colorBoxOnClick(" + idNum + ")' class='day' width='11' height='11' y='" + j + "' style='fill: rgb(238, 238, 238);'></rect>";
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
//    initializeSaves();
}

/*
 * Updates the color of the box with the given id. Called when
 * a user clicks on a box.
 */
function colorBoxOnClick(id)
{
    console.log(id);
    // Check the current color and update to the next color.
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
 * Opens up an email dialog so the user can send themselves an
 * email with the commit schedule. Not ideal - temporary solution.
 */
function sendMail() {
    var link = "mailto:Your email here."
             + "?cc="
             + "&subject=" + escape("Commit Schedule")
             + "&body=" + escape(generateDateString(boxColors));

    window.location.href = link;
}

/* 
 * Clears the boxColors array, resetting the color
 * of each box to 0 (empty box).
 */
function clearGrid() {
  for (i = 0; i < boxColors.length; i++) {
    boxColors[i] = 0;
    colorUpdate(i, boxColors);
  }
}

/*
 * Loads the saved design onto the grid
 */
function load() {
  console.log("loading...");
  //dateToPrettyString(4, 10, 2014);
  //calculateDate(1);

  //loadSample();
  generateDateString(save1);

  // choose which file to load here
  boxColors = save1;

  for (i = 0; i < boxColors.length; i++){
    colorUpdate(i, boxColors);
    if (boxColors[i] != 0){
      console.log("filled " + i + " with color " + boxColors[i]);
    }
  }
}