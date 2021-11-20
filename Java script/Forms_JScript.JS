const Modal = {
    open() {
        // Abrir modal
        // Adicionar a classe para ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        //fechar o modal
        //remover a classe active do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [{
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/04/2021'
    },
    {
        id: 2,
        description: 'Trabalho',
        amount: 50000,
        date: '17/04/2021'
    },
    {
        id: 3,
        description: 'Aluguel',
        amount: -12000,
        date: '20/04/2021'
    },
]


const Transaction = {
    incomes() {
        //Somar as entradas
    },
    expenses() {
        //Somar as saidas
    },
    total() {
        //Entradas - Saidas
    }

}