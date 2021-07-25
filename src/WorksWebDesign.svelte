<script lang="ts">
</script>
<section class="content-summary">
  <h2>Webサイト制作<span>✗✗のプロモーションサイト</span></h2>
</section>
<section class="content-description">
  <h2>詳細</h2>
  <div class="container">
    <section class="text">
      <h3>□□を〇〇する✗✗のプロモーション</h3>
      <p>Webサイト制作に関する説明をここに書きます。</p>
      <p>ここは本当はもう少し詳しく書けると良い。</p>
      <p>サイトのURLを公開している場合は、URLを貼っておきましょう。</p>
    </section>
    <dl>
      <dt>制作期間</dt>
      <dd>0.5ヶ月(2021年8月)</dd>
      <dt>開発メンバー</dt>
      <dd>2名(ディレクター1名,Webデザイナー1名)</dd>
      <dt>役割</dt>
      <dd>Webデザイナー</dd>
      <dt>使用ツール</dt>
      <dd>Xd, Visual Studio Code</dd>
      <dt>開発環境</dt>
      <dd>Node.js, Svelte, rollup, TypeScript, CSS</dd>
    </dl>
  </div>

</section>

<style>
.content-summary {
  min-height: 100vh;
  position: relative;
  background: url("../images/smartmockups_krh7rgav.jpg");
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
</style>