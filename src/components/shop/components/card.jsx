import { useState } from "react";

export const Card = ({product})=>{
    const {name, image, characteristics} = product;
    const {price, fabric, gender, age, sizes} = characteristics;
    const [sizeSelected, setSizeSelected] = useState('');
    const [rotate, setRotate] = useState(false);
    const [statusAlert, setStatusAlert] = useState(false); 

    const handlerClickBuy = ()=>{
        if (sizeSelected != '' || sizes == 'Unico'){
            setRotate(true);
        }else{
            setStatusAlert(true);
            setTimeout(()=>setStatusAlert(false), 2000);
        }
    }
    const handlerClickConfirmBuy = ()=>{
        if (sizeSelected != '' || sizes == 'Unico' ){
            const text = `Hola Titan! 👋👋%0AQuiero realizar la compra de:%0A- Producto: ${name}%0A- Talle: ${sizeSelected}%0A- Genero: ${gender}%0A- Edad: ${age}%0A%0A¡Gracias! 🙌`;
            window.open(`https://wa.me/543547579422?text=${text}`, "_blank")
        }else{
            alert("Seleccione un talle")
        }
    }

    return(
        <>
            <div className={rotate? "container_card container_rotate": "container_card"}>
                <div className="container_front-end">
                    <h2 className="title_mobile">{name}</h2>
                    <div className="container_image">
                        <img src={image} alt="Imagen del producto" />
                    </div>
                    <div className="container_data">
                        <h2 className="title_desktop">{name}</h2>
                        <div className='container_description'>
                            <div className='column1'>
                                <h3>Caracteristicas:</h3>
                                <span>PRECIO: {`$${price}`}</span>
                                <span>TIPO DE TELA: {fabric} </span>
                                <span>GENERO: {gender}</span>
                                <span>EDAD: {age}</span>
                            </div>
                            <div className={statusAlert? "container_alertSize" : "container_alertSize_None"}>
                                <span>¡Por favor seleccione un talle!</span>
                            </div>
                            <div className='column2'>
                                    {
                                        sizes == 'Unico' ?
                                        <></> :
                                        <div>
                                            <h3>Seleccionar talle</h3>
                                            <div className='container_size_buttons'>
                                                {sizes.map((size)=>{
                                                    return(
                                                        <button 
                                                            id={size} 
                                                            className={(sizeSelected == size)? 'button_selected' : ''}
                                                            onClick={()=>setSizeSelected(size)}
                                                        >
                                                            {size}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    }
                                <button className="callToAction" onClick={handlerClickBuy}>Comprar</button>
                            </div>
                        </div>
                        <span className="information_message">* Tiene una demora de 15 días.<br/>* Al comprar se seña con el 50% del precio publicado.</span>
                    </div>
                </div>
                <div className="container_message_buy">
                    <h2> Confirmación de compra:</h2>
                    <div className="container_1">
                        <div className="container_characteristics">
                            <div className="container_columns">
                                <div className="column1">
                                    <span>{name}</span>
                                    {
                                        sizes == 'Unico'?
                                        <></> :
                                        <span>TALLE: {sizeSelected}</span>
                                    }
                                    <span>GENERO: {gender}</span>
                                    <span>EDAD: {age}</span>
                                </div>
                                <div className="column2">
                                    <img src={image} alt="Imagen del producto"/>
                                </div>
                            </div>
                            <span className="price">PRECIO: {`$${price}`}</span>
                        </div>
                    </div>
                    <div className="container_2">
                        <div className="container_message">
                            <span>
                                {`Se redirigirá a Whatsapp para notificar la compra a 'TITAN' y se le proporcionará
                                el Alias para realizar la transferencia del 50% ($${price/2}) para la seña del producto.`}
                                <br/>
                                {`Al momento de retirar el producto deberá abonar el 50% restante ($${price/2}).`}
                                <br/><br/>
                                {`* ¡Pronto podrás realizar todo desde esta página web!`}
                            </span>
                        </div>
                        <div className="container_buttons">
                            <button className="callToAction confirm_button" onClick={handlerClickConfirmBuy}>Confirmar</button>
                            <button className="callToAction cancel_button" onClick={()=>setRotate(false)}>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}