// Importation de React et du Hook useState depuis la bibliothèque React.
import React, { useState } from "react";

// --- Objet contenant tous les styles de la calculatrice (CSS-in-JS) ---
// On définit un objet `styles` qui regroupe les règles de style pour chaque élément.
// On choisit d'utiliser un objet de styles plutôt qu'un fichier CSS externe pour garder le composant autonome (single file).
// Chaque sous-objet sera injecté via `style={styles.nom}` dans le JSX.
const styles = {
  // Style du conteneur principal de la calculatrice.
  calculator: {
    width: "220px",
    margin: "50px auto",
    padding: "10px",
    backgroundColor: "#333",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
    fontFamily: "Arial, sans-serif",
  },
  // Style de l'écran d'affichage.
  display: {
    backgroundColor: "#222",
    color: "#0f0",
    fontSize: "2rem",
    textAlign: "right",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    minHeight: "50px",
    wordBreak: "break-all",
    fontFamily: "monospace",
  },
  // Conteneur des boutons, organisé en grille.
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "8px",
  },
  // Style commun à tous les boutons.
  button: {
    padding: "15px",
    fontSize: "1.2rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#555",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  // Style spécifique pour l'opérateur "=".
  equals: {
    backgroundColor: "#f90",
    color: "white",
    gridColumn: "span 2", // occupe 2 colonnes
  },
  // Style pour le bouton "C" (effacer).
  clear: {
    backgroundColor: "#d9534f",
    color: "white",
    gridColumn: "span 2",
  },
  // Style pour le bouton "0" (on pourrait l'élargir, mais ici on garde identique).
  zero: {
    gridColumn: "span 2",
  },
};

