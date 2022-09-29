import { useState } from 'react'
import React from 'react'
import Card from './SingleCard.js';

function Cards() {
  const [items, setItems] = useState([
    {id:1, img:'/images/img1.jpg', stat: "" },
    {id:1, img:'/images/img1.jpg', stat:""},
    {id:2, img:'/images/img2.jpg', stat:""},
    {id:2, img:'/images/img2.jpg', stat:""},
    {id:3, img:'/images/img3.jpg', stat:""},
    {id:3, img:'/images/img3.jpg', stat:""},
    {id:4, img:'/images/img4.jpeg', stat:""},
    {id:4, img:'/images/img4.jpeg', stat:""},
    {id:5, img:'/images/img5.jpg', stat:""},
    {id:5, img:'/images/img5.jpg', stat:""},
    {id:6, img:'/images/img6.jpg', stat:""},
    {id:6, img:'/images/img6.jpg', stat:""},
    {id:7, img:'/images/img7.jpg', stat:""},
    {id:7, img:'/images/img7.jpg', stat:""},
    {id:8, img:'/images/img8.png', stat:""},
    {id:8, img:'/images/img8.png', stat:""},
    {id:9, img:'/images/img9.jpg', stat:""},
    {id:9, img:'/images/img9.jpg', stat:""},
    {id:10, img:'/images/img10.jpg', stat:""},
    {id:10, img:'/images/img10.jpg', stat:""},
    {id:11, img:'/images/img11.jpg', stat:""},
    {id:11, img:'/images/img11.jpg', stat:""},
    {id:12, img:'/images/img12.jpg', stat:""},
    {id:12, img:'/images/img12.jpg', stat:""},
    {id:13, img:'/images/img13.jpg', stat:""},
    {id:13, img:'/images/img13.jpg', stat:""},
    {id:14, img:'/images/img14.jpg', stat:""},
    {id:14, img:'/images/img14.jpg', stat:""},
    {id:15, img:'/images/img15.jpg', stat:""},
    {id:15, img:'/images/img15.jpg', stat:""},
    {id:16, img:'/images/img16.jpg', stat:""},
    {id:16, img:'/images/img16.jpg', stat:""},
   

  ].sort(() => Math.random() - 0.5 ))

  const [prev, setPrev] = useState(-1)

  const handleClick= (id) => {
     items[id].stat = "active"
     setItems([...items])
  }
  return (
      <div className='container'>
        {items.map((item, index) => (
            <Card key={index} item={item} handleClick={handleClick} id={index}/>
        ))}
      
       
     </div>
  )
}

export default Cards