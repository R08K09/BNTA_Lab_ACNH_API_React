import { useState, useEffect } from "react"
import Fossil from "../components/Fossil";

const FossilContainer = () => {

    const [fossils, setFossils] = useState([])
    const [foundFossils, setFoundFossils] = useState([])

    const fetchFossils = async () => {
        const response = await fetch("http://acnhapi.com/v1/fossils/")
        const data = await response.json();
        
        setFossils(Object.values(data));
    }

    useEffect(() => {
        fetchFossils()
    }, [])

    const updateFossilFoundList = (fossil) => {
        if(foundFossils.includes(fossil)){
            const updatedFossils = [fossil, ...fossils];
            const updatedFoundFossils = foundFossils.filter((fossilObject) => fossilObject.name["name-EUen"] !== fossil.name["name-EUen"])
            setFoundFossils(updatedFoundFossils);
            setFossils(updatedFossils);
        } 
        else if (fossils.includes(fossil)){
            const updatedFoundFossils = [...foundFossils, fossil];
            const updatedFossils = fossils.filter((fossilObject) => fossilObject.name["name-EUen"] !== fossil.name["name-EUen"])
            setFoundFossils(updatedFoundFossils);
            setFossils(updatedFossils);
        }
    }

    return (
        <>
            <div className="found_fossils">
                <h3>Dug Up Fossils</h3>
                
                <div className="list_found_fossils">
                    <ul>{foundFossils.map((fossil) => (
                        <Fossil fossil={fossil} updateFossilFoundList={updateFossilFoundList} caught={true} />))}</ul>
                </div>
            </div>

            <div className="fossils_to_find">
                <h3>Bugs Yet To Catch</h3>

                <div className="list_not_found_fossils">
                    <ul>{fossils.map((fossil) => (
                        <Fossil fossil={fossil} updateFossilFoundList={updateFossilFoundList} caught={false} />))}</ul>
                </div>
            </div>
        </>
    )
};

export default FossilContainer;