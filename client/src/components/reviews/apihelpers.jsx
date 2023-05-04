import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'

const apiHelper = {

  getReviews: (count, sort, id, setReviews) => {
    axios.get('/naru', {params: {endpoint: `?count=${count}&sort=${sort}&product_id=${id}`}})
      .then(({data}) => setReviews(data))
      .catch(err => console.error(err))
  }

}

export default apiHelper

