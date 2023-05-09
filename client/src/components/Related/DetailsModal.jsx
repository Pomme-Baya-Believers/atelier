import React from 'react'

const {useState} = React;

const DetailsModal = ({
  productID, thisID, showModal,closeModal,
}) => {
  console.log('AT MODAL', thisID, productID);
  // const [id, setID] = useState(thisID);

  const detailsBox = showModal ? (
  <div id="RelatedDetailsModal">
    <div id="RelatedModalBox">
      <div id="closeModal" onClick={closeModal} >close</div>
    mainID{productID}<br/>
    THIS ID{thisID}
    </div>
  </div>) : '';

  // const detailsBox = ''

  return (
    <>
   {detailsBox}
    </>
  );
};

export default DetailsModal;
