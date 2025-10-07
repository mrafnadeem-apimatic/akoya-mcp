# Akoya MCP Server

Akoya product APIs for data access. Default servers are set for the Akoya sandbox environment.

Akoya APIs include the following updates:

- v2.4.0
  - Added Tax product
- v2.3.0
  - Removed erroneous `accountId` query param from Taxlots endpoint
  - Added TaxLots endpoint
- v2.2.2
  - Added mode query parameter to Account Information, Balances, Investments, and Transactions to support standard mode.
  - Edited callouts for Account Holder endpoint
- v2.2.1
  - Fixed typo in `accountIds` query parameter for `/accounts-info`, `/balances`, `/accounts`
  - Added security method for `Account holder information` to bear token. Missing method defaulted to basic auth.
  - Added examples and descriptions to some schemas
  - Added HTTP status `429` FDX error `1207`.
- v2.2 Additions
  - Added optional `x-akoya-interaction-type` header to all endpoints to specify if a request is part of a batch process
  - Update of tags to organize endpoints by Akoya product
  - `206` response added to `/accounts-info`, `/balances`, `/accounts`
- v2.1 New Statements product and Customers product updated with additional endpoint, `Account holder information`.
- v2.0 Launch of Akoya products: Account Info, Balances, Investments, Transactions, Payments, Customers.

## Quick Start

To run the MCP server using `node`, use the following command:

```bash
cd server
node ./cli.js
```            

Flags:
-  --port <number>, -p : Port to run the http server on
-  --transport <string>, -t : Transport (http | stdio)
-  --toolsets <items> : Comma-separated list of toolsets. By default, all toolsets are included.

## Installation Guide

### Prerequisites
Before you begin, ensure the following requirements are met:

- **Node.js**: Version **22** or higher  
  Check your version:
  ```bash
  node --version
  ```
- **MCP-Compatible Host**: A tool that supports MCP servers (remote or local `stdio`):
    - **VS Code** 1.101+            
    - **Claude Desktop** 
    - **Cursor**

### Setup in Claude Desktop / Cursor

**Tutorials**

- [Claude Desktop MCP Setup Guide](https://modelcontextprotocol.io/quickstart/user)
- [Cursor MCP Setup Guide](https://cursor.com/docs/context/mcp)

After following the setup guides, add the MCP server configuration to your configuration file.

You need to fill in the parts that look `[LIKE-THIS]`.

**Example Configuration** (`claude_desktop_config.json`/`mcp.json`):
```json
{
  "mcpServers": {
    "akoya-mcp-server": {
      "command": "node",
      "args": [
         "[YOUR-PATH-HERE]/server/server/cli.js"
        "--transport",
        "stdio"
      ],
      "env": {
        "AKOYA_OAUTH_BEARER_TOKEN": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]"
      }
    }
  }
}
```    

### Setup in VS Code

You can also configure the MCP server in VS Code. The setup is similar to Claude Desktop. See [the official docs](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server-to-your-user-settings) for details.

**Example Configuration** (`settings.json`)
```json
{
  "servers": {
    "akoya-mcp-server": {
      "type": "stdio",
      "command": "node",
      "args": [
         "[YOUR-PATH-HERE]/server/server/cli.js"
        "--transport",
        "stdio"
      ],
      "env": {
        "AKOYA_OAUTH_BEARER_TOKEN": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]"
      }
    }
  }
}
```

          
## Environment Variables

The MCP server uses the following environment variables:

- `AKOYA_ENVIRONMENT`: Optional environment variable that must be one of the allowed enum values (Sandbox, Production). Default: `Sandbox`.
- `AKOYA_TIMEOUT`: Timeout for API calls. Optional string variable. Default: `0`.
- `AKOYA_OAUTH_CLIENT_ID`: Optional string variable.
- `AKOYA_OAUTH_CLIENT_SECRET`: Optional string variable.
- `AKOYA_OAUTH_REDIRECT_URI`: Optional string variable.
- `AKOYA_OAUTH_BEARER_TOKEN`: Required string variable. Direct bearer token auth.

## Available Toolsets

- **Account information**
- **Balances**
- **Customers**
- **Investments**
- **Payments**
- **Statements**
- **Tax (beta)**
- **Transactions**
- **OAuth Authorization**
