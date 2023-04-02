const mochCtx = {
  request: {
    method: "GET",
    url: "/api/viewgraph",
    header: {
      "user-agent": "PostmanRuntime/7.31.3",
      accept: "*/*",
      "postman-token": "3db648a1-0e53-4a15-be27-0ae14610b1cf",
      host: "localhost:1337",
      "accept-encoding": "gzip, deflate, br",
      connection: "keep-alive",
    },
  },
  response: {
    status: 404,
    message: "Not Found",
    header: {
      "content-security-policy":
        "connect-src 'self' https:;img-src 'self' data: blob: https://dl.airtable.com;media-src 'self' data: blob:;default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline'",
      "x-dns-prefetch-control": "off",
      "expect-ct": "max-age=0",
      "x-frame-options": "SAMEORIGIN",
      "strict-transport-security": "max-age=31536000; includeSubDomains",
      "x-download-options": "noopen",
      "x-content-type-options": "nosniff",
      "x-permitted-cross-domain-policies": "none",
      "referrer-policy": "no-referrer",
      vary: "Origin",
    },
  },
  app: { subdomainOffset: 2, proxy: false, env: "development" },
  originalUrl: "/api/viewgraph",
  req: "<original node req>",
  res: "<original node res>",
  socket: "<original node socket>",
  body: null,
};
const mochCtxResponse = {
  request: {
    method: "GET",
    url: "/api/viewgraph",
    header: {
      "user-agent": "PostmanRuntime/7.31.3",
      accept: "*/*",
      "postman-token": "3db648a1-0e53-4a15-be27-0ae14610b1cf",
      host: "localhost:1337",
      "accept-encoding": "gzip, deflate, br",
      connection: "keep-alive",
    },
  },
  response: {
    status: 404,
    message: "Not Found",
    header: {
      "content-security-policy":
        "connect-src 'self' https:;img-src 'self' data: blob: https://dl.airtable.com;media-src 'self' data: blob:;default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline'",
      "x-dns-prefetch-control": "off",
      "expect-ct": "max-age=0",
      "x-frame-options": "SAMEORIGIN",
      "strict-transport-security": "max-age=31536000; includeSubDomains",
      "x-download-options": "noopen",
      "x-content-type-options": "nosniff",
      "x-permitted-cross-domain-policies": "none",
      "referrer-policy": "no-referrer",
      vary: "Origin",
    },
  },
  app: { subdomainOffset: 2, proxy: false, env: "development" },
  originalUrl: "/api/viewgraph",
  req: "<original node req>",
  res: "<original node res>",
  socket: "<original node socket>",
  body: "ok",
};

module.exports = { mochCtx, mochCtxResponse };
