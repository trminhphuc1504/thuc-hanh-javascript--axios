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
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{

                })
            })
        })
    })
})



// task1(()=>{
//     console.log('Done Task')
// })



// C2: Promise (ES6)
// Promise: có 3 trạng thái : pending, fullfill, reject
// pending: Luôn luôn có
// fullfill: Khi request thành công 
// reject: Khi request thất bại

const task4 = ()=>{
    return new Promise((resolve,reject)=>{
        
    })
}







// C3: async ... await (ES7)


