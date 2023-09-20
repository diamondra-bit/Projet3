/*Créer un table mot de passe*/
create table mdp(
    id VARCHAR(100) PRIMARY KEY,
    password VARCHAR(100)
)

/*Remplir les données de la table à partir de tusers*/
insert into mdp(id,password) 
(select id,password from client);

/*Table Entrées*/
create table entree (
    id_ent INT(100) AUTO_INCREMENT PRIMARY KEY,
    nom_ent VARCHAR(100),
    nbr_ent VARCHAR(100),
    heure_ent VARCHAR(100),
    id VARCHAR(100)
)
