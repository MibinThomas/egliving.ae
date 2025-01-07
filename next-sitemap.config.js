/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://egliving.ae/",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
};
