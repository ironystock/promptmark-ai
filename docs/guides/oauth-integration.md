# OAuth Integration

Promptmark uses Civic Auth for OAuth 2.0 authentication. This guide covers the auth flow for developers building integrations.

## Auth Flow

Promptmark supports the standard OAuth 2.0 Authorization Code flow via Civic Auth:

1. **Redirect** user to Civic Auth authorization endpoint
2. **User authenticates** with their Civic identity
3. **Callback** returns an authorization code to your redirect URI
4. **Exchange** the code for a JWT access token
5. **Use the JWT** in API requests via `Authorization: Bearer <token>`

## Device Flow (MCP)

The MCP server uses OAuth 2.0 Device Authorization Grant for terminal-based authentication:

1. MCP server requests a device code
2. User visits the verification URL in their browser
3. User authenticates and approves the connection
4. MCP server polls for the access token
5. Token is cached locally for subsequent sessions

## JWT Details

- Tokens are issued as JWTs with standard claims
- Tokens can be passed via cookie (`token`) or header (`Authorization: Bearer`)
- Token expiry and refresh are handled by the platform

## Building an Integration

<!-- TODO: Document the specific Civic Auth endpoints and required parameters -->

*Detailed integration guide coming soon.*
