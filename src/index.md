---
layout: base.njk
title: Home
---

## Hello World!

This is the homepage

## Posts
{% for post in collections.posts %}
    <article>
        <h3><a href="/posts/{{ post.data.slug }}/">{{ post.data.title }}
        </a></h3>
        <!-- {% if post.data.image %}
            <img src="{{ post.data.image }}" alt="{{ post.data.title }}" width="500">
        {% endif %} -->
    </article>
{% endfor %}
