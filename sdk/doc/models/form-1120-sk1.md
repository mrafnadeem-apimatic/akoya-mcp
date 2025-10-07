
# Form 1120 SK1

Shareholder's Share of Income, Deductions, Credits, etc.

*This model accepts additional fields of type unknown.*

## Structure

`Form1120SK1`

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
| `finalK1` | `boolean \| undefined` | Optional | Final K-1 |
| `amendedK1` | `boolean \| undefined` | Optional | Amended K-1 |
| `fiscalYearBegin` | `string \| undefined` | Optional | Fiscal year begin date |
| `fiscalYearEnd` | `string \| undefined` | Optional | Fiscal year end date |
| `irsCenter` | `string \| undefined` | Optional | Box C, IRS Center where corporation filed return |
| `corporationBeginningShares` | `number \| undefined` | Optional | Box D, Corporation's total number of shares, Beginning of tax year |
| `corporationEndingShares` | `number \| undefined` | Optional | Box D, Corporation's total number of shares, End of tax year |
| `percentOwnership` | `number \| undefined` | Optional | Box G, Current year allocation percentage |
| `beginningShares` | `number \| undefined` | Optional | Box H, Shareholder's number of shares, Beginning of tax year |
| `endingShares` | `number \| undefined` | Optional | Box H, Shareholder's number of shares, End of tax year |
| `beginningLoans` | `number \| undefined` | Optional | Box I, Loans from shareholder, Beginning of tax year |
| `endingLoans` | `number \| undefined` | Optional | Box I, Loans from shareholder, Ending of tax year |
| `ordinaryIncome` | `number \| undefined` | Optional | Box 1, Ordinary business income (loss) |
| `netRentalRealEstateIncome` | `number \| undefined` | Optional | Box 2, Net rental real estate income (loss) |
| `otherRentalIncome` | `number \| undefined` | Optional | Box 3, Other net rental income (loss) |
| `interestIncome` | `number \| undefined` | Optional | Box 4, Interest income |
| `ordinaryDividends` | `number \| undefined` | Optional | Box 5a, Ordinary dividends |
| `qualifiedDividends` | `number \| undefined` | Optional | Box 5b, Qualified dividends |
| `royalties` | `number \| undefined` | Optional | Box 6, Royalties |
| `netShortTermGain` | `number \| undefined` | Optional | Box 7, Net short-term capital gain (loss) |
| `netLongTermGain` | `number \| undefined` | Optional | Box 8a, Net long-term capital gain (loss) |
| `collectiblesGain` | `number \| undefined` | Optional | Box 8b, Collectibles (28%) gain (loss) |
| `unrecaptured1250Gain` | `number \| undefined` | Optional | Box 8c, Unrecaptured section 1250 gain |
| `net1231Gain` | `number \| undefined` | Optional | Box 9, Net section 1231 gain (loss) |
| `otherIncome` | [`DescriptionAndAmount[] \| undefined`](../../doc/models/description-and-amount.md) | Optional | Box 10, Other income (loss) |
| `section179Deduction` | `number \| undefined` | Optional | Box 11, Section 179 deduction |
| `otherDeductions` | [`CodeAndAmount[] \| undefined`](../../doc/models/code-and-amount.md) | Optional | Box 12, Other deductions |
| `credits` | [`CodeAndAmount[] \| undefined`](../../doc/models/code-and-amount.md) | Optional | Box 13, Credits |
| `scheduleK3` | `boolean \| undefined` | Optional | Box 14, Schedule K-3 is attached |
| `amtItems` | [`CodeAndAmount[] \| undefined`](../../doc/models/code-and-amount.md) | Optional | Box 15, Alternative minimum tax (AMT) items |
| `basisItems` | [`CodeAndAmount[] \| undefined`](../../doc/models/code-and-amount.md) | Optional | Box 16, Items affecting shareholder basis |
| `otherInfo` | [`CodeAndAmount[] \| undefined`](../../doc/models/code-and-amount.md) | Optional | Box 17, Other information |
| `multipleAtRiskActivities` | `boolean \| undefined` | Optional | Box 18, More than one activity for at-risk purposes |
| `multiplePassiveActivities` | `boolean \| undefined` | Optional | Box 19, More than one activity for passive activity purposes |
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
  "fiscalYearBegin": "2021-07-15",
  "fiscalYearEnd": "2021-07-15",
  "corrected": false,
  "accountId": "accountId6",
  "taxFormId": "taxFormId8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

