# Portfolio — Template

Site portfolio simple à personnaliser. Structure:
- `index.html` — page unique (sections: À propos, Études, Compétences, Projets, Photos, Contact)
- `css/styles.css` — styles personnalisés (inspirés du style JetBrains)
- `js/main.js` — petites interactions (smooth scroll, année automatique)
- `assets/` — images et ressources

Remarques:
- Le site utilise Bootstrap via CDN. Vous pouvez l'enlever ou l'ajouter en local.
- Les images sont des placeholders (https://via.placeholder.com). Remplacez-les par vos liens.

Déployer sur GitHub Pages
1. Créez un compte GitHub avec le nom d'utilisateur: `PrénomMatricule` (ex: `Jean12345`).
2. Créez un nouveau dépôt (repository) public nommé `portfolio-2026` ou ce que vous souhaitez.
3. Depuis votre dossier local:

```bash
git init
git add .
git commit -m "Initial commit: portfolio"
git branch -M main
git remote add origin https://github.com/<VotreUtilisateur>/<VotreRepo>.git
git push -u origin main
```

4. Sur GitHub: Settings → Pages → Source → Branche `main` / dossier `/ (root)` → Save.
5. Attendez quelques minutes et votre site sera en ligne à `https://<VotreUtilisateur>.github.io/<VotreRepo>/`.

Conseils rapides
- Remplissez les sections en français (ou anglais) et remplacez les images.
- Ajoutez un fichier `CNAME` si vous avez un domaine personnalisé.
- Ajoutez un `LICENSE` si vous voulez partager le code (MIT par défaut ici).