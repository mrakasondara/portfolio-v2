const ToggleButton = ({setOpen, open}) =>{
    return(
        <button className="toggle-btn" onClick={()=> setOpen((prev) => !prev)}><span className="material-symbols-outlined">
            {open ? "Close" : "Menu"}
        </span></button>
    )
}
export default ToggleButton