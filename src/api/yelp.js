import axios from "axios"

const yelp = "<YELP_API_KEY_HERE>"

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: `Bearer ${yelp}`
    }
})
