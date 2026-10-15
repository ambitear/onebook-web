/**
 * Landing-page copy for both locales.
 *
 * Every claim here is traceable to the product itself (README.md, electron-builder.yml,
 * src/main). No metrics, no user counts, no testimonials are written into this file —
 * the "not built yet" list stays on the page on purpose.
 */

export type Lang = "en" | "zh"

export type BlockType = {
  type: string
  name: string
  behaviour: string
}

export type Module = {
  heading: string
  body: string[]
  /** which hand-built proof the diptych pairs with the text */
  proof: "chain" | "tools" | "files" | "index" | "refs"
  proofCaption: string
}

export type Copy = {
  lang: Lang
  htmlLang: string
  meta: { title: string; description: string }
  nav: {
    docs: string
    github: string
    issues: string
    switchTo: string
    themeLight: string
    themeDark: string
    menu: string
  }
  hero: {
    headline: string
    headlineEmphasis: string
    lede: string
    ctaDocs: string
    ctaGithub: string
    platforms: string
  }
  tree: { caption: string; rows: { label: string; type: string; depth: number }[] }
  /** the foldable twin of the hero drawing — same schema, but you can operate on it */
  treeLab: {
    heading: string
    lead: string
    expand: string
    collapse: string
    pickHint: string
    trailHeading: string
    depthLabel: string
    caption: string
    rows: { label: string; type: string; depth: number }[]
  }
  types: { heading: string; lead: string; columns: [string, string, string]; rows: BlockType[] }
  modules: Module[]
  cases: { heading: string; lead: string; items: { situation: string; action: string }[] }
  providers: { heading: string; lead: string; note: string }
  /** proof for the search module — FTS pipeline rows */
  indexRows: { term: string; desc: string }[]
  unbuilt: { heading: string; lead: string; items: string[] }
  cta: { heading: string; headingEmphasis: string; body: string; docs: string; source: string }
  footer: { tagline: string; built: string; builtCmd: string; copyright: string }
}

const BLOCK_TYPES_EN: BlockType[] = [
  {
    type: "note",
    name: "Note",
    behaviour: "Markdown with GFM, math, Mermaid and highlighted code; CodeMirror to edit."
  },
  { type: "prompt", name: "Prompt", behaviour: "A question you asked. Maps to the user turn." },
  {
    type: "completion",
    name: "Completion",
    behaviour: "The answer, streamed in place. Maps to assistant. Not created by hand."
  },
  {
    type: "agent",
    name: "Agent",
    behaviour: "The block text is the system instructions; its children are that agent’s runs."
  },
  {
    type: "craft",
    name: "Craft",
    behaviour: "Procedures, checklists, templates you reuse. Renders like a note."
  },
  {
    type: "script",
    name: "Script",
    behaviour: "JavaScript source, edited and highlighted as code. Running it isn’t wired up."
  },
  {
    type: "context",
    name: "Context",
    behaviour: "Another block attached as reference material, injected as XML at run time."
  }
]

const BLOCK_TYPES_ZH: BlockType[] = [
  {
    type: "note",
    name: "笔记",
    behaviour: "Markdown 预览支持 GFM、公式、Mermaid 和代码高亮，编辑用 CodeMirror。"
  },
  { type: "prompt", name: "提问", behaviour: "你发出的一个问题，映射成对话里的 user。" },
  {
    type: "completion",
    name: "回复",
    behaviour: "模型的答复，就地流式写入，对应 assistant。不能手工新建。"
  },
  {
    type: "agent",
    name: "智能体",
    behaviour: "区块正文就是系统提示词，它的子区块是这个智能体跑过的记录。"
  },
  { type: "craft", name: "工序", behaviour: "反复使用的清单、步骤、模板，渲染方式和笔记一样。" },
  { type: "script", name: "脚本", behaviour: "当代码编辑和着色，能读不能跑——执行还没接上。" },
  {
    type: "context",
    name: "上下文",
    behaviour: "把另一个区块挂进来当参考资料，运行时以 XML 注入。"
  }
]

