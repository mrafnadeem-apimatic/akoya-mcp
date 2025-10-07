## Remote HTTP MCP Server Setup

1. Make sure you have Node.js v22 or higher.
2. Upload this folder as an artifact.
3. Set the following initialization script with the current folder as the current working directory:
    ```
    cd sdk
    npm i
    cd ../server
    npm i
    node cli.js
    ```
4. Set `AKOYA_OAUTH_BEARER_TOKEN` environment variable.