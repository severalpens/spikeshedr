import { useEffect, useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import '@aws-amplify/ui-react/styles.css';


const client = generateClient<Schema>();

interface ITxDto {
  TxDate: string;
  TxAmount: number;
  TxType: string;
  TxCategory: string;
  TxDescription: string;
}

function Txs() {
  const [txs, setTxs] = useState<Array<Schema["Tx"]["type"]>>([]);
  const [txDtos, setTxDtos] = useState<Array<ITxDto>>([]);
  const [isButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    client.models.Tx.observeQuery().subscribe({
      next: (data) => setTxs([...data.items]),
    });
  }, [txDtos]);

  const loadCsvFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) {
        return;
      }
      parseCsvFile(file);
  };


  const parseCsvFile = async (file: File) => {
    const text = await file.text();
    const lines = text.split('\n');
    const txs = lines.slice(1);
    for await (const tx of txs) {
      const [TxDate, TxAmount, TxDescription] = tx.split(',');

      setTxDtos((prev) => [...prev, {
        TxDate: TxDate,
        TxAmount: parseInt(TxAmount),
        TxType: parseInt(TxAmount) < 0 ? 'Expense' : 'Income',
        TxCategory: 'Uncategorized',
        TxDescription,
      }]);
      if (TxDescription.includes("NQR")) {
        break;
      }
    }
  };

  const formatDateAsDateString = (inputDate: string) => {
    const dateParts = inputDate.split('/');
    const day = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // Month is zero-based in JS
    const year = parseInt(dateParts[2]);
    const date = year + '-' + (month + 1) + '-' + day;
    return date; // Return in YYYY-MM-DD format
  };


  const uploadTransactions = async () => {
      for await (const tx of txDtos) {
        await client.models.Tx.create({
          TxDate: formatDateAsDateString(tx.TxDate),
          TxAmount: tx.TxAmount,
          TxType: tx.TxType,
          TxCategory: tx.TxCategory,
          TxDescription: tx.TxDescription,
        });
        if (tx.TxDescription.includes("NQR")) {
          break;
        }
      }
  }


const deleteAllTransactions = async () => {
  try {
    for await (const tx of txs) {
      await client.models.Tx.delete({ id: tx.id });
    }
  } catch (e) {
    console.error(e);
  }
}
  return (
    <main>
      <h1 className="text-xl mb-4">Transactions (Prototype)</h1>
      <div className="mb-12">
<label htmlFor="fileInput" className="block text-sm font-medium text-gray-700">Upload CSV File</label>
<input id="fileInput" type="file" accept=".csv" className="mt-1 block w-48" onChange={(e) => loadCsvFile(e)} disabled={isButtonDisabled} />
      </div>
      <div  className="mb-12">
        <button id="UploadTransactionsButton"
          onClick={async () => await uploadTransactions()}
          disabled={isButtonDisabled}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48"
        >
          Upload Transations
        </button>
      </div>
      <div className="mb-12">
        <button id="DeleteAllTransactionsButton"
          onClick={() => deleteAllTransactions()}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48"
        >
          Delete All Transactions
        </button>
        </div>
      <div className="overflow-x-auto">
        <table id="txsTable" className="table-auto w-full" >
          <thead>
            <tr>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {txDtos
              .map((tx,i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">
                    {tx.TxDate}
                  </td>
                  <td className="border px-4 py-2">
                    {tx.TxAmount}
                  </td>
                  <td className="border px-4 py-2">
                    {tx.TxType}
                  </td>
                  <td className="border px-4 py-2">
                    {tx.TxCategory}
                  </td>
                  <td className="border px-4 py-2">
                    {tx.TxDescription}
                  </td>

                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <table id="txsTable" className="table-auto w-full" >
          <thead>
            <tr>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {txs
              .map((tx,i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">
                    {tx.TxDate}
                  </td>
                  <td className="border px-4 py-2">
                    {tx.TxAmount}
                  </td>
                  <td className="border px-4 py-2">
                    {tx.TxType}
                  </td>
                  <td className="border px-4 py-2">
                    {tx.TxCategory}
                  </td>
                  <td className="border px-4 py-2">
                    {tx.TxDescription}
                  </td>

                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Txs;

