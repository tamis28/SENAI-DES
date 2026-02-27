class Animal{
    //Atributos
    int id = 0;
    String nome = '';
    String especie = '';
    String raca = '';
    double peso = 0.0;
    //Métodos
    String tudoJunto(){
        return "$id, $nome, $raca, $peso"; 
    }
}

void main(){
    //Instância
    Animal boi;
    //Objeto
    boi = new Animal();

    boi.id = 1;
    boi.nome = "João";
    boi.especie = "Bovino";
    boi.raca = "Nelori";
    boi.peso = 499.9;
    print(boi.tudoJunto());
}