const PROVIDERS = [
  "OpenAI",
  "Anthropic",
  "Google",
  "xAI",
  "Mistral",
  "Groq",
  "DeepSeek",
  "MoonshotAI",
  "Alibaba",
  "ByteDance",
  "Cohere",
  "Perplexity",
  "Cerebras",
  "Fireworks",
  "Together",
  "DeepInfra",
  "Baseten",
  "Hugging Face",
  "OpenRouter",
  "Ollama",
  "OpenAI-compatible"
]

export const PROVIDER_NAMES = PROVIDERS

export const copy: Record<Lang, Copy> = {
  en: {
    lang: "en",
    htmlLang: "en",
    meta: {
      title: "OneBook — one tree for all your notes",
      description:
        "A block-based notebook where notes, chat history and AI agents share one SQLite file on your own machine."
    },
    nav: {
      docs: "Docs",
      github: "GitHub",
      issues: "Issues",
      switchTo: "中文",
      themeLight: "Light",
      themeDark: "Dark",
      menu: "Menu"
    },
    hero: {
      headline: "One tree for all your notes.",
      headlineEmphasis: "tree",
      lede: "OneBook is a block-based notebook. Notes, checklists, agent definitions, the prompt you sent and the answer that came back are all rows in one blocks table, sorted by a fractional position key and tied together by parent_id.",
      ctaDocs: "Read the docs",
      ctaGithub: "View on GitHub",
      platforms: "Electron desktop app. Your data stays in a file."
    },
    tree: {
      caption:
        "Two runs under one agent block — and a context block hanging off the second prompt. Every line in this drawing is a row in the same table.",
      rows: [
        { label: "Literature review agent", type: "agent", depth: 0 },
        { label: "Summarise what we keep on RAG evaluation", type: "prompt", depth: 1 },
        { label: "Three families of benchmark, with the trade-offs", type: "completion", depth: 2 },
        { label: "Which of these fail on Chinese corpora?", type: "prompt", depth: 3 },
        { label: "Source: Lewis et al., 2020", type: "context", depth: 4 },
        { label: "Retrieval notes, filed by the agent", type: "note", depth: 3 }
      ]
    },
    treeLab: {
      heading: "Fold a branch, then follow a block back to the root.",
      lead: "Everything the drawing above showed, plus three rows it left out. Press a row to hide what hangs under it; select one and the panel beside it walks that block's parent_id up to the root.",
      expand: "Show every branch",
      collapse: "Fold the sub-trees",
      pickHint: "Nothing selected. Pick a row.",
      trailHeading: "Path to the root",
      depthLabel: "hops up",
      caption:
        "A block has one parent and any number of children, so a path like this is one recursive query, not a join across tables.",
      rows: [
        { label: "Literature review agent", type: "agent", depth: 0 },
        { label: "Summarise what we keep on RAG evaluation", type: "prompt", depth: 1 },
        { label: "Three families of benchmark, with the trade-offs", type: "completion", depth: 2 },
        { label: "Which of these fail on Chinese corpora?", type: "prompt", depth: 3 },
        { label: "Source: Lewis et al., 2020", type: "context", depth: 4 },
        { label: "Two of the three, and why", type: "completion", depth: 4 },
        { label: "Retrieval notes, filed by the agent", type: "note", depth: 3 },
        { label: "Review checklist for the next paper", type: "craft", depth: 1 },
        { label: "Read the eval section twice", type: "note", depth: 2 },
        { label: "Script that counts blocks per project", type: "script", depth: 1 }
      ]
    },
    types: {
      heading: "Seven types, one table.",
      lead: "One schema, no side tables per type. Only a few of the seven get special handling from the engine.",
      columns: ["Type", "Interface", "Behaviour"],
      rows: BLOCK_TYPES_EN
    },
    modules: [
      {
        heading: "A chat is a branch of the notebook.",
        body: [
          "Each follow-up hangs its own prompt block under the previous answer, so the ancestor chain is the message history. Building a request is a recursive CTE, not a session log.",
          "Two follow-ups under the same answer make two branches, and both stay on the tree. Nothing overwrites anything."
        ],
        proof: "chain",
        proofCaption: "prompt → completion → prompt → completion, as nested rows."
      },
      {
        heading: "Agents work inside the tree you already keep.",
        body: [
          "An agent is a block. Its text is the system instructions, and it gets seven tools for reading and writing blocks — so it can search the notebook, then file what it finds under the block you were looking at.",
          "Those tools run in the main process against the same database the search panel reads, so anything an agent saves is yours to browse a moment later. When a tool call rewrites a block, OneBook puts a snapshot of the old text in the tree first."
        ],
        proof: "tools",
        proofCaption: "The whole tool surface. No tool calls the network."
      },
      {
        heading: "The database is a file.",
        body: [
          "A project is a directory. Copying it is a backup; moving it to another machine carries the notes, the agents and the chat history with it.",
          "There is no telemetry and nothing to sign in to. When a request does leave the machine, it goes directly to the provider you configured — and you can open the database with sqlite3 to see what is in it."
        ],
        proof: "files",
        proofCaption: "Everything OneBook writes on disk."
      },
      {
        heading: "Chinese search behaves like English search.",
        body: [
          "Title and content are indexed into an FTS5 table and ranked by MATCH. Chinese text is segmented with nodejieba before it reaches the index, so CJK does not need a trigram table or a prefix hack; a stopword list keeps the index down.",
          "The search panel and the agents’ searchBlocks tool read the same index, which means an agent finds what you find."
        ],
        proof: "index",
        proofCaption: "One index, two readers."
      },
      {
        heading: "A [[slug]] link resolves to a live block.",
        body: [
          "A remark plugin parses [[slug]] links and ((block-id)) embeds, then resolves them into block cards you can click open. Slug text is normalised the same way on write and on read, so a link typed as “My Page” still finds my-page.",
          "Saving extracts those references into block_links as block_link or block_embed rows, which makes a backlinks lookup a plain SELECT. The panel that shows them isn’t built yet."
        ],
        proof: "refs",
        proofCaption: "Write path and read path share one normaliser."
      }
    ],
    cases: {
      heading: "What people keep in it",
      lead: "The tree is the whole interface, so these all work the same way: put a block somewhere, then put blocks inside it.",
      items: [
        {
          situation: "Research across many sources",
          action: "One parent block per source, excerpts as children, [[slug]] links between them."
        },
        {
          situation: "Comparing AI answers",
          action:
            "Run the same prompt three times, or hand it to different agents, and keep the answers side by side."
        },
        {
          situation: "Long articles and reports",
          action:
            "Outline in blocks, collapse what you’re not editing, drag a section and its children somewhere else."
        },
        {
          situation: "Agent workbench",
          action:
            "Write the agent as a block, attach the notes it should see, let it post its findings back into the tree."
        },
        {
          situation: "Meeting notes",
          action: "Capture flat, then re-parent the action items under the project that owns them."
        },
        {
          situation: "A corpus for AI",
          action:
            "Content is already split into block-sized, indexed units, so retrieval is a query instead of an ingestion job."
        }
      ]
    },
    providers: {
      heading: "Bring your own model.",
      lead: "Model access runs on the Vercel AI SDK, with 21 provider adapters registered.",
      note: "Keys are stored in ~/.onebook/models.json and read only from the main process."
    },
    indexRows: [
      { term: "blocks", desc: "title and content, one row per block." },
      {
        term: "block_fts",
        desc: "FTS5, porter tokenizer, Chinese segmented by nodejieba before indexing."
      },
      { term: "block_links", desc: "edges extracted from [[slug]] and ((id)) on save." },
      {
        term: "two readers",
        desc: "the search panel and the agents’ searchBlocks tool query the same table."
      }
    ],
    unbuilt: {
      heading: "What isn’t built.",
      lead: "Roughly ordered by how close they are.",
      items: [
        "Backlinks panel and a link overview. The edges are already in block_links.",
        "Markdown or JSON import and export, one block per file, so existing notes can move in.",
        "Embeddings next to keyword search. sqlite-vec is in optionalDependencies; no code calls it.",
        "Running script blocks in a sandbox.",
        "Publishing a run as an artifact, and sync between machines.",
        "Auto-update, packaging pipeline, CI."
      ]
    },
    cta: {
      heading: "Open the tree.",
      headingEmphasis: "tree",
      body: "The docs start with a project folder and one note block. Everything else hangs off that.",
      docs: "Read the docs",
      source: "Build from source"
    },
    footer: {
      tagline: "OneBook · a block-tree notebook on Electron and SQLite.",
      built: "Build it yourself:",
      builtCmd: "npm install && npm run dev",
      copyright: "© 2026 OneBook. Homepage: onebook.net"
    }
  },

  zh: {
    lang: "zh",
    htmlLang: "zh-Hans",
    meta: {
      title: "OneBook —— 用树状结构来组织所有笔记",
      description: "区块化笔记应用。笔记、对话记录和智能体共用本机一个 SQLite 文件，没有托管服务。"
    },
    nav: {
      docs: "文档",
      github: "GitHub",
      issues: "提 issue",
      switchTo: "English",
      themeLight: "浅色",
      themeDark: "深色",
      menu: "菜单"
    },
    hero: {
      headline: "用树状结构来组织所有笔记",
      headlineEmphasis: "树状结构",
      lede: "OneBook 把一切都存成区块。笔记、清单、智能体的定义、你发出的提问、模型的回复，都是同一张 blocks 表里的记录，靠 parent_id 串起来，用 fractional position 排序。",
      ctaDocs: "看文档",
      ctaGithub: "GitHub 仓库",
      platforms: "Electron 桌面应用，数据落在本机文件里。"
    },
    tree: {
      caption:
        "一个 agent 区块下挂了两次运行，第二次提问旁边还挂着一个上下文区块。图里每一行都是表里的一条记录。",
      rows: [
        { label: "文献综述 agent", type: "agent", depth: 0 },
        { label: "整理我们关于 RAG 评测的记录", type: "prompt", depth: 1 },
        { label: "三类基准，各自的取舍", type: "completion", depth: 2 },
        { label: "这些在中文语料上哪些会失效？", type: "prompt", depth: 3 },
        { label: "出处：Lewis et al., 2020", type: "context", depth: 4 },
        { label: "agent 归档的检索笔记", type: "note", depth: 3 }
      ]
    },
    treeLab: {
      heading: "把分支折叠起来，再看某个区块到根的路径",
      lead:
        "上面那张图的内容都在这里，另外多三行它没画的。按一行，它下面的内容就收进去；选中一行，旁边的面板会顺着 parent_id 一路往上找到根。",
      expand: "全部展开",
      collapse: "全部收起来",
      pickHint: "还没选，点一行试试。",
      trailHeading: "到根的路径",
      depthLabel: "往上几层",
      caption:
        "一个区块只有一个父区块，子区块可以有多个，所以这样一条路径就是一条递归查询，不需要跨表 join。",
      rows: [
        { label: "文献综述 agent", type: "agent", depth: 0 },
        { label: "整理我们关于 RAG 评测的记录", type: "prompt", depth: 1 },
        { label: "三类基准，各自的取舍", type: "completion", depth: 2 },
        { label: "这些在中文语料上哪些会失效？", type: "prompt", depth: 3 },
        { label: "出处：Lewis et al., 2020", type: "context", depth: 4 },
        { label: "两类会失效，原因不同", type: "completion", depth: 4 },
        { label: "agent 归档的检索笔记", type: "note", depth: 3 },
        { label: "下一篇论文的审稿清单", type: "craft", depth: 1 },
        { label: "评测那节读两遍", type: "note", depth: 2 },
        { label: "统计每个项目区块数的脚本", type: "script", depth: 1 }
      ]
    },
    types: {
      heading: "七种区块类型，一张表。",
      lead: "没有按类型分表。七种里只有少数会得到引擎的特殊处理。",
      columns: ["类型", "界面名称", "行为"],
      rows: BLOCK_TYPES_ZH
    },
    modules: [
      {
        heading: "对话是笔记树的一根分支。",
        body: [
          "每一次追问都把自己的提问区块挂在上一轮回复下面，所以祖先链就是消息历史。拼一次请求用的是一条递归 CTE，不是一份会话日志。",
          "在同一个回复下面问两次，就得到两根分支，两条历史都留在树里，不会互相覆盖。"
        ],
        proof: "chain",
        proofCaption: "提问 → 回复 → 提问 → 回复，落成嵌套的行。"
      },
      {
        heading: "智能体在你已有的笔记里干活。",
        body: [
          "智能体本身就是一个区块，正文就是系统提示词。它有七个读写区块的工具，可以先搜一遍笔记本，再把找到的东西归到你正在看的那个区块下面。",
          "这些工具跑在主进程里，读写的就是搜索面板用的那个数据库，所以 agent 存下来的东西你马上能翻到。如果这次调用要改某个区块的正文，OneBook 会先把旧内容写成一个快照子区块。"
        ],
        proof: "tools",
        proofCaption: "工具就这些。没有一个会走网络。"
      },
      {
        heading: "数据库就是一个文件。",
        body: [
          "一个项目是一个目录。复制它就是备份，换台机器就带走笔记、智能体和聊天记录。",
          "没有遥测，也不用登录。真要出网的请求只发给你自己配的那家服务商。想确认里面存了什么，用 sqlite3 打开数据库就行。"
        ],
        proof: "files",
        proofCaption: "OneBook 往磁盘上写的全部东西。"
      },
      {
        heading: "中文搜索和英文一样。",
        body: [
          "标题和正文进 FTS5 表，按 MATCH 排序。中文在入索引之前先用 nodejieba 分词，所以不用建 trigram 表，也不用前缀匹配的折中办法；再拿停用词表把索引压小。",
          "搜索面板和 agent 的 searchBlocks 工具读同一份索引，你搜得到的东西它也搜得到。"
        ],
        proof: "index",
        proofCaption: "一份索引，两个读法。"
      },
      {
        heading: "[[页面名]] 点开就是真实区块。",
        body: [
          "remark 插件解析 [[slug]] 链接和 ((block-id)) 嵌入，把它们渲染成可以点开的区块卡片。slug 在写入和读取时走同一个规范化函数，所以你写 “My Page”，照样能找到 my-page。",
          "保存时这些引用会被抽进 block_links，分成 block_link 或 block_embed 两种边，反链查询于是就是一个 SELECT。展示反链的面板还没做。"
        ],
        proof: "refs",
        proofCaption: "写入路径和读取路径共用一个规范化函数。"
      }
    ],
    cases: {
      heading: "人们拿它装什么",
      lead: "树就是全部界面，所以下面这些做法本质相同：把一个区块放到某个位置，再往里放区块。",
      items: [
        {
          situation: "跨很多材料的调研",
          action: "一份材料一个父区块，摘录作为子区块，材料之间用 [[slug]] 互链。"
        },
        {
          situation: "比较不同回答",
          action: "同一个提问跑三遍，或者交给不同 agent，让回复并排留着。"
        },
        {
          situation: "长文和报告",
          action: "用区块搭大纲，收起暂时不写的部分，整个章节连子区块一起拖走。"
        },
        {
          situation: "agent 工作台",
          action: "把 agent 写成区块，附上它该看的笔记，让它把结论发回树里。"
        },
        { situation: "会议记录", action: "先平着记，再把待办重新挂到负责它的项目下面。" },
        {
          situation: "喂给 AI 的语料",
          action: "内容本来就被切成区块大小并建好索引，检索是一条查询，不是一次入库。"
        }
      ]
    },
    providers: {
      heading: "模型自己带。",
      lead: "模型访问走 Vercel AI SDK，注册了 21 个 provider adapter。",
      note: "密钥存在 ~/.onebook/models.json，只在主进程里读。"
    },
    indexRows: [
      { term: "blocks", desc: "标题和正文，一个区块一条记录。" },
      { term: "block_fts", desc: "FTS5，porter 分词器；中文在入索引前先用 nodejieba 切好。" },
      { term: "block_links", desc: "保存时从 [[slug]] 和 ((id)) 里抽出来的边。" },
      { term: "两个读的人", desc: "搜索面板和 agent 的 searchBlocks 查的是同一张表。" }
    ],
    unbuilt: {
      heading: "还没做的。",
      lead: "大致按离得近的排。",
      items: [
        "反链面板和链接总览。边已经在 block_links 里了。",
        "Markdown 或 JSON 的导入导出，一个区块对应一个文件，好让已有的笔记搬进来。",
        "关键词搜索旁边加向量检索。sqlite-vec 在 optionalDependencies 里，没有代码调用它。",
        "在沙箱里运行 script 区块。",
        "把一次运行发布成作品，以及跨设备同步——两者都建立在按项目分库的文件上。",
        "自动更新、打包流水线、CI。"
      ]
    },
    cta: {
      heading: "把树打开。",
      headingEmphasis: "把树打开",
      body: "文档从一个项目文件夹和一个笔记区块开始，后面所有东西都挂在它下面。",
      docs: "看文档",
      source: "从源码构建"
    },
    footer: {
      tagline: "OneBook · 跑在 Electron 和 SQLite 上的区块树笔记。",
      built: "自己构建：",
      builtCmd: "npm install && npm run dev",
      copyright: "© 2026 OneBook · 主页 onebook.net"
    }
  }
}

