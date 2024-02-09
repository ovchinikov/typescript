interface ContentProps {
    parts: {
        name: string;
        exerciseCount: number;
    }[]
}



const Content = ({parts}:ContentProps) => {
    return (
        <div>
            {parts.map(part => <p key={part.name}>{part.name} {part.exerciseCount}</p>)}
        </div>
    )
}

export default Content;