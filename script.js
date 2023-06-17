/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const employee=arr
    .filter(employee=> employee.profession === "developer")
    .map((employee) => employee.name)
    console.log(employee);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    const developer=[];
    arr.forEach((employee) => {
        if(employee.profession==="developer"){
            developer.push(employee.name);
        }
    });
    console.log(developer);
    
  }
  
  function addData() {
    //Write your code here, just console.log
    const newEmployee={id:4,name:"susan",age:"20",profession:"intern"} ;
    arr.push(newEmployee);
    console.log(arr);

  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const filteredarr=arr.filter(employee => employee.profession !== "admin");
    arr=filteredarr;
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray=[
        { id: 4, name: "zia", age: "16", profession: "manager" },
        { id: 5, name: "symon", age: "20", profession: "consultant" },
        { id: 6, name: "jordon", age: "19", profession: "SDE" },
    ]
    const concatenateArray=arr.concat(newArray);
    console.log(concatenateArray);
  }
 