export const SITE = {
  name: "OneBook",
  repo: "https://github.com/ambitear/onebook",
  issues: "https://github.com/ambitear/onebook/issues",
  home: "https://onebook.net",
  /** Starlight docs routes are flat (the integration inherits Astro's global base). */
  docsIndex: "overview",
  locales: [
    { code: "en" as Lang, label: "English", path: "/" },
    { code: "zh" as Lang, label: "简体中文", path: "/zh/" }
  ]
}

/** Locale-aware path for a docs slug. Starlight stores zh pages under content/docs/zh. */
export function docsUrl(lang: Lang, slug: string): string {
  const parts = slug.split("/").filter(Boolean)
  const path = lang === "zh" ? ["zh", ...parts] : parts
  return `/${path.join("/")}/`
}

/** Locale-aware path for a landing page. */
export function landingUrl(lang: Lang): string {
  return lang === "zh" ? "/zh/" : "/"
}

export type TreeNode = { label: string; type: string; depth: number; children: TreeNode[] }

/** Rebuild the nesting the drawing needs from the flat, depth-labelled rows. */
export function buildTree(rows: { label: string; type: string; depth: number }[]): TreeNode[] {
  const roots: TreeNode[] = []
  const stack: TreeNode[] = []

  for (const row of rows) {
    const node: TreeNode = { ...row, children: [] }
    while (stack.length > row.depth) stack.pop()
    const parent = stack[stack.length - 1]
    if (parent) parent.children.push(node)
    else roots.push(node)
    stack.push(node)
  }

  return roots
}
