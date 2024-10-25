export const Pokedex: {[speciesid: string]: SpeciesData} = {
	generalkillpain: {
        num: -5016,
        name: "General Kill Pain",
        types: ["Dark", "Fighting"],
        baseStats: {hp: 75, atk: 120, def: 95, spa: 75, spd: 80, spe: 110},
        abilities: {0: "Tinted Lens", H: "Intimidate"},
        heightm: 2.3,
        weightkg: 85,
        color: "Brown",
        eggGroups: ["Undiscovered"],
        gen: 9,
    },
	drpoopyfart: {
        num: -5017,
        name: "Dr Poopy Fart",
        types: ["Dark", "Normal"],
        baseStats: {hp: 130, atk: 70, def: 110, spa: 50, spd: 70, spe: 40},
        abilities: {0: "Analytic", 1: "Iron Fist", H: "Thick Fat"},
        heightm: 1.75,
        weightkg: 110,
        color: "White",
        eggGroups: ["Undiscovered"],
        gen: 9,
    },
	poopotron8: {
        num: -5018,
        name: "Poopotron 8",
        types: ["Dark", "Steel"],
        baseStats: {hp: 120, atk: 110, def: 60, spa: 105, spd: 100, spe: 75},
        abilities: {0: "Download", 1: "Mega Launcher", H: "Lightning Rod"},
        heightm: 2,
        weightkg: 70,
        color: "Red",
        eggGroups: ["Undiscovered"],
        gen: 9,
    },
    loggy: {
        num: -5019,
        name: "Loggy",
        types: ["Grass"],
        baseStats: {hp: 130, atk: 120, def: 60, spa: 130, spd: 60, spe: 60},
        abilities: {0: "Friend Inside Me"},
        heightm: 2,
        weightkg: 200,
        color: "Brown",
        eggGroups: ["Undiscovered"],
        otherFormes: ["Loggy-FRIEND"],
		formeOrder: ["Loggy", "Loggy-FRIEND"],
        gen: 9,
    },
    loggyfriend: {
        num: -5019,
        name: "Loggy-FRIEND",
        baseSpecies: "Loggy",
        forme: "FRIEND",
        types: ["Grass"],
        baseStats: {hp: 130, atk: 150, def: 30, spa: 75, spd: 30, spe: 145},
        abilities: {0: "Friend Inside Me"},
        heightm: 4,
        weightkg: 400,
        color: "Brown",
        requiredAbility: "Friend Inside Me",    
        battleOnly: ["Loggy"],
        eggGroups: ["Undiscovered"],
        gen: 9,
    },
};
