const isProd = process.env.NODE_ENV === 'production'
const { SEARCH_URL } = process.env

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.contactform.dev' : '',
  reactStrictMode: true,
}