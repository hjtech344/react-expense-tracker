import { List } from "components/List/List";
import s from "./style.module.css";
import { ExpenseInput } from "components/container/ExpenseInput/ExpenseInput";
import { useSelector } from "react-redux";
import { IncomeInput } from "components/container/IncomeInput/IncomeInput";
import { ExpenseTotal } from "components/container/ExpenseTotal/ExpenseTotal";
import { Logo } from "components/Logo/Logo";

// // Exemple du spread operator sur les objets
// const fruitJaune = { friut1 : "banane", fruit2 : "orange" };
// const fruitRouge = { fruit3 : "cerise", fruit4 : "fraise" };
// const fruitVert  = { fruit5 : "avocat" };
// const fruits = {...fruitJaune, ...fruitRouge, ...fruitVert};
// const copieFruits = {...fruits, fruit5 : "quenêpe"}
// console.log(copieFruits);

// Exemple avec la fonction reduce
// const firstTableSum = [0,1,2,3,4,5,6,7,8,9]
// const sum = (acumulator, currentItem) => {
//   return acumulator + currentItem;
// }
// const results = firstTableSum.reduce(sum, 0);
// console.log("voici un tableau => " ,firstTableSum ,
//   "\n la somme des element du tableau est : " ,results
// );


export function App() {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  console.log("Expense list : ", expenseList);

  return (
    <div className={s.main_container}>
      <div className={`row ${s.header}`}>
        <div className={`col-3`}>
          <Logo title={"Je depense"}
            subtitle={"Suivre mes depenses"}
           />
        </div>
        <div className={`col-9 ${s.income_input}`}>
          <IncomeInput />
        </div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          <List items={expenseList}/>
          <div className={`col-12 ${s.expense_total}`}>
            <ExpenseTotal />
          </div>
        </div>
      </div>
    </div>
  );
}
