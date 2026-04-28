import CurrencyCss from './CurrencyConverter.module.css'
import { useState } from 'react'

const currencies = ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'AED']

const CurrencyConverter = () => {
    const [amount, setAmount] = useState('')
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('INR')
    const [result, setResult] = useState(null)
    const API = 'https://api.exchangerate-api.com/v4/latest/';
    const handleSwap = () => {
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
        setResult(null)
    }

    const handleConvert = async (e) => {
        e.preventDefault()
        const response = await fetch(`${API}${fromCurrency}`);
        // console.log(response);
        const data = await response.json();
        // console.log(data.rates[toCurrency]);
        if (!amount || isNaN(amount) || Number(amount) <= 0) return
        setResult(`${data.rates[toCurrency] * amount} ${fromCurrency} = -- ${toCurrency}`)
    }

    return (
        <main className={CurrencyCss.currency_cell}>
            <section className={CurrencyCss.currency_card}>
                <div className={CurrencyCss.card_header}>
                    <h1>Currency Converter</h1>
                    <p>Convert between world currencies instantly</p>
                </div>

                <form onSubmit={handleConvert} className={CurrencyCss.currency_form}>
                    <div className={CurrencyCss.form_input}>
                        <label htmlFor="amount">Amount</label>
                        <input
                            id="amount"
                            type="number"
                            min="0"
                            placeholder="e.g. 100"
                            autoComplete="off"
                            value={amount}
                            onChange={(e) => { setAmount(e.target.value); setResult(null) }}
                        />
                    </div>

                    <div className={CurrencyCss.select_row}>
                        <div className={CurrencyCss.select_group}>
                            <label htmlFor="from">From</label>
                            <select
                                id="from"
                                value={fromCurrency}
                                onChange={(e) => { setFromCurrency(e.target.value); setResult(null) }}
                            >
                                {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>

                        <button type="button" className={CurrencyCss.swap_btn} onClick={handleSwap} aria-label="Swap currencies">
                            ⇄
                        </button>

                        <div className={CurrencyCss.select_group}>
                            <label htmlFor="to">To</label>
                            <select
                                id="to"
                                value={toCurrency}
                                onChange={(e) => { setToCurrency(e.target.value); setResult(null) }}
                            >
                                {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                    </div>

                    <button type="submit" className={CurrencyCss.convert_btn}>Convert</button>
                </form>

                <div className={CurrencyCss.result_preview}>
                    <h2>{fromCurrency} → {toCurrency}</h2>
                    <p className={CurrencyCss.result_value}>{result ? result.split('=')[1].trim() : '--'}</p>
                    <p className={CurrencyCss.result_label}>{result ? result.split('=')[0].trim() : 'Enter an amount to convert'}</p>
                </div>
            </section>
        </main>
    )
}

export default CurrencyConverter
