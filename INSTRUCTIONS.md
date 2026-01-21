# Instructions d'installation

## Étape 1: Fusionner les fichiers

1. Extrayez ce ZIP 2/3 dans le dossier de votre projet (créé avec ZIP 1/3)
2. Les fichiers `app/layout.js` et `app/globals.css` seront ajoutés au dossier `app/`

## Étape 2: Vérifier la structure

Votre projet devrait maintenant avoir:
```
lombok-tour-travel/
├── app/
│   ├── layout.js       ✅ (nouveau)
│   └── globals.css     ✅ (nouveau)
├── public/
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## Étape 3: Télécharger ZIP 3/3

Téléchargez maintenant le ZIP 3/3 qui contient le fichier `page.js` avec toutes les sections (Destinations, Tours, Testimonials, Contact, etc.)

Après avoir extrait les 3 ZIP, lancez:
```bash
npm install
npm run dev
```

Enjoy! 🏝️