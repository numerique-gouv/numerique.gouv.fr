---
title: Actualités
permalink: "/actualites"
layout: page
pagination:
  enabled: true
---

<ul class="post-list">
  <!--
      Here is the main paginator logic called.
      All calls to site.posts should be replaced by paginator.posts
  -->
  {% for post in paginator.posts %}
  <li>
    <span class="post-meta">{% include date.html date=post.date %}</span>
    <h2>
      <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </h2>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url }}">Lire plus...</a>
  </li>
  {% endfor %}
</ul>

<!--
  Showing buttons to move to the next and to the previous list of posts (pager buttons).
-->
{% if paginator.total_pages > 1 %}
<ul class="pager">
  {% if paginator.previous_page %}
  <li class="previous">
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&larr; Actualités plus récentes</a>
  </li>
  {% endif %}
  {% if paginator.next_page %}
  <li class="next">
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Actualités plus anciennes &rarr;</a>
  </li>
  {% endif %}
</ul>
{% endif %}