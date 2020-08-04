
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };

  const account = {
    balance: 0,
    transactions: [],
  

    createTransaction(amount, type) {
    const id = account.transactions.length;
    return {id, amount, type}
    },

    deposit(amount) {
    account.balance += amount;
    account.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    },

    withdraw(amount) {
        if(amount> this.balance){
            console.log("недостаточно средств");
        }
        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW)),
        this.balance -= amount;
    },
  
    getBalance() {
        return this.balance;
    },
  
    getTransactionDetails(id) {
        for (const transaction of this.transactions){
            if (transaction.id === id){
                return transaction;
            }
        }
    },
  
    getTransactionTotal(type) {
        let number = 0;
        for (const transaction of this.transactions){
            if (transaction.type === type){
                number += transaction.amount;
            }
        }
        return number;
    },
  };