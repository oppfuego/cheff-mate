## Error Type
Build Error

## Error Message
Module not found: Can't resolve './globals.scss'

## Build Output
./src/app/layout.tsx:2:1
Module not found: Can't resolve './globals.scss'
  1 | import type { Metadata } from "next";
> 2 | import "./globals.scss";
    | ^^^^^^^^^^^^^^^^^^^^^^^^
  3 |
  4 | // Root layout metadata - will be overridden by page-specific metadata
  5 | export const metadata: Metadata = {

https://nextjs.org/docs/messages/module-not-found

Next.js version: 15.5.9 (Turbopack)
