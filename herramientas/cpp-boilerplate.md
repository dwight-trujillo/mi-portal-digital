---
layout: tool
title: "C++ Boilerplate Generator"
permalink: /herramientas/cpp-boilerplate/
lang: en
---
<div x-data="cppBoilerplate" class="space-y-6">
  <div class="glass-card rounded-xl p-6">
    <select x-model="projectType" class="w-full p-3 bg-slate-700 rounded-lg text-white mb-4">
      <option value="console">Console</option>
      <option value="library">Static library</option>
    </select>
    <div class="glass-card rounded-xl p-6" x-effect="updatePreview()">
      <pre x-text="previewStructure" class="text-sm text-slate-300 font-mono"></pre>
    </div>
    <button @click="generateZip" :disabled="generating" class="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold text-lg">
      <span x-show="!generating">Download .zip</span>
      <span x-show="generating">Generating...</span>
    </button>
  </div>
</div>
