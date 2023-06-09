/**
 * @jest-environment jsdom
 */
import React, { useState as useStateMock } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// import RelatedWidget from './RelatedWidget.jsx';
import EmptyCard from './EmptyCard.jsx';
import MyOutfitCard from './MyOutfitCard.jsx';
import DetailsModal from './DetailsModal.jsx';
import PriceStrike from '../PriceStrike.jsx';
import RelatedProductCard from './RelatedProductCard.jsx';
import Carousel from './Carousel.jsx';
import AddProductCard from './AddProductCard.jsx';

const mainData = {id: 40348,
  campus: "hr-rfp",
  name: "Heir Force Ones",
  slogan: "A sneaker dynasty",
  description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
  category: "Kicks",
  default_price: "99.00",
  created_at: "2021-08-13T14:38:44.509Z",
  updated_at: "2021-08-13T14:38:44.509Z",
  features: [{"feature":"Sole","value":"Rubber"},{"feature":"Material","value":"FullControlSkin"},{"feature":"Mid-Sole","value":"ControlSupport Arch Bridge"},{"feature":"Stitching","value":"Double Stitch"}]
};

const selectedStyle = {
  style_id: 240545,
  name: "White",
  original_price: "59.00",
  sale_price: "40.00",
  'default?': false,
  photos: [{"thumbnail_url":"https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1500699889581-a7f97ec155d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1500699889581-a7f97ec155d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1498200163530-bdb7c50ec863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1498200163530-bdb7c50ec863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1558118070-09ba9a9efb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1558118070-09ba9a9efb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1531889947080-bc5693ae9fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1531889947080-bc5693ae9fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1529108750117-bcbad8bd25dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1529108750117-bcbad8bd25dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=662&q=80"}],
  skus: {"1395115":{"quantity":14,"size":"7"},"1395116":{"quantity":25,"size":"7.5"},"1395117":{"quantity":9,"size":"8"},"1395118":{"quantity":2,"size":"8.5"},"1395119":{"quantity":18,"size":"9"},"1395120":{"quantity":12,"size":"9.5"},"1395121":{"quantity":10,"size":"10"},"1395122":{"quantity":18,"size":"10.5"},"1395123":{"quantity":11,"size":"11"},"1395124":{"quantity":35,"size":"11.5"},"1395125":{"quantity":25,"size":"12"}}
};

