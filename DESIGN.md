# Personal site direction

Audience: researchers, students, and engineers reading Mario's public work.
Purpose: introduce the person, link verifiable contributions, and provide contact.

Identity supplied by the owner: “硕0，PKU 信科本”.
Keep 硕0 visible in both languages; do not infer master's institution or dates.
Contact: 2300012843@stu.pku.edu.cn.

The layout takes cues from the reading-oriented personal sites of Emil Kowalski
and Paco Coursey. Their copy, assets, names, and career histories are not reused.
Frontend Design guidance informs the typography and removal of decorative chrome.

Palette:
- Page white: #ffffff
- Text graphite: #25282b
- Secondary text: #62676e
- Link blue: #315979
- Figure background: #f5f7f9
- Figure communication: #537491

Typography: local Manrope regular/bold and local Noto Sans SC subset.
Body 15–16px, line height 1.8, quiet 13px metadata. No all-caps labels.
One main reading area, max-width 820px, with date/type notes in a left column.
Project names, status, descriptions, and source links establish the hierarchy.

```text
Mario                                     中文 / EN
硕0，PKU 信科本
Specific research introduction
Email and GitHub

Open-source work
2026-09    DeepEP v2 async finalize
           Contribution, status, source
           Expand: execution sketch and A/B observations

RFC        CUDA fabric memory for KV cache
           Scope, status, source

Projects   FlashAttention hardware
Interests  Three plain explanations
Contact    Email and GitHub
```

Review of the plan: a narrow reading column alone would be generic. The dated
contribution entry, a technical explanation, experiment conditions, and an
optional execution sketch make the page specific to this owner's systems work.
The diagram is meaningful supporting content, not a decorative hero. The reported
8.8% result stays beside its experiment conditions, never as a headline statistic.

Default language is Chinese; English is available through a persisted toggle.
The technical details remain usable without JavaScript via native details/summary.
Respect reduced motion, keyboard focus, and small screens. Serve assets locally.
