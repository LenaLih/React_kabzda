
type ControllSwichType = {
    onChange: (onOff: boolean) => void
    onOff: boolean
}

export function ControllSwich(props: ControllSwichType) {

const onClicked = () => {props.onChange(true)}
const offClicked = () => {props.onChange(false)}
    return (
        <div className="box">
            <div className={`boxOnOff ${props.onOff ? "green" : ''}`} onClick={onClicked}>on
            </div>
            <div className={`boxOnOff ${!props.onOff ? "red" : ''}`} onClick={offClicked}>off
            </div>
            <div className={`boll ${!props.onOff ? "red" : "green"}`}></div>
        </div>
    )

}

export default ControllSwich;