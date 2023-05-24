import { useState, useEffect } from "react"
import Fish from "../components/Fish";

const FishContainer = () => {

    const [fishes, setFishes] = useState([])
    const [caughtFishes, setCaughtFishes] = useState([])

    const fetchFishes = async () => {
        const response = await fetch("http://acnhapi.com/v1/fish/")
        const data = await response.json();
        
        setFishes(Object.values(data));
    }

    useEffect(() => {
        fetchFishes()
    }, [])

    const updateFishCaughtList = (fish) => {
        if(caughtFishes.includes(fish)){
            const updatedFishes = [fish, ...fishes];
            const updatedCaughtFishes = caughtFishes.filter((fishObject) => fishObject.name["name-EUen"] !== fish.name["name-EUen"])
            setCaughtFishes(updatedCaughtFishes);
            setFishes(updatedFishes);
        } 
        else if (fishes.includes(fish)){
            const updatedCaughtFishes = [...caughtFishes, fish];
            const updatedFishes = fishes.filter((fishObject) => fishObject.name["name-EUen"] !== fish.name["name-EUen"])
            setCaughtFishes(updatedCaughtFishes);
            setFishes(updatedFishes);
        }
    }

    return (
        <>
            <div className="caught_fishes">
                <h3>Caught Fishes</h3>
                
                <div className="list_caught_fish">
                    <ul>{caughtFishes.map((fish) => (
                        <Fish fish={fish} updateFishCaughtList={updateFishCaughtList} caught={true} />))}</ul>
                </div>
            </div>

            <div className="fish_to_catch">
                <h3>Fishes Yet To Catch</h3>

                <div className="list_not_caught_fish">
                    <ul>{fishes.map((fish) => (
                        <Fish fish={fish} updateFishCaughtList={updateFishCaughtList} caught={false} />))}</ul>
                </div>
            </div>
        </>
    )



};

export default FishContainer;