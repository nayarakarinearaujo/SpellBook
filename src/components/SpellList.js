import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SpellList = () => {
  const [spells, setSpells] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://www.dnd5eapi.co/api/spells')
      .then(response => setSpells(response.data.results))
      .catch(error => console.error('Error fetching spells:', error));
  }, []);

  const filteredSpells = spells.filter(spell => spell.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        placeholder="Filter spells"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <ul>
        {filteredSpells.map(spell => (
          <li key={spell.index}>
            <Link to={`/spell/${spell.index}`}>{spell.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpellList;
