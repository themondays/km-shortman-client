<template>
  <div>
    <header class="header">
      <nuxt-link to="/" class="logo">
        Shortman
        <small>
          Longer your life
        </small>
      </nuxt-link>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">
              <span>Home</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              <span>About</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/api">
              <span>API</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      <small>Shortman Web Client</small>
    </footer>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a:link,
a:visited,
a:active {
  color: #35495e;
  text-decoration: none;
}

header,
main,
footer {
  max-width: 1200px;
  margin: auto;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

header.header {
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
}

header .logo {
  display: inline-block;
  border-radius: 4px;
  line-height: 1em;
  font-size: 1em;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 1em;
}

header .logo small {
  display: block;
}

nav ul {
  display: flex;
  list-style: none;
  padding: 15px 0;
  margin: 0;
}

nav ul > li {
  margin: 0 15px;
}

nav ul > li > a {
  font-size: 0.75em;
}

footer {
  text-align: center;
  padding: 0 0 15px;
}
</style>
