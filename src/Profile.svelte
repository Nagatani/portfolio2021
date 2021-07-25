<script lang="ts">
</script>

<section class="profile">
  <section class="aboutme">
    <figure class="profile-photo">
      <img src="https://placehold.jp/300x300.png" alt="">
    </figure>
    <div class="text">
      <dl>
        <dt>氏名</dt>
        <dd class="text__name" data-en="Taro Reidai">例題 太郎</dd>
        <dt>出身</dt>
        <dd>愛知県豊田市</dd>
        <dt>生まれ年</dt>
        <dd>2000年</dd>
      </dl>
    </div>
  </section>
</section>
<section class="profile2">
  <section class="read">
    <div class="trying">
      <h2>目指していること</h2>
      <h3>デザインによるスムーズな問題解決</h3>
      <p>デザインに科学的知識を取り入れ、論理的に問題を解決できるデザイナーを目指しています。<br>
        単純に美しく見せることだけを突き詰めるのではなく、様々な視点を取り入れられるよう勉学に励み、スムーズな問題解決を促すデザイン能力を磨いています。</p>
    </div>
    <div class="doing">
      <h2>やりたいこと・今進めていること</h2>
      <h3>グラフィックデザイン / インフォグラフィックス</h3>
      <p>グラフィックデザインによる行動設計や、それに伴うリサーチや、マーケティングなどの様々な観点を取り入れられるようになりたい。</p>
    </div>
  </section>
</section>

<style>
.profile {
  min-height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4A7394;
}
.aboutme {
  background: #fff;
  padding: 5rem;
  min-height: 30vh;
  width: 50vw;
  max-width: 100%;
  letter-spacing: 0.2rem;
  display: flex;
  position: relative;
}
.aboutme::before {
	content: "Profile";
	position: absolute;
  padding: 1rem 3rem;
	transform: rotate(-5deg);
  background-color: rgba(255, 255, 255, 0.471);
	top: -45px;
	left: -45px;
	color: rgba(0, 0, 0, 0.45);
	font-size: 5rem;
  letter-spacing: 0.2rem;
	font-family: 'Allura', cursive;
}
.aboutme .text {
  flex: 1;
  padding: 0 3rem;
}
.aboutme .text dt {
  margin: 1.5rem 0 1rem;
}
.aboutme .text dd {
  margin: 1rem 0 1rem 3rem;
}
.text__name {
	position: relative;
  font-size: 2rem;
  letter-spacing: 0.4rem;
}
.text__name::before {
	content: attr(data-en);
	position: absolute;
	transform: rotate(-5deg);
	top: -20px;
	left: -10px;
	color: rgba(222, 64, 90, 0.491);
	font-size: 30px;
	font-weight: 400;
  letter-spacing: 0.2rem;
	font-family: 'Allura', cursive;
}

.profile2 {
  min-height: 125vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.read {
  background: #fff;
  padding: 5rem;
  min-height: 50vh;
  width: 70vw;
  letter-spacing: 0.2rem;
}
h2 {
  font-size: 1.5rem;
  font-weight: 700;
  
  position: relative;
  padding: .25rem 0;
  margin-top: 3rem;
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
h3 {
  padding: 1.5rem 0;
  font-size: 2rem;
  color: #4A7394;
}
p {
  font-size: 1.5rem;
}
</style>