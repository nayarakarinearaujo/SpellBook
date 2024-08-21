import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import spellImage from '../images/image-right.jpg'; // Substitua pelo caminho da imagem que deseja usar

const SpellDetails = () => {
  const { id } = useParams();
  const [spell, setSpell] = useState(null);

  useEffect(() => {
    axios.get(`https://www.dnd5eapi.co/api/spells/${id}`)
      .then(response => setSpell(response.data))
      .catch(error => console.error('Error fetching spell details:', error));
  }, [id]);

  if (!spell) return <div>Loading...</div>;

  return (
    <div className="spell-details-container">
      <div className="spell-image">
        <img src={spellImage} alt={spell.name} />
      </div>
      <div className="spell-info">
        <h1>{spell.name}</h1>
        <p><strong>Level:</strong> {spell.level}</p>
        <p><strong>School:</strong> {spell.school.name}</p>
        <p><strong>Casting Time:</strong> {spell.casting_time}</p>
        <p><strong>Range:</strong> {spell.range}</p>
        <p><strong>Components:</strong> {spell.components.join(', ')}</p>
        <p><strong>Duration:</strong> {spell.duration}</p>
        <p><strong>Description:</strong> {spell.desc.join(' ')}</p>
      </div>
    </div>
  );
};

export default SpellDetails;
