I'm first-year mechanical engineering student. And I love Robotics

---

## 📝 Latest Updates (Projects & Studies)

<ul>
  {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>
      {% if post.categories %}
        <span style="font-size: 0.8em; color: gray;">
          📂 {{ post.categories | join: ', ' }}
        </span>
      {% endif %}
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p> </li>
  {% endfor %}
</ul>