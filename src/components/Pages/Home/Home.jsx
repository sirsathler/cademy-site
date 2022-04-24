
import css from './Home.scss'
import HomeButton from './Components/HomeButton.jsx'

export default function Home(){
    return(
        <div className='page-home'>
            <section className='home-menu-container'>
                <HomeButton title="Disciplinas"/>
                <HomeButton title="Boletim"/>
                <HomeButton title="Estágio"/>
                <HomeButton title="Contato"/>
                <HomeButton title="Estudo"/>
            </section>

        </div>
    )
}