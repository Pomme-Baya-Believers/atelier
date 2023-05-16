const ProductDescription = require('./ProductDescription.jsx');
const Overview = require('./overview.jsx');
const AddToCart = require('./addToCart.jsx');
const AddToCartButton = require('./addToCartButton.jsx');
const BasicProductInfo = require('./basicProductInfo.jsx');
const ImageGallery = require('./imageGallery.jsx');
const ImageGalleryThumbnails = require('./imageGalleryThumbnails.jsx');
const QuantitySelector = require('./quantitySelector.jsx');
const SizeSelector = require('./sizeSelector.jsx');
const StyleSelector = require('./styleSelector.jsx');

test('AddToCart Component should be an object', () => {
  expect(typeof AddToCart).toBe('object');
});

test('AddToCartButton Component should be an object', () => {
  expect(typeof AddToCartButton).toBe('object');
});

test('BasicProductInfo Component should be an object', () => {
  expect(typeof BasicProductInfo).toBe('object');
});

test('ImageGallery Component should be an object', () => {
  expect(typeof ImageGallery).toBe('object');
});

test('ImageGalleryThumbnails Component should be an object', () => {
  expect(typeof ImageGalleryThumbnails).toBe('object');
});

test('Overview Component should be an object', () => {
  expect(typeof Overview).toBe('object');
});

test('Product Description should be an object', () => {
  expect(typeof ProductDescription).toBe('object');
});

test('QuantitySelector should be an object', () => {
  expect(typeof QuantitySelector).toBe('object');
});

test('SizeSelector should be an object', () => {
  expect(typeof SizeSelector).toBe('object');
});

test('StyleSelector should be an object', () => {
  expect(typeof StyleSelector).toBe('object');
});