const styles = {
    data: {
         results: [
        {
            "style_id": 240525,
            "name": "White & White",
            "original_price": "99.00",
            "sale_price": null,
            "default?": true,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                }
            ],
            "skus": {
                "1394895": {
                    "quantity": 14,
                    "size": "7",
                    "sku_id": "1394895"
                },
                "1394896": {
                    "quantity": 25,
                    "size": "7.5",
                    "sku_id": "1394896"
                },
                "1394897": {
                    "quantity": 9,
                    "size": "8",
                    "sku_id": "1394897"
                },
                "1394898": {
                    "quantity": 2,
                    "size": "8.5",
                    "sku_id": "1394898"
                },
                "1394899": {
                    "quantity": 18,
                    "size": "9",
                    "sku_id": "1394899"
                },
                "1394900": {
                    "quantity": 12,
                    "size": "9.5",
                    "sku_id": "1394900"
                },
                "1394901": {
                    "quantity": 10,
                    "size": "10",
                    "sku_id": "1394901"
                },
                "1394902": {
                    "quantity": 18,
                    "size": "10.5",
                    "sku_id": "1394902"
                },
                "1394903": {
                    "quantity": 11,
                    "size": "11",
                    "sku_id": "1394903"
                },
                "1394904": {
                    "quantity": 35,
                    "size": "11.5",
                    "sku_id": "1394904"
                },
                "1394905": {
                    "quantity": 25,
                    "size": "12",
                    "sku_id": "1394905"
                }
            }
        },
        {
            "style_id": 240526,
            "name": "White & Red",
            "original_price": "99.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                }
            ],
            "skus": {
                "1394906": {
                    "quantity": 14,
                    "size": "7"
                },
                "1394907": {
                    "quantity": 25,
                    "size": "7.5"
                },
                "1394908": {
                    "quantity": 9,
                    "size": "8"
                },
                "1394909": {
                    "quantity": 2,
                    "size": "8.5"
                },
                "1394910": {
                    "quantity": 18,
                    "size": "9"
                },
                "1394911": {
                    "quantity": 12,
                    "size": "9.5"
                },
                "1394912": {
                    "quantity": 10,
                    "size": "10"
                },
                "1394913": {
                    "quantity": 18,
                    "size": "10.5"
                },
                "1394914": {
                    "quantity": 11,
                    "size": "11"
                },
                "1394915": {
                    "quantity": 35,
                    "size": "11.5"
                },
                "1394916": {
                    "quantity": 25,
                    "size": "12"
                }
            }
        },
        {
            "style_id": 240527,
            "name": "White & Black",
            "original_price": "99.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2764&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
                }
            ],
            "skus": {
                "1394917": {
                    "quantity": 14,
                    "size": "7"
                },
                "1394918": {
                    "quantity": 25,
                    "size": "7.5"
                },
                "1394919": {
                    "quantity": 9,
                    "size": "8"
                },
                "1394920": {
                    "quantity": 2,
                    "size": "8.5"
                },
                "1394921": {
                    "quantity": 18,
                    "size": "9"
                },
                "1394922": {
                    "quantity": 12,
                    "size": "9.5"
                },
                "1394923": {
                    "quantity": 10,
                    "size": "10"
                },
                "1394924": {
                    "quantity": 18,
                    "size": "10.5"
                },
                "1394925": {
                    "quantity": 11,
                    "size": "11"
                },
                "1394926": {
                    "quantity": 35,
                    "size": "11.5"
                },
                "1394927": {
                    "quantity": 25,
                    "size": "12"
                }
            }
        },
        {
            "style_id": 240528,
            "name": "White & Blue",
            "original_price": "99.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                }
            ],
            "skus": {
                "1394928": {
                    "quantity": 14,
                    "size": "7"
                },
                "1394929": {
                    "quantity": 25,
                    "size": "7.5"
                },
                "1394930": {
                    "quantity": 9,
                    "size": "8"
                },
                "1394931": {
                    "quantity": 2,
                    "size": "8.5"
                },
                "1394932": {
                    "quantity": 18,
                    "size": "9"
                },
                "1394933": {
                    "quantity": 12,
                    "size": "9.5"
                },
                "1394934": {
                    "quantity": 10,
                    "size": "10"
                },
                "1394935": {
                    "quantity": 18,
                    "size": "10.5"
                },
                "1394936": {
                    "quantity": 11,
                    "size": "11"
                },
                "1394937": {
                    "quantity": 35,
                    "size": "11.5"
                },
                "1394938": {
                    "quantity": 25,
                    "size": "12"
                }
            }
        }
      ]}

};

const relatedList = [40349, 40349, 40351, 40352, 40344, 40346];

describe('AddProductCard Renders', () => {
  it('renders the EmptyCard component', () => {
    const addProduct = render(<AddProductCard
        mainData={mainData} styles={styles.data.results} />);
    expect(addProduct).toBeDefined();
  })
  it('clickable AddProductCard', () => {
    const setStorage =  jest.fn()
    const { container } = render(<AddProductCard key='1' mainData={mainData} styles={styles.data.results}
        setStorage={setStorage} setStorage={setStorage} storage={[mainData]} />);
    const addCard = container.querySelector('.relatedAddCard')
    fireEvent.click(addCard)
    expect(addCard).toBeDefined()
    // expect(setStorage).toBeCalled()
  })
});

