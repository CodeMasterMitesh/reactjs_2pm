import { useState } from "react";
console.log("StateManageWithObj Component Rendered");
// In React JS, derived state refers to data that is calculated from existing props or state rather than being stored as an independent state variable. The core principle is to avoid duplicating data and ensure a single source of truth, leading to cleaner, more predictable, and more maintainable components
// const employee = [
//             { id: 1, name: "John Doe", age: 30, designation: "Software Engineer" },
//             { id: 2, name: "Jane Smith", age: 25, designation: "UI/UX Designer" },
//             { id: 3, name: "Mike Johnson", age: 35, designation: "Project Manager" },
//             { id: 4, name: "Emily Davis", age: 28, designation: "QA Engineer" },
//             { id: 5, name: "David Wilson", age: 32, designation: "DevOps Engineer" }
//         ];
    // console.log("Employee Data: ", employee);
    
const StateManageWithObj = () => {

    // employee.map((emp) => {
    //     console.log(`Employee Name: ${emp.name}, Age: ${emp.age}, Designation: ${emp.designation}`);
    // });

    const [employeeData , setEmployee] = useState([
            { id: 1, name: "John Doe", age: 30, designation: "Software Engineer" },
            { id: 2, name: "Jane Smith", age: 25, designation: "UI/UX Designer" },
            { id: 3, name: "Mike Johnson", age: 35, designation: "Project Manager" },
            { id: 4, name: "Emily Davis", age: 28, designation: "QA Engineer" },
            { id: 5, name: "David Wilson", age: 32, designation: "DevOps Engineer" }
        ]);
    console.log(employeeData);
    // console.log("Total Employees: ", employeeData.length);
    
    const total = employeeData.reduce((total,e)=>{
        return total + e.age;
    }, 0);
    const averageAge = total / employeeData.length;
    // console.log("Average Age: ", averageAge);

    // console.log(employee);
    return (
        <div style={{ textAlign: "center", width: '500px', margin: '0 auto' }}>
            <h2>Employee List</h2>
            {employeeData.map((emp) => (
                <div key={emp.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                    <h3>{emp.name}</h3>
                    <p>Age: {emp.age}</p>
                    <p>Designation: {emp.designation}</p>
                </div>
            ))}
            <DuplicatingComExample />
             <h3>Total Employees: {employeeData.length}</h3>
            <h3>Average Age: {averageAge.toFixed(2)}</h3>
        </div>
    )

}

const DuplicatingComExample = () => {
    return (
        <div>
            <h2>Duplicating Data Examples</h2>
            <p>This is an example of duplicating data in state management.</p>
        </div>
    )
}

export default StateManageWithObj;

