
function Box ({boxes}){
    const list = boxes.map((box) => {
        return(
            <div key={box.id} 
            className ="card"
            style = {
                {
                    backgroundColor: box.bgColor
                }
            }
            >
               
                <h3>{box.title}</h3>
                <h4>{box.subtitle}</h4>
                <h5>{box.desc}</h5>
            </div>
        )
    });

    return (
        <>
        {list}
        </>
    )

}

export default Box