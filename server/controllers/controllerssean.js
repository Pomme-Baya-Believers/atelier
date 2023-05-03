const get = (req,res) => {
  axios.get('apiURL', {})
    .then((data) => res.send(data))
}