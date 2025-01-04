import React from 'react';

interface TecnoProps {
    title: string;
    rating: string; // Mudei para number para melhor manipulação
    description: string;
    imgSrc: string;
}

export default function TecnologiasCard(props: TecnoProps) {
    return (
        <div className="product-card bg-white shadow-md rounded-lg p-4 m-4 max-w-sm">
            <h3 className="product-title text-xl font-bold">{props.title}</h3>
            <img
                src={props.imgSrc}
                alt={props.title}
                className="product-image h-16 mx-auto my-4"
            />
            <p className="product-rating text-gray-600">Rating: {props.rating} / 5</p>
            <p className="product-description text-gray-700">{props.description}</p>
        </div>
    );
}