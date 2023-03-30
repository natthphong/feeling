import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './list.css'
import Post from '../post/Post';
export default function List() {

    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("/post/view");
                console.log(res.data)
                setData(res.data)
          } catch (error) {
            alert("api not responding");
          }
        };
        fetchData();
      }, []);
    

  return (
    <div className='Listcon'>

        {data &&
            <div className='container1'>
            {data.map((item)=><Post object={item} key={item.id}/>)}
            </div>
        }
    </div>
  )
}
