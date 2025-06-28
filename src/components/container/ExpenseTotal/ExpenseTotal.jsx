import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const expenseList  = useSelector((store) => store.EXPENSE.expenseList);
  const income = useSelector((store) => store.EXPENSE.income);

  const expenseTotal = expenseList.reduce((acc, currentItem) => {
    return acc + currentItem.price;
  }, 0)

  const remainingMoney = income - expenseTotal;


  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{expenseTotal} HTG</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remainingMoney} HTG</div>
      </div>
    </div>
  );
}
