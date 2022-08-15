function ItemListContainer({Mensaje}) {
    const estilos={
        fontSize:'20px'
    }
    return (
        <div>
            <span style={estilos}>{Mensaje}</span>
        </div>
    )
}
export default ItemListContainer