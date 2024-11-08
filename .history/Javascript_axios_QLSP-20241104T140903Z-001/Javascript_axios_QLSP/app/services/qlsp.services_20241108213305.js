const baseUrl = 'https://6728d9246d5fa4901b6b3112.mockapi.io'

export const qlspServices = {
    getProductList: ()=>{
        return axios({
            method:'GET',
            // url:'https://6728d9246d5fa4901b6b3112.mockapi.io/QLSP',
            url: `${baseUrl}/QLSP`
        }) 
    },

    addProduct: (payload)=>{
        return axios({
            method:'POST',
            // url:'https://6728d9246d5fa4901b6b3112.mockapi.io/QLSP',
            url: `${baseUrl}/QLSP`,
            data: payload, // dữ liệu gửi lên server
        }) 
    },




    getProductById: (productId)=>{
        return axios({
            method:'GET',
            // url:'https://6728d9246d5fa4901b6b3112.mockapi.io/QLSP',
            url: `${baseUrl}/QLSP/${productId}`,
        }) 
    },

    editProduct:(productId,payload)=>{
        return axios({
            method:'PUT',
            // url:'https://6728d9246d5fa4901b6b3112.mockapi.io/QLSP',
            url: `${baseUrl}/QLSP/${productId}`,
            data:payload
        })  
    },

    deleteProduct: (productId)=>{
        return axios({
            method: 'DELETE',
            // url: `https://6728d9246d5fa4901b6b3112.mockapi.io/QLSP/${productId}`
            url: `${baseUrl}/QLSP/${productId}`
        })
    }



}