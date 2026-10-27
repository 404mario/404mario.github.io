const translations = {
  en: {
    skip: "Skip to content", navWork: "Selected work", navAbout: "About",
    eyebrow: "LLM INFERENCE · GPU SYSTEMS · OPEN SOURCE",
    heroLine1: "Making inference", heroLine2: "move faster.",
    heroDescription: "I'm Mario. I work on the systems behind large language models — overlapping communication with computation, moving KV cache, and understanding where GPU time goes.",
    explore: "Explore my work", viewPR: "Read my vLLM PR",
    figureLabel: "01 / THE OVERLAP IDEA", figureTitle: "Less waiting.<br>More working.",
    figureDescription: "Let the shared expert compute while the combine is in flight.",
    serial: "Synchronous", overlap: "Async overlap", timeLabel: "TIME →",
    communication: "COMM.", computation: "COMPUTE",
    overlapResult: "Join after both streams finish.", serialResult: "Compute waits for combine to finish.",
    conceptNote: "Conceptual illustration · not a measured timeline",
    workingOn: "WORKING AT THE INTERSECTION OF",
    workLabel: "SELECTED WORK / 2026", workTitle: "From bottleneck to contribution.", allPRs: "All vLLM PRs",
    merged: "MERGED", featuredTitle: "Making MoE communication<br>and computation overlap.",
    featuredDescription: "DeepEP v2 async finalize lets shared-expert computation run alongside the combine operation, then joins through a device-side event. A smaller waiting window on the decode path.",
    readContribution: "Read the contribution", mergeDate: "PR author · Merged September 15, 2026",
    measurementLabel: "REPORTED A/B OBSERVATION", measurementDescription: "lower median decode ITL",
    withoutOverlap: "OVERLAP OFF", withOverlap: "OVERLAP ON",
    measurementNote: "DeepSeek-R1 FP8 · EP8 · GB300 · concurrency 1. Deployment observation documented in the PR; results depend on workload and hardware.",
    source: "Source: PR #52781", openRFC: "OPEN RFC", publicProject: "PUBLIC PROJECT",
    rfcTitle: "KV cache, across node boundaries.",
    rfcDescription: "An RFC exploring CUDA fabric memory allocation for cross-node MNNVL KV transfer on GB200 / GB300 NVL72 systems.",
    rfcCategory: "DISTRIBUTED INFERENCE",
    attentionTitle: "Attention, from another angle.",
    attentionDescription: "A public SystemVerilog project exploring FlashAttention hardware. Part of my interest in how algorithms map onto the machines that run them.",
    aboutLabel: "A LITTLE ABOUT ME", aboutTitle: "Curious about<br>the milliseconds.",
    aboutDescription: "My focus is LLM inference optimization: the kernels, memory, communication, and scheduling decisions that shape serving performance. I like following a bottleneck all the way from a trace to the code.",
    findGitHub: "Find me on GitHub",
    focus1Title: "Communication × computation", focus1Description: "MoE execution, DeepEP, and opportunities to keep both streams doing useful work.",
    focus2Title: "Memory & KV cache", focus2Description: "Cache lifecycles, data movement, and distributed inference beyond a single node.",
    focus3Title: "Measure, then understand", focus3Description: "GPU profiling, controlled comparisons, and connecting measurements to implementation.",
    contactLabel: "NOTES, IDEAS, OR A SHARED BOTTLENECK?", contactTitle: "Let's compare traces.",
    connect: "Connect on GitHub", footerNote: "Built around the work. Linked to the evidence.", backTop: "Back to top ↑"
  },
  zh: {
    skip: "跳转到正文", navWork: "代表工作", navAbout: "关于我",
    eyebrow: "大模型推理 · GPU 系统 · 开源贡献",
    heroLine1: "让大模型推理", heroLine2: "再快一点。",
    heroDescription: "我是 Mario，关注大模型背后的推理系统：让通信与计算重叠，优化 KV cache 的流动，并追踪 GPU 时间究竟花在了哪里。",
    explore: "看看我的工作", viewPR: "阅读 vLLM PR",
    figureLabel: "01 / 为什么需要 OVERLAP", figureTitle: "少一些等待。<br>多一些计算。",
    figureDescription: "combine 通信进行时，让共享专家同时开始计算。",
    serial: "同步执行", overlap: "异步重叠", timeLabel: "时间 →",
    communication: "通信", computation: "计算",
    overlapResult: "两条流都完成后，再汇合。", serialResult: "等待 combine 完成，才开始计算。",
    conceptNote: "原理示意 · 并非实测时间线",
    workingOn: "我的研究交汇点",
    workLabel: "代表工作 / 2026", workTitle: "从性能瓶颈，到开源贡献。", allPRs: "所有 vLLM PR",
    merged: "已合并", featuredTitle: "让 MoE 通信<br>与计算真正重叠。",
    featuredDescription: "为 DeepEP v2 实现 async finalize，让共享专家计算与 combine 操作同时进行，再通过设备端事件汇合，缩短 decode 路径中的等待。",
    readContribution: "阅读这项贡献", mergeDate: "PR 发起者 · 2026 年 9 月 15 日合并",
    measurementLabel: "PR 中记录的 A/B 观测", measurementDescription: "decode ITL 中位数降低",
    withoutOverlap: "关闭 OVERLAP", withOverlap: "开启 OVERLAP",
    measurementNote: "DeepSeek-R1 FP8 · EP8 · GB300 · 并发 1。数据来自 PR 记录的部署观测，实际收益取决于负载与硬件。",
    source: "数据来源：PR #52781", openRFC: "讨论中的 RFC", publicProject: "公开项目",
    rfcTitle: "让 KV cache 跨越节点。",
    rfcDescription: "探索使用 CUDA fabric memory，为 GB200 / GB300 NVL72 系统上的跨节点 MNNVL KV 传输分配缓存。",
    rfcCategory: "分布式推理",
    attentionTitle: "换个角度，理解 Attention。",
    attentionDescription: "使用 SystemVerilog 探索 FlashAttention 硬件的公开项目，也延续了我对算法如何映射到硬件的兴趣。",
    aboutLabel: "关于我", aboutTitle: "对每一毫秒，<br>保持好奇。",
    aboutDescription: "我关注大模型推理优化：kernel、内存、通信，以及影响服务性能的调度决策。我喜欢从一段性能 trace 出发，一路追到对应的代码。",
    findGitHub: "在 GitHub 找到我",
    focus1Title: "通信 × 计算", focus1Description: "研究 MoE 执行、DeepEP，以及让通信流与计算流同时工作的机会。",
    focus2Title: "内存与 KV cache", focus2Description: "理解缓存的生命周期、数据搬运，以及单节点之外的分布式推理。",
    focus3Title: "先测量，再理解", focus3Description: "通过 GPU profiling、对照实验，把性能观测与实现机制联系起来。",
    contactLabel: "有新的想法，或遇到了同一个瓶颈？", contactTitle: "一起看看 Trace。",
    connect: "通过 GitHub 联系", footerNote: "展示真实工作，链接原始证据。", backTop: "回到顶部 ↑"
  }
};

