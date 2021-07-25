<script lang="ts">
</script>
<section class="content-summary">
  <h2>モバイルアプリ開発<span>〇〇を□□するアプリ</span></h2>
</section>
<section class="content-description">
  <h2>詳細</h2>
  <div class="container">
    <section class="text">
      <h3>時代に合わせた〇〇を、□□にする</h3>
      <p>□□株式会社主催 △△アプリアワード 優秀賞受賞</p>
      <p>大学のサークル活動にて募った開発メンバー5名で、1ヶ月掛けて作成しました。<br>その中で、私はUIデザイナー、プログラマとして活動を行いました。</p>
      <p>数ある制作アプリの中で、このアプリが唯一受賞できました。</p>
      <p>ここは本当はもう少し詳しく書けると良い。</p>

      <dl>
        <dt>制作期間</dt>
        <dd>1ヶ月(2021年6月〜7月)</dd>
        <dt>開発メンバー</dt>
        <dd>5名(ディレクター1名,デザイナー1名,プログラマ3名)</dd>
        <dt>役割</dt>
        <dd>UIデザイナー / プログラマ</dd>
        <dt>使用ツール</dt>
        <dd>Illustrator, Photoshop, Xd, Flutter, Android Studio, Xcode</dd>
      </dl>
    </section>

    <section class="image">
      <img src="../images/mobile-mockup-1627101791259.png" alt="mockups">
    </section>
  </div>

</section>

<style>
.content-summary {
  min-height: 100vh;
  position: relative;
  background: url("../images/smartmockups_krh24r5s.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; 
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
.content-summary h2 > span {
  padding-left: 2rem;
  font-size: 1.5rem;
  color: gray;
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
.content-description .container .image {
  height: 100%;
  width: 40%;
}
.content-description .container .image img {
  max-width: 100%;
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
.content-description section img {
  max-width: 100%;
}

.content-description dl {
  font-size: 1rem;
}
.content-description dt {
  margin: 1.5rem 0 1rem;
  font-weight: 700;
  color: gray;
}
.content-description dd {
  margin: 1rem 0 1rem 3rem;
}
</style>