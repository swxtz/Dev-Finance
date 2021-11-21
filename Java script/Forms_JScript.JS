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
    {
        id: 4,
        description: 'App',
        amount: 2200000,
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

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transactions, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transactions)

        DOM.transactionsContainer.appendChild(tr)

        console.log(tr.innerHTML)
    },


    innerHTMLTransaction(transactions) {
        const CSSclasses = transactions.amount > 0 ? "income" : "expense"

        const html = `
        <td class="descripition">${transactions.description}</td>
        <td class="${CSSclasses}">${transactions.amount}</td>
        <td class="date">${transactions.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover Transação">
        </td> 
        `

        return html


    }

}

transactions.forEach(function(Transaction) {
    DOM.addTransaction(Transaction)
})