/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import RelatedWidget from './RelatedWidget.jsx';
import EmptyCard from './EmptyCard.jsx';
// import ReviewTile from './reviewtile.jsx';
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

jest.mock('./apihelpers.jsx');

describe('EmptyCard', () => {
  it('renders the Review List component', () => {
    const emptyCard = render(<EmptyCard />);
    expect(emptyCard).toBeDefined();
  });
});
