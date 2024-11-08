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

const task2 = ()=>{
    setTimeout(()=>{ // 7:00:01
        console.log('Task 2...')

        // callback()
    }, 500)
}

task1(()=>{
    task2()
})
// task2()



// task1(()=>{
//     console.log('Done Task')
// })






// C2: Promise (ES6)
// C3: async ... await (ES7)


