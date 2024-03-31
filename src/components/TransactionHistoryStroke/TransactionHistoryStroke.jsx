import clsx from 'clsx';
import historypay from "./TransactionHistoryStroke.module.css"
let midlle = clsx(historypay.item, historypay.midlleItem)
export default function TransactionsStroke({ stroke: { type, amount, currency } }) {
    return <>
        <td className={historypay.item}>{ type}</td>
        <td className={midlle}>{amount }</td>
        <td className={historypay.item}>{ currency}</td>
    </>
}