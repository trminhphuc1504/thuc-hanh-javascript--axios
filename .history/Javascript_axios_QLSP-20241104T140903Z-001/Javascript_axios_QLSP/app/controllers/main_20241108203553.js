import {qlspServices} from '../services/qlsp.services.js'

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

const renderTable = (arr)=>{
    let htmlContent = ''
    arr.forEach((item,index)=>{
        htmlContent += `
        <tr>
            <td>
                ${index + 1}
            </td>
            <td>
                ${item.tenSP}
            </td>
            <td>
                ${item.giaSP}
            </td>
            <td>
                <img width="100" height="100" src="${item.hinhSP}"/>
            </td>
            <td>
                <button class="btn btn-warning">Edit</button>
                <button class="btn btn-danger" onclick="deleteProduct('${item.id}')">Delete</button>
            </td>
        </tr>
        `
    })
    document.getElementById('tblDanhSachSP').innerHTML = htmlContent
}


const getProducts = async ()=>{
    try{
        // Đợi kết quả trả về từ server
        // const result = await axios({
        //     method:'GET',
        //     url:'https://6728d9246d5fa4901b6b3112.mockapi.io/QLSP',
        // }) 

        const result = await qlspServices.getProductList()
        

        console.log('result: ',result.data)


        // Gọi hàm renderTable để hiển thị danh sách sản phẩm
        renderTable(result.data)
    }catch(err){
        console.log("err: ", err);
    }
}


getProducts()

// Chức năng thêm mới sản phẩm
// Xử lý khi click vào btn thêm mới
document.getElementById('btnThemSP').onclick = ()=>{
    document.querySelector('.modal-footer').innerHTML = `

        <button class="btn btn-success">Them</button>
    `
}





// Chức năng xóa sản phẩm

window.deleteProduct = async (productId) =>{
    console.log('productId: ', productId);

    
    try{
        // Gọi API Xóa sản phầm
        // await axios({
        //     method: 'DELETE',
        //     url: `https://6728d9246d5fa4901b6b3112.mockapi.io/QLSP/${productId}`
        // })

        await qlspServices.deleteProduct(productId)

        // gọi API lấy lại danh sách sp mới nhất sau khi xóa
        getProducts();
    }catch(error){
        console.log('error: ', error);
    }
}