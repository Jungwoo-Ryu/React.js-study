import {useEffect, useState} from 'react'

function PokemonItem ({name, url}){
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch(url).then(res => res.json()).then(
            // data => setInfo(data)
            data => {
                setInfo(data.abilities);
                // console.log(data.abilities[0]);
                // console.log(data.abilities[0].ability);
                return data.abilities
            }
        ).then(console.log(info));

    },[]) 


    return(
        <div> 
            <h3>이름: {name}</h3>
            <div>기술: 

                {info.map(data => {
                    
                    // console.log('dddd',data)
                    // console.log('ee',data['ability'])
                    console.log('ff',data['ability'].name)
                        // <li key={url}>{data['ability'].name}</li>)
                    return(<div>{data['ability'].name}</div>)
                })}
            
                
            </div>
            
        </div>
    )
}
export default PokemonItem;