const prisma = require("../data/prisma");

const listarClientes = async (req, res) => {
    try {
        const lista = await prisma.clientes.findMany();

        res.json(lista).status(200).end();
    }catch(err){
        res.json(err).status(500).end();
    }
};

const cadastrarClientes = async (req, res) => {
    const clientes = req.body;

    let cliente = clientes.nome.trim().split(" ");
    if(cliente.length <2){
        res.status(400).json({ Message: "Nome tem que ter separação"})
    }

    if (typeof(clientes.cpf) != "number")
        return res.status(400).json({ Message: "CPF Invalido" });
    let cpf = clientes.cpf.replaceAll(".","").replaceAll("-","").toLowerCase();
    if(cpf.length != 11)
        res.status(400).json({ Message: " já existe" });
    
    let emailValido = clientes.emails.includes( "@" );
    if(emailValido = false)
        console.log("Email Inválido");
    let emails = clientes.emails;
    if(clientes.emails.some(e => e = emails))
        res.status(400).json({ Message: "Email já existe" });



    const cadasClientes = await prisma.clinete.create({
    data: carros
    });

    res.json(cadasClientes).status(201).end();
};

const atualizarClientes = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const clinetes = await prisma.clientes.update({
        where: { id },
        data: dados,
        nome: nome,
        cpf: cpf,
        email: email,
        cnh: cnh
    });

    res.json(clinetes).status(200).end();
};

const deletarClientes = async (req, res) => {
    const { id } = req.params;

    const clientes = await prisma.clientes.delete({
        where: { id }
    });

    res.json(clientes).status(200).end();
};

module.exports = {
    listarClientes,
    cadastrarClientes,
    atualizarClientes,
    deletarClientes
}