import React from 'react';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Collecte des données personnelles</h2>
              <div className="text-gray-700">
                <p>
                  PIZZ À FOUR collecte des données personnelles dans le cadre de ses activités de restauration, notamment :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Nom, prénom</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse email (si fournie)</li>
                  <li>Adresse de livraison (si applicable)</li>
                  <li>Informations de commande</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Finalité du traitement</h2>
              <div className="text-gray-700">
                <p>Les données collectées sont utilisées pour :</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Traiter et livrer vos commandes</li>
                  <li>Vous contacter concernant votre commande</li>
                  <li>Améliorer nos services</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Base légale du traitement</h2>
              <div className="text-gray-700">
                <p>
                  Le traitement de vos données personnelles est basé sur :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>L'exécution du contrat de vente</li>
                  <li>Le respect d'obligations légales</li>
                  <li>Votre consentement (le cas échéant)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Destinataires des données</h2>
              <div className="text-gray-700">
                <p>
                  Vos données personnelles sont destinées à PIZZ À FOUR et peuvent être transmises à nos prestataires techniques 
                  (plateforme de commande en ligne) dans le strict cadre de l'exécution de nos services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Durée de conservation</h2>
              <div className="text-gray-700">
                <p>
                  Vos données personnelles sont conservées pendant la durée nécessaire à l'accomplissement des finalités pour lesquelles 
                  elles ont été collectées, et conformément aux obligations légales de conservation.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Vos droits</h2>
              <div className="text-gray-700">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité</li>
                  <li>Droit d'opposition</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous par téléphone au 06 15 35 30 17 ou par email à [À COMPLÉTER].
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Sécurité des données</h2>
              <div className="text-gray-700">
                <p>
                  PIZZ À FOUR met en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles 
                  contre la destruction, la perte, l'altération, la divulgation ou l'accès non autorisés.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Cookies</h2>
              <div className="text-gray-700">
                <p>
                  Notre site web peut utiliser des cookies pour améliorer votre expérience de navigation. 
                  Vous pouvez configurer votre navigateur pour refuser les cookies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Contact</h2>
              <div className="text-gray-700">
                <p>
                  Pour toute question concernant cette politique de confidentialité, contactez-nous :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Par téléphone : 06 15 35 30 17</li>
                  <li>Par email : [À COMPLÉTER]</li>
                  <li>Par courrier : 31 Grande Rue, 38080 Four, France</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Modifications</h2>
              <div className="text-gray-700">
                <p>
                  Cette politique de confidentialité peut être modifiée à tout moment. 
                  Les modifications seront publiées sur cette page avec la date de dernière mise à jour.
                </p>
                <p className="mt-4">
                  <strong>Dernière mise à jour :</strong> [À COMPLÉTER]
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;