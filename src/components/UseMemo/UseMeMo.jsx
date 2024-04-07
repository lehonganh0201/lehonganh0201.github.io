import { useMemo, useRef, useState } from "react";

const UseMemo = () =>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState(0);
    const [product,setProduct] = useState([]);
    const Total = useMemo(() => {
        return product.reduce((pre,cur) => pre + +cur.price,0)
    },[product])

    const handlerProduct = () =>{
        const pd = {
            name,price
        }

        setProduct([...product, pd]);
    
    }

    const changeName = (event) =>{
        setName(event.target.value)
    }

    const changePrice = (event) =>{
        setPrice(event.target.value)
    }

    return(
        <div>
            <input placeholder="name" onChange={changeName}/>
            <input placeholder="price" onChange={changePrice}/>
            <button type="submit" onClick={handlerProduct}>Submit</button>
            <p>Total: {Total}</p>
            {
                product.length > 0 && product.map((item,index)=>(
                    <div key={index}>
                        <p>{`${item.name} - ${item.price}`}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default UseMemo;