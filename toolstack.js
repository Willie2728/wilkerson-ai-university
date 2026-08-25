(() => {
  const tools = [
    ['Wilkerson Forge', 'Prompt-to-page studio', 'Base44 / Lovable capability class', 'Original interactive standalone page generation and download', 'WORKING FOUNDATION'],
    ['Wilkerson Context Engine', 'Public web extraction', 'Firecrawl capability class', 'Bounded extraction, robots checks, private-network blocking, and JSON export', 'WORKING'],
    ['Wilkerson MotionLab', 'Motion previsualization', 'DeepMotion / Kling capability classes', 'Local media preview, treatment selection, and production storyboard export', 'WORKING FOUNDATION'],
    ['Wilkerson Persona Live', 'Consented digital humans', 'Tavus / Daily capability classes', 'Approved Willie portrait, local voice, and synchronized cinematic motion', 'WORKING FOUNDATION'],
    ['Wilkerson Broadcast Studio', 'Content draft production', 'Blotato / Crayo capability classes', 'One brief to four approval-ready channel drafts and JSON export', 'WORKING FOUNDATION'],
    ['Wilkerson Browser Pilot', 'Public-page QA', 'Playwright / Selenium capability classes', 'HTTP and markup review with downloadable results', 'WORKING'],
    ['Wilkerson Skill Exchange', 'Audited AI skill catalog', 'LarryBrain capability class', 'Permission-declared portable skill manifest builder', 'WORKING FOUNDATION'],
    ['Wilkerson Agent Core', 'Guardrailed orchestration', 'OpenClaw capability class', 'Auditable dry-run workflow plans with approval gates', 'WORKING FOUNDATION'],
    ['Wilkerson Voice Engine', 'Speech generation', 'NVIDIA Riva capability class', 'Windows System.Speech playback and WAV download', 'WORKING'],
    ['Wilkerson Avatar Lab', 'Identity-faithful avatar configuration', 'OpenFace / LibreFace capability classes', 'Approved headshot, physical profile, residence, and saved wardrobe', 'WORKING FOUNDATION']
  ];

  function render() {
    document.querySelector('#view').innerHTML = `<main class="autonomy-register">
      <span class="eyebrow">WILKERSON COLLECTIVE · FOUNDER TOOL LAB</span>
      <h1>Original AI capability portfolio</h1>
      <p>Every row separates what is working now from the larger production target. These are original lawful products—not copied proprietary code, bypassed subscriptions, or claims that commercial model weights are free.</p>
      <table class="tool-table"><thead><tr><th>Wilkerson product</th><th>Purpose</th><th>Public reference class</th><th>Current implementation</th><th>Status</th></tr></thead><tbody>${tools.map(tool => `<tr><td><b>${tool[0]}</b></td><td>${tool[1]}</td><td>${tool[2]}</td><td>${tool[3]}</td><td class="ready"><b>${tool[4]}</b></td></tr>`).join('')}</tbody></table>
      <div class="card" style="margin-top:22px"><h2>Open the working founder suite</h2><p>Start the university with the supplied launcher. It also starts the local tool service used by campus read-aloud.</p><a class="btn primary" href="http://127.0.0.1:8788/" target="_blank" rel="noopener">Open Founder Tool Suite</a> <a class="btn light" href="WILKERSON_AI_TOOL_BUILD_REGISTER.md" download>Download detailed build register</a></div>
      <div class="card" style="margin-top:16px"><h2>Rules of construction</h2><p>Use compatible open-source licenses, preserve required attribution, keep secrets server-side, use explicit consent for identity and publishing, and require human approval before external posting or irreversible actions.</p></div>
    </main>`;
    window.scrollTo(0, 0);
  }

  document.addEventListener('click', event => {
    const button = event.target.closest('[data-view="toolstack"]');
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    render();
  }, true);
})();
