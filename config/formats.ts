// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
  ///////////////////////////////////////////////////////////////
  ///////////////////// Gen 9 Pet Mods //////////////////////////
  ///////////////////////////////////////////////////////////////
  {
	section: "Gen 9 Pet Mods",
	column: 1,
	// name: "gen9petmods",
  },
  {
	name: "[Gen 9] Auburn & Goldenrod OU",
	desc: `Pokemon Auburn & Goldenrod`,
	threads: [],
	mod: 'auburn',
	ruleset: ['Standard'],
	banlist: ['Uber', 'Arena Trap', 'Sand Veil', 'Quick Claw', 'Soul Dew', 'Baton Pass'],
  },
    {
	name: "[Gen 9] Pokemon A&G Doubles",
	desc: `Pokemon Auburn & Goldenrod`,
	threads: [],
	mod: 'auburn',
	ruleset: ['Standard Doubles'],
	banlist: ['Uber', 'Arena Trap', 'Sand Veil', 'Quick Claw', 'Soul Dew', 'Baton Pass'],
  },
];

