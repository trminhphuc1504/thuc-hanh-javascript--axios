import {qlspServices} from '../services/qlsp.services.js'
import { SanPham } from '../models/SanPham.js'
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
            <button 
            class="btn btn-warning" 
            data-toggle="modal" 
            data-target="#myModal"
            onclick="editProduct('${item.id}')"
        >
            Edit
        </button>
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

// lấy thông tin sản phẩm từ form UI
const layThongTinSanPham = () =>{
    const elements = document.querySelectorAll('#formSP input, #formSP select')
    let sp = {}
    elements.forEach((element)=>{
        // destructuring
        const {id, value} = element
        sp[id] = value
    })

    // console.log('sp: ', sp);

    //  Khởi tạo đối tượng 
    return new SanPham(sp.tenSP, sp.giaSP, sp.hinhSP, sp.loaiSP);
}




// Xử lý onsubmit của form
document.getElementById('formSP').onsubmit = async (ev) =>{
    try{
        // Ngăn trình duyệt reload khi form submit
        ev.preventDefault()

        const formElement = document.getElementById('formSP')
        const action = formElement.getAttribute('data-action')
            // console.log('SUBMIT')
            // Lấy sản phầm từ form
            const sp = layThongTinSanPham();
            if (action !== 'edit'){
                // Chức năng thêm mới sản phẩm
                // gọi API thêm mới sản phẩm
                await qlspServices.addProduct(sp)
            }
            if(action === 'edit'){
                // Chức năng edit sản phẩm
                // Gọi API chỉnh sửa sản phẩm 
                const productId = formElement.getAttribute('data-id')
                console.log("productId: ", productId);
            }

            // console.log('sp: ', sp);
            // gọi API thêm mới sản phẩm 

            // await qlspServices.addProduct(sp)

            //gọi API để lấy dssp mới nhất sau khi thêm thành công
            getProducts()
    }catch(err){
        console.log("err: ", err);

    }
    
    

}

// Chức năng thêm mới sản phẩm
// Xử lý khi click vào btn thêm mới
document.getElementById('btnThemSP').onclick = ()=>{
    document.querySelector('.modal-footer').innerHTML = `
        <button type="submit" form="formSP" class="btn btn-success">Thêm SP</button>
    `
}



// Xử lý khi click vào btn edit sản phẩm
window.editProduct = async (productId)=>{
    console.log('productId: ',productId);

    try{
        // gọi API để lấy thông tin sp dựa vào productId
        const result = await qlspServices.getProductById(productId);
        console.log("result: ", result);

        // Hiển thị thông tin chi tiết sản phẩm lên form
        const elements = document.querySelectorAll('#formSP input, #formSP select')

        elements.forEach((element)=>{
            const {id} = element
            element.value = result.data[id]
        })

        // Thêm data-action vào thẻ form
        document.getElementById('formSP').setAttribute('data-action','edit')
        // Thêm data-id vào thẻ form để xác định id của sp cần edit
        document.getElementById('formSP').setAttribute('data-id',productId)

        // Chỉnh sửa UI
        // Thêm btn cập nhật, ẩn btn Thêm mới nếu có
        document.querySelector('.modal-footer').innerHTML = `
        <button 
            type="submit" 
            form="formSP" 
            class="btn btn-success" 
            Cập nhật
            </button>
            `

    }catch(err){
        console.log("err: ", err);

    }

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