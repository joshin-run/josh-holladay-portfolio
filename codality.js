// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public boolean solution(String S) {
        // write your code in Java SE 8
    }
}





function solution(list) {
    // get digit sums
    sumList = []
    list.forEach(n => {
        const numStr = n.toString().split('')
        sumList.push(parseFloat(numStr[0]) + parseFloat(numStr[1]))
    })
    console.log(
        sumList
    )
    
    sumList.forEach((n,i) => {
        // n = 6
        // 
    })





// if first is same as second - find indexs
// add values of index...

// 

    // compare digit sums to determin which indeces are the same
    // const likePairs = sumList.forEach((n,i) => {
        // console.log(
        //     n,
        //     n - sumList[i+1]
        // )
        //     if (n - sumList[i+1]) {
        //         console.log(sumList[0/**/] + sumList[i+1])
        //     }

        // let xyz = []
        // let abc = []
        // let i = 1
        // for (i; i < sumList.length; i++) {
        //     let diff = n - sumList[i] 
        //     console.log(diff)
        //     if (diff == 0) {
        //         xyz.push
        //         abc.push(n + sumList[i])
        //     }
        // }
        // console.log(
        //     xyz,
        //     abc
        // )
    })  
}
//         let j = 1;
//         for(j; j < sumList.length; j++) {
//             let zeroOrNot = n - sumList[j]

// console.log(
//             'n:', n,
//         zeroOrNot

//     )


        // }
        // let zeroOrNot = n - sumList[i+1]
        
    //     // let list = ...sumLists
    //     console.log(
    //         list.splice(i,1),
    //         list,
    //         'sumList:',
    //         sumList
    //     )
    //     // console.log(sumList.indexOf(n))
    //     // // n[i] - n[1+1] === 0
    // })
    // sumList.indexOf()

    // console.log(map)
    // take first number // subtract by next number
    // if 0 add up // if anything else move on

