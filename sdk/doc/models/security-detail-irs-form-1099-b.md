
# Security Detail Irs Form 1099 B

Tax information for a single security transaction

*This model accepts additional fields of type unknown.*

## Structure

`SecurityDetailIrsForm1099B`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkboxOnForm8949` | `string \| undefined` | Optional | Applicable checkbox on Form 8949 |
| `securityName` | `string \| undefined` | Optional | Security name |
| `numberOfShares` | `number \| undefined` | Optional | Number of shares |
| `saleDescription` | `string \| undefined` | Optional | Box 1a, Description of property |
| `dateAcquired` | `string \| undefined` | Optional | Box 1b, Date acquired |
| `variousDatesAcquired` | `boolean \| undefined` | Optional | Box 1b, Date acquired Various |
| `dateOfSale` | `string \| undefined` | Optional | Box 1c, Date sold or disposed |
| `salesPrice` | `number \| undefined` | Optional | Box 1d, Proceeds (not price per share) |
| `accruedMarketDiscount` | `number \| undefined` | Optional | Box 1f, Accrued market discount |
| `adjustmentCodes` | [`CodeAndAmount[] \| undefined`](../../doc/models/code-and-amount.md) | Optional | Other adjustments (code and amount) |
| `costBasis` | `number \| undefined` | Optional | Box 1e, Cost or other basis |
| `correctedCostBasis` | `number \| undefined` | Optional | Corrected cost basis. May be supplied in lieu of adjustmentCode code B. If both adjustmentCodes and correctedCostBasis are supplied, costBasis plus adjustmentCode B should equal correctedCostBasis |
| `washSaleLossDisallowed` | `number \| undefined` | Optional | Box 1g, Wash sale loss disallowed |
| `longOrShort` | [`SaleTermType \| undefined`](../../doc/models/sale-term-type.md) | Optional | LONG or SHORT (1099-B box 2) |
| `ordinary` | `boolean \| undefined` | Optional | Box 2, Ordinary |
| `collectible` | `boolean \| undefined` | Optional | Box 3, Collectibles |
| `qof` | `boolean \| undefined` | Optional | Box 3, Qualified Opportunity Fund (QOF) |
| `federalTaxWithheld` | `number \| undefined` | Optional | Box 4, Federal income tax withheld |
| `noncoveredSecurity` | `boolean \| undefined` | Optional | Box 5, Noncovered security |
| `grossOrNet` | [`SaleProceedsType \| undefined`](../../doc/models/sale-proceeds-type.md) | Optional | Box 6, Reported to IRS: GROSS or NET |
| `lossNotAllowed` | `boolean \| undefined` | Optional | Box 7, Loss not allowed based on proceeds |
| `basisReported` | `boolean \| undefined` | Optional | Box 12, Basis reported to IRS |
| `stateAndLocal` | [`StateAndLocalTaxWithholding[] \| undefined`](../../doc/models/state-and-local-tax-withholding.md) | Optional | Boxes 14-16, State and Local tax withholding |
| `cusip` | `string \| undefined` | Optional | CUSIP number |
| `foreignAccountTaxCompliance` | `boolean \| undefined` | Optional | Foreign account tax compliance |
| `expiredOption` | [`ExpiredOptionType \| undefined`](../../doc/models/expired-option-type.md) | Optional | To indicate gain or loss resulted from option expiration. If salesPrice (1d, proceeds) is zero, use PURCHASED. If costBasis (1e) is zero, use GRANTED |
| `investmentSaleType` | [`InvestmentSaleType \| undefined`](../../doc/models/investment-sale-type.md) | Optional | Type of investment sale |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "dateAcquired": "2021-07-15",
  "dateOfSale": "2021-07-15",
  "checkboxOnForm8949": "checkboxOnForm89498",
  "securityName": "securityName6",
  "numberOfShares": 126.44,
  "saleDescription": "saleDescription4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

