// console.log('TEST')

// setTimeout(()=>{
//     console.log('ABC...')
// }, 1000)


// console.log('Hello')

// Bất đồng bộ: setTimeout, call API

// Có 3 cách xử lý bất đồng bộ:

// C1: callback (ES5)
const task = (callback)=>{
    setTimeout(()=>{
        console.log('Task 1...')

        callback()
    },1000)
}

task(()=>{
    console.log('Done Task')
})






// C2: Promise (ES6)
// C3: async ... await (ES7)


