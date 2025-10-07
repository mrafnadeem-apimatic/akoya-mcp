
# An Investment Holding

*This model accepts additional fields of type unknown.*

## Structure

`AnInvestmentHolding`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `assetClasses` | [`AssetClassItem[] \| undefined`](../../doc/models/asset-class-item.md) | Optional | Percent breakdown by asset class.<br><br>**Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `averageCost` | `boolean \| undefined` | Optional | Cost is average of all purchases for holding. |
| `cashAccount` | `boolean \| undefined` | Optional | If true, indicates that this holding is used to maintain proceeds from sales, dividends, and other cash postings to the investment account. |
| `changeInPrice` | `number \| undefined` | Optional | Change in current price compared to previous day's close |
| `currency` | [`CurrencyEntity \| undefined`](../../doc/models/currency-entity.md) | Optional | Indicates the currency code used by the account. May also include currency rate. |
| `currentUnitPrice` | `number \| undefined` | Optional | - |
| `currentUnitPriceDate` | `string \| undefined` | Optional | Current unit price as of date |
| `description` | `string \| undefined` | Optional | Description of the holding |
| `expirationDate` | `string \| undefined` | Optional | For CDs, bonds, and other time-based holdings. |
| `faceValue` | `number \| undefined` | Optional | Face value at the time of data retrieved. |
| `fiAssetClasses` | [`FiAssetClassItem[] \| undefined`](../../doc/models/fi-asset-class-item.md) | Optional | Percent breakdown by FI-specific asset class percentage breakdown |
| `fiAttributes` | [`FiAttributeEntity[] \| undefined`](../../doc/models/fi-attribute-entity.md) | Optional | **Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `heldInAccount` | [`HeldInAccount \| undefined`](../../doc/models/held-in-account.md) | Optional | Sub-account |
| `holdingId` | `string \| undefined` | Optional | Long term persistent identity of the holding |
| `holdingName` | `string \| undefined` | Optional | Holding name or security name |
| `holdingSubType` | [`HoldingSubType \| undefined`](../../doc/models/holding-sub-type.md) | Optional | - |
| `holdingType` | [`HoldingType \| undefined`](../../doc/models/holding-type.md) | Optional | - |
| `inv401KSurce` | [`Inv401KSurce \| undefined`](../../doc/models/inv-401-k-surce.md) | Optional | Source for money for this security. |
| `marketValue` | `number \| undefined` | Optional | Market value at the time of data retrieved |
| `originalPurchaseDate` | `string \| undefined` | Optional | Date of original purchase |
| `positionType` | [`PositionType \| undefined`](../../doc/models/position-type.md) | Optional | LONG, SHORT. |
| `purchasedPrice` | `number \| undefined` | Optional | Price of holding at the time of purchase |
| `rate` | `number \| undefined` | Optional | For CDs, bonds, and other rate based holdings. |
| `securityId` | `string \| undefined` | Optional | Unique identifier of security |
| `securityIdType` | [`SecurityIdType \| undefined`](../../doc/models/security-id-type.md) | Optional | Security identifier type |
| `symbol` | `string \| undefined` | Optional | Ticker / Market symbol |
| `taxLots` | [`Items[] \| undefined`](../../doc/models/items.md) | Optional | Breakdown by tax lot.<br><br>**Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `units` | `number \| undefined` | Optional | Number of shares (with decimals). |
| `mutualFundSecurity` | [`MutualFundSecurityEntity \| undefined`](../../doc/models/mutual-fund-security-entity.md) | Optional | Information about the mutual fund security specific to the type of security |
| `optionSecurity` | [`OptionSecurityEntity \| undefined`](../../doc/models/option-security-entity.md) | Optional | Information about the option security specific to the type of security |
| `otherSecurity` | [`OtherSecurityEntity \| undefined`](../../doc/models/other-security-entity.md) | Optional | Information about the security specific to the type of security |
| `stockSecurity` | [`StockSecurityEntity \| undefined`](../../doc/models/stock-security-entity.md) | Optional | Information about the stock security specific to the type of security |
| `sweepSecurity` | [`SweepSecurityEntity \| undefined`](../../doc/models/sweep-security-entity.md) | Optional | Information about the sweep security specific to the type of security |
| `debtSecurity` | [`DebtSecurityEntity \| undefined`](../../doc/models/debt-security-entity.md) | Optional | Information about the debt security specific to the type of security |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "assetClasses": [
    {
      "assetClass": "DOMESTICBOND",
      "percent": 174.1,
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    {
      "assetClass": "DOMESTICBOND",
      "percent": 174.1,
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  ],
  "averageCost": false,
  "cashAccount": false,
  "changeInPrice": 26.72,
  "currency": {
    "currencyCode": "currencyCode0",
    "currencyRate": 27.48,
    "originalCurrencyCode": "originalCurrencyCode4",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

