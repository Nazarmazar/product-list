import React, {useState} from 'react';
import "./modal.css"
import {useHistory} from "react-router-dom";
const Modal = ({active,setActive}) => {
    const [name,setName] = useState('Lorem ipsum')
    const [imageUrl,setImageUrl] = useState('Lorem ipsum')
    const [count, setCount] = useState('mario')
    const [weight,setWeight] = useState('')
    const [colour,setColour] = useState('')

    const [description,setDescription] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        const products = {name, imageUrl,count,weight,colour,description}
        fetch(' http://localhost:8000/products', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify((products))


        }).then(() => {
            console.log('new product added')
            setIsPending(false)
            history.push('/')
        })

    }
    return (
        <div className={active ? "modal active" : "modal"} onClick={()=> setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className='create'>
                    <h2>Add a new product</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Image Url</label>
                        <textarea
                            required
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}>
                </textarea>
                        <label>Count</label>
                        <textarea
                            required
                            value={count}
                            onChange={(e) => setCount(e.target.value)}>
                </textarea>
                        <label>Weight</label>
                        <textarea
                            required
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}>
                </textarea>
                        <label>Colour</label>
                        <textarea
                            required
                            value={colour}
                            onChange={(e) => setColour(e.target.value)}>
                </textarea>
                        <label>Description</label>
                        <textarea
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}>
                </textarea>

                        <button onClick={()=> setActive(false)} >Add</button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;