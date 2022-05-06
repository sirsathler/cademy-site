import css from './Login.scss';
import logo from '../../assets/images/logo-big.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import imgStudent from '';

export default function Login() {
    return (
        <>
            <div className="page-login">
                <div className="login-header">
                    <div className="logo-container">
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                </div>
                <div className='login-bottom'>
                    <p className='title-welcome'>Olá,</p>
                    <div className='login-button' >
                        <a className='menu-button'>
                            <img src="" alt=""/>
                            Sou estudante
                        </a>
                        <a className='menu-button'>Sou docente</a>
                        <a className='menu-button'>Sou diretor</a>
                    </div>
                </div>
            </div>
            <div className='login-bottom'>
                <div className='login-input-container'>
                    <TextField
                        id="filled-hidden-label-small"
                        label="Usuário/Número da matrícula"
                       
                    />
                    <TextField
                        label="Senha"
                        type="password"
                    />
                    <Button variant="contained">Contained</Button>
                </div>
            </div>
        </>    
    )
}