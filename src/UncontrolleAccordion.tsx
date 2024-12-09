import {useState} from "react";

export type AccordionPropsType = {
    title: string
    onClick?: () => void;
};

export function UncontrolleAccordion(props: AccordionPropsType) {
const [collapse, setCollapse] = useState(false);
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {setCollapse(!collapse)}}/>
            {!collapse && < AccordionBody />}
            {/*<button onClick={() => {setCollapse(!collapse)}}>Toggle</button>*/}
        </div>
    )


}

export default UncontrolleAccordion;

function AccordionTitle(props: AccordionPropsType) {
    return (
        <div>
            <h3 onClick={props.onClick}>{props.title}</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}