const React = 'react';
let storage;

const EmptyProductCard = ({ mainData }) => {
  const addItem = (item) => {
    const { name } = item;
    const entry = {[item.name]: item };
    console.log("NAME", name);
    storage = { ...localStorage.MyOutfit };
    // if (Storage === undefined) {
    //   Storage.MyOutfit[name] = item;
    //   console.log(Storage.MyOutfit)
    //   localStorage.setItem('MyOutfit', JSON.stringify(Storage));
    // } else
    console.log(storage)
      console.log("NO STORAGE ")
      localStorage.setItem('MyOutfit', JSON.stringify(entry));
  };
  const deleteItems = () => {
    localStorage.clear()
  };

  const readItems = () => {
    storage = localStorage.MyOutfit
    console.log(storage)
    storage = JSON.parse(storage)
  };
  const displayItems = () => {
    console.log(storage['YEasy 350'].name)
  };

  return (
    <>
    <div className="relatedCard" onClick={() => addItem(mainData)}>Click Here to Add Item to Your Outfit</div>
    <div className="relatedCard" onClick={() => deleteItems(mainData)}>Delete All Items</div>
    <div className="relatedCard" onClick={() => readItems(mainData)}>ReadItems</div>
    <div className="relatedCard" onClick={() => displayItems(mainData)}>displayItems</div>
    </>

  );
};

export default EmptyProductCard;