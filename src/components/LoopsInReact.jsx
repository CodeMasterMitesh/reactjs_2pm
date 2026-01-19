import './StudentsList.css';
const studentSData = [
    { id: 1, name: "Alice", age: 20 , Grade: 'A'},
    { id: 2, name: "Bob", age: 22 , Grade: 'B'},
    { id: 3, name: "Charlie", age: 23 , Grade: 'C'},
    { id: 4, name: "David", age: 21 , Grade: 'B'},
    { id: 5, name: "Eve", age: 20 , Grade: 'A'}
]

const LoopExample = () => {
    const studentAgeCss = {
        fontSize: '20px',
        color: 'green',
        fontWeight: 'bold'
    };

    const studentGradeCss = {
        fontSize: '18px',
        color: 'orange',
        fontWeight: 'normal'
    };
    return (
        <div className="student-list">
            <h1 className='student-heading'>Student List</h1>
            <ul className='student-list-data'>
                {studentSData.map((curEle) => {
                    console.log(curEle);
                    return (
                        <li key={curEle.id}>
                            {/* {curEle.Grade === 'A' ? `Student Name : ${curEle.name} , Student Age is : ${curEle.age} , Student Grade is : ${curEle.Grade}` : null} */}
                            {/* {curEle.Grade === 'A' ? `Student Name : ${curEle.name} , Student Age is : ${curEle.age} , Student Grade is : ${curEle.Grade}` : null} */}
                           <span style={{fontSize: '25px', fontWeight: 'bold',color: 'royalblue'}}>Student Name : {curEle.name}</span> <span style={studentAgeCss}>Student Age is : {curEle.age}</span> <span style={studentGradeCss}>Student Grade is : {curEle.Grade}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default LoopExample;