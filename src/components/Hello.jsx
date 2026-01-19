const Hello = () => {
    return (
        <div>
            <h1>Hello Students How Are You!</h1>
        </div>
    )
}
/// this is props based component and without destructuring
// const Button = (props) => {
//     console.log(props);
//     return (
//         <a href={props.link}>{props.name}</a>
//     )
// }

const Button = ({name, link}) => {
    console.log({name, link});
    return (
        <a href={link}>{name}</a>
    )
}

export { Hello, Button };