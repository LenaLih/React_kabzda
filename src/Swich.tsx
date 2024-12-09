import {useState} from "react";

export function Swich() {
    const [on, setOn] = useState(false);

    return (
        <div className="box">
            <div className={`boxOnOff ${on ? "green" : ''}`} onClick={() => {
                setOn(true)
            }}>on
            </div>
            <div className={`boxOnOff ${!on ? "red" : ''}`} onClick={() => {
                setOn(false)
            }}>off
            </div>
            <div className={`boll ${!on ? "red" : "green"}`}></div>
        </div>
    )

}

export default Swich;