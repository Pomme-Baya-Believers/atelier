const React = 'react';

const MyOutfit = ({ mainData }) => {
  let storage;
  const addItem = (item) => {
    const entry = [item];
    storage = JSON.parse(localStorage.getItem('MyOutfit'));
    console.log(storage)
    if (!storage)  {
      localStorage.setItem('MyOutfit', JSON.stringify(entry));
      console.log("WAS empty")
    } else {
      const ids = storage.map((product) => {
        console.log(product.id);
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

  const deleteThisItem = (item) => {
    console.log(item.id);
    storage = JSON.parse(localStorage.getItem('MyOutfit'));
    console.log(storage)
    storage = storage.filter((product) => {
      return product.id != item.id
    });
    localStorage.setItem('MyOutfit', JSON.stringify(storage))
    console.log("FILTERED", storage)
  };

  const readItems = () => {
    storage = JSON.parse(localStorage.getItem('MyOutfit'));
    storage.forEach((product) => {
      console.log(product);
    });
    console.log(storage.length);
  };
  const displayItems = () => {

  };

  return (
    <>
    {/* <div className="relatedCard" onClick={() => addItem(mainData)}>Click Here to Add Item to Your Outfit</div> */}
    <div className="relatedCard" onClick={() => deleteThisItem(mainData)}>Delete THIS item</div>
    {/* <div className="relatedCard" onClick={() => deleteItems(mainData)}>Delete All Items</div> */}
    {/* <div className="relatedCard" onClick={() => readItems(mainData)}>ReadItems</div> */}
    {/* <div className="relatedCard" onClick={() => displayItems(mainData)}>displayItems</div> */}
    </>

  );
};

export default MyOutfit;