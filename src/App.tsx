import React from "react";
import { Category, Expense } from "@/features";

const App: React.FC = () => {
  return <div className="mx-auto max-w-md">
    <Category />
    <Expense />
  </div>
}

export default App;