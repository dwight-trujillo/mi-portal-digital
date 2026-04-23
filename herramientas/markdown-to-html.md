---
layout: tool
title: "Conversor Markdown → HTML"
permalink: /herramientas/markdown-to-html/
---
<div x-data="markdownConverter" class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <label class="block text-sm font-medium mb-2">Escribe tu Markdown aquí</label>
    <textarea x-model="markdownInput" @input="convert" rows="16" class="w-full p-4 bg-slate-700 text-white rounded-lg"></textarea>
  </div>
  <div>
    <label class="block text-sm font-medium mb-2">Vista previa HTML</label>
    <div x-html="htmlOutput" class="p-4 bg-white text-slate-900 rounded-lg prose prose-sm max-w-none min-h-[200px]"></div>
  </div>
  <div class="md:col-span-2 flex flex-wrap gap-3">
    <button @click="copyToClipboard" class="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg">Copy HTML</button>
    <button @click="downloadHTML" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg">Download .html</button>
    <button @click="clearAll" class="px-4 py-2 bg-slate-600 text-white rounded-lg">Clear</button>
  </div>
  <div x-show="copied" class="md:col-span-2 text-green-400 text-sm">Copied to clipboard!</div>
</div>
