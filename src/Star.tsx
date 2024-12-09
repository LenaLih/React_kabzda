type StarType = {
    selected: boolean,
    setValueRating: () => void

}

export function Star(props: StarType) {

    return (
        <span onClick={() =>{ props.setValueRating()}}>
            {props.selected ? <b>Star </b> : " Star"}
        </span>


    )
}

export default Star;