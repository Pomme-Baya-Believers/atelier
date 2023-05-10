const React = 'react';

const EmptyProductCard = ({ mainData }) => {
  const addItem = (item) => {
    console.log(item.name)
    localStorage.setItem(JSON.stringify(item.name), JSON.stringify(item));
  };
  const deleteItems = () => {
    localStorage.clear()
  }

  let Storage;
  const readItems = () => {
    Storage = localStorage
  }
  const displayItems = () => {
    console.log(Storage)
    for ( let i in Storage) {
      console.log(JSON.parse(Storage[i]).default_price)
    }
  }

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