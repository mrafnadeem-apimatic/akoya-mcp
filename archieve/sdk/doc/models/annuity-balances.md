
# Annuity Balances

Data elements included with balances specific to annuity accounts

*This model accepts additional fields of type unknown.*

## Structure

`AnnuityBalances`

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
| `annuityProductType` | [`AnnunityProductType \| undefined`](../../doc/models/annunity-product-type.md) | Optional | - |
| `annuityValueBasis` | [`AnnunityValueBasis \| undefined`](../../doc/models/annunity-value-basis.md) | Optional | - |
| `paymentFrequency` | [`AnnuityAccountPaymentFrequency \| undefined`](../../doc/models/annuity-account-payment-frequency.md) | Optional | - |
| `annualIncrease` | `number \| undefined` | Optional | Percent or dollar amount of annual payment increase |
| `annualIncreaseType` | [`AnnualIncreaseType \| undefined`](../../doc/models/annual-increase-type.md) | Optional | - |
| `netPresentValue` | `number \| undefined` | Optional | Surrender or cash balance value |
| `paymentAmount` | `number \| undefined` | Optional | Amount of the recurring payment |
| `paymentEndDate` | `string \| undefined` | Optional | Date last payment will be made |
| `paymentStartDate` | `string \| undefined` | Optional | Date of first payment; could be a future date |
| `periodCertainGuarantee` | [`PeriodCertainGuarantee \| undefined`](../../doc/models/period-certain-guarantee.md) | Optional | - |
| `totalPaymentCount` | `number \| undefined` | Optional | Total number of payments that will be produced by the annuity |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "accountId": "accountId4",
  "accountType": "accountType4",
  "accountNumberDisplay": "accountNumberDisplay0",
  "currency": {
    "currencyCode": "currencyCode0",
    "currencyRate": 27.48,
    "originalCurrencyCode": "originalCurrencyCode4",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "description": "description4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

