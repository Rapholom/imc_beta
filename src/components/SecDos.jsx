import React from 'react'

const SecDos = ({username,lastname,userWeight,userHeight,setUserName,setLastName,setUserHeight,setUserWeight,array,setarrayData}) => {
    return (
        <div className="container">
            <div className='row sectiontwo'>
                <div className="col m6 s12">
                    <div className="secDosLeft">
                        <h5>¿que es el Icm?</h5>
                        <p>El Índice de Masa Corporal (IMC) es una medida de asociación entre el peso y la talla de una persona. El IMC es usado como uno de varios indicadores para evaluar el estado nutricional.</p>
                        <ul>
                            <li>
                                <p>El IMC constituye la medida poblacional más útil del sobrepeso y la obesidad, pues la forma de calcularlo no varía en función del sexo ni de la edad en la población adulta.</p>
                            </li>



                        </ul>

                    </div>
                </div>

                <div className="col m6 s12">
                    <div className="secDosRight z-depth-2">
                            {username}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SecDos
