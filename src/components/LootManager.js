import React, { useContext, useState, useEffect } from "react";
import GameContext from "../context/game/gameContext";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LootManager = () => {
 const gameContext = useContext(GameContext);

 const { generateLoot, loot } = gameContext;

 const item = {
  name: "",
  perk1: "",
  perk2: "",
  perk3: "",
  enchantment: "",
 };

 const [attunedItems, setAttunedItems] = useState([{ ...item }]);

 useEffect(() => {
  const items = localStorage.getItem("attunedItems");

  if (items.length > 0) {
   setAttunedItems(JSON.parse(items));
  }
 }, []);
 const addAttunedItem = () => {
  let newItems = [...attunedItems, item];

  setAttunedItems(newItems);
 };

 const updateAttunedItem = (e, i) => {
  let newItems = [...attunedItems];

  console.log(e.target);
  newItems[i] = {
   ...newItems[i],
   [e.target.name]: e.target.value,
  };

  setAttunedItems(newItems);
 };

 console.log(attunedItems);

 const saveAttuned = () => {
  localStorage.setItem("attunedItems", JSON.stringify(attunedItems));
 };

 return (
  <div>
   <h2>Loot Manager</h2>
   <div className='grid-2'>
    <div className='card'>
     {" "}
     <button onClick={() => generateLoot()}>Generate Loot</button>
     <div className='grid-3'>
      {loot &&
       loot.map((l) => (
        <CopyToClipboard
         text={`${
          l.isCoin === "yes"
           ? l.coinDropped + " coin dropped"
           : l.isCoin === "no" &&
             l.name +
              " Instrument Type: " +
              l.instrumentType +
              " Rarity:" +
              l.rarity +
              " Attack Roll /AC Enchantment:" +
              l.enchanted +
              " Number of Perks:" +
              l.perkCount
         }`}>
         <div className='card bg-light'>
          <button>+</button>
          {l.isCoin === "yes" && <h3>{l.coinDropped + " coin dropped"}</h3>}
          {l.isCoin !== "yes" && (
           <div>
            <h3>{l.name}</h3>
            <ul>
             <li>Instrument Type:{l.instrumentType}</li>
             <li>Rarity: {l.rarity}</li>
             <li>Attack Roll / AC Enchantment: {l.enchanted}</li>
             <li>Number of Perks: {l.perkCount}</li>
             <li>Number on Loot Shop:{l.itemNumber}</li>
            </ul>
           </div>
          )}
         </div>
        </CopyToClipboard>
       ))}
     </div>
    </div>
    <div className='card'>
     <button className='btn btn-sm' onClick={() => addAttunedItem()}>
      Add Attuned Item
     </button>

     <button className='btn btn-sm' onClick={() => saveAttuned()}>
      Save Attuned Items
     </button>
     <div className='grid-3'>
      {attunedItems.length > 0 &&
       attunedItems.map((i) => (
        <div>
         {Object.keys(i).map((k) => (
          <input
           placeholder={k}
           type='text'
           onChange={(e) => updateAttunedItem(e, attunedItems.indexOf(i))}
           name={k}
           value={i[k]}
          />
         ))}
        </div>
       ))}
     </div>
    </div>
   </div>
  </div>
 );
};

export default LootManager;
