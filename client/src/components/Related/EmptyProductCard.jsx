const React = 'react';
let storage;

const EmptyProductCard = ({ mainData }) => {
  const addItem = (item) => {
    const entry = [item];
    storage = JSON.parse(localStorage.getItem('MyOutfit'));
    if (storage === null)  {
      localStorage.setItem('MyOutfit', JSON.stringify(entry));
      console.log("WAS empty")
    } else {
      const ids = storage.map((product) => {
        return product.id;
      });
      if (!ids.includes(item.id)) {
        storage.push(item);
        localStorage.setItem('MyOutfit', JSON.stringify(storage));
      }
    }
  };
  const deleteItems = () => {
    localStorage.clear();
  };

  const readItems = () => {
    storage = JSON.parse(localStorage.getItem('MyOutfit'));
    storage.forEach((product) => {
      console.log(product)
    });
    console.log(storage.length)
  };
  const displayItems = () => {

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
