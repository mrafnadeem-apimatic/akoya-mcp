
# Form 1099 K

Merchant Card and Third-Party Network Payments

*This model accepts additional fields of type unknown.*

## Structure

`Form1099K`

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
| `paymentSettlementEntity` | `boolean \| undefined` | Optional | Check to indicate if FILER is a Payment Settlement Entity (PSE) |
| `electronicPaymentFacilitator` | `boolean \| undefined` | Optional | Check to indicate if FILER is an Electronic Payment Facilitator (EPF) / Other third party |
| `paymentCard` | `boolean \| undefined` | Optional | Check to indicate transactions reported are: Payment card |
| `thirdPartyNetwork` | `boolean \| undefined` | Optional | Check to indicate transactions reported are: Third party network |
| `pseName` | `string \| undefined` | Optional | PSE's name |
| `psePhone` | [`TelephoneNumberPlusExtension \| undefined`](../../doc/models/telephone-number-plus-extension.md) | Optional | PSE's phone number |
| `accountNumber` | `string \| undefined` | Optional | Account number |
| `grossAmount` | `number \| undefined` | Optional | Box 1a, Gross amount of payment card/third party network transactions |
| `cardNotPresent` | `number \| undefined` | Optional | Box 1b, Card Not Present Transactions |
| `merchantCategoryCode` | `string \| undefined` | Optional | Box 2, Merchant category code |
| `numberOfTransactions` | `number \| undefined` | Optional | Box 3, Number of purchase transactions |
| `federalTaxWithheld` | `number \| undefined` | Optional | Box 4, Federal income tax withheld |
| `monthAmounts` | [`MonthAndAmount[] \| undefined`](../../doc/models/month-and-amount.md) | Optional | Box 5, Monthly amounts |
| `stateAndLocal` | [`StateAndLocalTaxWithholding[] \| undefined`](../../doc/models/state-and-local-tax-withholding.md) | Optional | Boxes 6-8, State and Local tax withholding |
| `secondTinNotice` | `boolean \| undefined` | Optional | Second TIN Notice |
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

