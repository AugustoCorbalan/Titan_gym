import { Card } from "./card";
import { dataProducts } from "./dataProducts";
export const ContainerCards = ()=>{

    return(
        <div className="container_cards">
            {dataProducts.map((product)=>{
                return(
                    <Card product={product}/>
                )
            })}
        </div>
    )
}