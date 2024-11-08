// Lấy dữ liệu từ API 
// axios: trả về 1 Promise
const getProducts = ()=>{
    const result = axios({
        method:'GET',
        url:'https://6728d9246d5fa4901b6b3112.mockapi.io/QLSP',
    })

    // Xử lý khi request thành công
    result.then()


    // Xử lý khi request thất bại
    result.catch()
}


getProducts()