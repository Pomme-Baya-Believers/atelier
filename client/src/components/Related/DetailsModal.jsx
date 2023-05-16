import React from 'react';

// const {useState, useEffect} = React;

const DetailsModal = ({
  showModal, closeModal, data, mainData,
}) => {
  let hash = {};
  if (data && mainData && mainData.features) {
    const mainFeatures = mainData.features;
    const { features } = data;
    features.forEach((e) => {
      if (!hash[e.feature]) {
        hash[e.feature] = [e.value, ''];
      }
    });
    mainFeatures.forEach((e) => {
      if (!hash[e.feature]) {
        hash[e.feature] = ['', e.value];
      } else if (hash[e.feature]) {
        hash[e.feature][1] = e.value;
      }
    });
  }
  hash = Object.entries(hash);
  // eslint-disable-next-line arrow-body-style
  const entries = hash.map((e) => {
    return (
        <tr key={e[0]}>
           <td>{e[1][0]}</td>
           <td>{e[0]}</td>
           <td>{e[1][1]}</td>
        </tr>
    );
  });

  const detailsBox = showModal ? (
  <div id="RelatedModalBackdrop" >
    <div id="RelatedClearBackrop" onClick={closeModal}></div>
    <div id="RelatedModalBox">
      {/* <div id="closeModal" onClick={closeModal} >close</div> */}
    <table>
      <thead>
        <tr>
          <th>{data.name}</th>
          <th>Characteristic</th>
          <th>{mainData.name}</th>
        </tr>
      </thead>
      <tbody>
        {entries}
      </tbody>
    </table>
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
