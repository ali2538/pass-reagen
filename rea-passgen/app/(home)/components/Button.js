export default function Button(props) {
    return (
        <button disabled={props.disabled} onClick={e => props.onClick(e)}>{props.title}</button>
    )
}