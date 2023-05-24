import { useState } from 'react'

const Bug = ({bug, updateBugCaughtList}) => {

    const [toggle, setToggle] = useState(false)

    const handleClick = (e) => {
        updateBugCaughtList(bug)
    }

    const handleInfoClick = () => {
        setToggle(!toggle);
    }

    return(
        <div className="bug">
            <img src={`${bug["icon_uri"]}`} alt="bug" className='bug_image'/>

            <h4>{bug.name['name-EUen'].toUpperCase()}</h4>
            <p>Rarity: {bug.availability['rarity']}</p>
            <p>Price: {bug.price} Bells</p>

            <div className="bug-buttons">
                <button onClick={handleInfoClick}>Details</button>

                <button onClick={handleClick}>Caught</button>
            </div>
            
            {toggle ? <p>{bug["museum-phrase"]}</p> : null}

        </div>
    );
}

export default Bug;