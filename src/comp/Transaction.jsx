import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 100 100">
<path fill="#fb7369" d="m68.77,50c5.01-5.33,9.92-10.79,14.74-16.45,2-2.36,1.98-5.82-.01-8.19-2.69-3.2-5.65-6.17-8.86-8.86-2.37-1.99-5.84-2.02-8.19-.01-5.66,4.82-11.12,9.73-16.45,14.74-5.33-5.01-10.79-9.92-16.45-14.74-2.36-2-5.82-1.98-8.19.01-3.2,2.69-6.17,5.65-8.86,8.86-1.99,2.37-2.02,5.84-.01,8.19,4.82,5.66,9.73,11.12,14.74,16.45-5.01,5.33-9.92,10.79-14.74,16.45-2,2.36-1.98,5.82.01,8.19,2.69,3.2,5.65,6.17,8.86,8.86,2.37,1.99,5.84,2.02,8.19.01,5.66-4.82,11.12-9.73,16.45-14.74,5.33,5.01,10.79,9.92,16.45,14.74,2.36,2,5.82,1.98,8.19-.01,3.2-2.69,6.17-5.65,8.86-8.86,1.99-2.37,2.02-5.84.01-8.19-4.82-5.66-9.73-11.12-14.74-16.45Z"></path><path fill="#4a254b" d="m43.83,58.06c-.28,0-.56-.12-.75-.34-.36-.42-.32-1.05.09-1.41,1.59-1.39,4.15-2.22,6.86-2.22s5.17.79,6.78,2.15c.42.36.47.99.12,1.41-.36.42-.99.47-1.41.12-1.24-1.05-3.29-1.68-5.49-1.68s-4.31.64-5.54,1.72c-.19.17-.42.25-.66.25Z"></path><path fill="#4a254b" d="m44.09,58.65c-.42,0-.8-.26-.95-.67-.13-.38-.49-.72-.8-.89-.48-.27-.65-.88-.38-1.36.27-.48.88-.65,1.36-.38.79.45,1.43,1.19,1.7,1.98.18.52-.1,1.09-.62,1.27-.11.04-.22.06-.33.06Z"></path><path fill="#4a254b" d="m55.91,58.65c-.11,0-.22-.02-.33-.06-.52-.18-.8-.75-.62-1.27.27-.79.91-1.53,1.7-1.98.48-.27,1.09-.1,1.36.38.27.48.1,1.09-.38,1.36-.3.17-.67.51-.8.89-.14.41-.53.67-.95.67Z"></path><g><circle cx="42" cy="47" r="5" fill="#fff"></circle><circle cx="42" cy="47" r="2.5" fill="#4a254b"></circle><circle cx="58" cy="47" r="5" fill="#fff"></circle><circle cx="58" cy="47" r="2.5" fill="#4a254b"></circle></g>
</svg></button>
    </li>
  )
}