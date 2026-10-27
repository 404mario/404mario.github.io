# Mario / LLM inference systems

Personal website: **https://404mario.github.io/**

A small, bilingual static site showcasing my work on LLM inference systems.
Built with HTML, CSS, and JavaScript; no build step, analytics, or runtime
dependencies. Manrope and Noto Sans SC font subsets are served locally, with
their SIL Open Font License files in `assets/fonts/`; the page makes no
third-party requests.

## Local preview

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Then open http://127.0.0.1:8080.

## Edit the website

- `index.html`: layout, links, metadata, and default Chinese content.
- `style.css`: layout, colors, responsive styles, and the overlap illustration.
- `script.js`: English/Chinese copy and the two interactive controls.
- `assets/`: favicon and social preview.

When editing text, update both `index.html` and the corresponding Chinese and
English entries in `script.js`. The default language is Chinese, with a
persisted English/Chinese toggle. Native `details`/`summary` keep the experiment
notes accessible even with JavaScript disabled.

The site includes the owner's supplied background, “硕0，PKU 信科本”, and contact
email, `2300012843@stu.pku.edu.cn`. It does not infer a master's institution or
enrollment year. The current design direction is recorded in `DESIGN.md`.

## GitHub Pages

Publish from the `main` branch, repository root (`/`). `.nojekyll` makes GitHub
Pages serve these files directly.

## Content sources

- Authored, merged contribution:
  [vLLM #52781](https://github.com/vllm-project/vllm/pull/52781).
- Open RFC:
  [vLLM #51377](https://github.com/vllm-project/vllm/pull/51377).
- Public hardware project:
  [project2-flashattention-ip](https://github.com/404mario/project2-flashattention-ip).

The 8.8% and 5.3% ITL reductions are deployment observations reported in #52781 for its
specified workload and hardware, not a general performance guarantee.
The overlap diagram is conceptual and does not depict measured durations.
PR statuses were checked on October 27, 2026; this site does not fetch live
GitHub status. Update the relevant copy if an RFC is merged or closed.
The Chinese font is a subset of the current copy, including punctuation. If you add new Chinese
characters, update the subset or use a full Noto Sans SC font; system fonts
provide a fallback.
