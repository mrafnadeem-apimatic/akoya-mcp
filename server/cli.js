#!/usr/bin/env node
import { executeMcpServerCli } from "@apimatic/mcp-core";
import * as sdkMetadata from "akoya/metadata";

await executeMcpServerCli(
  sdkMetadata,
  {
  "name": "Akoya MCP Server",
  "description": "Akoya product APIs for data access. Default servers are set for the Akoya sandbox environment.  Akoya APIs include the following updates:  - v2.4.0   - Added Tax product - v2.3.0   - Removed erroneous `accountId` query param from Taxlots endpoint   - Added TaxLots endpoint - v2.2.2   - Added mode query parameter to Account Information, Balances, Investments, and Transactions to support standard mode.   - Edited callouts for Account Holder endpoint - v2.2.1   - Fixed typo in `accountIds` query parameter for `/accounts-info`, `/balances`, `/accounts`   - Added security method for `Account holder information` to bear token. Missing method defaulted to basic auth.   - Added examples and descriptions to some schemas   - Added HTTP status `429` FDX error `1207`. - v2.2 Additions   - Added optional `x-akoya-interaction-type` header to all endpoints to specify if a request is part of a batch process   - Update of tags to organize endpoints by Akoya product   - `206` response added to `/accounts-info`, `/balances`, `/accounts` - v2.1 New Statements product and Customers product updated with additional endpoint, `Account holder information`. - v2.0 Launch of Akoya products: Account Info, Balances, Investments, Transactions, Payments, Customers."
}
);