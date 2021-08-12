import React, { useEffect, useState } from 'react';
export default function List({getItems}){
    const [items, setItems] = useState([])
    useEffect(()=>{
        console.log("list comp")
        setItems(getItems())
    },[getItems])

    return items.map(item => <div key={item}>{item}</div>)
}