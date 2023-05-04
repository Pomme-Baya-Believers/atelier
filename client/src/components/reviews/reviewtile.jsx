import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'

const ReviewTile = ({review}) => {

  return (
    <div>
      <h5>
      {review.rating}
      {review.reviewer_name}
      {review.date}
      </h5>
      <section>
        <p>{review.summary}</p>
        <p>{review.body}</p>
        <p>{review.recommend ? 'I recommend this product' : null}</p>
      </section>
      <footer>
      Helpful? Yes {review.helpfulness}
      </footer>
    </div>
  )
}

export default ReviewTile