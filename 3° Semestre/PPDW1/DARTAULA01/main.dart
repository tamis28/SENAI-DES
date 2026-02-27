void main(){
    String texto = "Alô mundo!";
    int numero = 9999999888888;
    double n = 0.3333333333333333;
    bool ativo = false;
    var coisa = "Texto"; //Não tipada
    dynamic tudo = "oi";

    print(texto);
    print(numero);
    print("Real = " + n.toString()); //Concatenação
    print(ativo? "Oi" : "Tchau"); //If ternário
    print(coisa);
    print(tudo);
    tudo = 500;
    print(tudo);
}
