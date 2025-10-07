
# Deposit Account

Deposit Account

*This model accepts additional fields of type unknown.*

## Structure

`DepositAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string \| undefined` | Optional | Long-term persistent identity of the account. Not an account number. This identity must be unique to the owning institution. |
| `accountType` | `string \| undefined` | Optional | The type of an account. For instance, CHECKING, SAVINGS, 401K, etc. |
| `accountNumberDisplay` | `string \| undefined` | Optional | Account display number for the end user’s handle at owning institution. This is to be displayed by the Interface Provider. |
| `currency` | [`CurrencyEntity \| undefined`](../../doc/models/currency-entity.md) | Optional | Indicates the currency code used by the account. May also include currency rate. |
| `description` | `string \| undefined` | Optional | - |
| `fiAttributes` | [`FiAttributeEntity[] \| undefined`](../../doc/models/fi-attribute-entity.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `nickname` | `string \| undefined` | Optional | Name given by the user. Used in UIs to assist in account selection |
| `productName` | `string \| undefined` | Optional | Marketed product name for this account.  Used in UIs to assist in account selection |
| `status` | [`AccountInfoStatus \| undefined`](../../doc/models/account-info-status.md) | Optional | The status of an account. |
| `lineOfBusiness` | `string \| undefined` | Optional | The line of business, such as consumer, consumer joint, small business, corporate, etc. |
| `balanceType` | [`BalanceType \| undefined`](../../doc/models/balance-type.md) | Optional | ASSET (positive transaction amount increases balance), LIABILITY (positive transaction amount decreases balance) |
| `interestRate` | `number \| undefined` | Optional | Interest Rate of Account |
| `interestRateType` | [`InterestRateType \| undefined`](../../doc/models/interest-rate-type.md) | Optional | The type of interest rate. FIXED or VARIABLE. |
| `interestRateAsOf` | `string \| undefined` | Optional | Date of account’s interest rate |
| `lastActivityDate` | `string \| undefined` | Optional | Date that last transaction occurred on account |
| `micrNumber` | `string \| undefined` | Optional | MICR Number |
| `parentAccountId` | `string \| undefined` | Optional | Long-term persistent identity of the parent account. This is used to group accounts. |
| `priorInterestRate` | `number \| undefined` | Optional | Previous Interest Rate of Account |
| `transferIn` | `boolean \| undefined` | Optional | Account is eligible for incoming transfers |
| `transferOut` | `boolean \| undefined` | Optional | Account is eligible for outgoing transfers |
| `annualPercentageYield` | `number \| undefined` | Optional | Annual Percentage Yield. |
| `term` | `number \| undefined` | Optional | Term of CD in months |
| `maturityDate` | `string \| undefined` | Optional | Maturity date for CDs. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "accountId": "accountId8",
  "accountType": "accountType2",
  "accountNumberDisplay": "accountNumberDisplay8",
  "currency": {
    "currencyCode": "currencyCode0",
    "currencyRate": 27.48,
    "originalCurrencyCode": "originalCurrencyCode4",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "description": "description8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

