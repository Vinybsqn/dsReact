import React, { useState } from 'react';
import './ajout.css';

const Ajout = () => {
    const [titre, setTitre] = useState('');
    const [stock, setStock] = useState('');
    const [livres, setLivres] = useState(JSON.parse(localStorage.getItem('livres')) || []);
    const [error, setError] = useState('');

    const handleAdd = () => {
        if (titre && stock) {
            const newLivre = {
                id: Date.now(),
                titre,
                stock
            };

            setLivres([...livres, newLivre]);
            localStorage.setItem('livres', JSON.stringify([...livres, newLivre]));
            setTitre('');
            setStock('');
            setError('');
        } else {
            setError('Veuillez remplir tous les champs');
        }
    }

    return (
        <div className="ajout">
            <h1>Ajout de livre</h1>
            <div>
                <input
                    type="text"
                    placeholder="Titre"
                    value={titre}
                    onChange={(e) => setTitre(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
                <button onClick={handleAdd}>Ajouter</button>
                {error && <p>{error}</p>}
            </div>
        </div>
    )
}

export default Ajout;