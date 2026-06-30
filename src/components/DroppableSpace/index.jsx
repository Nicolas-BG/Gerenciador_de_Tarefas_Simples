import {useDroppable} from '@dnd-kit/react';

function DroppableSpace({ id, children, vertical, horizontal, backcolor }) {
    const { ref } = useDroppable({
        id,
    });

    const style = {
        width: horizontal, 
        height: vertical,
        backgroundColor: backcolor
    }

    return (
        <div ref={ref} style={style}>
            {children}
        </div>
    )

}

export default DroppableSpace;