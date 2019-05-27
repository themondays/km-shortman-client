<template>
  <section class="page">
    <h3>Endpoints</h3>
    <p>
      API endpoints available here:
      <a href="http://localhost:4001" rel="nofollow"
        ><code>localhost:4001</code></a
      >
      or
      <a href="http://localhost:4000" rel="nofollow"
        ><code>localhost:4000</code></a
      >
      from your browser (each endpoint has specific purpose).
    </p>
    <h3>Shortlink Endpoint</h3>
    <p>Shortlink will return a permanent redirect with status code 301</p>
    <pre><code>GET &lt;hostname&gt;:4000/&lt;hashId&gt;
    </code></pre>
    <h4>Create new link</h4>
    <h5>Request</h5>
    <pre><code>POST &lt;hostname&gt;/api/1.0/links
    Content-Type: application/json
    </code></pre>
    <h5>Required Parameters</h5>
    <pre><code>{"link": {
      "url": "https://google.com/"
    }}
    </code></pre>
    <h5>Response</h5>
    <pre><code>{
     Response "data": {
        "hashid": "8EjZ6r4jyn",
        "hits": 0,
        "id": 10538,
        "short_url": "http://&lt;hostname&gt;:4000/8EjZ6r4jyn",
        "url": "https://google.com/"
      }
    }
    </code></pre>
    <h4>Get link by hashid</h4>
    <h5>Request</h5>
    <pre><code>GET &lt;hostname&gt;/api/1.0/links/&lt;hashid&gt;
    Content-Type: application/json
    </code></pre>
    <h5>Required Parameters</h5>
    <pre><code>GET parameter hashid must be valid string
    </code></pre>
    <h5>Response</h5>
    <pre><code>{
     Response "data": {
        "hashid": "8EjZ6r4jyn",
        "hits": 0,
        "id": 10538,
        "short_url": "http://&lt;hostname&gt;:4000/8EjZ6r4jyn",
        "url": "https://google.com/"
      }
    }
    </code></pre>
  </section>
</template>

<style>
.page {
  margin: 0 auto;
  padding: 30px;
  text-align: left;
}
p {
  margin: 0 0 15px;
}
h2,
h3,
h4,
h5 {
  margin: 15px 0;
}
pre {
  background-color: #f5f6fa;
  padding: 15px;
}
</style>
