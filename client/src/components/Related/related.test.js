/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import RelatedWidget from './RelatedWidget.jsx';
// import ReviewTile from './reviewtile.jsx';
// import RatingBreakdown from './ratingbreakdown.jsx';

const reviewData = {
  product: '40348',
  page: 0,
  count: 10000,
  results: [
    {
      review_id: 1276831,
      rating: 5,
      summary: 'Good overall',
      recommend: true,
      response: null,
      body: 'Loved it super great',
      date: '2022-10-13T00:00:00.000Z',
      reviewer_name: 'ASDDFSDFS',
      helpfulness: 34,
      photos: [],
    },
    {
      review_id: 1275919,
      rating: 4,
      summary: '4/5 could be better IMO',
      recommend: true,
      response: null,
      body: 'I like the style of these shoes so nice and very extravagant so stylish and My friends complimented me about how cool they were thank you for selling these ',
      date: '2022-07-22T00:00:00.000Z',
      reviewer_name: 'StylishPerson',
      helpfulness: 30,
      photos: [],
    },
  ],
};

const metaData = {
  product_id: '40348',
  ratings: {
    1: '24',
    2: '9',
    3: '72',
    4: '33',
    5: '66',
  },
  recommended: {
    false: '30',
    true: '174',
  },
  characteristics: {
    Size: {
      id: 135232,
      value: '2.8571428571428571',
    },
  },
};

jest.mock('./apihelpers.jsx');

describe('Review List', () => {
  it('renders the Review List component', () => {
    const reviewlist = render(<ReviewList productID={'40344'}/>);
    expect(reviewlist).toBeDefined();
  });
});

describe('Rating Breakdown', () => {
  it('renders the Rating Breakdown component', () => {
    const ratingbreakdown = render(<RatingBreakdown meta={metaData}
      reviews={reviewData} setDisplayedReviews={jest.fn()}/>);
    expect(ratingbreakdown).toBeDefined();
  });

  it('renders 5 rating bars', () => {
    const { container } = render(<RatingBreakdown meta={metaData}
      reviews={reviewData} setDisplayedReviews={jest.fn()}/>);
    const ratings = container.querySelector('#ratingBreakdown');
    expect(ratings.innerHTML).toContain('5 Stars');
    expect(ratings.innerHTML).toContain('4 Stars');
    expect(ratings.innerHTML).toContain('3 Stars');
    expect(ratings.innerHTML).toContain('2 Stars');
    expect(ratings.innerHTML).toContain('1 Stars');
  });
});

describe('Review Tile', () => {
  it('renders the Review Tile component', () => {
    const reviewtile = render(<ReviewTile review={reviewData.results[0]}/>);
    expect(reviewtile).toBeDefined();
  });

  it('sets the name', () => {
    const { container } = render(<ReviewTile review={reviewData.results[0]}/>);
    const name = container.querySelector('.reviewHeader');
    expect(name.innerHTML).toContain('ASDDFSDFS');
  });

  it ('sets the summary', () => {
    const { container } = render(<ReviewTile review={reviewData.results[0]}/>);
    const summary = container.querySelector('#reviewSummary');
    expect(summary.innerHTML).toContain('Good overall');
  });

  it('sets the body', () => {
    const { container } = render(<ReviewTile review={reviewData.results[0]}/>);
    const body = container.querySelector('#reviewBody');
    expect(body.innerHTML).toContain('Loved it super great');
  });

  it('shows less than 250 characters in the body', () => {
    const { container } = render(<ReviewTile review={reviewData.results[1]}/>);
    const body = container.querySelector('#reviewBody');
    expect(body.innerHTML.length).toBeLessThan(251);
  });

  it('renders no photos', () => {
    const { container } = render(<ReviewTile review={reviewData.results[1]}/>);
    const photos = container.querySelector('.reviewAllPhotos');
    expect(photos).not.toContain('src');
  });

  it('sets the response', () => {
    const { container } = render(<ReviewTile review={reviewData.results[0]}/>);
    const response = container.querySelector('.reviewResponse');
    expect(response).toBeNull();
  });

  it('shows number of helpfulness', () => {
    const { container } = render(<ReviewTile review={reviewData.results[0]}/>);
    const helpful = container.querySelector('.reviewFooter');
    expect(helpful.innerHTML).toContain('34');
  });
});
