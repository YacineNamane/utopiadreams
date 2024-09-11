const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "src", "assets", "Works"); // Répertoire contenant tes images
const outputFile = path.join(__dirname, "public", "images.json"); // Fichier JSON de sortie

const getCategoryFromFilename = (filename) => {
  const prefix = filename.charAt(0);
  switch (prefix) {
    case "U":
      return "utopia";
    case "A":
      return "anime";
    case "C":
      return "cats";
    default:
      return "uncategorized";
  }
};

const getImages = (dir) => {
  return fs
    .readdirSync(dir)
    .map((file) => {
      const ext = path.extname(file).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        return {
          src: `/assets/Works/${file}`, // Chemin relatif pour le JSON
          name: path.basename(file, ext),
          category: getCategoryFromFilename(path.basename(file, ext)),
        };
      }
    })
    .filter(Boolean);
};

const images = getImages(imagesDir);

fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));

console.log(`JSON généré dans ${outputFile}`);
