import React, {useState} from 'react';
import './App.css';
import Rating from "./Rating";
import Accordion from "./Accordion";
import Swich from "./Swich";
import UncontrolleAccordion from "./UncontrolleAccordion";
import UncontrolleRating from "./UncontrolleRating";
import ControllSwich from "./ControllSwich";

function App() {
    const [accordion, setAccordion] = useState<boolean>(false);
    const [onOff, setOnOff] = useState<boolean>(false);
    return (
        <div className="App">
            {/*<Rating value={3}/>*/}
            <UncontrolleRating />
            <Accordion title={"menu"} collapset={accordion} onChange={() => setAccordion(!accordion)} />
            <UncontrolleAccordion title={"User"}/>
            <Swich/>
            <ControllSwich onChange={ setOnOff } onOff={onOff}/>
        </div>
    );
}

export default App;
