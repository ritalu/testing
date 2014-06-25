/*
 * Fills the grid with all dark boxes. This mode is reserved for
 * bosses. Inspired by Toby the one and only.
 */
function bossMode() {
  for (i = 0; i < boxColors.length; i++) {
    boxColors[i] = 4;
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
  

  boxColors = save2;

  for (i = 0; i < boxColors.length; i++){
      colorUpdate(i, boxColors);
      if (boxColors[i] != 0){
        //console.log("filled " + i + " with color " + boxColors[i]);
      }
  }

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