describe('RelatedProductsCard', () => {
  it('renders the Products component', () => {
    const relatedCard = render(<RelatedProductCard thisID={mainData.id} productID={mainData.id}
      setProductID={jest.fn()} mainData={mainData} />);
    expect(relatedCard).toBeDefined();
  });

  it('expects setProductID to be set bottomTile onClick', () => {
    const setProductID = jest.fn()
    const setPosition = jest.fn()
    const { container } = render(<RelatedProductCard thisID={mainData.id} productID={mainData.id}
      setProductID={setProductID} mainData={mainData} setPosition={setPosition} />);
    const bottomTile = container.querySelector('.relatedBottomTile')
    fireEvent.click(bottomTile)
    expect(setProductID).toBeCalled();
  });

  it('expects setProductID to be set productImage onClick', () => {
    const setProductID = jest.fn()
    const setPosition = jest.fn()
    const { container } = render(<RelatedProductCard thisID={mainData.id} productID={mainData.id}
      setProductID={setProductID} mainData={mainData} setPosition={setPosition} />);
    const productImage = container.querySelector('img')
    fireEvent.click(productImage)
    expect(setProductID).toBeCalled();
  });

  it ('Action Button contains "☆" ', () => {
    const { container } = render(<RelatedProductCard thisID={mainData.id} productID={mainData.id}
        setProductID={jest.fn()} mainData={mainData} />);
    const actionButton = container.querySelector('.relatedActionButton');
    expect(actionButton.innerHTML).toContain('☆')
});

  it ('Action Button doesNOT contain "x" ', () => {
    const { container } = render(<RelatedProductCard thisID={mainData.id} productID={mainData.id}
        setProductID={jest.fn()} mainData={mainData} />);
    const actionButton = container.querySelector('.relatedActionButton');
    expect(actionButton.innerHTML).not.toContain('x')
});

it ('Modal doesNOT renders before Click', () => {
  const { container } = render(<RelatedProductCard thisID={mainData.id} productID={mainData.id}
      setProductID={jest.fn()} mainData={mainData} />);
  const actionButton = container.querySelector('.relatedActionButton');
  const modal = container.querySelector('#RelatedModalBackdrop')
  expect(modal).toBeNull()
});

  it ('Modal renders on Click', () => {
    const { container } = render(<RelatedProductCard thisID={mainData.id} productID={mainData.id}
        setProductID={jest.fn()} mainData={mainData} />);
    const actionButton = container.querySelector('.relatedActionButton');
    fireEvent.click(actionButton)
    const modal = container.querySelector('#RelatedModalBackdrop')
    expect(modal).not.toBeNull()
});

  it ('Modal closes ', () => {
    const setShowModal = jest.fn()
    const { container } = render(<RelatedProductCard thisID={mainData.id} productID={mainData.id}
        setProductID={jest.fn()} mainData={mainData} setShowModal={setShowModal}/>);
    const actionButton = container.querySelector('.relatedActionButton');
    fireEvent.click(actionButton)
    const modal = container.querySelector('#RelatedModalBackdrop')
    // fireEvent.click(modal)
    expect(modal).not.toBeNull()

    // expect(setShowModal).toBeCalled()
});

});

describe('EmptyCard Renders', () => {
  it('renders the EmptyCard component', () => {
    const emptyCard = render(<EmptyCard />);
    expect(emptyCard).toBeDefined();
  });
});

describe('MyOutfitCard Renders', () => {
  it('renders the MyOutfitCard component', () => {
    const MyOutfit = render(<MyOutfitCard thisID={mainData.id} data={mainData} />);
    expect(MyOutfit).toBeDefined();
  });
});

describe('PriceStrike Renders with SelectedStyle', () => {
  it('renders the PriceStrike component', () => {
    const priceStrike = render(<PriceStrike selectedStyle={selectedStyle} />);
    expect(priceStrike).toBeDefined();
  });
  it('PriceStrike renders with Styles', () => {
    const priceStrike = render(<PriceStrike styles={styles} />);
    expect(priceStrike).toBeDefined();
  });
});

describe('DetailsModal Renders', () => {
  it('renders the DetailsModal component', () => {
    const detailsModal = render(<DetailsModal data={mainData} mainData={mainData} />);
    expect(detailsModal).toBeDefined();
  });
});

describe('Carousel Renders', () => {
  it('renders the Carousel component', () => {
    const carousel = render(<Carousel numberOfTiles='4' productID={mainData.id} relatedList={relatedList} mainData={mainData} />);
    expect(carousel).toBeDefined();
  });
});
