const prisma = require("../data/prisma");

const listarCarros = async (req, res) => {
    try {
        const lista = await prisma.carros.findMany();

        res.json(lista).status(200).end();
    }catch(err){
        res.json(err).status(500).end();
    }
};

const cadastrarCarros = async (req, res) => {
    const carros = req.body;
    let carro = cadasCarros.placa.trim().toUpperCase();
    if(carro.length < 7)
        console.log("Placa Invalida");

    let placa = carros.placa;
    if(carros.placa.some(p => p = placa))
        res.status(400).json({ Message: "Placa já existe"});

    if(typeof(carros.Ano_do_veículo) == "number")
        res.status(400).json({ Message: "Ano Invalido"});
    if(carros.Ano_do_veículo.length != 4)
        res.status(400).json({Message:"Ano deve conter 4 digitos"});

    const cadasCarros = await prisma.carros.create({
    data: carros
    });

    res.json(cadasCarros).status(201).end();
};

const atualizarCarros = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const carros = await prisma.carros.update({
        where: { id },
        data: dados,
        placa: placa,
        marca: marca,
        modelo: modelo,
        Ano_do_veículo: Ano_do_veículo
    });

    res.json(carros).status(200).end();
};

const deletarCarros = async (req, res) => {
    const { id } = req.params;

    const carros = await prisma.carros.delete({
        where: { id }
    });

    res.json(carros).status(200).end();
};

module.exports = {
    listarCarros,
    cadastrarCarros,
    atualizarCarros,
    deletarCarros
}