import css from './ClassCard.scss'

export default function ClassCard(props) {
    return (
        
        <a href="#" className='class-card'>
            <img className='class-card__img' src={props.imgCard} alt=""/>
            <p className='class-card__title'>{props.title}</p>
            <p className='class-card__teacher'> {props.teacher}</p>
        </a>
    )
}