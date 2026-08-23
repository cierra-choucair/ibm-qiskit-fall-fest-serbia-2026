/* ────────────────────────────────────────────────────────────────────────
   Blog data layer + renderers.

   Content source:
   - By default, posts come from the local store in posts.js
     (window.LOCAL_POSTS) — edit that file to publish.
   - To manage posts in WordPress instead, set WP_API_URL below to the
     WordPress site's base URL (no trailing slash, e.g.
     "https://cms.example.com"). Posts are then fetched live from the
     WordPress REST API (/wp-json/wp/v2/posts) and posts.js is ignored.
   ──────────────────────────────────────────────────────────────────────── */

(function () {
  "use strict";

  var WP_API_URL = ""; // e.g. "https://cms.example.com" — empty = use posts.js

  /* ──────── helpers ──────── */

  function decodeEntities(html) {
    var el = document.createElement("textarea");
    el.innerHTML = html;
    return el.value;
  }

  function stripTags(html) {
    var el = document.createElement("div");
    el.innerHTML = html;
    return (el.textContent || "").trim();
  }

  // Light guard for CMS-served markup: drop script/style elements and
  // inline event handlers before injecting. The CMS is our own, but a
  // static site should still not execute whatever it is handed.
  function sanitize(html) {
    var doc = new DOMParser().parseFromString(html, "text/html");
    var bad = doc.querySelectorAll("script, style");
    for (var i = 0; i < bad.length; i++) bad[i].remove();
    var all = doc.querySelectorAll("*");
    for (var j = 0; j < all.length; j++) {
      var attrs = all[j].attributes;
      for (var k = attrs.length - 1; k >= 0; k--) {
        var name = attrs[k].name;
        if (name.indexOf("on") === 0 || (name === "href" && /^\s*javascript:/i.test(attrs[k].value))) {
          all[j].removeAttribute(name);
        }
      }
    }
    return doc.body.innerHTML;
  }

  function formatDate(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return iso;
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  }

  /* ──────── data source ──────── */

  function localPosts() {
    return (window.LOCAL_POSTS || []).slice();
  }

  function fromWp(p) {
    return {
      slug: p.slug,
      title: decodeEntities(p.title && p.title.rendered ? p.title.rendered : ""),
      date: p.date,
      excerpt: stripTags(p.excerpt && p.excerpt.rendered ? p.excerpt.rendered : ""),
      html: p.content && p.content.rendered ? p.content.rendered : "",
    };
  }

  function getPosts() {
    if (!WP_API_URL) return Promise.resolve(localPosts());
    return fetch(WP_API_URL + "/wp-json/wp/v2/posts?per_page=20&_fields=slug,title,excerpt,date")
      .then(function (res) { return res.json(); })
      .then(function (list) { return list.map(fromWp); });
  }

  function getPost(slug) {
    if (!WP_API_URL) {
      var post = localPosts().filter(function (p) { return p.slug === slug; })[0];
      return Promise.resolve(post || null);
    }
    return fetch(WP_API_URL + "/wp-json/wp/v2/posts?slug=" + encodeURIComponent(slug) + "&_fields=slug,title,content,excerpt,date")
      .then(function (res) { return res.json(); })
      .then(function (list) { return list.length ? fromWp(list[0]) : null; });
  }

  /* ──────── listing page ──────── */

  var list = document.getElementById("post-list");
  if (list) {
    getPosts()
      .then(function (posts) {
        if (!posts.length) {
          list.innerHTML = '<p class="blog-empty">No posts yet — the first dispatch lands soon.</p>';
          return;
        }
        list.innerHTML = "";
        posts.forEach(function (p) {
          var a = document.createElement("a");
          a.className = "card post-card";
          a.href = "/blog/post.html?slug=" + encodeURIComponent(p.slug);
          var date = document.createElement("p");
          date.className = "post-date mono";
          date.textContent = formatDate(p.date);
          var h = document.createElement("h2");
          h.textContent = p.title;
          var ex = document.createElement("p");
          ex.className = "post-excerpt";
          ex.textContent = p.excerpt;
          var more = document.createElement("p");
          more.className = "post-more";
          more.textContent = "Read →";
          a.append(date, h, ex, more);
          list.appendChild(a);
        });
      })
      .catch(function () {
        list.innerHTML = '<p class="blog-empty">Couldn’t load posts right now — try a refresh.</p>';
      });
  }

  /* ──────── post page ──────── */

  var body = document.getElementById("post-body");
  if (body) {
    var titleEl = document.getElementById("post-title");
    var metaEl = document.getElementById("post-meta");
    var slug = new URLSearchParams(location.search).get("slug");

    getPost(slug)
      .then(function (post) {
        if (!post) {
          titleEl.textContent = "Post not found";
          body.innerHTML = '<p>That post doesn’t exist (or moved). <a href="/blog/">Back to the blog →</a></p>';
          return;
        }
        document.title = post.title + " · Qiskit Fall Fest Serbia 2026";
        titleEl.textContent = post.title;
        metaEl.textContent = formatDate(post.date);
        body.innerHTML = sanitize(post.html);
      })
      .catch(function () {
        titleEl.textContent = "Couldn’t load this post";
        body.innerHTML = '<p>Try a refresh, or head <a href="/blog/">back to the blog →</a>.</p>';
      });
  }
})();
