<?php
include_once 'DB.php';
class ManageBD extends DB{
  public function getQueries(){

	$actores=$this->connect()->query('SELECT * FROM actores');
	$directores=$this->connect()->query('SELECT * FROM directores');
	$documentales=$this->connect()->query('SELECT * FROM documentales');
	$peliculas=$this->connect()->query('SELECT * FROM peliculas');
	$series=$this->connect()->query('SELECT * FROM series');

	$queries = array (
	    "actores"=>$actores,
		"directores"=>$directores,
		"documentales"=>$documentales,
		"peliculas"=>$peliculas,
		"series"=>$series
	);
	
		return $queries;
	
	}
}
?>