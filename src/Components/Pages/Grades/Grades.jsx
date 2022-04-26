import css from './Grades.scss'
import PageIcon from '../../../Assets/Images/Icons/grades.svg'
import ClassCard from './Components/ClassCard/ClassCard.jsx'
import CardIconComputer from '../../../Assets/Images/Icons/computer.svg'
import CardIconMath from '../../../Assets/Images/Icons/math.svg'

export default function Grades() {
    return (
        <>
            <div className='grade-header'>
                <img className='grade-header__img' src={PageIcon} alt="Grades" />
                <p className='grade-header__title'>DISCIPLINAS</p>
            </div>
            <div className='class-list-grid'>
                <ClassCard imgCard={CardIconComputer} title="Algoritmos & Estrutura de Dados II" teacher="Prof: Me. Nilton Freitas Jr"></ClassCard>
                <ClassCard imgCard={CardIconMath} title="Matemática Discreta" teacher="Prof: Me. William Seilá"></ClassCard>
            </div>
        </>
    )
}