function generateGrid() {
  var grid = document.createElement("svg");
  grid.id = "calendar-graph";
//  grid.width = "721";
  grid.setAttribute("width", "721");
//  grid.height = "110";
  grid.setAttribute("height", "110");
  
  document.getElementById("gridBody").appendChild(grid);
  
  var frame = document.createElement("g");
  frame.id = "gridFrame";
//  frame.transform = "translate(20, 20)";
  frame.setAttribute("transform", "translate(20, 20)");
  
  for(var i = 0; i <= 650; i += 13)
  {
    var col = document.createElement("g");
//    col.transform = "translate(" + i + ", 0)";
    col.setAttribute("transform", "translate(" + i + ", 0)");

    
    for(var j = 0; j <= 78; j += 13)
    {
      var box = document.createElement("rect");
//      box.class = "day";
      box.setAttribute("class", "day");
      
      box.style = "fill: rgb(238, 238, 238);";
      
//      box.y = "26";
      box.setAttribute("y", j);
//      box.height = "11";
      box.setAttribute("height", "11");
//      box.width = "11";
      box.setAttribute("width", "11");
      

      col.appendChild(box);
    }
    frame.appendChild(col);
  }
  
  grid.appendChild(frame);
}

function generateGridTest() {
  var test = document.createElement("a");
  test.setAttribute("href", "www.google.com");
}