import axios from 'axios'

const API_URL= "https://api.mercadolibre.com/sites/MCO/search?q="
const API_URL_ITEMS = "https://api.mercadolibre.com/items"

export const getAllProducts = async (productName) => {
    try {
      return await axios.get(`${API_URL}${productName}`)
    } catch (err) {
      console.log(err)
    }
}

export const getProductById = async (produtId) => {
    return await axios.get(`${API_URL_ITEMS}/${produtId}`)
}