// --- Composant fonctionnel principal de la calculatrice ---
// Un composant fonctionnel React est une fonction qui retourne du JSX.
// Il permet d'encapsuler toute la logique et l'interface de la calculatrice.
function Calculator() {
  // État `display` : contient la chaîne affichée à l'écran.
  // On l'initialise à '0' car c'est la valeur par défaut d'une calculatrice.
  // `useState` est un Hook qui permet d'ajouter un état local à un composant fonctionnel.
  // Il retourne un tableau [valeur, fonctionDeMiseÀJour].
  // On choisit `useState` car c'est la manière standard de gérer un état réactif dans une fonction React,
  // ce qui entraîne un nouveau rendu à chaque modification.
  const [display, setDisplay] = useState("0");

  // État `storedValue` : stocke la valeur numérique du premier opérande lorsqu'un opérateur est pressé.
  // Initialisé à null (aucune valeur mémorisée).
  const [storedValue, setStoredValue] = useState(null);

  // État `operator` : mémorise l'opérateur sélectionné (+, -, *, /). null si aucun.
  const [operator, setOperator] = useState(null);

  // État `waitingForOperand` : booléen indiquant si l'affichage doit être réinitialisé au prochain chiffre.
  // Utile après avoir pressé un opérateur ou "=", pour remplacer le 0 affiché par le nouveau chiffre.
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  // --- Fonctions de gestion des actions utilisateur ---

  // `handleNumber` est appelée lorsqu'un chiffre (0-9) est pressé.
  // Pourquoi une fonction dédiée ? Pour centraliser la logique d'ajout d'un chiffre et éviter la duplication.
  const handleNumber = (num) => {
    // Si on attend un nouvel opérande (après opérateur ou après "="),
    // on remplace l'affichage par le chiffre pressé et on désactive l'attente.
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      // Sinon, on concatène le chiffre à la chaîne existante.
      // On gère le cas où l'affichage est '0' : on remplace par le chiffre pour éviter "01".
      setDisplay(display === "0" ? String(num) : display + num);
    }
  };

  // `handleDecimal` est appelée pour le bouton "." (virgule décimale).
  const handleDecimal = () => {
    // Si on attend un nouvel opérande (après opérateur), on commence par "0.".
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }
    // Si l'affichage ne contient pas déjà un point, on l'ajoute.
    if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
    // Sinon on ignore (un seul point autorisé).
  };

  // `handleOperator` est appelée pour +, -, *, /.
  const handleOperator = (nextOperator) => {
    // Convertit l'affichage actuel en nombre.
    const inputValue = parseFloat(display);

    // Si une valeur stockée existe et qu'un opérateur est déjà défini,
    // on calcule le résultat intermédiaire avant d'enregistrer le nouvel opérateur.
    if (storedValue !== null && operator) {
      const result = calculate(storedValue, inputValue, operator);
      setDisplay(String(result));
      setStoredValue(result);
    } else {
      // Sinon, c'est la première saisie : on stocke la valeur affichée.
      setStoredValue(inputValue);
    }

    // On prépare l'état pour attendre le prochain opérande.
    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  // `handleEquals` calcule le résultat final.
  const handleEquals = () => {
    // Si aucun opérateur n'est défini, on ne fait rien.
    if (operator === null) return;

    const inputValue = parseFloat(display);
    // Utilise la valeur stockée et l'opérateur pour calculer.
    const result = calculate(storedValue, inputValue, operator);

    // Met à jour l'affichage avec le résultat.
    setDisplay(String(result));
    // Réinitialise les états pour une nouvelle opération.
    setStoredValue(null);
    setOperator(null);
    setWaitingForOperand(true); // prêt pour une nouvelle saisie
  };

  // `handleClear` réinitialise toute la calculatrice.
  const handleClear = () => {
    setDisplay("0");
    setStoredValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  // `calculate` est une fonction utilitaire pure pour effectuer le calcul.
  // Elle prend les deux opérandes et l'opérateur et renvoie le résultat.
  // Pourquoi une fonction séparée ? Pour isoler la logique arithmétique et la réutiliser (dans handleOperator et handleEquals).
  const calculate = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        // Gestion de la division par zéro : si b === 0, on retourne "Erreur" (ou Infinity).
        return b === 0 ? "Erreur" : a / b;
      default:
        return b;
    }
  };

  // --- Rendu JSX ---
  // Le return() contient l'interface de la calculatrice.
  // Chaque élément utilise `style={styles.nom}` pour appliquer les styles définis plus haut.
  return (
    <div style={styles.calculator}>
      {/* Affichage du résultat / saisie */}
      <div style={styles.display}>{display}</div>

      {/* Grille de boutons */}
      <div style={styles.buttons}>
        {/* Rangée 1 : C, /, * */}
        <button
          style={{ ...styles.button, ...styles.clear }}
          onClick={handleClear}
        >
          C
        </button>
        <button style={styles.button} onClick={() => handleOperator("/")}>
          /
        </button>
        <button style={styles.button} onClick={() => handleOperator("*")}>
          *
        </button>

        {/* Rangée 2 : 7, 8, 9, - */}
        <button style={styles.button} onClick={() => handleNumber(7)}>
          7
        </button>
        <button style={styles.button} onClick={() => handleNumber(8)}>
          8
        </button>
        <button style={styles.button} onClick={() => handleNumber(9)}>
          9
        </button>
        <button style={styles.button} onClick={() => handleOperator("-")}>
          -
        </button>

        {/* Rangée 3 : 4, 5, 6, + */}
        <button style={styles.button} onClick={() => handleNumber(4)}>
          4
        </button>
        <button style={styles.button} onClick={() => handleNumber(5)}>
          5
        </button>
        <button style={styles.button} onClick={() => handleNumber(6)}>
          6
        </button>
        <button style={styles.button} onClick={() => handleOperator("+")}>
          +
        </button>

        {/* Rangée 4 : 1, 2, 3, = (sur deux lignes, on l'étend via gridRow si besoin) */}
        <button style={styles.button} onClick={() => handleNumber(1)}>
          1
        </button>
        <button style={styles.button} onClick={() => handleNumber(2)}>
          2
        </button>
        <button style={styles.button} onClick={() => handleNumber(3)}>
          3
        </button>
        {/* Le bouton "=" occupe deux lignes de hauteur, on peut le placer ici puis le styliser */}
        <button
          style={{ ...styles.button, ...styles.equals, gridRow: "span 2" }}
          onClick={handleEquals}
        >
          =
        </button>

        {/* Rangée 5 : 0 (large), . , le = est déjà placé au-dessus */}
        <button
          style={{ ...styles.button, ...styles.zero }}
          onClick={() => handleNumber(0)}
        >
          0
        </button>
        <button style={styles.button} onClick={handleDecimal}>
          .
        </button>
        {/* Rien ici car le = occupe déjà la dernière colonne de la rangée précédente et s'étend */}
      </div>
    </div>
  );
}

// Exportation du composant pour pouvoir l'utiliser ailleurs (par exemple dans index.js).
// C'est le point d'entrée du module.
export default Calculator;
