
# Investment Loan Entity

Information about an investment loan.

*This model accepts additional fields of type unknown.*

## Structure

`InvestmentLoanEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loanId` | `string \| undefined` | Optional | Unique identifier for this loan |
| `loanDescription` | `string \| undefined` | Optional | Description |
| `initialLoanBalance` | `number \| undefined` | Optional | Initial loan balance amount |
| `loanStartDate` | `string \| undefined` | Optional | Start date of the loan |
| `currentLoanBalance` | `number \| undefined` | Optional | Current loan principal balance amount |
| `dateAsOf` | `string \| undefined` | Optional | Date and time of current loan balance |
| `loanRate` | `number \| undefined` | Optional | Loan annual interest rate for the loan |
| `loanPaymentAmount` | `number \| undefined` | Optional | Loan payment amount |
| `loanPaymentFrequency` | [`LoanPaymentFrequency \| undefined`](../../doc/models/loan-payment-frequency.md) | Optional | - |
| `loanPaymentInitial` | `number \| undefined` | Optional | Initial number of loan payments |
| `loanPaymentsRemaining` | `number \| undefined` | Optional | Remaining number of loan payments |
| `loanMaturityDate` | `string \| undefined` | Optional | Expected loan end date |
| `loanInterestToDate` | `number \| undefined` | Optional | Total interest paid to date on this loan |
| `loanTotalProjectedInterest` | `number \| undefined` | Optional | Total projected interest to be paid on this loan |
| `loanNextPaymentDate` | `string \| undefined` | Optional | The next payment date for the loan |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "loanId": "loanId2",
  "loanDescription": "loanDescription4",
  "initialLoanBalance": 205.08,
  "loanStartDate": "2016-03-13T12:52:32.123Z",
  "currentLoanBalance": 206.82,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

