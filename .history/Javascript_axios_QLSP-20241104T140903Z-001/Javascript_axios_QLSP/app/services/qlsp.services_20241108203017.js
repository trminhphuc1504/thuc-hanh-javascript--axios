const baseUrl = 'https://6728d9246d5fa4901b6b3112.mockapi.io'

export const qlspServices = {
    getProductList: ()=>{
        return axios({
            method:'GET',
            // url:'https://6728d9246d5fa4901b6b3112.mockapi.io/QLSP',
            url: `${baseUrl}/QLSP`
        }) 
    }


    deleteProduct: (productId)=>{
        return axios({
            method: 'DELETE',
            // url: `https://6728d9246d5fa4901b6b3112.mockapi.io/QLSP/${productId}`
            url: `${baseUrl}/QLSP/${productId}`
        })
    }
}