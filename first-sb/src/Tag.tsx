type Props = {
    text: string
}

const Tag = (props: Props)=>{
    return (
        <div>
            {props.text}
        </div>
    )
}

export default Tag