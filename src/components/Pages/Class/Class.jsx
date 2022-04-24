import css from './Class.scss'

export default function Class(){
    return(
        <div className='page-class'>
            <section className='subject'>
                
            </section>
            <main className='activities'>
                <section className='to-done'>
                    <p className='to-done__title'>Atividades</p>
                </section>
                <section className='to-done'>
                    <p className='to-done__title'>Finalizados</p>
                </section>
            </main>
        </div>
    )
}