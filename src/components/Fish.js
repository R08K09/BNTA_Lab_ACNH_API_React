import { useState } from 'react'

const Fish = ({fish, updateFishCaughtList}) => {

    const [toggle, setToggle] = useState(false)

    const handleClick = (e) => {
        updateFishCaughtList(fish)
    }

    const handleInfoClick = () => {
        setToggle(!toggle);
    }

    return(
        <div className="fish">
            <img src={`${fish["icon_uri"]}`} alt="fish" className='fish_image'/>

            <h4>{fish.name['name-EUen'].toUpperCase()}</h4>
            <p>Rarity: {fish.availability['rarity']}</p>
            <p>Price: {fish.price} Bells</p>

            <div className="fish-buttons">
                <button onClick={handleInfoClick}>Details</button>

                <button onClick={handleClick}>Caught</button>
            </div>
            
            {toggle ? <p>{fish["museum-phrase"]}</p> : null}

        </div>
    );
}

export default Fish;