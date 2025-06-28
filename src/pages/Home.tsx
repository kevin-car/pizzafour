import React from 'react';
import { Star, ExternalLink, Clock, Phone } from 'lucide-react';
import Carousel from '../components/Carousel';
import PizzaCard from '../components/PizzaCard';

const Home = () => {
  // Images pour le carousel principal (vous pouvez ajouter des images dans public/carousel/)
  const carouselImages = [
    'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  // Images pour le carousel de la terrasse
  const terrasseImages = [
    'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1581566/pexels-photo-1581566.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const pizzasBaseTomate = [
    { name: 'LA MARGUARITA', price: 10, description: 'Mozza fior di latte, basilic frais, origan', isVegetarian: true, imageName: 'la-marguarita' },
    { name: 'LA CLASSIQUE', price: 12.5, description: 'Mozza fior di latte, jambon, origan', imageName: 'la-classique' },
    { name: 'LA 4 FROMAGE', price: 12.5, description: 'Mozza fior di latte, ricotta, gorgonzolla chèvre, origan', isVegetarian: true, imageName: 'la-4-fromage' },
    { name: "L'AUBERGINE", price: 11, description: 'Mozza fior di latte, aubergines grillées marinées, origan', isVegetarian: true, imageName: 'l-aubergine' },
    { name: 'LA FALAFEL', price: 12.5, description: 'Mozza fior di latte, falafel maison, choux rouge, crème aux herbes', isVegetarian: true, imageName: 'la-falafel' },
    { name: "L'ANCHOIS", price: 11.5, description: 'Mozza fior di latte, anchoix, origan', imageName: 'l-anchois' },
    { name: 'LA THON', price: 13.5, description: 'Mozza fior di latte, thon frais mariné, ciboulette, graine de sésame', imageName: 'la-thon' },
    { name: 'LA REINE', price: 14, description: 'Mozza fior di latte, jambon, champignons, origan', imageName: 'la-reine' },
    { name: 'LA CALZONE', price: 14.5, description: 'Mozza fior di latte, jambon, champignon, oeuf, origan', imageName: 'la-calzone' },
    { name: "L'ITALIENNE", price: 14.5, description: 'Mozza fior di latte, jambon cru de bœuf, burrata, pesto, roquette, crème de basilic', imageName: 'l-italienne' },
    { name: 'LA CHORIZO', price: 13, description: 'Mozza fior di latte, chorizo, oignons confits, origan', imageName: 'la-chorizo' },
    { name: 'LA BURGER', price: 13.5, description: 'Mozza fior di latte, viande hachée, cheddar, oignons confits, graines de sésame', imageName: 'la-burger' },
    { name: 'À LA BROCHE', price: 14, description: 'Mozza fior di latte, viande à la broche de poulet et veau, crème aux herbes, oignons rouges', imageName: 'a-la-broche' },
  ];

  const pizzasBaseCreme = [
    { name: "L'HAWAIENNE", price: 13.5, description: 'Mozza fior di latte, crème de curry, poulet, ananas, oignon rouge, coco rapée', imageName: 'l-hawaienne' },
    { name: 'LA SAVOYARDE', price: 13.5, description: 'Mozza fior di latte, lardons, oignons confits, pomme de terre, reblochon, origan', imageName: 'la-savoyarde' },
    { name: 'LA SAUMON', price: 13.5, description: 'Mozza fior di latte, saumon fumé, ricotta, origan', imageName: 'la-saumon' },
    { name: 'LA MORTADELLE', price: 14.5, description: 'Mozza fior di latte, crème de pistache, mortadelle, burrata', isVegetarian: true, imageName: 'la-mortadelle' },
    { name: 'CHÈVRE MIEL', price: 12.5, description: 'Mozza fior di latte, chèvre, miel, pignons de pins, origan', isVegetarian: true, imageName: 'chevre-miel' },
  ];

  const horaires = [
    { jour: 'LUNDI', horaire: 'Fermé', isClosed: true },
    { jour: 'MARDI', horaire: '18:00 - 21:00', isClosed: false },
    { jour: 'MERCREDI', horaire: '18:00 - 21:00', isClosed: false },
    { jour: 'JEUDI', horaire: '18:00 - 21:00', isClosed: false },
    { jour: 'VENDREDI', horaire: '18:00 - 21:30', isClosed: false },
    { jour: 'SAMEDI', horaire: '18:00 - 21:30', isClosed: false },
    { jour: 'DIMANCHE', horaire: '18:00 - 21:00', isClosed: false },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Pizz à Four
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 font-light animate-slide-up">
            BIENVENUE
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed animate-fade-in">
              Chez PIZZ' À FOUR, nous cuisinons avec passion des ingrédients de qualité : 
              viandes élevées en plein air, fruits et légumes bio, fromages fondants et sauces savoureuses. 
              Chaque bouchée reflète notre engagement pour le goût et le respect de la nature.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Carousel 
            images={carouselImages} 
            className="h-96 md:h-[500px]"
          />
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 inline-block hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Les avis de nos clients</h3>
            <p className="text-gray-600 mb-6">
              Découvrez ce que pensent nos clients de nos pizzas artisanales
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold"
            >
              Voir tous les avis
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Horaires et Terrasse */}
      <section id="horaires" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Carousel terrasse */}
            <div>
              <Carousel 
                images={terrasseImages} 
                className="h-80 md:h-96"
              />
            </div>

            {/* Horaires */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Heures d'ouvertures</h2>
              <p className="text-lg text-primary font-semibold mb-8">
                NOUS SOMMES OUVERTS TOUS LES SOIRS, SAUF LE LUNDI
              </p>
              
              <div className="space-y-4 mb-8">
                {horaires.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-900">{item.jour}</span>
                    <span className={`font-medium ${item.isClosed ? 'text-red-600' : 'text-green-600'}`}>
                      {item.horaire}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-gray-800 font-medium">
                  Pour éviter les délais d'attente, commandez dès 16h au{' '}
                  <a href="tel:0615353017" className="text-primary font-bold hover:underline">
                    06 15 35 30 17
                  </a>{' '}
                  ou sur place
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">CARTE</h2>
          </div>

          {/* Pizzas Base Tomate */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center bg-primary text-white py-4 rounded-lg">
              BASE TOMATE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizzasBaseTomate.map((pizza, index) => (
                <PizzaCard key={index} {...pizza} />
              ))}
            </div>
          </div>

          {/* Pizza du moment */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-secondary to-primary text-white p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">PIZZA DU MOMENT</h3>
              <p>Consultez votre Pizzaiolo</p>
            </div>
          </div>

          {/* Pizzas Base Crème */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center bg-secondary text-white py-4 rounded-lg">
              BASE CRÈME
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizzasBaseCreme.map((pizza, index) => (
                <PizzaCard key={index} {...pizza} />
              ))}
            </div>
          </div>

          {/* Autres items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Enfant */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">MENU ENFANT</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>PIZZA ENFANT + JUS DE FRUIT BIO</span>
                  <span className="font-bold">8.5€</span>
                </div>
                <p className="text-sm text-gray-600">Pizza classique</p>
              </div>
            </div>

            {/* Boissons */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">BOISSONS</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>SODA 33CL</span>
                  <span className="font-bold">2€</span>
                </div>
                <div className="flex justify-between">
                  <span>JUS DE FRUIT</span>
                  <span className="font-bold">2.5€</span>
                </div>
                <div className="flex justify-between">
                  <span>SODA 1.5L</span>
                  <span className="font-bold">4€</span>
                </div>
                <div className="flex justify-between">
                  <span>EAU 1.5L</span>
                  <span className="font-bold">2€</span>
                </div>
              </div>
            </div>

            {/* Desserts */}
            <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">DESSERTS</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>TIRAMISU</span>
                  <span className="font-bold">5€</span>
                </div>
                <div className="flex justify-between">
                  <span>DESSERT DU MOMENT</span>
                  <span className="font-bold">5€</span>
                </div>
                <p className="text-sm text-gray-600">CONSULTEZ LE PIZZAIOLO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localisation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Adresse</h2>
            <p className="text-xl text-gray-600">31 Grande Rue, 38080 Four</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.123456789!2d5.123456!3d45.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z31%20Grande%20Rue%2C%2038080%20Four%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Pizz à Four"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Vidéo de présentation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Découvrez notre savoir-faire</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <video
              controls
              className="w-full h-auto"
              poster="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800"
            >
              <source src="https://pizzafour.fr/wp-content/uploads/2025/03/WhatsApp-Video-2025-03-15-at-12.16.47.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commander ?</h2>
          <p className="text-xl mb-8">
            Commandez dès maintenant et savourez nos pizzas artisanales !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0615353017"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              06 15 35 30 17
            </a>
            <a
              href="https://pizzafour.zelty-order.fr/restaurants/7306"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Commander en ligne
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;