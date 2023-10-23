/*Créer un table mot de passe*/
create table mdp(
    id VARCHAR(100) PRIMARY KEY,
    password VARCHAR(100)
)

/*Remplir les données de la table à partir de tusers*/
insert into mdp(id,password) 
(select id,password from tusers);

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
     id VARCHAR(100),
    nom_sort VARCHAR(100),
    heure_sort VARCHAR(100),
    moyen_transport VARCHAR(100),
    voiture_id VARCHAR(100),
    responsable_id VARCHAR(100),
   responsable_nom VARCHAR(100),
   heure_sort_sec VARCHAR(100),
    securite1 VARCHAR(100),
    securite2 VARCHAR(100),
    etat_sortie VARCHAR(100)
)

/*Transférer les données de la table entrées vers la table sortie*/
insert into sortie(nom_sort,nbr_sort,heure_sort,id) 
select nom_ent,nbr_ent,heure_ent,id from entree where id_ent=2;

/*Historiques*/
select * from entree limit 4;

/*Inner join entre entrée et client*/
select * from entree inner join client on client.id=entree.id;

update sortie set heure_sort=2 and id=41 where id_ent=12;

/*Table sécurité*/
create table securite (
    id_securite VARCHAR(100),
    mot_de_passe VARCHAR(100)
)
insert into securite VALUES
("securite1","MellisSecurite1"),
("securite2","MellisSecurite2");

/*Table finale sortie*/
SELECT * from sortie inner join entree on sortie.id_ent=entree.id_ent 
inner join tusers on tusers.id=sortie.id

select * from entree inner join sortie on entree.id_ent=sortie.id_ent inner join tusers on tusers.id=entree.id;