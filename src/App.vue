<template>
  <div class="container py-3">
    <header>
      <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
          <span class="fs-4">{{ $t("title") }}</span>
        </a>
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <router-link to="/" class="me-3 py-2 text-dark text-decoration-none">
            Home
          </router-link>
          <router-link to="/about" class="py-2 text-dark text-decoration-none">
            About
          </router-link>
        </nav>
      </div>
    </header>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
