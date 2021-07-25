<script lang="ts">
</script>

<section class="content-summary">
  <h2>人物撮影</h2>
  <div class="photo-container1">
    <div class="area0"><img src="./images/people/brooke-cagle-NoRsyXmHGpI-unsplash.jpg" alt=""></div>
    <div class="area1"><img src="./images/people/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg" alt=""></div>
    <div class="area2"><img src="./images/people/ian-dooley-d1UPkiFd04A-unsplash (1).jpg" alt=""></div>
    <div class="area3"><img src="./images/people/helena-lopes-DkGIAjlIJu0-unsplash.jpg" alt=""></div>
    <div class="area4"><img src="./images/people/zachary-nelson-98Elr-LIvD8-unsplash.jpg" alt=""></div>
  </div>
</section>

<section class="content-summary">
  <h2>お祭り</h2>
  <div class="photo-container2">
    <div class="area0"><img src="./images/fest/4fc72f71-6186-4b42-9c6a-1d3bbfc47ed2.jpg" alt=""></div>
    <div class="area1"><img src="./images/fest/fireworks-945386_1280.jpg" alt=""></div>
    <div class="area2"><img src="./images/fest/concert-768722_640.jpg" alt=""></div>
    <div class="area3"><img src="./images/fest/audience-1853662_640.jpg" alt=""></div>
    <div class="area4"><img src="./images/fest/women-499337_1280.jpg" alt=""></div>
  </div>
</section>

<section class="content-summary">
  <h2>その他風景</h2>
  <div class="photo-container3">
    <div class="area0"><img src="./images/other/erik-eastman-4HG5hlhmZg8-unsplash.jpg" alt=""></div>
    <div class="area1"><img src="./images/other/nicki-eliza-schinow-BjJP2TN8WoI-unsplash.jpg" alt=""></div>
    <div class="area2"><img src="./images/other/ryoji-iwata-vWfKaO0k9pc-unsplash.jpg" alt=""></div>
    <div class="area3"><img src="./images/other/alex-knight-wfwUpfVqrKU-unsplash.jpg" alt=""></div>
    <div class="area4"><img src="./images/other/clay-banks-hwLAI5lRhdM-unsplash.jpg" alt=""></div>
  </div>
</section>

<section class="content-description">
  <h2>詳細</h2>
  <div class="container">
    <section class="text">
      <h3>写真撮影</h3>
      <p>テーマごとの説明をここにかきます。</p>
      <dl>
        <dt>テーマ1: 人物撮影</dt>
        <dd>〇〇を意識して✗✗を表現しました。</dd>
        <dt>テーマ2: お祭り</dt>
        <dd>独特の空気感を表現できるように努力しました。</dd>
        <dt>テーマ3: その他風景</dt>
        <dd>風景写真では、その風景が最も映える構図を意識しています。</dd>
      </dl>
    </section>
    <dl>
      <dt>使用機材</dt>
      <dd>カメラ本体：Nikon D850, Sigma DP3 Merrill, Nikon1 J5</dd>
      <dd>レンズ：AF-S NIKKOR 14-24mm f/2.8G ED, etc..</dd>
      <dd>光学機材：GODOX AD600Pro etc..</dd>
      <dt>役割</dt>
      <dd>カメラマン</dd>
      <dt>使用ツール</dt>
      <dd>Lightroom Classic, Photoshop</dd>
    </dl>
  </div>

</section>

<style>
.content-summary {
  min-height: 100vh;
  position: relative;
}
.content-summary h2 {
  font-size: 4rem;
  color: gray;
  font-weight: 700;
  border-radius: 2rem 0 0 0;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2rem;
  background: #fff;
  display: inline-block;
}

.content-description {
  min-height: 100vh;
}
.content-description .container {
  display: flex;
  height: 100%;
  padding: 2rem 7rem 0;
}
.content-description .container .text {
  height: 100%;
  width: 60%;
  flex: 1;
  font-size: 1.25rem;
  letter-spacing: 0.2rem;
}
.content-description .container .text h3 {
  padding: 1.5rem 0;
  font-size: 2rem;
  color: #4A7394;
}
.content-description .container .text p {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.content-description h2 {
  font-size: 4rem;
  color: gray;
  font-weight: 700;  
  position: relative;
  padding: .25rem 0;
  margin: 5rem 7rem 0;
}
.content-description h2:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  content: '';
  background-image: linear-gradient(to right, #E07E7B 0%, #DEE092 100%);
}

.content-description dl {
  font-size: 1.25rem;
}
.content-description dt {
  margin: 1.5rem 0 1rem;
  font-weight: 700;
  color: gray;
}
.content-description dd {
  margin: 1rem 0 1rem 3rem;
}
.photo-container1 {
  height: 120vh;
  display: grid;
  grid-template: 
    "area1 area0 area0 area0" 1fr
    "area1 area0 area0 area0" 1fr
    "area2 area0 area0 area0" 1fr
    "area2 area3 area4 area4" 200px
    / 300px 1fr 1fr 1fr;
}
.photo-container1 .area0 { grid-area: area0; }
.photo-container1 .area1 { grid-area: area1; }
.photo-container1 .area2 { grid-area: area2; }
.photo-container1 .area3 { grid-area: area3; }
.photo-container1 .area4 { grid-area: area4; }
.photo-container1 > div,
.photo-container2 > div,
.photo-container3 > div {
  overflow: hidden;
}
.photo-container1 > div > img,
.photo-container2 > div > img,
.photo-container3 > div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.photo-container2 {
  height: 120vh;
  display: grid;
  grid-template: 
    "area0 area0 area1 area1" 1fr
    "area0 area0 area1 area1" 1fr
    "area2 area3 area4 area4" 1fr
    "area2 area3 area4 area4" 1fr
    / 1fr 1fr 1fr 1fr;
}
.photo-container2 .area0 { grid-area: area0; }
.photo-container2 .area1 { grid-area: area1; }
.photo-container2 .area2 { grid-area: area2; }
.photo-container2 .area3 { grid-area: area3; }
.photo-container2 .area4 { grid-area: area4; }

.photo-container3 {
  height: 120vh;
  display: grid;
  grid-template: 
    "area0 area1 area2 area2" 1fr
    "area0 area1 area3 area3" 1fr
    "area0 area1 area4 area4" 1fr
    "area0 area1 area4 area4" 1fr
    / 600px 400px 1fr 1fr;
}
.photo-container3 .area0 { grid-area: area0; }
.photo-container3 .area1 { grid-area: area1; }
.photo-container3 .area2 { grid-area: area2; }
.photo-container3 .area3 { grid-area: area3; }
.photo-container3 .area4 { grid-area: area4; }

</style>