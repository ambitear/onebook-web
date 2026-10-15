// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import { faviconSwap } from "./src/lib/favicon-swap.mjs"

// https://astro.build/config
export default defineConfig({
  site: "https://onebook.net",
  integrations: [
    starlight({
      title: "OneBook",
      description:
        "Documentation for OneBook, a block-tree notebook on Electron and SQLite. Notes, chat history and AI agents share one database file on your machine.",
      defaultLocale: "root",
      locales: {
        root: { label: "English", lang: "en" },
        // `zh-CN` is the tag Starlight ships built-in UI strings for.
        zh: { label: "简体中文", lang: "zh-CN" }
      },
      customCss: ["./src/styles/starlight.css"],
      favicon: "/favicon.svg",
      // The built-in favicon is a fixed file; this keeps the tab icon on the same
      // light/dark pair the landing pages use.
      head: [{ tag: "script", content: faviconSwap }],
      components: {
        SiteTitle: "./src/components/DocsSiteTitle.astro"
      },
      sidebar: [
        {
          label: "Start here",
          // Keys are language tags, matching `locales.zh.lang`.
          translations: { "zh-CN": "从这里开始" },
          // Labels come from each page's frontmatter title, so they localise automatically.
          items: [
            { slug: "overview" },
            { slug: "getting-started" },
            { slug: "block-model" },
            { slug: "ai-agents" },
            { slug: "data-and-files" }
          ]
        }
      ],
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/ambitear/onebook" }]
    })
  ]
})
