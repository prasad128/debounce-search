import React, {useState, useCallback} from 'react'
import axios from 'axios'
import {debounce} from 'lodash'

function App() {
  const [text, setText] = useState('')
  const [data, setData] = useState([])

  const someApiFunction = async(data) => {
    console.log({data});
    try {
          const response = await axios.get(`https://609cd6ba04bffa001792d638.mockapi.io/books?search=${data}`)
          const newdata = response.data
          setData(newdata)
        } catch (error) {
          console.log({error});
        }
  }

  //debounce
  const delayedHandleChange = useCallback(debounce(someApiFunction, 500), []);
  const handlePause = (e) => {
    setText(e.target.value)
    delayedHandleChange(e.target.value);
  }
console.log({text});
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-4">
     <form>
     <input type="text" value={text} onChange={handlePause} name="" id="" />
     </form>
     <div className="my-4 space-y-2">
       {
         data.length > 0 && data.map(item => {
           return (
             <div key={item.id} className="max-w-xs border">
               <div className="">
                <img src={item.book_image} alt="" />
               </div>
               <div className="px-2 py-1 text-xl font-semibold">
                 {item.name}
               </div>
               <div className="flex items-center justify-between px-2 py-1">
                 <div className="">{item.book_author}</div>
                 <div className="">{item.price}</div>
               </div>
             </div>
           )
         }) 
       }
     </div>
    </div>
  );
}
export default App;

