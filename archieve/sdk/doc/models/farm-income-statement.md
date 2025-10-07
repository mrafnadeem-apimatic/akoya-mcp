
# Farm Income Statement

Farm Income Statement for IRS Form 1040 Schedule F

*This model accepts additional fields of type unknown.*

## Structure

`FarmIncomeStatement`

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
| `cropOrActivity` | `string \| undefined` | Optional | Box A, Principal crop or activity |
| `sales` | `number \| undefined` | Optional | Box 1a, Sales of livestock and other resale items |
| `costOfItemsSold` | `number \| undefined` | Optional | Box 1b, Cost or other basis of livestock or other items |
| `salesOfRaised` | `number \| undefined` | Optional | Box 2, Sales of livestock, produce, grains, and other products you raised |
| `coopDistributions` | `number \| undefined` | Optional | Box 3a, Cooperative distributions |
| `agProgramPayments` | `number \| undefined` | Optional | Box 4a, Agricultural program payments |
| `cccLoans` | `number \| undefined` | Optional | Box 5a, Commodity Credit Corporation (CCC) loans reported under election |
| `cropInsuranceProceeds` | `number \| undefined` | Optional | Box 6a, Crop insurance proceeds and federal crop disaster payments |
| `customHireIncome` | `number \| undefined` | Optional | Box 7, Custom hire (machine work) income |
| `otherIncome` | [`DescriptionAndAmount[] \| undefined`](../../doc/models/description-and-amount.md) | Optional | Box 8, Other income |
| `carAndTruck` | `number \| undefined` | Optional | Box 10, Car and truck expenses |
| `chemicals` | `number \| undefined` | Optional | Box 11, Chemicals |
| `conservation` | `number \| undefined` | Optional | Box 12, Conservation expenses |
| `customHireExpenses` | `number \| undefined` | Optional | Box 13, Custom hire (machine work) |
| `depreciation` | `number \| undefined` | Optional | Box 14, Depreciation |
| `employeeBenefitPrograms` | `number \| undefined` | Optional | Box 15, Employee benefit programs |
| `feed` | `number \| undefined` | Optional | Box 16, Feed |
| `fertilizers` | `number \| undefined` | Optional | Box 17, Fertilizers and lime |
| `freight` | `number \| undefined` | Optional | Box 18, Freight and trucking |
| `fuel` | `number \| undefined` | Optional | Box 19, Gasoline, fuel, and oil |
| `insurance` | `number \| undefined` | Optional | Box 20, Insurance (other than health) |
| `mortgageInterest` | `number \| undefined` | Optional | Box 21a, Mortgage Interest |
| `otherInterest` | `number \| undefined` | Optional | Box 21b, Other interest |
| `laborHired` | `number \| undefined` | Optional | Box 22, Labor hired |
| `pension` | `number \| undefined` | Optional | Box 23, Pension and profit-sharing plans |
| `equipmentRent` | `number \| undefined` | Optional | Box 24a, Rent or lease: Vehicles, machinery, equipment |
| `otherRent` | `number \| undefined` | Optional | Box 24b, Rent or lease: Other |
| `repairs` | `number \| undefined` | Optional | Box 25, Repairs and maintenance |
| `seeds` | `number \| undefined` | Optional | Box 26, Seeds and plants |
| `storage` | `number \| undefined` | Optional | Box 27, Storage and warehousing |
| `supplies` | `number \| undefined` | Optional | Box 28, Supplies |
| `taxes` | `number \| undefined` | Optional | Box 29, Taxes |
| `utilities` | `number \| undefined` | Optional | Box 30, Utilities |
| `veterinary` | `number \| undefined` | Optional | Box 31, Veterinary, breeding, and medicine |
| `otherExpenses` | [`DescriptionAndAmount[] \| undefined`](../../doc/models/description-and-amount.md) | Optional | Box 32, Other expenses |
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
  "taxFormId": "taxFormId8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

