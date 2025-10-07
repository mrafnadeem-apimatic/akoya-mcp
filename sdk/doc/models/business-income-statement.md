
# Business Income Statement

Business Income Statement for IRS Form 1040 Schedule C

*This model accepts additional fields of type unknown.*

## Structure

`BusinessIncomeStatement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `taxYear` | `number \| undefined` | Optional | Year for which taxes are being paid<br><br>**Constraints**: `>= 2018`, `<= 2050` |
| `corrected` | `boolean \| undefined` | Optional | True to indicate this is a corrected tax form |
| `accountId` | `string \| undefined` | Optional | Long-term persistent identity of the source account. Not the account number |
| `taxFormId` | `string \| undefined` | Optional | Long-term persistent id for this tax form. Depending upon the data provider, this may be the same id as the enclosing tax statement id, or this may be a different id, or this id may be omitted. |
| `taxFormDate` | `string \| undefined` | Optional | Date of production or delivery of the tax form |
| `additionalInformation` | `string \| undefined` | Optional | Additional explanation text or content about this tax form |
| `taxFormType` | [`TypeFormType \| undefined`](../../doc/models/type-form-type.md) | Optional | Enumerated name of the tax form entity e.g. "TaxW2" |
| `issuer` | [`TaxParty \| undefined`](../../doc/models/tax-party.md) | Optional | Issuer's name, address, phone, and TIN. Issuer data need only be transmitted on enclosing TaxStatement, if it is the same on all its included tax forms. |
| `recipient` | [`TaxParty \| undefined`](../../doc/models/tax-party.md) | Optional | Recipient's name, address, phone, and TIN. Recipient data need only be transmitted on enclosing TaxStatement, if it is the same on all its included tax forms. |
| `attributes` | [`TaxFormAttribute[] \| undefined`](../../doc/models/tax-form-attribute.md) | Optional | Additional attributes for this tax form when defined fields are not available. Some specific additional attributes already defined by providers: Fields required by [IRS FIRE](https://www.irs.gov/e-file-providers/filing-information-returns-electronically-fire): Name Control, Type of Identification Number (EIN, SSN, ITIN, ATIN). (ATIN is tax ID number for pending adoptions.) Tax form provider field for taxpayer notification: Recipient Email Address. |
| `error` | [`Error \| undefined`](../../doc/models/error.md) | Optional | Present if an error was encountered while retrieving this form |
| `links` | [`HateoasLink[] \| undefined`](../../doc/models/hateoas-link.md) | Optional | Links to retrieve this form as data or image, or to invoke other APIs |
| `businessName` | `string \| undefined` | Optional | Box C, Business name |
| `sales` | `number \| undefined` | Optional | Box 1, Gross receipts or sales |
| `returns` | `number \| undefined` | Optional | Box 2, Returns and allowances |
| `otherIncome` | [`DescriptionAndAmount[] \| undefined`](../../doc/models/description-and-amount.md) | Optional | Box 8, Other income |
| `advertising` | `number \| undefined` | Optional | Box 8, Advertising |
| `carAndTruck` | `number \| undefined` | Optional | Box 9, Car and truck expenses |
| `commissions` | `number \| undefined` | Optional | Box 10, Commissions and fees |
| `contractLabor` | `number \| undefined` | Optional | Box 11, Contract labor |
| `depletion` | `number \| undefined` | Optional | Box 12, Depletion |
| `depreciation` | `number \| undefined` | Optional | Box 13, Depreciation |
| `employeeBenefits` | `number \| undefined` | Optional | Box 14, Employee benefit programs |
| `insurance` | `number \| undefined` | Optional | Box 15, Insurance |
| `mortgageInterest` | `number \| undefined` | Optional | Box 16a, Mortgage interest |
| `otherInterest` | `number \| undefined` | Optional | Box 16b, Other interest |
| `legal` | `number \| undefined` | Optional | Box 17, Legal and professional services |
| `office` | `number \| undefined` | Optional | Box 18, Office expense |
| `pension` | `number \| undefined` | Optional | Box 19, Pension and profit-sharing plans |
| `equipmentRent` | `number \| undefined` | Optional | Box 20a, Equipment rent |
| `otherRent` | `number \| undefined` | Optional | Box 20b, Other rent |
| `repairs` | `number \| undefined` | Optional | Box 21, Repairs and maintenance |
| `supplies` | `number \| undefined` | Optional | Box 22, Supplies |
| `taxes` | `number \| undefined` | Optional | Box 23, Taxes and licenses |
| `travel` | `number \| undefined` | Optional | Box 24a, Travel |
| `meals` | `number \| undefined` | Optional | Box 24b, Deductible meals |
| `utilities` | `number \| undefined` | Optional | Box 25, Utilities |
| `wages` | `number \| undefined` | Optional | Box 26, Wages |
| `otherExpenses` | [`DescriptionAndAmount[] \| undefined`](../../doc/models/description-and-amount.md) | Optional | Box 27, Other expenses |
| `beginningInventory` | `number \| undefined` | Optional | Box 35, Inventory at beginning of year |
| `purchases` | `number \| undefined` | Optional | Box 36, Purchases |
| `costOfLabor` | `number \| undefined` | Optional | Box 37, Cost of labor |
| `materials` | `number \| undefined` | Optional | Box 38, Materials and supplies |
| `otherCosts` | [`DescriptionAndAmount[] \| undefined`](../../doc/models/description-and-amount.md) | Optional | Box 39, Other costs |
| `endingInventory` | `number \| undefined` | Optional | Box 41, Inventory at end of year |
| `capitalExpenditures` | [`DateAndAmount[] \| undefined`](../../doc/models/date-and-amount.md) | Optional | Capital expenditures, for use in calculating Depreciation |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "taxYear": 2023,
  "taxFormDate": "2021-07-15",
  "attributes": [
    {
      "name": "nameControl",
      "value": "WILC"
    },
    {
      "name": "recipientIdType",
      "value": "EIN",
      "code": "1"
    },
    {
      "name": "recipientIdType",
      "value": "SSN",
      "code": "2"
    },
    {
      "name": "recipientIdType",
      "value": "ITIN",
      "code": "2"
    },
    {
      "name": "recipientIdType",
      "value": "ATIN",
      "code": "2"
    }
  ],
  "corrected": false,
  "accountId": "accountId4",
  "taxFormId": "taxFormId2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

