<script lang="ts">
  import Separator from "./Separator.svelte";
  import Work1 from "./WorksMobileApp.svelte";
  import Work2 from "./WorksWebDesign.svelte";
  import Work3 from "./WorksPhoto.svelte";
</script>

<section class="works">
  <section class="contents-list">
    <h2>Contents <span>制作物</span></h2>
    <div class="inner">
      <ol class="contents-text">
        <li>モバイルアプリ開発<span>〇〇を□□するアプリ</span></li>
        <li>Webサイト制作<span>✗✗のプロモーションサイト</span></li>
        <li>写真撮影技術<span>テーマごとの写真ギャラリー</span></li>
      </ol>
      <ul class="contents-container">
        <li><div class="work1-container"></div></li>
        <li><div class="work2-container"></div></li>
        <li><div class="work3-container"></div></li>
      </ul>
    </div>
  </section>
  <section class="contents">
    <Separator title={ "制作物" } text={ "1. モバイルアプリ開発" }></Separator>
    <div id="work1"><Work1></Work1></div>
    <Separator title={ "制作物" } text={ "2. Webサイト制作" }></Separator>
    <div id="work2"><Work2></Work2></div>
    <Separator title={ "制作物" } text={ "3. 写真撮影技術(テーマごとの写真ギャラリー)" }></Separator>
    <div id="work3"><Work3></Work3></div>
  </section>
</section>

<style>
.works {
  font-size: 1.25rem;
}
h2 {
  font-size: 4rem;
  color: gray;
  font-weight: 700;  
  position: relative;
  padding: .25rem 0;
  margin: 5rem 7rem 0;
  z-index: 3;
}
h2:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  content: '';
  background-image: linear-gradient(to right, #E07E7B 0%, #DEE092 100%);
}
h2 > span {
  padding-left: 2rem;
  font-size: 1.5rem;
  color: gray;
}

.contents-list {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.contents-list .inner {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.contents-list .contents-text {
  margin-left: 3rem;
  padding: 2rem 7rem 0;
}
.contents-list .contents-text li {
  font-size: 1.25rem;
  color: gray;
  margin: 1.5rem 0 1rem;
}

.contents-list .contents-text li > span {
  padding-left: 1rem;
  font-size: 1rem;
  color: gray;
}
.contents-list ul.contents-container {
  list-style: none;
  height: 100%;
  width: 100%;
}
.contents-list ul.contents-container li {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.contents-list ul.contents-container li div {
  height: 100%;
}
.contents-list ul.contents-container li:nth-child(1) {
  clip-path: polygon(40% 2%, 64% 2%, 34% 98%, 10% 98%);
}
.work1-container {
  background: url("../images/smartmockups_krh24r5s.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.contents-list ul.contents-container li:nth-child(2) {
  clip-path: polygon(65% 2%, 89% 2%, 59% 98%, 35% 98%);
}
.work2-container {
  background: url("../images/smartmockups_krh7rgav.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

}
.contents-list ul.contents-container li:nth-child(3) {
  clip-path: polygon(90% 2%, 119% 2%, 84% 98%, 60% 98%);
}
.work3-container {
  background: url("../images/cinema-64154_1280.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

}
</style>