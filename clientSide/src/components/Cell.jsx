const Cell = (props) => {
    let content;
    if(props.content !== ""){
        content = (
            <p className={'text-center'}>{props.content}</p>
        )
    }
    let rtr;
    if(props.row === 0 && props.col === 0){
        rtr = (<div className={`aspect-square border-1 border-black bg-black flex flex-cols items-center justify-center`} id={`${props.id}:cell:${props.row}:${props.col}`} style={{"width":`${props.size}em`,"height":`${props.size}em`}}></div>)
    }
    else{
        rtr = (<div className={`aspect-square border-1 border-black bg-gray-200 flex flex-cols items-center justify-center`} id={`${props.id}:cell:${props.row}:${props.col}`} style={{"width":`${props.size}em`,"height":`${props.size}em`}}>
            {content}
        </div>)
    }
    return (
        <>
            {rtr}
        </>
    )
}

export default Cell
