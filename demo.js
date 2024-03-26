
//circle

// let r=5;
// let pi=3.14
// console.log("radius",r);
// let d=2*r
// console.log(d);
// let c=2*pi*r
// console.log(c);
// let a=pi*r*r
// console.log(a);



// //simple interest

// let p=10000
// let r=10
// let t=12

// let i=(p*r*t)/100
// console.log("simple interest" ,i);




// //leap year


// let a=2200

// if((a%400==0) || (a%4==0 && a%100!=0)){
//     console.log(a ," is a leap year" );

// }
// else{
//     console.log(a ,"is not a leap year" );

// }


// // number exchange

// let a=10
// let b=20

// let c=a
// a=b

// b=c
// console.log(a,b);        

// //fahrenheit

// function toFahrenheit(c){
//     return (9/5*c)+32
// }

// let value = toFahrenheit(100)

// console.log(value);


// //prime number

// let n,i,flag;
// flag=1;
// i=2;
// n=1;
// while(i<n){
//     if(n%i==0){
//     flag=0;
//     console.log(n+" is not a prime number");
//     break;
//     }
//     else{
//         i++;
//     }
        
    
// }
//     if(flag==1){
//         console.log(n+ "is a prime number");
//     }







// // Function to check if a number is prime
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// // Function to display prime numbers between two intervals

// function displayPrimeNumbers(start, end) {
//     console.log(`Prime numbers between ${start} and ${end}:`);
//     for (let i = start; i <= end; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// // Example usage
// const startInterval = 10;
// const endInterval = 20;
// displayPrimeNumbers(startInterval, endInterval);



// // //products

let products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

// // //product name only
// // let product1=products.map(product1=>product1.pName)
// // console.log(product1)

// // //details of product with lcd display
// let product2=products.filter(product2=>product2.display==="lcd")
// console.log(product2)

// //print 5g mobile

// let product3=products.filter(p=>p.band==="5g")
// product3.forEach((p)=>console.log(p.price,p.pName))


// //filter mobiles based on prices 

// let minPrice=1000
// let maxPrice=10000
// let product4=products.filter(p=>p.price>=minPrice&&p.price<=maxPrice)
// product4.forEach((p)=>console.log(p.pName))


// costly mobile

let costlyproduct = products.reduce((minPriceproduct,currentProduct)=>{
    return(currentProduct.price > minPriceproduct.price)? currentProduct:minPriceproduct;
},products[0]);

console.log("costly mobile:",costlyproduct.pName);


// low cost mobile

let lowcostproduct = products.reduce((maxPriceproduct,currentProduct)=>{
    return(currentProduct.price < maxPriceproduct.price)? currentProduct:maxPriceproduct;
},products[0]);

console.log("costly mobile:",lowcostproduct.pName);