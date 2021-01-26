<template>
  <div>
    <!-- header -->
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link exact class="nav-link" to="/">
              Home
            </nuxt-link>
          </li>
          <!-- 登录显示 -->
          <!-- 登录显示 -->
          <template v-if="$store.state.user">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/editor">
                <i class="ion-compose" />&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings">
                <i class="ion-gear-a" />&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <!-- <nuxt-link class="nav-link" :to="`/profile/${$store.state.user.username}`"> -->
              <nuxt-link
                :to="{
                  name: 'profile-username',
                  params: { username: $store.state.user.username },
                }"
                class="nav-link"
              >
                <i class="ion-gear-a" />&nbsp;{{ $store.state.user.username }}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">
                Sign in
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register">
                Sign up
              </nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <nuxt />
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<style>
</style>
