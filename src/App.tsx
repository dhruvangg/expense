import React from "react";
import { CategoryList, Expense } from "@/features";

const App: React.FC = () => {
  return <div className="mx-auto max-w-md">
    <CategoryList />
    <Expense />
  </div>
}

export default App;