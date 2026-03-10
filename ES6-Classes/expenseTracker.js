//complete the ExpenseTracker class. (Abstraaction)
// Do not alter the starter code

    class ExpenseTracker {
      //Create your private properites here
        #expenses;
        #income;
      //Create a constructor function
        constructor(income) {
            this.#income = income;
            this.#expenses = [];
        }
      //create your private properties to calculate expenses
      #totalAmount;

       #calculateTotalExpenses() {
        this.#totalAmount=0;
        console.log(this.#expenses);
        //  this.#totalAmount = this.#expenses.reduce((acc, item) => acc + Number(item[1]));
        for(let i=0; i< this.#expenses.length; i++){
            this.#totalAmount+=this.#expenses[i][1];
        }
         return this.#totalAmount;
      }
      //Create your public properties here
      addExpense(name, amount, date) {
        this.#expenses.push([name, amount, date]);
      }

      getExpense() {
        return this.#expenses;
      }

      calculateBalance() {
        const finalBalance = Number(this.#income) - this.#calculateTotalExpenses();
        return finalBalance;
      }
       
    }


    //The class should function accordingly.
    const tracker = new ExpenseTracker(5000);
    tracker.addExpense("Rent", 1000, "2021-10-01");
    tracker.addExpense("Groceries", 500, "2021-10-02");
    // console.log(getExpense());
    console.log(tracker.calculateBalance()); // should output 3500
    // return ExpenseTracker;
