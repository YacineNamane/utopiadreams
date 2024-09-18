const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "src", "assets", "Works"); // Répertoire contenant tes images
const outputFile = path.join(__dirname, "public", "images.json"); // Fichier JSON de sortie

// URL de base pour les images hébergées sur GitHub
const baseUrl =
  "https://raw.githubusercontent.com/YacineNamane/utopiadreams/master/src/assets/Works/";

// Fonction pour obtenir la catégorie à partir du nom de fichier
const getCategoryFromFilename = (filename) => {
  const prefix = filename.charAt(0);
  switch (prefix) {
    case "U":
      return "utopia";
    case "A":
      return "anime";
    case "C":
      return "cats";
    case "L":
      return "classic";
    default:
      return "uncategorized";
  }
};

// Fonction pour lire les images dans le répertoire et les formater pour le JSON
const getImages = (dir) => {
  return fs
    .readdirSync(dir)
    .map((file) => {
      const ext = path.extname(file).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        return {
          src: `${baseUrl}${file}`, // URL complète pour le JSON
          name: path.basename(file, ext),
          category: getCategoryFromFilename(path.basename(file, ext)),
        };
      }
    })
    .filter(Boolean); // Filtre les éléments vides
};

const images = getImages(imagesDir);

// Écriture du fichier JSON
fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));

console.log(`JSON généré dans ${outputFile}`);
