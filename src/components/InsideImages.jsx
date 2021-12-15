import React from 'react'



const InsideImages = ({username,lastname,userWeight,userHeight,setUserName,setLastName,setUserHeight,setUserWeight,array,setarrayData}) => {
    console.log(username,lastname,userWeight,userHeight,setUserName,setLastName,setUserHeight,setUserWeight,array,setarrayData)

    const allDataProcess = (e) => {
        e.preventDefault()
        console.log('me apretaste')

        if ((!username.trim()) || (!lastname.trim()) || (!userWeight.trim()) || (!userHeight.trim())) {
            console.log('mas de uno puede haber quedado vacio');


        } else {
            console.log('procesando la info...felicidades llenaste toditos ')



            function calcImc(weight, height) {
                const processFormula = weight / (height * height);
                return processFormula;
            }

            setarrayData([
                ...array,
                username,
                lastname,
                userWeight,
                userHeight,
                calcImc(userWeight, userHeight)
            ]);


            /* const listFormData = (list) => {
                list.map((i, index) => {
                    console.log(i)




                })
            }

            console.log(listFormData(setarrayData)); */






            e.target.reset()//limipias los input 
            setUserName(''); // para luego volverlos a su valor de origen;
            setLastName('');
            setUserWeight('');
            setUserHeight('');



        }
    }

    return (

        <div className='row'>
            <div className="col m6 s12 infoBoard">
                <h4 className='textDownMain'>
                    Bienvenido
                </h4>
                <ul className='z-depth-4'>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt commodi velit, tenetur, repudiandae tempora neque dicta reiciendis quos ab culpa, quasi illum praesentium deserunt est nisi deleniti? Sed, atque accusantium?</li>

                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt commodi velit, tenetur, repudiandae tempora neque dicta reiciendis quos ab culpa, quasi illum praesentium deserunt est nisi deleniti? Sed, atque accusantium?</li>
                </ul>

            </div>

            <form onSubmit={allDataProcess} className="col m6 s12 imcTopBoard z-depth-2">
                <div className="input-field col s10">
                    <input placeholder="Escriba su Nombre" id="first_name" type="text" className="validate" onChange={e => setUserName(e.target.value)}></input>

                </div>
                <div className="input-field col s10">
                    <input placeholder="Escriba su Apellido" id="last_name" type="text" className="validate" onChange={e => setLastName(e.target.value)}></input>
                </div>
                <div className="input-field col s5">
                    <input placeholder="Escriba su Peso" id="person_weight" type="text" className="validate" onChange={e => setUserWeight(e.target.value)}></input>

                </div>
                <div className="input-field col s5">
                    <input placeholder="Escriba su altura" id="person_height" type="text" className="validate" onChange={e => setUserHeight(e.target.value)}></input>

                </div>
                <div className="input-field col s6">
                    <button className="btn-large waves-effect waves-light" type="submit" name="action">Calculate
                        <i className="material-icons right">send</i>
                    </button>

                </div>

                <div>
                    <ul className='resultsDisplay'>
                        {
                            array.map((item, index) => (
                                <li key={index}> {item}</li>
                            ))
                        }

                    </ul>
                </div>


            </form>
        </div>






    )
}

export default InsideImages
