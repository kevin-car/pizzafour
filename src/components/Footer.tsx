import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza, Facebook, Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full">
                <Pizza className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Pizz à Four</h3>
                <p className="text-gray-400">Pizzeria Artisanale</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Chez PIZZ' À FOUR, nous cuisinons avec passion des ingrédients de qualité : 
              viandes élevées en plein air, fruits et légumes bio, fromages fondants et sauces savoureuses.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100084884720518"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/pizz.a.four?igsh=MTVmeHE2MmRkOWJleA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:0615353017" className="hover:text-primary transition-colors">
                  06 15 35 30 17
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <div>
                  <p>31 Grande Rue</p>
                  <p>38080 Four, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Liens légaux */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informations légales</h4>
            <div className="space-y-2">
              <Link
                to="/mentions-legales"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                to="/cgv"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Conditions générales de vente
              </Link>
              <Link
                to="/politique-confidentialite"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Pizz à Four. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;