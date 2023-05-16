/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import RelatedWidget from './RelatedWidget.jsx';
import EmptyCard from './EmptyCard.jsx';
import MyOutFitCard from './MyOutFitCard.jsx';
import DetailsModal from './DetailsModal.jsx';
import PriceStrike from '../PriceStrike.jsx';
import Carousel from './Carousel.jsx'
// import RatingBreakdown from './ratingbreakdown.jsx';


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
  sale_price: null,
  'default?': false,
  photos: [{"thumbnail_url":"https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1500699889581-a7f97ec155d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1500699889581-a7f97ec155d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1498200163530-bdb7c50ec863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1498200163530-bdb7c50ec863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1558118070-09ba9a9efb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1558118070-09ba9a9efb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1531889947080-bc5693ae9fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1531889947080-bc5693ae9fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1529108750117-bcbad8bd25dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1529108750117-bcbad8bd25dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=662&q=80"}],
  skus: {"1395115":{"quantity":14,"size":"7"},"1395116":{"quantity":25,"size":"7.5"},"1395117":{"quantity":9,"size":"8"},"1395118":{"quantity":2,"size":"8.5"},"1395119":{"quantity":18,"size":"9"},"1395120":{"quantity":12,"size":"9.5"},"1395121":{"quantity":10,"size":"10"},"1395122":{"quantity":18,"size":"10.5"},"1395123":{"quantity":11,"size":"11"},"1395124":{"quantity":35,"size":"11.5"},"1395125":{"quantity":25,"size":"12"}}
};

const relatedList = [40349, 40349, 40351, 40352, 40344, 40346];

jest.mock('./apihelpers.jsx');

describe('EmptyCard Renders', () => {
  it('renders the Review List component', () => {
    const emptyCard = render(<EmptyCard />);
    expect(emptyCard).toBeDefined();
  });
});

describe('MyOutfitCard Renders', () => {
  it('renders the Review List component', () => {
    const MyOutfit = render(<MyOutFitCard thisID={mainData.id} data={mainData} />);
    expect(MyOutfit).toBeDefined();
  });
});

describe('PriceStrike Renders', () => {
  it('renders the Review List component', () => {
    const priceStrike = render(<PriceStrike selectedStyle={selectedStyle} />);
    expect(priceStrike).toBeDefined();
  });
});

describe('DetailsModal Renders', () => {
  it('renders the Review List component', () => {
    const detailsModal = render(<DetailsModal data={mainData} mainData={mainData} />);
    expect(detailsModal).toBeDefined();
  });
});

describe('Carousel Renders', () => {
  it('renders the Review List component', () => {
    const carousel = render(<Carousel numberOfTiles='4' productID={mainData.id} relatedList={relatedList} mainData={mainData} />);
    expect(carousel).toBeDefined();
  });
});
