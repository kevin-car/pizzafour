import React from 'react';

const CGV = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions Générales de Vente</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Objet</h2>
              <div className="text-gray-700">
                <p>
                  Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre PIZZ À FOUR et ses clients 
                  dans le cadre de la vente de produits alimentaires et prestations de services de restauration.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Produits et services</h2>
              <div className="text-gray-700">
                <p>
                  PIZZ À FOUR propose la vente de pizzas, boissons et desserts. Les produits sont préparés sur place avec des ingrédients frais. 
                  La commande peut être effectuée sur place, par téléphone ou via notre plateforme de commande en ligne.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Prix</h2>
              <div className="text-gray-700">
                <p>
                  Les prix sont exprimés en euros toutes taxes comprises (TTC). Ils sont valables pour une commande au jour de la consultation du tarif. 
                  PIZZ À FOUR se réserve le droit de modifier ses prix à tout moment, mais s'engage à facturer les marchandises commandées aux prix indiqués lors de l'enregistrement de la commande.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Commande</h2>
              <div className="text-gray-700">
                <p>
                  Les commandes peuvent être passées :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Par téléphone au 06 15 35 30 17 (à partir de 16h)</li>
                  <li>Sur place au 31 Grande Rue, 38080 Four</li>
                  <li>Via notre plateforme de commande en ligne</li>
                </ul>
                <p className="mt-4">
                  Toute commande implique l'acceptation des présentes conditions générales de vente.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Paiement</h2>
              <div className="text-gray-700">
                <p>
                  Le paiement s'effectue lors de la remise de la commande. Les modes de paiement acceptés sont :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Espèces</li>
                  <li>Carte bancaire</li>
                  <li>[À COMPLÉTER - AUTRES MODES DE PAIEMENT]</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Livraison et retrait</h2>
              <div className="text-gray-700">
                <p>
                  Les commandes sont uniquement disponibles en retrait sur place à notre adresse :
                  31 Grande Rue, 38080 Four.
                </p>
                <p className="mt-2">
                  [À COMPLÉTER SI LIVRAISON DISPONIBLE]
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Horaires d'ouverture</h2>
              <div className="text-gray-700">
                <p>Nous sommes ouverts tous les soirs, sauf le lundi :</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Mardi au jeudi : 18h00 - 21h00</li>
                  <li>Vendredi et samedi : 18h00 - 21h30</li>
                  <li>Dimanche : 18h00 - 21h30</li>
                  <li>Lundi : Fermé</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Annulation et remboursement</h2>
              <div className="text-gray-700">
                <p>
                  [À COMPLÉTER - POLITIQUE D'ANNULATION ET DE REMBOURSEMENT]
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Réclamations</h2>
              <div className="text-gray-700">
                <p>
                  Toute réclamation doit être adressée dans les plus brefs délais à PIZZ À FOUR par téléphone au 06 15 35 30 17 
                  ou par email à [À COMPLÉTER].
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Droit applicable</h2>
              <div className="text-gray-700">
                <p>
                  Les présentes conditions générales de vente sont soumises au droit français. 
                  Tout litige sera soumis aux tribunaux compétents.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGV;