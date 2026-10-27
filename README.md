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

- `index.html`: layout, links, metadata, and default English content.
- `style.css`: layout, colors, responsive styles, and the overlap illustration.
- `script.js`: English/Chinese copy and the two interactive controls.
- `assets/`: favicon and social preview.

When editing text, update both `index.html` and the corresponding English and
Chinese entries in `script.js`.

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

The 8.8% ITL reduction is a deployment observation reported in #52781 for its
specified workload and hardware, not a general performance guarantee.
The overlap diagram is conceptual and does not depict measured durations.
PR statuses were checked on October 27, 2026; this site does not fetch live
GitHub status. Update the relevant copy if an RFC is merged or closed.
The Chinese font is a subset of the current copy. If you add new Chinese
characters, update the subset or use a full Noto Sans SC font; system fonts
provide a fallback.
