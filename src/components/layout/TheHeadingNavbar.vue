<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <router-link :to="{ name: 'main' }" class="navbar-brand">
        <img src="@/assets/ssafy_logo.png" class="rounded mx-auto d-block" alt="..." />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              게시판
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  <router-link :to="{ name : 'board', params: { type: 'free' } }">자유게시판</router-link>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <router-link :to="{ name : 'board', params: { type: 'qna' } }">QNA</router-link>
                </a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">WIP</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'attraction' }" class="nav-link">관광지</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="검색..."
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="button">search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
