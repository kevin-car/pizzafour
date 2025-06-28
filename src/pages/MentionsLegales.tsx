import React from 'react';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Informations légales</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Dénomination sociale :</strong> PIZZ À FOUR</p>
                <p><strong>Forme juridique :</strong> [À COMPLÉTER]</p>
                <p><strong>Capital social :</strong> [À COMPLÉTER]</p>
                <p><strong>Numéro SIRET :</strong> [À COMPLÉTER]</p>
                <p><strong>Code APE :</strong> [À COMPLÉTER]</p>
                <p><strong>Numéro de TVA intracommunautaire :</strong> [À COMPLÉTER]</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Siège social</h2>
              <div className="text-gray-700">
                <p>31 Grande Rue</p>
                <p>38080 Four, France</p>
                <p>Téléphone : 06 15 35 30 17</p>
                <p>Email : [À COMPLÉTER]</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Directeur de la publication</h2>
              <div className="text-gray-700">
                <p><strong>Nom :</strong> [À COMPLÉTER]</p>
                <p><strong>Qualité :</strong> [À COMPLÉTER]</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Hébergement du site</h2>
              <div className="text-gray-700">
                <p><strong>Hébergeur :</strong> [À COMPLÉTER]</p>
                <p><strong>Adresse :</strong> [À COMPLÉTER]</p>
                <p><strong>Téléphone :</strong> [À COMPLÉTER]</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Propriété intellectuelle</h2>
              <div className="text-gray-700">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Limitation de responsabilité</h2>
              <div className="text-gray-700">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
                  mais peut toutefois contenir des inexactitudes ou des omissions. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
                  merci de bien vouloir le signaler par email, à l'adresse [À COMPLÉTER], en décrivant le problème de la manière la plus précise possible.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Loi applicable</h2>
              <div className="text-gray-700">
                <p>
                  Tout litige en relation avec l'utilisation du site est soumis au droit français. 
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de [À COMPLÉTER].
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;