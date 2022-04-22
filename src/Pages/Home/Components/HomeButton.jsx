import css from './HomeButton.scss'

export default function HomeButton(props){
    let buttonTitle = props.title.toUpperCase()

    return(
        <a className= 'home-button'>{buttonTitle}</a>
    )
}