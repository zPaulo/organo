import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    const border = { borderColor: props.corPrimaria }
    
    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={border}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time