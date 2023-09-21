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
/*Table Sorties*/
create table sortie (
    id_sortie INT(100) AUTO_INCREMENT PRIMARY KEY,
    id_ent INT(100) ,
    nom_sort VARCHAR(100),
    heure_sort VARCHAR(100),
    id VARCHAR(100)
)

/*Transférer les données de la table entrées vers la table sortie*/
insert into sortie(nom_sort,nbr_sort,heure_sort,id) 
select nom_ent,nbr_ent,heure_ent,id from entree where id_ent=2;

/*Historiques*/
select * from entree limit 4;

/*Inner join entre entrée et client*/
select * from entree inner join client on client.id=entree.id;
