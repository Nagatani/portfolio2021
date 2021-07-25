<script lang="ts">
</script>

<section class="career">
  <section class="inner">
    <dl>
      <dt>学歴</dt>
      <dd>豊田〇〇高等学校 普通科 2019年卒業</dd>
      <dd>愛知工業大学 情報科学科 メディア情報専攻 2023年卒業予定</dd>
      <dt>インターン経験</dt>
      <dd>株式会社 〇〇デザイン(グラフィックデザイナー、デザインアシスタント)</dd>
      <dd>〇〇PhotoGraph Co.(SNSマーケター)</dd>
      <dt>アルバイト経験</dt>
      <dd>有限会社〇〇(Webデザイナー, DTPデザイナー)</dd>
      <dd>株式会社□□□フォト(カメラマン、カメラアシスタント)</dd>
      <dd>株式会社〇〇リクルート(イベントスタッフ)</dd>
    </dl>

  </section>
</section>

<style>
.career {
  min-height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image:
    linear-gradient(to right, #f46b455e, #eea94953),
    url("../images/library-1147815_1280.jpg");
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
}
.inner {
  background: #fff;
  padding: 5rem;
  width: 60vw;
  letter-spacing: 0.2rem;
  display: flex;
  position: relative;
}
.inner::before {
	content: "Career";
	position: absolute;
  padding: 1rem 3rem;
	transform: rotate(8deg);
  background-color: rgba(255, 255, 255, 0.471);
	top: -45px;
	right: -45px;
	color: rgba(0, 0, 0, 0.45);
	font-size: 5rem;
  letter-spacing: 0;
	font-family: 'Allura', cursive;
}
dt {
  margin: 1.5rem 0 1rem;
  font-weight: 700;
  color: gray;
}
dd {
  margin: 1rem 0 1rem 3rem;
}
</style>