import axios from "axios"

const yelp = "6jLz-xnFqCDMA9pF1cdSUqwx_fdEq7EapQSBjIzkmv9GbI92D5W2TU79rtkQn0KqynHalI2Q6VfyrYYgMzLumBl28TeJFAfgf69XigTsR9PYt_6McPoreHXpvWarYnYx"

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: `Bearer ${yelp}`
    }
})