import css from './Login.scss';
import logo from '../../assets/images/logo-big.png';

export default function Login() {
    return (
        <div className="page-login">
            <div className="login-header">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo" />
                </div>
            </div>
            <div className='login-bottom'>
                <p className='title-welcome'>Olá,</p>
                <div className='login-button' >
                    <button>Sou estudante</button>
                    <button>Sou docente</button>
                    <button>Sou diretor</button>
                </div>
            </div>

        </div>
    )
}