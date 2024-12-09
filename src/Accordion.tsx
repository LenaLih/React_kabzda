export type AccordionPropsType = {
    title: string
    collapset?: boolean
    onChange?: () => void
};

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange} />
            {!props.collapset && < AccordionBody />}
        </div>
    )


}

export default Accordion;
type AccordionTitleType = {
    title: string
    onChange?: () => void
}
function AccordionTitle(props: AccordionTitleType) {

    return (
        <div>
            <h3 onClick={props.onChange}>{props.title}</h3>
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