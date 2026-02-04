type Props = {
    color?: 'red' | 'orange' | 'pink' | 'blue'
    text: string
}

const Tag = ({ color = 'orange', ...props }: Props) => {
    return (
        <div
            style={{
                background: color,
                height: 30,
                borderRadius: 8,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 12px',
                whiteSpace: 'nowrap'
            }}
        >

            {props.text}
        </div>
    )
}

export default Tag