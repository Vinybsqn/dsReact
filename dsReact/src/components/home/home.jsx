import React, { useState } from 'react';
import './home.css';

const Home = () => {

    const [livres, setLivres] = useState(JSON.parse(localStorage.getItem('livres')) || []);
    const handleAdd = (index) => {
        const newLivres = [...livres];
        newLivres[index].stock++;
        setLivres(newLivres);
        localStorage.setItem('livres', JSON.stringify(newLivres));
    };
    const handleRemove = (index) => {
        const newLivres = [...livres];
        if (newLivres[index].stock > 0) {
            newLivres[index].stock--;
            setLivres(newLivres);
            localStorage.setItem('livres', JSON.stringify(newLivres));
        }
    };

    return (
        <section className="home">
            <div className="container">
                <h1>Stock de livres</h1>
                <ul>
                    {livres.map((livre, index) => (
                        <li key={index} style={{ backgroundColor: livre.stock === 0 ? 'lightgray' : 'lightgreen' }}>
                            {livre.titre} - {livre.stock} livre(s) en stock
                            <button onClick={() => handleAdd(index)}>+</button>
                            <button onClick={() => handleRemove(index)}>-</button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Home;