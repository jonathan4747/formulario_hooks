import './Usuario.css'
function Usuario(props){
    return(
        <div>
            <h3>
                Your form Data
            </h3>
            <p>
                First Name : {props.usuario.nombre}
            </p>
            <p>
                Last Name : {props.usuario.apellido}
            </p>
            <p>
                Email : {props.usuario.correo}
            </p>
            <p>
                Password : {props.usuario.password}
            </p>
            <p>
                Confirm Password : {props.usuario.confirpassword}
            </p>
        </div>
    )
}
export default Usuario