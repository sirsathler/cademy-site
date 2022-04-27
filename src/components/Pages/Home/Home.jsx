
import css from './Home.scss'
import HomeButton from './Components/HomeButton.jsx'

import gradeIcon from '../../../Assets/Images/Icons/Grade.svg'
import reportcardIcon from '../../../Assets/Images/Icons/Report Card.svg'
import internIcon from '../../../Assets/Images/Icons/Intern.svg'
import contactsIcon from '../../../Assets/Images/Icons/Contacts.svg'
import studiesIcon from '../../../Assets/Images/Icons/Studies.svg'

export default function Home(){
    return(
        <div className='page-home'>
            <section className='home-menu-container'>
                <HomeButton title="Disciplinas" img={gradeIcon}/>
                <HomeButton title="Boletim" img={reportcardIcon}/>
                <HomeButton title="Estágio" img={internIcon}/>
                <HomeButton title="Contato" img={contactsIcon}/>
                <HomeButton title="Estudo" img={studiesIcon}/>
            </section>

        </div>
    )
}