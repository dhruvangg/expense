import { Button, DatePicker, Input } from "@/components/ui"
import { useEffect, useState } from "react"
import { Numpad } from "@/components/custom"
import { expenseService } from "@/services"
import { map } from "rxjs"

export default function App() {
  const [amount, setAmount] = useState<string | number>(0);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    // const subscription = expenseService.getExpenseObservable().subscribe((res) => {
    //   console.log(res);
    // });
    const subscription = expenseService.expense$.pipe(map((state) => state?.amount || '0')).subscribe(setAmount);
    // const subscription = expenseService.getExpenseObservable().pipe(map((state) => parseFloat(parseFloat(state?.amount || '0').toFixed(2)))).subscribe(setAmount);
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleDateChange = (date: Date | undefined): void => {
    if (date) {
      setSelectedDate(date)
      expenseService.updateDate(date)
    }
  }

  const handleNote = (e: React.KeyboardEvent<HTMLInputElement>) => {
    expenseService.updateNote((e.target as HTMLInputElement).value);
  };

  const handleExpense = () => {
    console.log(expenseService.getCurrentExpense());

  }

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-4 text-right text-xl font-medium">{amount}</div>
      <div className="mb-4">
        <Input type="text" placeholder="Note" onKeyUp={handleNote} />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Numpad />
        <div>
          <div className="grid grid-rows-4 grid-cols-1 gap-4">
            <div>
              <DatePicker selected={selectedDate} onSelect={handleDateChange} />
            </div>
            <div><Button className="w-full">+</Button></div>
            <div><Button className="w-full">-</Button></div>
            <div><Button className="w-full" onClick={handleExpense}>Enter</Button></div>
          </div>
        </div>
      </div>
    </div>
  )
}
