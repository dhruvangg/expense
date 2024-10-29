import React from "react";
import { Button } from "@/components/ui/button"
import { expenseService } from "@/services/ExpenceService";

const pad = [7, 8, 9, 4, 5, 6, 1, 2, 3];

export const Numpad: React.FC = () => {
    return <>
        <div className="col-span-3 grid grid-cols-3 grid-rows-4 gap-4">
            {pad.map((number) => <div key={number}>
                <Button className="w-full" onClick={() => expenseService.addNumber(number.toString())}>
                    {number}
                </Button>
            </div>)}
            <div><Button className="w-full" onClick={() => expenseService.addDot()}>.</Button></div>
            <div><Button className="w-full" onClick={() => expenseService.addNumber('0')}>0</Button></div>
            <div><Button className="w-full" onClick={() => expenseService.backspace()}>Back</Button></div>
        </div>
    </>
}