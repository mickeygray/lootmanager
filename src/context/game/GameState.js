import React, { useReducer, useContext } from "react";
import GameContext from "./gameContext";
import GameReducer from "./gameReducer";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";

import { GENERATE_LOOT } from "../types";

const GameState = (props) => {
 const initialState = {
  loot: null,
 };

 const [state, dispatch] = useReducer(GameReducer, initialState);

 const generateLoot = () => {
  const itemCountRoll = new DiceRoll("1d100").total;

  let itemsRolled;

  if (itemCountRoll < 51) {
   itemsRolled = 1;
  } else if (itemCountRoll > 51 && itemCountRoll < 75) {
   itemsRolled = 2;
  } else if (itemCountRoll > 75 && itemCountRoll < 88) {
   itemsRolled = 3;
  } else if (itemCountRoll > 88 && itemCountRoll < 100) {
   itemsRolled = 4;
  } else {
   itemsRolled = 5;
  }

  const lootRes = new DiceRoll(`${itemsRolled}d1000`).output;

  const arraystart = lootRes.indexOf("[") + 1;
  const arrayend = lootRes.indexOf("]") - 1;

  const lootArrayString = lootRes.slice(arraystart, arrayend);

  const lootNumberArray = [];
  const lootStringArray = lootArrayString.split(",");
  for (var i = 0; i < lootStringArray.length; i++)
   lootNumberArray.push(parseInt(lootStringArray[i]));

  const itemsArray = [
   { maxVal: 4, minVal: 1, name: "Club" },
   { maxVal: 25, minVal: 5, name: "Dagger" },
   { maxVal: 30, minVal: 26, name: "GreatClub" },
   { maxVal: 44, minVal: 31, name: "HandAxe" },
   { maxVal: 60, minVal: 45, name: "Javelin" },
   { maxVal: 85, minVal: 61, name: "Light Hammer" },
   { maxVal: 100, minVal: 86, name: "War Hammer" },
   { maxVal: 115, minVal: 101, name: "Mace" },
   { maxVal: 130, minVal: 116, name: "QuarterStaff" },
   { maxVal: 145, minVal: 131, name: "Sickle" },
   { maxVal: 160, minVal: 146, name: "Spear" },
   { maxVal: 175, minVal: 161, name: "Handwraps and Gauntlets" },
   { maxVal: 190, minVal: 176, name: "Crossbow Light" },
   { maxVal: 205, minVal: 191, name: "Crossbow Heavy" },
   { maxVal: 220, minVal: 206, name: "Short Bow" },
   { maxVal: 235, minVal: 221, name: "Long Bow" },
   { maxVal: 250, minVal: 236, name: "Sling" },
   { maxVal: 265, minVal: 251, name: "Amulet" },
   { maxVal: 280, minVal: 266, name: "Ring" },
   { maxVal: 295, minVal: 281, name: "Belt" },
   { maxVal: 310, minVal: 296, name: "Boots" },
   { maxVal: 325, minVal: 311, name: "Bracers" },
   { maxVal: 340, minVal: 326, name: "Charms" },
   { maxVal: 355, minVal: 341, name: "Light Chestwear" },
   { maxVal: 370, minVal: 356, name: "Medium Chestwear" },
   { maxVal: 385, minVal: 371, name: "Heavy Chestwear" },
   { maxVal: 400, minVal: 386, name: "Light Legwear" },
   { maxVal: 415, minVal: 401, name: "Medium Legwear" },
   { maxVal: 430, minVal: 416, name: "Heavy Legwear" },
   { maxVal: 445, minVal: 431, name: "Glasses and Goggles" },
   { maxVal: 460, minVal: 446, name: "Gloves" },
   { maxVal: 475, minVal: 461, name: "Instruments" },
   { maxVal: 576, minVal: 476, name: "Mundane Equipment" },
   { maxVal: 700, minVal: 577, name: "Potions" },
   { maxVal: 715, minVal: 701, name: "Spellbook" },
   { maxVal: 730, minVal: 716, name: "Runes" },
   { maxVal: 745, minVal: 731, name: "Scrolls" },
   { maxVal: 760, minVal: 746, name: "Trinkets" },
   { maxVal: 780, minVal: 765, name: "Wands" },
   { maxVal: 795, minVal: 781, name: "Short Sword" },
   { maxVal: 810, minVal: 796, name: "Long Sword" },
   { maxVal: 825, minVal: 811, name: "Scimitar" },
   { maxVal: 840, minVal: 826, name: "Battle Axe" },
   { maxVal: 855, minVal: 841, name: "Fire Arm" },
   { maxVal: 870, minVal: 856, name: "Equipable Ammo" },
   { maxVal: 885, minVal: 871, name: "Common Jewel Bag 50g" },
   { maxVal: 900, minVal: 886, name: "Rare Jewel Bag 100g" },
   { maxVal: 915, minVal: 901, name: "Very Rare Stone 200g" },
   { maxVal: 930, minVal: 916, name: "Hook and Chain" },
   { maxVal: 945, minVal: 931, name: "Boomerang" },
   { maxVal: 960, minVal: 946, name: "Glaive" },
   { maxVal: 975, minVal: 961, name: "Halberd" },
   { maxVal: 990, minVal: 976, name: "Lance" },
   { maxVal: 1000, minVal: 991, name: "Legendary Item" },
  ];

  const mundaneItemsArray = [
   { maxVal: 4, minVal: 1, name: "Air bladder 15 ep 20 cn" },
   { maxVal: 25, minVal: 5, name: "Backpack,leather 2 ep 20 cn" },
   { maxVal: 30, minVal: 26, name: "Bag,leather 8 cp 5 cn" },
   {
    maxVal: 44,
    minVal: 31,
    name: "Barrel,wooden 50 gal 1 ep 200 or 2400 cn 50 gal or 150 lb",
   },
   {
    maxVal: 60,
    minVal: 45,
    name: "Barrel,metal 50 gal 3 ep 500 or 2700 cn 50 gal or 150 1b",
   },
   { maxVal: 85, minVal: 61, name: "Bedroll 10 sp 80 cn" },
   { maxVal: 100, minVal: 86, name: "Bell 1-4 ep+ 10-100 cn" },
   { maxVal: 115, minVal: 101, name: "Bird cage 2-5 ep 50-100 cn" },
   { maxVal: 130, minVal: 116, name: "Blanket 5-8 cp 30 cn" },
   { maxVal: 145, minVal: 131, name: "Book,blank,100 pages 3 sp 80 cn " },
   { maxVal: 160, minVal: 146, name: "papyrus 160 ep 200 cn" },
   { maxVal: 175, minVal: 161, name: "Bottle or flask 3 sp 20 cn" },
   { maxVal: 190, minVal: 176, name: "Box,iron,large 15 ep 750 cn" },
   { maxVal: 205, minVal: 191, name: "Box,iron,small 15 ep 750 cn" },
   { maxVal: 220, minVal: 206, name: "Bucket 3 sp 40 cnv" },
   { maxVal: 235, minVal: 221, name: "Candle,tallow 1 bp 5 cn" },
   { maxVal: 250, minVal: 236, name: "Candle,wax 1 cp 5 cn" },
   { maxVal: 265, minVal: 251, name: "Candle snuffer 6 cp 15 cn" },
   { maxVal: 280, minVal: 266, name: "Cane,walking 2-5 ep 60 cn" },
   { maxVal: 295, minVal: 281, name: "Case,bone,map or scroll 5 ep 50 cn" },
   { maxVal: 310, minVal: 296, name: "Cask 5 cp 10 or 100 cn" },
   { maxVal: 325, minVal: 311, name: "Chain,iron,1',fine,small 2 ep 5 cn" },
   { maxVal: 340, minVal: 326, name: "Chain,iron,1',heavy,large 5 ep 5 cn" },
   { maxVal: 355, minVal: 341, name: "Chalk,powder 1 bp/oz 2 cn/oz" },
   { maxVal: 370, minVal: 356, name: "Charcoal,10 lb bag of 2 ep 100 cn" },
   { maxVal: 385, minVal: 371, name: "Chest,wooden,large 16 sp 500 cn" },
   { maxVal: 400, minVal: 386, name: "Chest,wooden,small 8 sp 250 cn" },
   { maxVal: 415, minVal: 401, name: "Chisel 1 ep 30 cn" },
   { maxVal: 430, minVal: 416, name: "Coal, 10 lb bag of 10 ep 100 cn" },
   { maxVal: 445, minVal: 431, name: "Cologne/perfume,1 oz 1 ep+ 10 cn" },
   { maxVal: 460, minVal: 446, name: "Comb 1 sp 5 cn" },
   { maxVal: 475, minVal: 461, name: "Cord,10' 1 sp 2 cn" },
   { maxVal: 490, minVal: 476, name: "Crowbar 6 sp 60 cn" },
   { maxVal: 505, minVal: 491, name: "Drill,iron 5 ep 50 cn" },
   { maxVal: 520, minVal: 506, name: "Fishhook 1 bp 1 cn" },
   { maxVal: 535, minVal: 521, name: "Fishing net 2 ep/sf 10 cn/sf" },
   { maxVal: 550, minVal: 536, name: "Glass bottle 10 ep 30 cn" },
   { maxVal: 565, minVal: 551, name: "Grindstone 5 cp 10-40 cn" },
   { maxVal: 590, minVal: 576, name: "Hacksaw 2 ep 20 cn" },
   { maxVal: 605, minVal: 591, name: "Hammock 2 ep 20 cn" },
   { maxVal: 620, minVal: 606, name: "Hourglass 25 ep+ 5-30 cn" },
   { maxVal: 635, minVal: 621, name: "Ink,2 oz pot of 1 ep 10 cn" },
   { maxVal: 650, minVal: 636, name: "Jar,glass 5 ep 40 cn" },
   { maxVal: 665, minVal: 651, name: "Jug,clay 15 bp 50 cn" },
   { maxVal: 670, minVal: 666, name: "Hairbrush 7 cp 5 cn" },
   { maxVal: 685, minVal: 671, name: "Lamp,oil 2 ep 10 cn 8 hours" },
   { maxVal: 700, minVal: 686, name: "Pot,iron cooking 3 cp 50 cn" },
   { maxVal: 715, minVal: 701, name: "Magnifying glass 100 ep+ 5-20 cn" },
   {
    maxVal: 730,
    minVal: 716,
    name: "Manacles,pair of,& key 5 ep 20-100 cn",
   },
   { maxVal: 745, minVal: 731, name: "Mirror,small,silver 20 ep 20 cn" },
   { maxVal: 760, minVal: 746, name: "Nails,iron,100 1 sp 10 cn" },
   { maxVal: 780, minVal: 765, name: "Paint brush,fine 1 ep 10 cn" },
   { maxVal: 795, minVal: 781, name: "Pen,quill 8 bp 2 cn" },
   { maxVal: 810, minVal: 796, name: "Pick axe,mining 6 ep 50 cn" },
   { maxVal: 825, minVal: 811, name: "Pipe,smoking 1 cp+ 5 cn" },
   {
    maxVal: 840,
    minVal: 826,
    name: "Pipeweed/tobacco, 8 ozpouch of 1 ep+ 5 cn",
   },
   { maxVal: 855, minVal: 841, name: "Pliers 1 ep 25 cn" },
   { maxVal: 870, minVal: 856, name: "Pouch,belt,small 8 sp 5 cn" },
   { maxVal: 885, minVal: 871, name: "Pulley 25 ep 5 cn" },
   { maxVal: 900, minVal: 886, name: "Rope,50' superior 10 cp 100 cn" },
   { maxVal: 915, minVal: 901, name: "Spyglass 100 gp 20 cn" },
   {
    maxVal: 930,
    minVal: 916,
    name: "Tent,adequate:large 75 ep 750 cn 80 lsp",
   },
   { maxVal: 945, minVal: 931, name: "Tent,poor:large 30 ep 600 cn 40 lsp" },
   { maxVal: 960, minVal: 946, name: "Thieves' picks & tools 30 ep 50 cn" },
   { maxVal: 975, minVal: 961, name: "Whetstone 1 ep 5-20 cn" },
   { maxVal: 990, minVal: 976, name: "Wig 2 ep 5 cn" },
   { maxVal: 1000, minVal: 991, name: "Tinder Box with flint &" },
  ];

  const instrumentArr = [
   { maxVal: 4, minVal: 1, name: "Bagpipes" },
   { maxVal: 25, minVal: 5, name: "Drum" },
   { maxVal: 30, minVal: 26, name: "Dulcimer" },
   { maxVal: 44, minVal: 31, name: "Erhu" },
   { maxVal: 60, minVal: 45, name: "Flute" },
   { maxVal: 85, minVal: 61, name: "Glaur" },
   { maxVal: 100, minVal: 86, name: "Harp" },
   { maxVal: 115, minVal: 101, name: "Horn" },
   { maxVal: 130, minVal: 116, name: "Hulusi" },
   { maxVal: 145, minVal: 131, name: "Hurdy-Gurdy" },
   { maxVal: 160, minVal: 146, name: "Lute" },
   { maxVal: 175, minVal: 161, name: "Long Horn" },
   { maxVal: 190, minVal: 176, name: "Lyre" },
   { maxVal: 205, minVal: 191, name: "Maracas" },
   { maxVal: 220, minVal: 206, name: "Pan Flute" },
   { maxVal: 235, minVal: 221, name: "Sackbut" },
   { maxVal: 250, minVal: 236, name: "Shawm" },
   { maxVal: 265, minVal: 251, name: "Songhorn" },
   { maxVal: 280, minVal: 266, name: "Tambourine/tantan" },
   { maxVal: 295, minVal: 281, name: "Thelarr/whistlecane" },
   { maxVal: 310, minVal: 296, name: "Tocken" },
   { maxVal: 325, minVal: 311, name: "Udu" },
   { maxVal: 340, minVal: 326, name: "Viol" },
   { maxVal: 355, minVal: 341, name: "War Gong" },
   { maxVal: 370, minVal: 356, name: "Whistle Stick" },
   { maxVal: 385, minVal: 371, name: "Yarting" },
   { maxVal: 400, minVal: 386, name: "Zulkoon" },
   { maxVal: 415, minVal: 401, name: "Kazoo" },
   { maxVal: 430, minVal: 416, name: "Tamborine" },
   { maxVal: 445, minVal: 431, name: "Trumpet" },
   { maxVal: 460, minVal: 446, name: "Keytar" },
   { maxVal: 475, minVal: 461, name: "Symbols" },
   { maxVal: 480, minVal: 476, name: "Song book: wind instruments" },
   { maxVal: 485, minVal: 481, name: "Song book: brass instruments" },
   { maxVal: 490, minVal: 486, name: "Song book: precussion instruments" },
   { maxVal: 495, minVal: 491, name: "Song book: string instruments" },
   { maxVal: 500, minVal: 496, name: "Master Song Book" },
  ];
  const itemArr = [];

  for (var n = 0; n < lootNumberArray.length; n++) {
   const item = itemsArray.filter(
    (f) => f.minVal <= lootNumberArray[n] && f.maxVal >= lootNumberArray[n]
   );

   console.log(item[0].name);
   itemArr.push(item[0].name);
  }
  console.log(itemArr);

  const weightedItemArr = itemArr.map((i) => {
   const itemRarityRoll = parseInt(new DiceRoll("1d100").total);

   let rarity;

   if (itemRarityRoll < 51) {
    rarity = "mundane";
   } else if (itemRarityRoll > 51 && itemRarityRoll < 75) {
    rarity = "common";
   } else if (itemRarityRoll > 75 && itemRarityRoll < 88) {
    rarity = "rare";
   } else if (itemRarityRoll > 88 && itemRarityRoll < 100) {
    rarity = "very rare";
   } else if (itemRarityRoll == 100) {
    rarity = "legendary";
   }

   let enchanted = "+0";

   if (rarity === "common") {
    const itemEnchantmentRoll = parseInt(new DiceRoll("1d10").total);

    if (itemEnchantmentRoll > 6) {
     enchanted = "+1";
    }
   } else if (rarity === "rare") {
    const itemEnchantmentRoll = parseInt(new DiceRoll("1d10").total);

    if (itemEnchantmentRoll > 8) {
     enchanted = "+2";
    } else {
     enchanted = "+1";
    }
   } else if (rarity === "very rare") {
    const itemEnchantmentRoll = parseInt(new DiceRoll("1d10").total);

    if (itemEnchantmentRoll === 10) {
     enchanted = "+3";
    } else {
     enchanted = "+2";
    }
   } else if (rarity === "legendary") {
    enchanted = "+3";
   }

   let perkCount = 0;

   if (rarity === "common") {
    const itemEnchantmentRoll = parseInt(new DiceRoll("1d10").total);

    if (itemEnchantmentRoll > 6) {
     perkCount = "1";
    }
   } else if (rarity === "rare") {
    const itemEnchantmentRoll = parseInt(new DiceRoll("1d10").total);

    if (itemEnchantmentRoll > 8) {
     perkCount = "2";
    } else {
     perkCount = "1";
    }
   } else if (rarity === "very rare") {
    const itemEnchantmentRoll = parseInt(new DiceRoll("1d10").total);

    if (itemEnchantmentRoll === 10) {
     perkCount = "3";
    } else {
     perkCount = "2";
    }
   } else if (rarity === "legendary") {
    perkCount = "3";
   }

   let mundaneItem = null;

   console.log(i);

   if (i === "Mundane Equipment") {
    const itemScore = parseInt(new DiceRoll(`1d1000`).total);
    mundaneItem = mundaneItemsArray.filter(
     (f) => f.minVal <= itemScore && f.maxVal >= itemScore
    );
   }

   let instrument = null;

   if (i === "Instruments") {
    const itemScore = parseInt(new DiceRoll(`1d500`).total);
    instrument = instrumentArr.filter(
     (f) => f.minVal <= itemScore && f.maxVal >= itemScore
    );
   }

   const coinRoll = parseInt(new DiceRoll("1d100").total);

   let coinDropped;

   console.log(coinRoll);

   if (coinRoll > 0 && coinRoll < 31) {
    coinDropped = `${parseInt(new DiceRoll("5d6").total)} bp`;
   } else if (coinRoll >= 31 && coinRoll <= 60) {
    coinDropped = `${parseInt(new DiceRoll("4d6").total)} sp`;
   } else if (coinRoll >= 60 && coinRoll <= 90) {
    coinDropped = `${parseInt(new DiceRoll("3d6").total)} ep`;
   } else if (coinRoll >= 90 && coinRoll <= 99) {
    coinDropped = `${parseInt(new DiceRoll("3d6").total)} gp`;
   } else if (coinRoll === 100) {
    coinDropped = `${parseInt(new DiceRoll("5d6").total)} pp`;
   }

   const rewardTypeRoll = parseInt(new DiceRoll("1d20").total);

   const obj = {
    name: mundaneItem ? mundaneItem[0].name : i,
    instrumentType: instrument ? instrument[0].name : "",
    rarity: mundaneItem ? "" : rarity,
    enchanted: mundaneItem ? "" : enchanted,
    perkCount: mundaneItem ? "" : perkCount,
    coinDropped,
    isCoin: rewardTypeRoll >= 12 ? "no" : "yes",
    itemNumber: parseInt(new DiceRoll("1d20").total),
   };

   return obj;
  });

  dispatch({
   type: GENERATE_LOOT,
   payload: weightedItemArr,
  });
 };

 return (
  <GameContext.Provider
   value={{
    loot: state.loot,
    generateLoot,
   }}>
   {props.children}
  </GameContext.Provider>
 );
};

export default GameState;
