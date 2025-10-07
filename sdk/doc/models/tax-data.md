
# Tax Data

Tax data container for API requests and responses

*This model accepts additional fields of type unknown.*

## Structure

`TaxData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `businessIncomeStatement` | [`BusinessIncomeStatement \| undefined`](../../doc/models/business-income-statement.md) | Optional | Business Income Statement for IRS Form 1040 Schedule C |
| `cryptocurrencyTaxStatement` | [`CryptocurrencyTaxStatementList \| undefined`](../../doc/models/cryptocurrency-tax-statement-list.md) | Optional | Cryptocurrency Tax Statement list |
| `farmIncomeStatement` | [`FarmIncomeStatement \| undefined`](../../doc/models/farm-income-statement.md) | Optional | Farm Income Statement for IRS Form 1040 Schedule F |
| `farmRentalIncomeStatement` | [`FarmRentalIncomeStatement \| undefined`](../../doc/models/farm-rental-income-statement.md) | Optional | Farm Rental Income Statement for IRS Form 4835 |
| `rentalIncomeStatement` | [`RentalIncomeStatement \| undefined`](../../doc/models/rental-income-statement.md) | Optional | Rental Income Statement for IRS Form 1040 Schedule E |
| `royaltyIncomeStatement` | [`RoyaltyIncomeStatement \| undefined`](../../doc/models/royalty-income-statement.md) | Optional | Royalty Income Statement for IRS Form 1040 Schedule E |
| `tax1041K1` | [`Form1041K1 \| undefined`](../../doc/models/form-1041-k1.md) | Optional | Beneficiary's Share of Income, Deductions, Credits, etc. |
| `tax1042S` | [`Form1042S \| undefined`](../../doc/models/form-1042-s.md) | Optional | Foreign Person's U.S. Source Income Subject to Withholding |
| `tax1065K1` | [`Form1065K1 \| undefined`](../../doc/models/form-1065-k1.md) | Optional | Partner's Share of Income, Deductions, Credits, etc. |
| `tax1095A` | [`Form1095A \| undefined`](../../doc/models/form-1095-a.md) | Optional | Health Insurance Marketplace Statement |
| `tax1095B` | [`Form1095B \| undefined`](../../doc/models/form-1095-b.md) | Optional | Health Coverage |
| `tax1095C` | [`Form1095C \| undefined`](../../doc/models/form-1095-c.md) | Optional | Employer-Provided Health Insurance Offer and Coverage |
| `tax1097Btc` | [`Form1097Btc \| undefined`](../../doc/models/form-1097-btc.md) | Optional | Bond Tax Credit |
| `tax1098` | [`Form1098 \| undefined`](../../doc/models/form-1098.md) | Optional | Mortgage Interest Statement |
| `tax1098C` | [`Form1098C \| undefined`](../../doc/models/form-1098-c.md) | Optional | Contributions of Motor Vehicles, Boats, and Airplanes |
| `tax1098E` | [`Form1098E \| undefined`](../../doc/models/form-1098-e.md) | Optional | Student Loan Interest Statement |
| `tax1098Ma` | [`Form1098Ma \| undefined`](../../doc/models/form-1098-ma.md) | Optional | Mortgage Assistance Payments |
| `tax1098Q` | [`Form1098Q \| undefined`](../../doc/models/form-1098-q.md) | Optional | Qualifying Longevity Annuity Contract Information |
| `tax1098T` | [`Form1098T \| undefined`](../../doc/models/form-1098-t.md) | Optional | Tuition Statement |
| `tax1099A` | [`Form1099A \| undefined`](../../doc/models/form-1099-a.md) | Optional | Acquisition or Abandonment of Secured Property |
| `tax1099B` | [`Form1099B \| undefined`](../../doc/models/form-1099-b.md) | Optional | Proceeds From Broker and Barter Exchange Transactions |
| `tax1099C` | [`Form1099C \| undefined`](../../doc/models/form-1099-c.md) | Optional | Cancellation of Debt |
| `tax1099Cap` | [`Form1099Cap \| undefined`](../../doc/models/form-1099-cap.md) | Optional | Changes in Corporate Control and Capital Structure |
| `tax1099ConsolidatedStatement` | [`Form1099ConsolidatedStatement \| undefined`](../../doc/models/form-1099-consolidated-statement.md) | Optional | Consolidated Statement for combined IRS Form 1099s |
| `tax1099Div` | [`Form1099Div \| undefined`](../../doc/models/form-1099-div.md) | Optional | Dividends and Distributions |
| `tax1099G` | [`Form1099G \| undefined`](../../doc/models/form-1099-g.md) | Optional | Certain Government Payments |
| `tax1099H` | [`Form1099H \| undefined`](../../doc/models/form-1099-h.md) | Optional | Health Coverage Tax Credit (HCTC) Advance Payments |
| `tax1099Int` | [`Form1099Int \| undefined`](../../doc/models/form-1099-int.md) | Optional | Interest Income |
| `tax1099K` | [`Form1099K \| undefined`](../../doc/models/form-1099-k.md) | Optional | Merchant Card and Third-Party Network Payments |
| `tax1099Ls` | [`Form1099Ls \| undefined`](../../doc/models/form-1099-ls.md) | Optional | Reportable Life Insurance Sale |
| `tax1099Ltc` | [`Form1099Ltc \| undefined`](../../doc/models/form-1099-ltc.md) | Optional | Long-Term Care and Accelerated Death Benefits |
| `tax1099Misc` | [`Form1099Misc \| undefined`](../../doc/models/form-1099-misc.md) | Optional | Miscellaneous Income |
| `tax1099Nec` | [`Form1099Nec \| undefined`](../../doc/models/form-1099-nec.md) | Optional | Non-Employee Compensation |
| `tax1099Oid` | [`Form1099Oid \| undefined`](../../doc/models/form-1099-oid.md) | Optional | Original Issue Discount |
| `tax1099Patr` | [`Form1099Patr \| undefined`](../../doc/models/form-1099-patr.md) | Optional | Taxable Distributions Received From Cooperatives |
| `tax1099Q` | [`Form1099Q \| undefined`](../../doc/models/form-1099-q.md) | Optional | Payments From Qualified Education Programs |
| `tax1099Qa` | [`Form1099Qa \| undefined`](../../doc/models/form-1099-qa.md) | Optional | Distributions From ABLE Accounts |
| `tax1099R` | [`Form1099R \| undefined`](../../doc/models/form-1099-r.md) | Optional | Distributions from Pensions, Annuities, Retirement or Profit-Sharing Plans, IRAs, Insurance Contracts, etc. |
| `tax1099S` | [`Form1099S \| undefined`](../../doc/models/form-1099-s.md) | Optional | Proceeds From Real Estate Transactions |
| `tax1099Sa` | [`Form1099Sa \| undefined`](../../doc/models/form-1099-sa.md) | Optional | Distributions From an HSA, Archer MSA, or Medicare Advantage MSA |
| `tax1099Sb` | [`Form1099Sb \| undefined`](../../doc/models/form-1099-sb.md) | Optional | Seller's Investment in Life Insurance Contract |
| `tax1120Sk1` | [`Form1120SK1 \| undefined`](../../doc/models/form-1120-sk1.md) | Optional | Shareholder's Share of Income, Deductions, Credits, etc. |
| `tax2439` | [`Form2439 \| undefined`](../../doc/models/form-2439.md) | Optional | Notice to Shareholder of Undistributed Long-Term Capital Gains |
| `tax3921` | [`Form3921 \| undefined`](../../doc/models/form-3921.md) | Optional | Exercise of an Incentive Stock Option Under Section 422(b) |
| `tax3922` | [`Form3922 \| undefined`](../../doc/models/form-3922.md) | Optional | Transfer of Stock Acquired Through an Employee Stock Purchase Plan under Section 423(c) |
| `tax5227K1` | [`Form1041K1 \| undefined`](../../doc/models/form-1041-k1.md) | Optional | Split-Interest Trust Beneficiary's schedule K-1 |
| `tax5498` | [`Form5498 \| undefined`](../../doc/models/form-5498.md) | Optional | IRA Contribution Information |
| `tax5498Esa` | [`Form5498Esa \| undefined`](../../doc/models/form-5498-esa.md) | Optional | Coverdell ESA Contribution Information |
| `tax5498Qa` | [`Form5498Qa \| undefined`](../../doc/models/form-5498-qa.md) | Optional | ABLE Account Contribution Information |
| `tax5498Sa` | [`Form5498Sa \| undefined`](../../doc/models/form-5498-sa.md) | Optional | HSA, Archer MSA, or Medicare Advantage (MA) MSA Information |
| `taxW2` | [`FormW2 \| undefined`](../../doc/models/form-w2.md) | Optional | Wage and Tax Statement |
| `taxW2C` | [`FormW2C \| undefined`](../../doc/models/form-w2-c.md) | Optional | IRS form W-2c, Corrected Wage and Tax Statement |
| `taxW2G` | [`FormW2G \| undefined`](../../doc/models/form-w2-g.md) | Optional | Certain Gambling Winnings |
| `taxRefundDirectDeposit` | [`TaxRefundDirectDeposit \| undefined`](../../doc/models/tax-refund-direct-deposit.md) | Optional | Tax refund direct deposit information |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "businessIncomeStatement": {
    "taxYear": 2018,
    "corrected": false,
    "accountId": "accountId4",
    "taxFormId": "taxFormId2",
    "taxFormDate": "2016-03-13T12:52:32.123Z",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "cryptocurrencyTaxStatement": {
    "taxYear": 2018,
    "corrected": false,
    "accountId": "accountId2",
    "taxFormId": "taxFormId0",
    "taxFormDate": "2016-03-13T12:52:32.123Z",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "farmIncomeStatement": {
    "taxYear": 2018,
    "corrected": false,
    "accountId": "accountId4",
    "taxFormId": "taxFormId2",
    "taxFormDate": "2016-03-13T12:52:32.123Z",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "farmRentalIncomeStatement": {
    "taxYear": 2018,
    "corrected": false,
    "accountId": "accountId8",
    "taxFormId": "taxFormId6",
    "taxFormDate": "2016-03-13T12:52:32.123Z",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "rentalIncomeStatement": {
    "taxYear": 2018,
    "corrected": false,
    "accountId": "accountId8",
    "taxFormId": "taxFormId6",
    "taxFormDate": "2016-03-13T12:52:32.123Z",
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

