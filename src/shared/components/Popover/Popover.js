import React, { useState, useEffect, useRef } from 'react';
import "./style.scss"
function Popover(props)
{

    const { title, body, style, isHover, top, bottom, left, right } = props
    const [Position, setPosition] = useState({ top: 0, bottom: 0, left: 0, right: 0, });
    const [isClick, setIsClick] = useState(false);
    const popRef = useRef()
    const [isHovering, setIsHovering] = useState(false);
    useEffect(() =>
    {
        const pop = popRef.current;

       
        setPosition({ top: !top ? pop.offsetHeight : top, bottom: bottom ?? 0, left: left ?? 0, right: right ?? 0 })
    }, []);

    const timeoutRef = useRef(null);
    useEffect(() =>
    {
        if (!isHovering) {
            setIsClick(isHovering);
        }
        if (isHover && isHovering) {
            setIsClick(isHovering);
        }
    }, [isHovering]);
    const handleMouseEnter = () =>
    {
        clearTimeout(timeoutRef.current);
        setIsHovering(true);
    };

    const handleMouseLeave = () =>
    {
        timeoutRef.current = setTimeout(() => setIsHovering(false), 200);
    };
    return (
        <div className={`Popover ${isHover ? "is_hover" : ""}`} id='popover' ref={popRef}
            onClick={() => setIsClick(!isClick)}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
            <div className={`content_   ${isClick ? "is_click" : ""}`}
                style={{
                    top: Position.top,
                    bottom: Position.bottom,
                    left: Position.left,
                    right: Position.right,
                    ...style
                }}

            >
                {title && <div className='title'>
                    {title}
                </div>}
                <div className='body'>
                    {body}
                </div>
            </div>
            {props.children}
        </div>
    )
}


export default Popover;