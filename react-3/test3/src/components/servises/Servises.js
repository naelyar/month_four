export const Servises = (props) => {
    return(

        <ul>
            {props.servises.map ((el, key) =>{
                return <li>{el}</li>
            })}
        </ul>
    )

}