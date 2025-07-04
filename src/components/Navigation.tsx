import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Pizza, Menu, X, Phone, Clock, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      // Sur la page d'accueil, on fait défiler vers la section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Sur les autres pages, on redirige vers l'accueil avec le hash
      navigate(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Banderolle en haut */}
      <div className="bg-primary text-white py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Prise de commandes à partir de 16h</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:0615353017" className="hover:underline font-bold">
                06 15 35 30 17
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Retrait : 31 GRANDE RUE, 38080 FOUR, France</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
            <a href="https://pizzafour.fr/">
              <img src="https://www.four38.fr/wp-content/uploads/2025/04/PiizAFour.png" alt="Logo de Pizz à Four" width="150" />
            </a>
            </Link>

            {/* Menu desktop */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('horaires')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Horaires
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Menu
              </button>
              <a
                href="https://pizzafour.zelty-order.fr/restaurants/7306"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Commander en ligne
              </a>
            </div>

            {/* Menu mobile */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Menu mobile déroulant */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('horaires')}
                  className="text-left text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  Horaires
                </button>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-left text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  Menu
                </button>
                <a
                  href="https://pizzafour.zelty-order.fr/restaurants/7306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Commander en ligne
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;