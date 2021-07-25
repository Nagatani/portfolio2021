<script lang="ts">
</script>

<section class="skills-container">
  <div class="inner">
    <h2>Skills<span>職能</span></h2>
    <div class="skills">
      <div class="skills-image">
        <img src="./images/skills.svg" alt="skills">
      </div>
      <div class="skills-text">
        <dl>
          <dt>Design</dt>
          <dd>設計・構築が得意。UXを意識したUIデザイン及び実装を一気貫通で行えるのが強みです。</dd>
          <dt>Programming</dt>
          <dd>JavaScript(Client Side, Server Side), Pythonを用いた統計情報分析からアプリ開発まで経験があります。</dd>
          <dt>Web</dt>
          <dd>UI/UXを意識したWebサイト構築を設計から行えます。Programmingスキルと組み合わせて、Webアプリ、Webシステムの開発経験があります。</dd>
          <dt>Photograph</dt>
          <dd>インターンにてカメラの技術について学び、個人でも商品撮影やWeb制作に使用する素材の撮影等を行っています。</dd>
          <dt>Business</dt>
          <dd>マネジメントや会計学について大学とインターン先にて学びました。個の強みと能力を最大限活かせるタスクディレクションが得意です。</dd>
        </dl>
      </div>
    </div>
  </div>
</section>

<style>
.skills-container {
  min-height: 100vh;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.skills-container .inner {
  width: 100%;
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
dt {
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem;
  font-weight: 700;
  color: gray;
}
dd {
  margin: 1rem 0 1rem 3rem;
}
h2 > span {
  padding-left: 2rem;
  font-size: 1.5rem;
  color: gray;
}
.skills {
  display: flex;
  padding: 1rem 6rem 6rem;
}
.skills .skills-text {
  width: 60%;
  padding: 2rem;
}
.skills .skills-image {
  width: 40%;
  padding: 2rem;
}
</style>