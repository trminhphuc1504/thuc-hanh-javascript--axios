// Lấy dữ liệu từ API 
// axios: trả về 1 Promise
// const getProducts = ()=>{
//     // Gửi request thông qua thư viện axios
//     const result = axios({
//         method:'GET',
//         url:'https://6728d9246d5fa4901b6b3112.mockapi.io/QLSP',
//     })

//     // Xử lý khi request thành công
//     result.then((data)=>{
//         console.log('data: ',data);
//     })


//     // Xử lý khi request thất bại
//     result.catch((err)=>{
//         console.log('err: ', err);
//     })
// }

const getProducts = async ()=>{
    try{
        // Đợi kết quả trả về từ server
        const result = await axios({
            method:'GET',
            url:'https://6728d9246d5fa4901b6b3112.mockapi.io/QLSP',
        }) 
        console.log('result: ',result.data)
    }catch(err){

    }
}


getProducts()