import { useState, useEffect } from "react"
import SeaCreature from "../components/SeaCreature";

const SeaCreatureContainer = () => {

    const [seaCreatures, setSeaCreatures] = useState([])
    const [caughtSeaCreatures, setCaughtSeaCreatures] = useState([])

    const fetchSeaCreatures = async () => {
        const response = await fetch("http://acnhapi.com/v1/sea/")
        const data = await response.json();

        setSeaCreatures(Object.values(data));
    }

    useEffect(() => {
        fetchSeaCreatures()
    }, [])

    const updateSCCaughtList = (seaCreature) => {
        if(caughtSeaCreatures.includes(seaCreature)){
            const updatedSeaCreature = [seaCreature, ...seaCreatures];
            const updatedCaughtSeaCreature = caughtSeaCreatures.filter((seaCreatureObject) => seaCreatureObject.name["name-EUen"] !== seaCreature.name["name-EUen"])
            setCaughtSeaCreatures(updatedCaughtSeaCreature);
            setSeaCreatures(updatedSeaCreature);
        } 
        else if (seaCreatures.includes(seaCreature)){
            const updatedCaughtSeaCreature = [...caughtSeaCreatures, seaCreature];
            const updatedSeaCreatures = seaCreatures.filter((seaCreatureObject) => seaCreatureObject.name["name-EUen"] !== seaCreature.name["name-EUen"])
            setCaughtSeaCreatures(updatedCaughtSeaCreature);
            setSeaCreatures(updatedSeaCreatures);
        }
    }

    return (
        <>
            <div className="caught_sea_creatures">
                <h3>Caught Sea Creatures</h3>

                <div className="list_caught_sea_creatures">
                    <ul>{caughtSeaCreatures.map((seaCreature) => (
                        <SeaCreature seaCreature={seaCreature} updateSCCaughtList={updateSCCaughtList} caught={true} />))}</ul>
                </div>
            </div>

            <div className="sea_creatures_to_catch">
                <h3>Sea Creatures Yet To Catch</h3>

                <div className="list_not_caught_sea_creatures">
                    <ul>{seaCreatures.map((seaCreature) => (
                        <SeaCreature seaCreature={seaCreature} updateSCCaughtList={updateSCCaughtList} caught={false} />))}</ul>
                </div>
            </div>
        </>
    )



};

export default SeaCreatureContainer;