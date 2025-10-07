
# Deposit Transaction

Deposit transaction

*This model accepts additional fields of type unknown.*

## Structure

`DepositTransaction`

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
| `payee` | `string \| undefined` | Optional | Payee name |
| `checkNumber` | `number \| undefined` | Optional | Check Number |
| `transactionType` | [`DepositTransactionType \| undefined`](../../doc/models/deposit-transaction-type.md) | Optional | DepositTransaction Type |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "accountId": "accountId0",
  "amount": 1.72,
  "category": "category8",
  "debitCreditMemo": "DEBIT",
  "description": "description0",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

