
# Investment Transaction

Investment Transactions

*This model accepts additional fields of type unknown.*

## Structure

`InvestmentTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string \| undefined` | Optional | Corresponds to AccountId in Account |
| `amount` | `number \| undefined` | Optional | The amount of money in the account currency.<br><br>If balanceType is `ASSET`:<br><br>1. If `debitCreditMemo` = `DEBIT`, sign is "+" or not present<br>2. If `CREDIT`, sign is "-"<br><br>If balanceType is `LIABILITY`:<br><br>1. If `debitCreditMemo` = `DEBIT`, sign is "-"<br>2. If `CREDIT`, sign is "+" or not present |
| `category` | `string \| undefined` | Optional | Transaction category, preferably MCC or SIC. |
| `debitCreditMemo` | [`DebitCreditMemo \| undefined`](../../doc/models/debit-credit-memo.md) | Optional | Akoya will ensure that this is correctly populated with one of DEBIT or CREDIT and matches the sign of the status field. |
| `description` | `string \| undefined` | Optional | The description of the transaction |
| `imageIds` | `string[] \| undefined` | Optional | Array of image identifiers (unique to transaction) used to retrieve images of check or transaction receipt. |
| `fiAttributes` | [`FiAttributeEntity[] \| undefined`](../../doc/models/fi-attribute-entity.md) | Optional | Array of FI-specific attributes<br><br>**Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `foreignAmount` | `number \| undefined` | Optional | The amount of money in the foreign currency |
| `foreignCurrency` | `string \| undefined` | Optional | The ISO 4217 code of the foreign currency |
| `lineItem` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Breakdown of the transaction details |
| `links` | [`HateoasLink[] \| undefined`](../../doc/models/hateoas-link.md) | Optional | Links (unique to this Transaction) used to retrieve images of checks or transaction receipts, or invoke other APIs |
| `memo` | `string \| undefined` | Optional | Secondary transaction description |
| `postedTimestamp` | `string \| undefined` | Optional | The date and time that the transaction was posted to the account. If not provided then TransactionTimestamp can be used as PostedTimeStamp. |
| `reference` | `string \| undefined` | Optional | A tracking reference identifier |
| `referenceTransactionId` | `string \| undefined` | Optional | Akoya ensures that this field is populated for all transactions which are reversals, otherwise it is null. Either way it is always present.<br><br>For reverse postings, the identity of the transaction being reversed. For the correction transaction, the identity of the reversing post. For credit card posting transactions, the identity of the authorization transaction. |
| `status` | [`TransationStatus \| undefined`](../../doc/models/transation-status.md) | Optional | AUTHORIZATION, MEMO, PENDING, or POSTED |
| `subCategory` | `string \| undefined` | Optional | Transaction category detail |
| `transactionId` | `string \| undefined` | Optional | Long term persistent identity of the transaction (unique to account).<br>Transaction IDs should:<br><br>1. be the same for pending and posted<br>2. be different for reversed transactions<br>3. `referenceTransactionId` should be present for reversed transactions' |
| `transactionTimestamp` | `string \| undefined` | Optional | The date and time that the transaction was added to the server backend systems.<br><br>Akoya ensures that this field is populated for all transactions to which it applies, otherwise it is null. Either way it is always present. |
| `accruedInterest` | `number \| undefined` | Optional | Accrued Interest. |
| `commission` | `number \| undefined` | Optional | Transaction commission. |
| `confirmationNumber` | `string \| undefined` | Optional | Confirmation number of the transaction. |
| `faceValue` | `number \| undefined` | Optional | Cash value for bonds. |
| `fees` | `number \| undefined` | Optional | Fees applied to the trade. |
| `fractionalCash` | `number \| undefined` | Optional | Cash for fractional units (used for stock splits). |
| `gain` | `number \| undefined` | Optional | For sales. |
| `incomeType` | [`IncomeType \| undefined`](../../doc/models/income-type.md) | Optional | Type of investment income. CGLONG (capital gains-long term), CGSHORT (capital gains-short term), MISC. |
| `inv401KSource` | [`Inv401KSource \| undefined`](../../doc/models/inv-401-k-source.md) | Optional | For 401(k) accounts, source of money for this order. Default if not present is OTHERNONVEST. |
| `load` | `number \| undefined` | Optional | Load on the transaction. |
| `loanId` | `string \| undefined` | Optional | For 401k accounts only. This indicates the transaction was due to a loan or a loan repayment. |
| `loanInterest` | `number \| undefined` | Optional | How much loan pre-payment is interest. |
| `loanPrincipal` | `number \| undefined` | Optional | How much loan pre-payment is principal. |
| `markup` | `number \| undefined` | Optional | Portion of unit price that is attributed to the dealer markup. |
| `newUnits` | `number \| undefined` | Optional | Number of shares after split. |
| `oldUnits` | `number \| undefined` | Optional | Number of shares before split. |
| `payrollDate` | `string \| undefined` | Optional | The date for the 401k transaction was obtained in payroll. |
| `penalty` | `number \| undefined` | Optional | Indicates amount withheld due to a penalty. |
| `positionType` | [`PositionType \| undefined`](../../doc/models/position-type.md) | Optional | LONG, SHORT. |
| `price` | `number \| undefined` | Optional | Unit purchase price. |
| `priorYearContrib` | `boolean \| undefined` | Optional | Indicates this buy was made using prior years contribution. TRUE or FALSE. |
| `runningBalance` | `number \| undefined` | Optional | Running balance of the position. |
| `securityId` | `string \| undefined` | Optional | Unique identifier of security. |
| `securityIdType` | [`InvestmentTransactionSecurityIdType \| undefined`](../../doc/models/investment-transaction-security-id-type.md) | Optional | Security identifier type. |
| `securityType` | [`SecurityType \| undefined`](../../doc/models/security-type.md) | Optional | - |
| `shares` | `number \| undefined` | Optional | Number of shares (with decimals). Negative numbers indicate securities are being removed from the account. |
| `splitRatioDenominator` | `number \| undefined` | Optional | Split ratio denominator. |
| `splitRatioNumerator` | `number \| undefined` | Optional | Split ratio numerator. |
| `stateWithholding` | `number \| undefined` | Optional | State tax withholding. |
| `subAccountFund` | [`SubAccountFund \| undefined`](../../doc/models/sub-account-fund.md) | Optional | From which account money came in. |
| `subAccountSec` | [`SubAccountSecurityType \| undefined`](../../doc/models/sub-account-security-type.md) | Optional | Sub-account security type. |
| `symbol` | `string \| undefined` | Optional | Ticker symbol. |
| `taxes` | `number \| undefined` | Optional | Taxes on the trade. |
| `taxExempt` | `boolean \| undefined` | Optional | Tax-exempt transaction TRUE or FALSE. |
| `transactionReason` | [`TransactionReason \| undefined`](../../doc/models/transaction-reason.md) | Optional | Reason for this transaction; CALL (the debt was called), SELL (the debt was sold), MATURITY (the debt reached maturity) |
| `transactionType` | [`InvestmentTransactionType \| undefined`](../../doc/models/investment-transaction-type.md) | Optional | InvestmentTransaction Type |
| `transferAction` | [`TransferAction \| undefined`](../../doc/models/transfer-action.md) | Optional | Transfer direction. |
| `unitPrice` | `number \| undefined` | Optional | Price per commonly-quoted unit. Does not include markup/markdown, unitprice. Share price for stocks, mutual funds, and others. Percentage of par for bonds. Per share (not contract) for options. |
| `units` | `number \| undefined` | Optional | For security-based actions other than stock splits, quantity. Shares for stocks, mutual funds, and others. Face value for bonds. Contracts for options. |
| `unitType` | [`UnitType \| undefined`](../../doc/models/unit-type.md) | Optional | Type of unit. |
| `withholding` | `number \| undefined` | Optional | Federal tax withholding. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "accountId": "accountId2",
  "amount": 139.34,
  "category": "category0",
  "debitCreditMemo": "DEBIT",
  "description": "description2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

