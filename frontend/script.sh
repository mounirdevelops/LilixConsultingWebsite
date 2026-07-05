#!/bin/bash

# Couleurs pour les logs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}   CREATION DE L'APPLICATION REACT    ${NC}"
echo -e "${BLUE}========================================${NC}"

# Étape 1: Création du projet avec Vite
echo -e "\n${YELLOW}[ÉTAPE 1]${NC} Création du projet avec Vite..."
echo -e "${GREEN}Commande:${NC} npm create vite@latest frontend"
npm create vite@latest frontend -- --template react

# Vérifier si le dossier frontend a été créé
if [ ! -d "frontend" ]; then
    echo -e "${RED}❌ Erreur: Le dossier frontend n'a pas été créé${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Projet créé avec succès${NC}"

# Étape 2: Déplacement dans le dossier frontend et installation
echo -e "\n${YELLOW}[ÉTAPE 2]${NC} Installation des dépendances..."
echo -e "${GREEN}Commande:${NC} cd frontend && npm install"
cd frontend
npm install

# Étape 3: Vidage des dossiers et fichiers
echo -e "\n${YELLOW}[ÉTAPE 3]${NC} Nettoyage des fichiers inutiles..."

# Vider le dossier public
if [ -d "public" ]; then
    echo -e "  - Vidage du dossier ${BLUE}public${NC}"
    rm -rf public/*
else
    echo -e "  - Création du dossier ${BLUE}public${NC}"
    mkdir -p public
fi

# Vider le dossier src/assets
if [ -d "src/assets" ]; then
    echo -e "  - Vidage du dossier ${BLUE}src/assets${NC}"
    rm -rf src/assets/*
else
    echo -e "  - Création du dossier ${BLUE}src/assets${NC}"
    mkdir -p src/assets
fi

# Vider index.css
if [ -f "src/index.css" ]; then
    echo -e "  - Vidage du fichier ${BLUE}src/index.css${NC}"
    > src/index.css
fi

# Vider App.css
if [ -f "src/App.css" ]; then
    echo -e "  - Vidage du fichier ${BLUE}src/App.css${NC}"
    > src/App.css
fi

echo -e "${GREEN}✅ Nettoyage terminé${NC}"

# Étape 4: Mise à jour de App.jsx
echo -e "\n${YELLOW}[ÉTAPE 4]${NC} Configuration de App.jsx..."
cat > src/App.jsx << 'EOF'
import "./App.css"

export default function App() {
  return <></>
}
EOF
echo -e "${GREEN}✅ App.jsx configuré${NC}"

# Étape 5: Création des dossiers dans src
echo -e "\n${YELLOW}[ÉTAPE 5]${NC} Création de la structure des dossiers..."
cd src

# Liste des dossiers à créer
folders=("composants" "pages" "contexts" "stores" "admin" "data" "hooks")

for folder in "${folders[@]}"; do
    if [ ! -d "$folder" ]; then
        mkdir -p "$folder"
        echo -e "  - Dossier créé: ${BLUE}$folder${NC}"
    else
        echo -e "  - Dossier existant: ${BLUE}$folder${NC}"
    fi
done

cd ..
echo -e "${GREEN}✅ Structure des dossiers créée${NC}"

# Étape 6: Installation des dépendances supplémentaires
echo -e "\n${YELLOW}[ÉTAPE 6]${NC} Installation des dépendances supplémentaires..."
echo -e "${GREEN}Commande:${NC} npm install lucide-react --save-dev"
npm install lucide-react --save-dev

echo -e "${GREEN}Commande:${NC} npm install akar-icons"
npm install akar-icons

echo -e "${GREEN}Commande:${NC} npm install react-router-dom"
npm install react-router-dom

echo -e "${GREEN}✅ Toutes les dépendances sont installées${NC}"

# Étape 7: Lancement du serveur
echo -e "\n${YELLOW}[ÉTAPE 7]${NC} Lancement du serveur de développement..."
echo -e "${GREEN}Commande:${NC} npm run dev"
echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}🎉 APPLICATION PRÊTE !${NC}"
echo -e "${BLUE}========================================${NC}"
echo -e "${YELLOW}Le serveur va démarrer dans quelques secondes...${NC}"
echo -e "${YELLOW}Appuyez sur Ctrl+C pour arrêter le serveur${NC}"
echo -e "${BLUE}========================================${NC}"

# Lancer le serveur
npm run dev
