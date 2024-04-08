export default function Button(props) {
    return (
        <button onClick={e => props.onClick(e)}>{props.title}</button>
    )
}