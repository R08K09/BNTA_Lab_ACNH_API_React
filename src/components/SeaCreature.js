import { useState } from 'react'

const SeaCreature = ({seaCreature, updateCaughtList}) => {

    const [toggle, setToggle] = useState(false)

    const handleClick = (e) => {
        updateCaughtList(seaCreature)
    }

    const handleInfoClick = () => {
        setToggle(!toggle);
    }

    return(
        <div className="sea_creature">
            <img src={`${seaCreature["icon_uri"]}`} alt="sea creature" className='sea_creature_image'/>

            <h4>{seaCreature.name['name-EUen'].toUpperCase()}</h4>
            <p>Price: {seaCreature.price} Bells</p>

            <div className="seaCreature-buttons">
                <button onClick={handleInfoClick}>Details</button>

                <button onClick={handleClick}>Caught</button>
            </div>
            
            {toggle ? <p>{seaCreature["museum-phrase"]}</p> : null}

        </div>
    );
}

export default SeaCreature;