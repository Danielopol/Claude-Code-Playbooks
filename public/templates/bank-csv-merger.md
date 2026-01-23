# Bank CSV Merger

## Goal
Merge all bank CSV files into one unified CSV with consistent columns.

## Output Format
Date,Description,Amount,Category,Account,Original_File

## Column Mapping Rules
- Date: Look for columns named "Date", "Transaction Date", "Posted Date"
- Description: Look for "Description", "Memo", "Transaction", "Payee"
- Amount: Look for "Amount", "Debit", "Credit" (combine debit/credit into signed amount)
- For debit/credit: debits are negative, credits are positive

## Processing Rules
1. Read all .csv files in this folder
2. Detect the bank format based on column headers
3. Map columns to the standard output format
4. Add "Account" column with the source filename
5. Add "Original_File" for reference
6. Leave "Category" blank (for manual categorization later)
7. Sort by date (oldest first)
8. Output to "merged_transactions.csv"

## Skip
- Files starting with "merged_"
- Non-CSV files
