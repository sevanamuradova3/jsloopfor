let students=[

    {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    
    {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    
    {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    
    {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    
    {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    
    {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    
    {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    
    {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    
    {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
    
    ]
    //sual2
    let cutindeksli=[];
     for (let i = 0; i< students.length; i++) 
     {if (students[i].id%2===0) {
        cutindeksli.push(students[i]);
    }}
        console.log(cutindeksli);
//sual3

let tekindeksli=[];
for (let i = 0; i< students.length; i++) 
{if (students[i].id%2===1) {
   tekindeksli.push(students[i]);
}}
   console.log(tekindeksli);

   //sual4
   let telebe=[];
   for (let i = 0; i< students.length; i++) 
   {if (students[i].age>20) {
      telebe.push(students[i]);
  }}
      console.log(telebe);

      //sual5

      let ikisertli=[];
   for (let i = 0; i< students.length; i++) 
   {if (students[i].id%2===0 && students[i].grade>90) {
      ikisertli.push(students[i]);
  }} 
        
  console.log(ikisertli);


  //sual6

  
  let yada=[];
  for (let i = 0; i< students.length; i++) 
  {if (students[i].grade==100 || students[i].grade==95) {
     yada.push(students[i]);
 }} 
       
 console.log(yada);
 //for of ile yazaq

 let yada2=[];
 for (const x of students) {
    if (x.grade==100 || x.grade==95) { 
        yada2.push(x);
        
    }
    
 }
 console.log(yada2);