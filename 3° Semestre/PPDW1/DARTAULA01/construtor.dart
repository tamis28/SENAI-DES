class Animal{
    //Atributos
    int id = 0;
    String nome = '';
    String especie = '';
    String raca = '';
    double peso = 0.0;
    //Métodos
    Animal(this.id, this.nome, this.especie, this.raca, this.peso);
    String tudoJunto(){
        return "$id, $nome, $raca, $peso"; 
    }
}

void main(){
    //Instância
    Animal boi = new Animal(1, "João", "Bovino", "Nelori", 499.9);
    Animal vaca = new Animal(2, "Mimosa", "Bovino", "Angus", 399.9);
    Animal gato = new Animal(3, "Tico", "Felino", "Angorá", 1.9);
    Animal gata = new Animal(4, "Mimi", "Felino", "Vira Latas", 1.2);
    Animal cachorro = new Animal(5, "Totó", "Canino", "Caramelo", 10.9);
    Animal cachorra = new Animal(6, "Layca", "Canino", "Xitus", 2.9);
    Animal cavalo = new Animal(7, "Furação", "Equino", "Manga larga", 459.9);
    Animal egua = new Animal(8, "Pocotó", "Equino", "Pangané", 320.9);
    print(boi.tudoJunto());
    print(vaca.tudoJunto());
    print(gato.tudoJunto());
    print(gata.tudoJunto());
    print(cachorro.tudoJunto());
    print(cachorra.tudoJunto());
    print(cavalo.tudoJunto());
    print(egua.tudoJunto());
}