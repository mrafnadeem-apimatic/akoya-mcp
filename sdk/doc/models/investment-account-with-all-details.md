
# Investment Account With All Details

Data elements included with the investment product

*This model accepts additional fields of type unknown.*

## Structure

`InvestmentAccountWithAllDetails`

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
| `allowedCheckWriting` | `boolean \| undefined` | Optional | Check writing privileges |
| `allowedOptionTrade` | `boolean \| undefined` | Optional | Allowed to trade options |
| `brokerId` | `string \| undefined` | Optional | Unique identifier FI |
| `calendarYearFor401K` | `string \| undefined` | Optional | Date for this calendar year for 401K account |
| `employerName` | `string \| undefined` | Optional | Name of the employer in investment 401k Plan |
| `margin` | `boolean \| undefined` | Optional | Margin trading is allowed |
| `planId` | `string \| undefined` | Optional | Plan number for Investment 401k plan |
| `availableCashBalance` | `number \| undefined` | Optional | Cash balance across all sub-accounts. Should include sweep funds. |
| `balanceAsOf` | `string \| undefined` | Optional | As-of date of balances |
| `balanceList` | [`InvestmentBalanceList[] \| undefined`](../../doc/models/investment-balance-list.md) | Optional | Balance List. Name value pair aggregate. |
| `currentValue` | `number \| undefined` | Optional | Total current value of all investments |
| `dailyChange` | `number \| undefined` | Optional | Daily change |
| `marginBalance` | `number \| undefined` | Optional | Margin balance |
| `percentageChange` | `number \| undefined` | Optional | Percentage change |
| `rolloverAmount` | `number \| undefined` | Optional | Rollover amount |
| `shortBalance` | `number \| undefined` | Optional | Short balance |
| `holdings` | [`AnInvestmentHolding[] \| undefined`](../../doc/models/an-investment-holding.md) | Optional | Array of holdings |
| `openOrders` | [`OpenOrderEntity[] \| undefined`](../../doc/models/open-order-entity.md) | Optional | Array of open orders |
| `contribution` | [`ContributionEntity[] \| undefined`](../../doc/models/contribution-entity.md) | Optional | Array of contribution objects. Describes how new contributions are distributed among the available securities |
| `vesting` | [`VestingEntity[] \| undefined`](../../doc/models/vesting-entity.md) | Optional | Array of vesting objects. Provides the past, present, and future vesting schedule and percentages |
| `investmentLoans` | [`InvestmentLoanEntity[] \| undefined`](../../doc/models/investment-loan-entity.md) | Optional | Array of investment loans |
| `pensionSource` | [`PensionSourceEntity[] \| undefined`](../../doc/models/pension-source-entity.md) | Optional | Array of Pension Source |
| `equityGrants` | [`EquityGrant[] \| undefined`](../../doc/models/equity-grant.md) | Optional | Provides equity grant information on Restricted Stock Units, Restricted Stock Awards, Stock Appreciation Right, Stock Options, Performance Awards, and Total Share Return Units |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "accountId": "accountId2",
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
  "description": "description2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

