'use client';

import { useState } from 'react';

function CatagoryFilter({ categories }) {
    const [SelectedCategory, setSelectedCategory] = useState('All');
    return (
        <div>
            <h2>Filter by Category</h2>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    
                >
                    {category}
                </button>
            ))}
        </div>
    );}

    export default CatagoryFilter;