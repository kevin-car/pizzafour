import React from 'react';
import { Leaf } from 'lucide-react';

interface PizzaCardProps {
  name: string;
  price: number;
  description: string;
  isVegetarian?: boolean;
  imageName?: string;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ 
  name, 
  price, 
  description, 
  isVegetarian = false,
  imageName 
}) => {
  // Génère le chemin de l'image basé sur le nom de la pizza
  const imagePath = imageName ? `/pizzas/${imageName}.jpg` : '/pizzas/default.jpg';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imagePath}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Si l'image n'existe pas, utilise une image par défaut
            (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {isVegetarian && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Leaf className="h-3 w-3" />
            Végétarien
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <span className="text-lg font-bold text-primary">
            {price}€
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PizzaCard;