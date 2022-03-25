import './App.css';
import {useState} from 'react';
import Usuario from './componentes/Usuario/Usuario';

function App() {
  const todosUsuarios =[ ]
  const [usuario,setnuevoUsuario]=useState(todosUsuarios)
  const [nuevoNombre,setNuevoNombre] = useState('');
  const [nuevoApellido,setNuevoApellido] = useState('');
  const [nuevoCorreo,setNuevoCorreo] = useState('');
  const [nuevoPassword,setNuevoPassword]=useState('');
  const [nuevoConfirpassword,setNuevoConfirPassword]=useState('');
  const [nombreError, setNombreError] = useState("");
  const [apellidoError, setApellidoError] = useState("");
  const [correoError, setCorreoError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confiPasswordError, setconfiPasswordError] = useState("");

  const ValNombre =(event)=>{
    setNuevoNombre(event.target.value)
    event.target.value.length<2 ? setNombreError("Al menos debe tener 2 caracteres"):setNombreError('');
  }

  const ValApellido =(event)=>{
    setNuevoApellido(event.target.value)
    event.target.value.length<2 ? setApellidoError("Al menos debe tener 2 caracteres"):setApellidoError('');
  }

  const ValCorreo =(event)=>{
    setNuevoCorreo(event.target.value)
    event.target.value.length<2 ? setCorreoError("Al menos debe tener 2 caracteres"):setCorreoError(''); 
  }

  const ValPassword =(event)=>{
    setNuevoPassword(event.target.value)
    event.target.value.length<8 ? setPasswordError("Al menos debe tener 8 caracteres"):setPasswordError('');
  }
  const ValConfPassword =(event)=>{
    setNuevoConfirPassword(event.target.value)
    event.target.value != nuevoPassword ? setconfiPasswordError("Coincidir los password"):setconfiPasswordError('');
  }

  const agregarNuevoUsuario=(event)=>{
    event.preventDefault();
    let nuevoUsuario = {
      nombre:nuevoNombre,
      apellido:nuevoApellido,
      correo:nuevoCorreo,
      password:nuevoPassword,
      confirpassword:nuevoConfirpassword
    }
    setnuevoUsuario((usurioPrev)=> [...usuario,nuevoUsuario]);
    setNuevoNombre('');
    setNuevoApellido('');
    setNuevoCorreo('');
    setNuevoPassword('');
    setNuevoConfirPassword('');

  } 
  return (
    <div  className='usuario'>
      <form  onSubmit={agregarNuevoUsuario} >
          <div>
            <label htmlFor='nombre'>
              Nombre:
            </label>
            <input type="text" id='nombre' 
                   value={nuevoNombre} 
                   onChange={ValNombre}/>
              {
                nombreError ? <p style={{color:'red'}}>{nombreError}</p>:''
              }
          </div>
          <div>
            <label htmlFor='apellido'>
              Apellido:
            </label>
            <input type="text" id='apellido'
                    value={nuevoApellido} 
                    onChange={ValApellido}/>
                    {
                      apellidoError ? <p  style={{color:'red'}}>{apellidoError}</p>:''
                    }
          </div>
          <div>
            <label htmlFor='correo'>
              Correo:
            </label>
            <input type="text" id='correo'
                   value={nuevoCorreo} 
                   onChange={ValCorreo}/>
                    {
                      correoError ? <p  style={{color:'red'}}>{correoError}</p>:''
                    }
          </div>
          <div>
            <label htmlFor='password'>
              Password:
            </label>
            <input type="password" id='password'
                   value={nuevoPassword} 
                   onChange={ValPassword}/>
                   {passwordError ? <p  style={{color:'red'}}>{passwordError }</p>:''}
                  {confiPasswordError ? <p  style={{color:'red'}}>{confiPasswordError}</p>:''}
          </div>
          <div>
            <label htmlFor='confirPassword'>
              Confirmacion Password:
            </label>
            <input type="password" id='confirPassword'
                   value={nuevoConfirpassword} 
                   onChange={ValConfPassword}/>
          </div>
          <button type='submit'>
            Agregar
          </button>
        </form>
        <div>
          {
            usuario.map((usuario,indice)=>{
              return(
            <Usuario usuario={usuario} key={'todo_' + indice}/>
              )
            })
          }
        </div>
    </div>
  );
}

export default App;
