import { makeAutoObservable } from 'mobx';

export interface IExpensesList {
    id: number;
    title: string;
    amount: number;
}

export interface IExpense {

}

const addExpenseToList = (list: IExpensesList[], expense: IExpensesList): IExpensesList[] => [
    ...list,
    {
        id: Math.max(0, Math.max(...list.map(({ id }) => id))) + 1,
        title: expense.title,
        amount: expense.amount,
    },
];

const removeExpenseFromList = (list: IExpensesList[], id: number): IExpensesList[] => {
    return list.filter(el => el.id !== id);
}

class Store {
    list: IExpensesList[] = [];
    expense: IExpensesList = {id: 0, title: '', amount: 0};
    conversionRate: number = 4.382;

    constructor() {
        makeAutoObservable(this);
    }

    addListElement() {
        this.list = addExpenseToList(this.list, this.expense);
    }

    removeListElement(id: number) {
        this.list = removeExpenseFromList(this.list, id);
    }
}

const store = new Store();
export default store;