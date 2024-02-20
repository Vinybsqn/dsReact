import React, { useState } from 'react';
import './ajout.css';

const Ajout = () => {
    const [titre, setTitre] = useState('');
    const [stock, setStock] = useState('');
    const [livres, setLivres] = useState(JSON.parse(localStorage.getItem('livres')) || []);

    const handleAdd = () => {
        const newLivres = [...livres, { titre, stock: parseInt(stock) }];
        setLivres(newLivres);
        localStorage.setItem('livres', JSON.stringify(newLivres));
        setTitre('');
        setStock('');
    };

    return (
        <section className="ajout">
            <div className="container">
                <h1>Ajout de livre</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="titre">Titre</label>
                        <input type="text" id="titre" value={titre} onChange={(e) => setTitre(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="stock">Stock</label>
                        <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} />
                    </div>
                    <button onClick={handleAdd}>Ajouter</button>
                </form>
            </div>
        </section>
    );
}

export default Ajout;