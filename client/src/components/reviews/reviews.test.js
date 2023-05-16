/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import axios from 'axios';
import ReviewList from './reviewlist.jsx';
import ReviewTile from './reviewtile.jsx';
import RatingBreakdown from './ratingbreakdown.jsx';
import NewReview from './newreview.jsx';
import ProductBreakdown from './productBreakdown.jsx';
import apiHelpers from './apihelpers.jsx';

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
      response: 'testing response',
      body: 'I like the style of these shoes so nice and very extravagant so stylish and My friends complimented me about how cool they were thank you for selling these I like the style of these shoes so nice and very extravagant so stylish and My friends complimented me about how cool they were thank you for selling these ',
      date: '2022-07-22T00:00:00.000Z',
      reviewer_name: 'StylishPerson',
      helpfulness: 30,
      photos: ['test.jpg'],
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
jest.mock('../Related/apihelpers.jsx', () => ({
  getProduct: jest.fn(() => Promise.resolve({})),
}));

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

  it('renders a "remove all filters" button when a filter is applied', () => {
    const { container } = render(<RatingBreakdown meta={metaData}
      reviews={reviewData} setDisplayedReviews={jest.fn()}/>);
    const component = container.querySelector('#ratingComponent');
    const filter = container.querySelector('.rating');
    fireEvent.click(filter);
    expect(component.innerHTML).toContain('Remove all filters');
  })

  it('removes filters when the same filter is clicked twice and there is no other filter being applied', () => {
    const { container } = render(<RatingBreakdown meta={metaData}
      reviews={reviewData} setDisplayedReviews={jest.fn()}/>);
    const component = container.querySelector('#ratingComponent');
    const filter = container.querySelectorAll('.rating');
    fireEvent.click(filter[1]);
    fireEvent.click(filter[1]);
    expect(component.innerHTML).not.toContain('Remove all filters');
  })

  it('removes all filter when button is clicked', () => {
    const { container } = render(<RatingBreakdown meta={metaData}
      reviews={reviewData} setDisplayedReviews={jest.fn()}/>);
    const component = container.querySelector('#ratingComponent');
    const filter = container.querySelectorAll('.rating');
    fireEvent.click(filter[2]);
    fireEvent.click(filter[3]);
    fireEvent.click(filter[4]);
    const removeBtn = screen.getByRole('button');
    fireEvent.click(removeBtn);
    expect(component.innerHTML).not.toContain('Remove all filters');
  })
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
    const body = container.querySelector('#reviewBodyDisplay');
    expect(body.innerHTML.length).toBeLessThan(251);
  });

  it('shows more when button is clicked', () => {
    const { container } = render(<ReviewTile review={reviewData.results[1]}/>);
    const body = container.querySelector('#reviewBodyDisplay');
    const button = container.querySelector('.reviewShowMore');
    fireEvent.click(button);
    expect(body.innerHTML.length).toBeGreaterThan(250);
  });

  it('renders photos', () => {
    const { container } = render(<ReviewTile review={reviewData.results[1]}/>);
    const photos = container.querySelector('.reviewAllPhotos');
    expect(photos.innerHTML).toContain('<img');
  });

  it('sets the response', () => {
    const { container } = render(<ReviewTile review={reviewData.results[1]}/>);
    const response = container.querySelector('.reviewResponse');
    expect(response.innerHTML).toContain('testing response');
  });

  it('shows number of helpfulness', () => {
    const { container } = render(<ReviewTile review={reviewData.results[0]}/>);
    const helpful = container.querySelector('.reviewFooter');
    expect(helpful.innerHTML).toContain('34');
  });

  it('increases helpfulness count on click', () => {
    const { container } = render(<ReviewTile review={reviewData.results[0]}/>);
    const helpful = container.querySelector('.reviewFooter');
    const yes = container.querySelector('.reviewHelpfulClick');
    fireEvent.click(yes);
    expect(helpful.innerHTML).toContain('35');
  });
});

describe('New Review Form', () => {
  it('contains descriptions for each characteristic ', () => {
    const { container } = render(<NewReview productID={40344} meta={metaData}/>);
    expect(container.innerHTML).toContain('size', 'width', 'comfort', 'quality', 'length', 'fit');
  });

  it('changes the summary input when a user types', () => {
    const { container } = render(<NewReview productID={40344} meta={metaData}/>);
    const summary = container.querySelector('#newSummaryInput');
    fireEvent.change(summary, { target: { value: 'Testing' } });
    expect(summary.value).toBe('Testing');
  });

  it('changes the color of the star on click', () => {
    const { container } = render(<NewReview productID={40344} meta={metaData}/>);
    let radio = container.querySelector('#r1l');
    fireEvent.click(radio);
    expect(radio.style.color).toBe('rgb(255, 204, 0)');
    radio = container.querySelector('#r2l');
    fireEvent.click(radio);
    expect(radio.style.color).toBe('rgb(255, 204, 0)');
    radio = container.querySelector('#r3l');
    fireEvent.click(radio);
    expect(radio.style.color).toBe('rgb(255, 204, 0)');
    radio = container.querySelector('#r4l');
    fireEvent.click(radio);
    expect(radio.style.color).toBe('rgb(255, 204, 0)');
    radio = container.querySelector('#r5l');
    fireEvent.click(radio);
    expect(radio.style.color).toBe('rgb(255, 204, 0)');
  });

  it('changes the color of the star on mouseover', () => {
    const { container } = render(<NewReview productID={40344} meta={metaData}/>);
    const radio = container.querySelector('#r1l');
    fireEvent.mouseOver(radio);
    expect(radio.style.color).toBe('rgb(255, 204, 0)');
  });

  it('changes the color of the star on mouseout', () => {
    const { container } = render(<NewReview productID={40344} meta={metaData}/>);
    const radio = container.querySelector('#r3l');
    fireEvent.mouseOut(radio);
    expect(radio.style.color).toBe('');
  });

  it('should not render any thumbnails if there are no files chosen', () => {
    const { container } = render(<NewReview productID={40344} meta={metaData}/>);
    expect(container.querySelector('.newPhotos')).not.toContain('src');
  })
});

describe('Product Breakdown', () => {
  it('sets characteristics based on meta data', () => {
    const { container } = render(<ProductBreakdown meta={metaData}/>);
    expect(container.innerHTML).toContain('Size');
  })
});
