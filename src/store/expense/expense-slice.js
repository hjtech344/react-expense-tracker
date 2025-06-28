import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name : "expenseSlice",
    initialState : {
        income : 100000,
        actionCountPerformed : 0,
        expenseList : []
    },

    reducers :  {
        addExpense : (currentSlice, action) => {
            currentSlice.expenseList.push({
                ...action.payload,
                price : Number.parseFloat(action.payload.price)
            });
            console.log("addExpense()", action);
        },
        setIncome  : (currentSlice, action) => {
            currentSlice.income = Number.parseFloat(action.payload)
        },
        incrementActionCountPerformed : (currentSlice) => {
            currentSlice.actionCountPerformed++
        }
    }
})

const  { addExpense, setIncome, incrementActionCountPerformed } = expenseSlice.actions
export { addExpense, setIncome, incrementActionCountPerformed }