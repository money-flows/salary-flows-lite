import Papa from "papaparse";
import { DepositTransaction } from "../types";
import { readShiftJisFile } from "@/utils/file";

export async function parseRakutenBankCsvFile(
  file: File
): Promise<DepositTransaction[]> {
  const csv = await readShiftJisFile(file);
  const parsedCsv = Papa.parse<string[]>(csv);
  return parsedCsv.data
    .slice(1)
    .filter((row) => {
      const amount = parseInt(row[1]);
      return amount > 0;
    })
    .map((row) => {
      return {
        date: new Date(
          `${row[0].slice(0, 4)}-${row[0].slice(4, 6)}-${row[0].slice(6, 8)}`
        ),
        amount: parseInt(row[1]),
        description: row[3],
      };
    });
}
