import { useDispatch } from "react-redux";
import s from "./style.module.css";
import { addExpense } from "store/expense/expense-slice";

export function ExpenseInput(props) {
  // Pour emettre un evenement (actions)
  const dispatch = useDispatch();

  function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let name  = formData.get('name');
    let price = formData.get('price');
    console.log("name : ", name + " price : ", price)
    dispatch(addExpense({name, price}));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            name="name"
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
