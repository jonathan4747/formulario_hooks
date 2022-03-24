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
  const [nuevoConfirpassword,setNuevoConfirPassword]=useState('')

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
                   onChange={(event)=> setNuevoNombre(event.target.value)}/>
          </div>
          <div>
            <label htmlFor='apellido'>
              Apellido:
            </label>
            <input type="text" id='apellido'
                    value={nuevoApellido} 
                    onChange={(event)=> setNuevoApellido(event.target.value)}/>
          </div>
          <div>
            <label htmlFor='correo'>
              Correo:
            </label>
            <input type="text" id='correo'
                   value={nuevoCorreo} 
                   onChange={(event)=> setNuevoCorreo(event.target.value)}/>
          </div>
          <div>
            <label htmlFor='password'>
              Password:
            </label>
            <input type="password" id='password'
                   value={nuevoPassword} 
                   onChange={(event)=> setNuevoPassword(event.target.value)}/>
          </div>
          <div>
            <label htmlFor='confirPassword'>
              Confirmacion Password:
            </label>
            <input type="password" id='confirPassword'
                   value={nuevoConfirpassword} 
                   onChange={(event)=> setNuevoConfirPassword(event.target.value)}/>
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
