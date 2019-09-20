<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">
          conduit
        </h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>
          <!-- 文章列表 -->
          <div
            v-for="article in articles"
            :key="article.slug"
            class="article-preview"
          >
            <div class="article-meta">
              <a href="profile.html"><img :src="article.author.image"></a>
              <div class="info">
                <a href="" class="author">{{ article.author.username }}</a>
                <span class="date">{{ article.createdAt | fmtDate }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart" /> {{ article.favoritesCount }}
              </button>
            </div>

            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
            <nuxt-link :to="{name: 'article-slug', params:{ slug: article.slug }}">
              Read more...
            </nuxt-link>
          </div>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <!-- tags列表 -->
            <div class="tag-list">
              <a
                v-for="tag in tags"
                :key="tag"
                href=""
                class="tag-pill tag-default"
              >{{ tag }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tags: []
    }
  },
  async asyncData ({ $axios }) {
    try {
      const data = await $axios.$get('/articles')

      // asyncData中返回的数据会融合到data中
      return {
        articles: data.articles
      }
    } catch (err) {
      // console.log(err)
      return {
        articles: []
      }
    }
  },
  async created () {
    // 此方法，在客户端和服务端都会执行
    // 判断是否在客户端执行
    if (!this.$isServer) {
      try {
        const { tags } = await this.$axios.$get('/tags')
        this.tags = tags
      } catch (err) {
        // eslint-disable-next-line
        console.log(err)
      }
    }
  }
}
</script>

<style>
</style>
