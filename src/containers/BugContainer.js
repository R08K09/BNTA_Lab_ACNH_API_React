import { useState, useEffect } from "react"
import Bug from "../components/Bug";

const BugContainer = () => {

    const [bugs, setBugs] = useState([])
    const [caughtBugs, setCaughtBugs] = useState([])

    const fetchBugs = async () => {
        const response = await fetch("http://acnhapi.com/v1/bugs/")
        const data = await response.json();
        
        setBugs(Object.values(data));
    }

    useEffect(() => {
        fetchBugs()
    }, [])

    const updateBugCaughtList = (bug) => {
        if(caughtBugs.includes(bug)){
            const updatedBugs = [bug, ...bugs];
            const updatedCaughtBugs = caughtBugs.filter((bugObject) => bugObject.name["name-EUen"] !== bug.name["name-EUen"])
            setCaughtBugs(updatedCaughtBugs);
            setBugs(updatedBugs);
        } 
        else if (bugs.includes(bug)){
            const updatedCaughtBugs = [...caughtBugs, bug];
            const updatedBugs = bugs.filter((bugObject) => bugObject.name["name-EUen"] !== bug.name["name-EUen"])
            setCaughtBugs(updatedCaughtBugs);
            setBugs(updatedBugs);
        }
    }

    return (
        <>
            <div className="caught_bugs">
                <h3>Caught Bugs</h3>
                
                <div className="list_caught_bugs">
                    <ul>{caughtBugs.map((bug) => (
                        <Bug bug={bug} updateBugCaughtList={updateBugCaughtList} caught={true} />))}</ul>
                </div>
            </div>

            <div className="bug_to_catch">
                <h3>Bugs Yet To Catch</h3>

                <div className="list_not_caught_bugs">
                    <ul>{bugs.map((bug) => (
                        <Bug bug={bug} updateBugCaughtList={updateBugCaughtList} caught={false} />))}</ul>
                </div>
            </div>
        </>
    )
};

export default BugContainer;