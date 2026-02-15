import createNextIntlPlugin from "next-intl/plugin";

// Use absolute path from src folder instead of relative
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
