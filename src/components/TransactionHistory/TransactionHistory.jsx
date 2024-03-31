import TransactionsStroke from "../TransactionHistoryStroke/TransactionHistoryStroke"
import clsx from 'clsx';
import css from "./TransactionHistory.module.css"
let midle = clsx(css.item, css.midlleItem)
export default function TransactionHistory({ info }) {
   let id = 0
  return  <table className={css.table}> 
        <thead>
            <tr className={css.header}>
                <th className={css.item}>Type</th>
                <th className={midle}>Amount</th>
                <th className={css.item}>Currency</th>
            </tr>
        </thead>
        <tbody>
          {info.map((stroke) => (<tr className={id++ % 2 === 0 ? css.li : css.midlle} key={stroke.id}>
              <TransactionsStroke stroke = {stroke} />
          </tr>))}
        </tbody>
    </table>
   
}