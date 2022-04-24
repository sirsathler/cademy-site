import css from './HomeButton.scss'

export default function HomeButton(props){
    let buttonTitle = props.title.toUpperCase()

    return(
        <a className= 'home-button'>
            <img src={props.img} alt="" />
            <p className='home-button__title'>{buttonTitle}</p>
        </a>
    )
}