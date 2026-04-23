---
layout: page
title: "Blog"
description: "Articles about C++, CMake, debugging, and modern software development."
---
<div class="space-y-8">
  {% for post in site.posts %}
  <article class="glass-card rounded-xl p-6">
    <h2 class="text-2xl font-bold mb-1">
      <a href="{{ post.url | relative_url }}" class="hover:text-cyan-400 transition">{{ post.title }}</a>
    </h2>
    <time class="text-sm text-slate-400">{{ post.date | date: "%B %d, %Y" }}</time>
    <p class="text-slate-300 mt-2">{{ post.description }}</p>
    <a href="{{ post.url | relative_url }}" class="text-cyan-400 hover:underline text-sm mt-2 inline-block">Read more →</a>
  </article>
  {% endfor %}
</div>
