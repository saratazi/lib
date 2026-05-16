let livres = JSON.parse(localStorage.getItem("livres")) || [];

function ajouterLivre() {
    let titre = document.getElementById("titre").value;
    let auteur = document.getElementById("auteur").value;
    let annee = document.getElementById("annee").value;
    let categorie = document.getElementById("categorie").value;

    if (titre === "" || auteur === "" || annee === "" || categorie === "") {
        alert("Veuillez remplir tous les champs");
        return;
    }

    let livre = {
        titre: titre,
        auteur: auteur,
        annee: annee,
        categorie: categorie
    };

    livres.push(livre);

    localStorage.setItem("livres", JSON.stringify(livres));

    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("annee").value = "";
    document.getElementById("categorie").value = "";

    afficherLivres();
}

function afficherLivres() {
    let tbody = document.getElementById("listeLivres");
    let recherche = document.getElementById("recherche").value.toLowerCase();

    tbody.innerHTML = "";

    livres.forEach(function(livre, index) {
        if (livre.titre.toLowerCase().includes(recherche)) {
            tbody.innerHTML += `
                <tr>
                    <td>${livre.titre}</td>
                    <td>${livre.auteur}</td>
                    <td>${livre.annee}</td>
                    <td>${livre.categorie}</td>
                    <td>
                        <button class="supprimer" onclick="supprimerLivre(${index})">
                            Supprimer
                        </button>
                    </td>
                </tr>
            `;
        }
    });
}

function supprimerLivre(index) {
    livres.splice(index, 1);
    localStorage.setItem("livres", JSON.stringify(livres));
    afficherLivres();
}

afficherLivres();