import React from 'react';
import { useForm } from 'react-hook-form';
import List from "./List";
import { default as api } from '../store/apiSlice';

export default function Form() {

    const { register, handleSubmit, resetField } = useForm();
    const [addTransaction] = api.useAddTransactionMutation();

    const onSubmit = async (data) => {
        // Basic validation: prevent empty transactions
        if (!data.name || !data.amount) return;

        // Convert amount to number
        data.amount = Number(data.amount);

        try {
            // Add transaction
            await addTransaction(data).unwrap();

            // Clear form fields
            resetField('name');
            resetField('amount');

            // Invalidate 'transaction' tag so Graph & Labels update automatically
            api.util.invalidateTags(['transaction']);
        } catch (err) {
            console.error("Failed to add transaction:", err);
        }
    }

    return (
        <div className="form max-w-sm mx-auto w-96">
            <h1 className="font-bold pb-4 text-xl">Transactions</h1>

            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                    <div className="input-group">
                        <input 
                            type="text" 
                            {...register('name')} 
                            placeholder="Salary, House Rent, SIP" 
                            className="form-input" 
                        />
                    </div>
                    <select className="form-input" {...register('type')} >
                        <option value="Investment" defaultValue>Investment</option>
                        <option value="Expense">Expense</option>
                        <option value="Savings">Savings</option>
                    </select>
                    <div className="input-group">
                        <input 
                            type="text" 
                            {...register('amount')} 
                            placeholder="Amount" 
                            className="form-input" 
                        />
                    </div>
                    <div className="submit-btn">
                        <button className="border py-2 text-white btn-blue w-full">
                            Make Transaction
                        </button>
                    </div>
                </div>
            </form>
            <List />
        </div>
    )
}