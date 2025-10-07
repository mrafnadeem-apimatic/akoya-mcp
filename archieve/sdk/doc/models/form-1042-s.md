
# Form 1042 S

Foreign Person's U.S. Source Income Subject to Withholding

*This model accepts additional fields of type unknown.*

## Structure

`Form1042S`

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
| `formId` | `string \| undefined` | Optional | Unique form identifier |
| `amended` | `boolean \| undefined` | Optional | Amended |
| `amendmentNumber` | `number \| undefined` | Optional | Amendment number |
| `incomeTypeCode` | `string \| undefined` | Optional | Box 1, Income code |
| `grossIncome` | `number \| undefined` | Optional | Box 2, Gross income |
| `chapterIndicator` | `string \| undefined` | Optional | Box 3, Chapter indicator |
| `ch3ExemptionCode` | `string \| undefined` | Optional | Box 3a, Exemption code |
| `ch3TaxRate` | `number \| undefined` | Optional | Box 3b, Tax rate |
| `ch4ExemptionCode` | `string \| undefined` | Optional | Box 4a, Exemption code |
| `ch4TaxRate` | `number \| undefined` | Optional | Box 4b, Tax rate |
| `withholdingAllowance` | `number \| undefined` | Optional | Box 5, Withholding allowance |
| `netIncome` | `number \| undefined` | Optional | Box 6, Net income |
| `federalTaxWithheld` | `number \| undefined` | Optional | Box 7a, Federal tax withheld |
| `escrowProceduresApplied` | `boolean \| undefined` | Optional | Box 7b, Check if federal tax withheld was not deposited with the IRS because escrow procedures were applied |
| `subsequentYear` | `boolean \| undefined` | Optional | Box 7c, Check if withholding occurred in subsequent year with respect to a partnership interest |
| `otherAgentsTaxWithheld` | `number \| undefined` | Optional | Box 8, Tax withheld by other agents |
| `recipientRepaidAmount` | `number \| undefined` | Optional | Box 9, Overwithheld tax repaid to recipient pursuant to adjustment procedures |
| `totalTaxWithholdingCredit` | `number \| undefined` | Optional | Box 10, Total withholding credit |
| `withholdingAgentTaxPaid` | `number \| undefined` | Optional | Box 11, Tax paid by withholding agent (amounts not withheld) |
| `withholdingAgent` | [`Form1042SAgent \| undefined`](../../doc/models/form-1042-s-agent.md) | Optional | Boxes 12a-i, Withholding agent |
| `form1042Recipient` | [`Form1042SRecipient \| undefined`](../../doc/models/form-1042-s-recipient.md) | Optional | Boxes 13a-j, 13l, Recipient for Form 1042-S |
| `accountNumber` | `string \| undefined` | Optional | Box 13k, Recipient account number |
| `primary` | [`Form1042SAgent \| undefined`](../../doc/models/form-1042-s-agent.md) | Optional | Boxes 14a-b, Primary Withholding Agent |
| `prorataBasisReporting` | `boolean \| undefined` | Optional | Box 15, Check if pro-rata basis reporting |
| `intermediary` | [`Form1042SAgent \| undefined`](../../doc/models/form-1042-s-agent.md) | Optional | Boxes 15a-i, Intermediary or flow thru entity |
| `payer` | [`Form1042SAgent \| undefined`](../../doc/models/form-1042-s-agent.md) | Optional | Boxes 16a-e, Payer |
| `stateAndLocal` | [`StateAndLocalTaxWithholding \| undefined`](../../doc/models/state-and-local-tax-withholding.md) | Optional | Box 17, State and Local tax withholding |
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
  "accountId": "accountId6",
  "taxFormId": "taxFormId6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

