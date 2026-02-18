export const PropsDrilling = () =>{
    return (

        <div>
            <h1>This is Parent Componenet</h1>
            <ChildCompo data = "I am From Parent Component"/>
        </div>
    )
}

export const ChildCompo = (props) =>{
    return (

        <div>
            <h1>This is Child Componenet</h1>
            <GrandchildCompo data = {props.data}/>
        </div>
    )
}

export const GrandchildCompo = (props) =>{
    return (

        <div>
            <h1>This is Grand Child Componenet</h1>
            <GrandGrandchildCompo data = {props.data}/>
        </div>
    )
}

export const GrandGrandchildCompo = (props) =>{
    return (
        <div>
            <h1>This is Grand Grand Child Componenet</h1>
            <p>{props.data}</p>
        </div>
    )
}