'use client';

import React, { useState, useEffect } from 'react';
import tecnologias from '../data/tecnologias.json';
import TecnologiasCard from '../components/cardTecnologias/TecnologiasCard';

export default function Tecnologias() {
    return (
        <main className="bg-gray-100 min-h-screen p-6">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Tecnologias</h1>
            <div className="cards-container">
                {tecnologias.map((tech, index) => (
                    <TecnologiasCard
                        key={index}
                        title={tech.title}
                        rating={`${tech.rating} ⭐`}
                        description={tech.description}
                        imgSrc={tech.image}
                    />
                ))}
            </div>
        </main>
    );
}