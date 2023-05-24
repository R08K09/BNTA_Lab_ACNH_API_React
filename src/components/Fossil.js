import { useState } from 'react'

const Fossil = ({fossil, updateFossilFoundList}) => {

    const [toggle, setToggle] = useState(false)

    const handleClick = (e) => {
        updateFossilFoundList(fossil)
    }

    const handleInfoClick = () => {
        setToggle(!toggle);
    }

    return(
        <div className="fossil">
            <img src={`${fossil["image_uri"]}`} alt="fossil" className='fossil_image'/>

            <h4>{fossil.name['name-EUen'].toUpperCase()}</h4>
            <p>Price: {fossil.price} Bells</p>

            <div className="fossil-buttons">
                <button onClick={handleInfoClick}>Details</button>

                <button onClick={handleClick}>Found</button>
            </div>
            
            {toggle ? <p>{fossil["museum-phrase"]}</p> : null}

        </div>
    );
}

export default Fossil;