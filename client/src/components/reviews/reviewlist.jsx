import React, {useState, useEffect, useContext} from 'react'
import ReviewTile from './reviewtile.jsx'
import axios from 'axios'
import apiHelper from './apihelpers.jsx'

const ReviewList = () => {

  const [reviews, setReviews] = useState({})
  const [count, setCount] = useState(2)

  useEffect(() => apiHelper.getReviews(count, 'relevant', 40344, setReviews), [])

  return (
    <div>
      {reviews.results && reviews.results.map(review => <ReviewTile key={review.review_id} review={review}/>)}
    </div>
  )
}

export default ReviewList