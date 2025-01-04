'use client';

import React, { useState, useEffect } from 'react';
import tecnologias from '@app/data/tecnologias.json';
import TecnologiaCard from '@app/components/cardTecnologias/TecnologiasCard';

export default function Tecnologias() {
    return (
        <main className="bg-gray-100 min-h-screen p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Tecnologias</h1>
            <div className="cards-container flex flex-wrap justify-center">
                {tecnologias.map((tech, index) => (
                    <TecnologiaCard
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