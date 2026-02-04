export type Props = {
    /** The color of the Tag */
    color?: 'red' | 'orange' | 'pink' | 'blue'
    /** The text of the Tag */
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