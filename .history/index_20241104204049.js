// console.log('TEST')

// setTimeout(()=>{
//     console.log('ABC...')
// }, 1000)

// console.log('Hello')

// Bất đồng bộ: setTimeout, call API

// Có 3 cách xử lý bất đồng bộ:

// C1: callback (ES5)
const task1 = (callback)=>{
    setTimeout(()=>{ // 7:00:01
        console.log('Task 1...')

        callback()
    }, 1000)
}

const task2 = (callback)=>{
    setTimeout(()=>{ // 7:00:01
        console.log('Task 2...')

        callback()
    }, 500)
}

const task3 = (callback)=>{
    setTimeout(()=>{ // 7:00:01
        console.log('Task 3...')

        callback()
    }, 200)
}

// task1()
// task2()
// task3()

// callback hell
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             // task4(()=>{
//             //     task5(()=>{
//             //     })
//             // })
//         })
//     })
// })



// task1(()=>{
//     console.log('Done Task')
// })



// C2: Promise (ES6)
// Promise: có 3 trạng thái : pending, fullfill, reject
// pending: Luôn luôn có
// fullfill: Khi request thành công 
// reject: Khi request thất bại

const task4 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Task 4...')
            // Nếu thành công gọi resolve
            // resolve([1,2,3,4,5])


            // Nếu thất bại gọi reject
            reject({error: 'error'})
        }, 1000)

    })
}
const result = task4()
console.log('result: ', result);

// Xử lý khi thành công
result.then((data)=>{
    console.log('Task 4 thành công...')
    console.log('data: ', data);

    console.log('Done Task')
})

// Xử lý khi thất bại
result.catch((error)=>{
    console.log('error: ', error);
    console.log('Task 4 thất bại')
})

// promise chain

const task5 =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Task 5...')
            // Nếu thành công gọi resolve
            resolve({task5: true})


            // Nếu thất bại gọi reject
            // reject({error: 'error'})
        }, 500)
    })
}

const task6 =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Task 6...')
            // Nếu thành công gọi resolve
            resolve({task5: true})


            // Nếu thất bại gọi reject
            // reject({error: 'error'})
        }, 500)
    })
}

// task4()
//     // Promise fullfill của task4
//     .then(()=>{
//         return task5() // Promise
//     })
//     // Promise fullfill task5
//     .then((data)=>{
//         console.log('data: ', data);
//         return task6()
//     })
//     .then(()=>{
//         console.log('Done task')
//     })

// task4()
// task5()



// C3: async ... await (ES7)
// Bản chất async ... await là Promise

// Chỉ sử dụng hàm async cho bất đồng bộ
const allTask = async ()=>{
    try{
        // thành công
        // Note: Bất kể 1 await nào đó thất bại lập tức code nhảy xuống catch()

        await task4() // sau await bắt buộc phải là Promise
        
        console.log('.............')

        await task5()
    
        await task6()

    }catch(error){
        console.log('error: ', error);
        // thất bại
    }
}

allTask()

