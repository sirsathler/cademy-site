
import css from './Home.scss'
import HomeButton from './Components/HomeButton.jsx'

import gradeIcon from '../../../../src/assets/images/Icons/Grade.svg'
import reportcardIcon from '../../../assets/images/Icons/Report Card.svg'
import internIcon from '../../../assets/images/Icons/Intern.svg'
import contactsIcon from '../../../assets/images/Icons/Contacts.svg'
import studiesIcon from '../../../assets/images/Icons/Studies.svg'

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