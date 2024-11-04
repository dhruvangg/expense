import { BehaviorSubject, Observable } from 'rxjs'
import { ExpenseData } from '@/types';

class ExpenseService {
    private static instance: ExpenseService;
    public expenseSubject: BehaviorSubject<ExpenseData>;
    public expense$: Observable<ExpenseData>;

    constructor() {
        this.expenseSubject = new BehaviorSubject<ExpenseData>({ amount: '0', date: new Date(), note: '' });
        this.expense$ = this.expenseSubject.asObservable()
    }

    public getExpenseObservable() {
        return this.expenseSubject.asObservable();
    }

    public getCurrentExpense() {
        return this.expenseSubject.getValue();
    }

    updateAmount(newAmount: string): void {
        const currentData = this.expenseSubject.getValue();
        const updatedData = { ...currentData, amount: newAmount };
        this.expenseSubject.next(updatedData);
    }

    updateNote(newNote: string): void {
        const currentData = this.expenseSubject.getValue();
        const updatedData = { ...currentData, note: newNote };
        this.expenseSubject.next(updatedData);
    }

    updateDate(newDate: Date): void {
        const currentData = this.expenseSubject.getValue();
        const updatedData = { ...currentData, date: newDate };
        this.expenseSubject.next(updatedData);
    }

    public addNumber(num: string): void {
        const currentAmount = this.expenseSubject.getValue().amount;
        const newAmount = currentAmount === '0' && num !== '.' ? num : currentAmount + num;
        this.updateAmount(newAmount);
    }

    public addDot() {
        const currentAmount = this.expenseSubject.getValue().amount;
        if (!currentAmount?.includes('.')) {
            this.updateAmount(currentAmount + '.');
        }
    }

    public backspace() {
        const currentAmount = this.expenseSubject.getValue().amount;
        const newAmount = currentAmount && currentAmount.length > 1 ? currentAmount.slice(0, -1) : '0';
        this.updateAmount(newAmount);
    }

    public static getInstance(): ExpenseService {
        if (!ExpenseService.instance) {
            ExpenseService.instance = new ExpenseService();
        }
        return ExpenseService.instance;
    }
}

export const expenseService = ExpenseService.getInstance();