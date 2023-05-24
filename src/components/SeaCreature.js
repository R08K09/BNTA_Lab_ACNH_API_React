import { useState } from 'react'

const SeaCreature = ({seaCreature, updateSCCaughtList}) => {

    const [toggle, setToggle] = useState(false)

    const handleSCClick = (e) => {
        updateSCCaughtList(seaCreature)
    }

    const handleSCInfoClick = () => {
        setToggle(!toggle);
    }


    return(
        <div className="sea_creature">
            <img src={`${seaCreature["icon_uri"]}`} alt="sea creature" className='sea_creature_image'/>

            <h4>{seaCreature.name['name-EUen'].toUpperCase()}</h4>
            <p>Price: {seaCreature.price} Bells</p>

            <div className="seaCreature-buttons">
                <button onClick={handleSCInfoClick}>Details</button>

                <button onClick={handleSCClick}>Caught</button>
            </div>
            
            {toggle ? <p>{seaCreature["museum-phrase"]}</p> : null}

        </div>

    );

}

export default SeaCreature;