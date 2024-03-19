
/*Module 1 Practice - Arrays, declaring variables, console.log, .push array


console.log('These are all the things that I love about Lylah ' + thingsILoveAboutLylah + '.');

console.log(`These are all the things that I love about Lylah. Her ${thingsILoveAboutLylah}. :)`)

thingsILoveAboutLylah.push('dark green')
console.log(thingsILoveAboutLylah)
*/

// let thingsILoveAboutLylah = ['eyes', 'hair', 'height'];

// let a = 0
// let b = '0'
// console.log(a == b)


// if (a = true){
//     console.log(`A is true!`)
// }

// // for(let x=0; x <4; x++){
// //     console.log(x)
// // }


//     //For loop
// for (let x=0; x<thingsILoveAboutLylah.length ; x++){
//     console.log(`I love her ${thingsILoveAboutLylah[x]}.`) //[] Targets an array
// }

let monthlyProfitLabels = [ 'January: 5', 'February: -1', 'March: 12' ]
let monthList = document.querySelector('.month-list')

monthlyProfitLabels.forEach(function(label){
     let monthLi = document.createElement('li')
     monthLi.textContent = label
     monthList.append(monthLi)

})



