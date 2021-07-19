<script lang="ts">
</script>

<section class="hero">
  <div class="scrolldown1"><span>scroll</span></div>
</section>

<style>
.hero {
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-image: url("../images/meadow-4485609_1920.jpg");
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
}

.scrolldown1{
	position:absolute;
	right:2rem;
	bottom:1rem;
	height:100px;
}
.scrolldown1 span{
	position: absolute;
  left: -30px;
  top: -50px;
  color: #eee;
  font-size: 1.5rem;
  letter-spacing: 0.05em;
  transform: rotate(-90deg);
}

/* 線の描写 */
.scrolldown1::after{
	content: "";
	position: absolute;
	top: 0;
	width: 10px;
	height: 50px;
	background: #eee;
	animation: pathmove 1.4s ease-in-out infinite;
	opacity:0;
}
@keyframes pathmove{
	0%{
    height:0;
		top:0;
		opacity: 0;
	}
	30%{
		height:50px;
		opacity: 1;
	}
	100%{
		height:0;
		top:100px;
		opacity: 0;
	}
}
</style>