let language = "en";
let mode = "overlap";
const languageButton = document.getElementById("language");
const timeline = document.getElementById("timeline");
const result = document.getElementById("result");
result.setAttribute("aria-live", "polite");

function renderResult() {
  result.textContent = translations[language][mode === "overlap" ? "overlapResult" : "serialResult"];
}

function setLanguage(next) {
  language = next;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = translations[language][element.dataset.i18n];
    if (value) {
      if (value.includes("<br>")) element.innerHTML = value;
      else element.textContent = value;
    }
  });
  languageButton.innerHTML = language === "en" ? '中文 <span aria-hidden="true">↔</span>' : 'EN <span aria-hidden="true">↔</span>';
  languageButton.setAttribute("aria-label", language === "en" ? "切换为中文" : "Switch to English");
  document.title = language === "en" ? "Mario / LLM inference systems" : "Mario / 大模型推理系统";
  renderResult();
  try { localStorage.setItem("mario-language", language); } catch { /* Storage may be unavailable. */ }
}

languageButton.addEventListener("click", () => setLanguage(language === "en" ? "zh" : "en"));
document.querySelectorAll("[data-mode]").forEach(button => {
  button.addEventListener("click", () => {
    mode = button.dataset.mode;
    timeline.dataset.state = mode;
    document.querySelectorAll("[data-mode]").forEach(item => {
      const active = item.dataset.mode === mode;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderResult();
  });
});
try {
  if (localStorage.getItem("mario-language") === "zh") setLanguage("zh");
} catch { /* The default English page works without storage. */ }
