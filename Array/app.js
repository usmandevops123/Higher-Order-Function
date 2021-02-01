var companies=[
{name:'company1',category:'finance',start:2000,end:2005 },
    {name:'company2',category:'Retail',start:2001,end:2006 },
    {name:'company3',category:'health',start:2002,end:2007 },
    {name:'company4',category:'sport',start:2003,end:2008 },
    {name:'company5',category:'pharmacy',start:2004,end:2009 },
    {name:'company6',category:'education',start:2005,end:2015 }
    

];
const ages=[33,13,34,21,45,52,12,34,13,24,21,42,12,13,32,13,21];  

// for(let i=0;i<companies.length;i++)
// {
//     console.log(companies[i]);
// }
//forEach 
// companies.forEach(function(company){
//     console.log(company);
// })
//filter
// let canDrink=[];
// ages.forEach(function(age){
//     if(age<=15){
//         console.log(age);
//     }
// })
// const canDrink=ages.filter(function(age){
//     if(age>=21){
//         console.log(age);
//     }
// })
// const canDrink=ages.filter (age => age>=21)
// console.log(canDrink);
// const companyReatails=companies.filter(function(company){
//     if(company.category==='Retail'){
//         return(true);
//     }
// })
// const companyRetails=companies.filter(company => company.category==='Retail');
// console.log(companyRetails);


//map 

//Create a  Array by using map function 
// const companyName=companies.map(function(company){
//     return company.name;
// })
// console.log(companyName);
// const companyMap=companies.map(function(company){
//     return `${company.name} ${company.start} - ${company.end} `
// }) 

// const companyMap=companies.map(company=> `${company.name} ${company.start} - ${company.end} `)
// console.log(companyMap);


//sort
// const sortedCompanies=companies.sort(function(c1,c2){
//     if(c1.start>c2.start){
//         return 1;
//         } 
//         else{
//             return -1; 
//         }
    // }); 
// console.log(sortedCompanies); 
// const sortedCompanies=companies.sort((a,b) => (a.start>b.start ? 1 : -1));
// console.log(sortedCompanies);
//sort ages 
// const sortAges=ages.sort((a,b)=>a-b)
// console.log(sortAges);


//reduce 
// let ageSum=0;
// for(let i=0; i<ageSum.length; i++){
//     ageSum +=ages[i];
// } 
// console.log(ageSum);

// const ageSum = ages.reduce(function(total,ages){
//     return total+ages;
// },0) 
//  

//combine 
const combine= ages 
.map (age => age *2) 
.filter(age => age>=40)
.sort((a,b)=>a-b)
.reduce((a,b)=>a+b,0);
console.log(combine);
