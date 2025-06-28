# Pizz à Four - Site Web

Site web professionnel pour la pizzeria "Pizz à Four" située à Four, France.

## Fonctionnalités

- **Site multi-page** avec navigation fluide
- **Gestion dynamique des images** via dossiers
- **Design responsive** optimisé pour tous les appareils
- **Carousels interactifs** pour photos et terrasse
- **Menu complet** avec photos de pizzas
- **Intégration Google Maps** et vidéo de présentation
- **Pages légales** obligatoires (Mentions légales, CGV, Politique de confidentialité)
- **Liens réseaux sociaux**

## Structure des dossiers d'images

### `/public/pizzas/`
Placez les photos de pizzas dans ce dossier avec les noms suivants :
- `marguarita.jpg`
- `classique.jpg`
- `4-fromage.jpg`
- `aubergine.jpg`
- `falafel.jpg`
- `anchois.jpg`
- `thon.jpg`
- `reine.jpg`
- `calzone.jpg`
- `italienne.jpg`
- `chorizo.jpg`
- `burger.jpg`
- `broche.jpg`
- `hawaienne.jpg`
- `savoyarde.jpg`
- `saumon.jpg`
- `mortadelle.jpg`
- `chevre-miel.jpg`

### `/public/carousel/`
Ajoutez vos photos principales de la pizzeria dans ce dossier. Les images seront automatiquement intégrées au carousel principal.

### `/public/terrasse/`
Ajoutez les photos de votre terrasse dans ce dossier. Elles apparaîtront automatiquement dans le carousel de la section horaires.

## Personnalisation

### Informations à compléter

Les éléments marqués `[À COMPLÉTER]` dans les pages légales doivent être remplis avec vos informations spécifiques :

1. **Mentions légales** : SIRET, capital social, etc.
2. **CGV** : Politique d'annulation, modes de paiement additionnels
3. **Politique de confidentialité** : Adresse email de contact

### Couleurs

Le site utilise votre palette de couleurs :
- **Primaire** : #F43B00 (Rouge-orange)
- **Secondaire** : #F5521E (Orange)
- **Accent** : Blanc

## Technologies utilisées

- **React 18** avec TypeScript
- **Tailwind CSS** pour le styling
- **React Router** pour la navigation
- **Lucide React** pour les icônes
- **Vite** pour le build

## Développement

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build de production
npm run build
```

## Contact

- **Téléphone** : 06 15 35 30 17
- **Adresse** : 31 Grande Rue, 38080 Four, France
- **Facebook** : https://www.facebook.com/profile.php?id=100084884720518
- **Instagram** : https://www.instagram.com/pizz.a.four