<script lang="ts">
  import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte'
  import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte'
  import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte'
</script>

<section class="footer">
  <div class="text">
    <h2>最後まで読んでいただき、<br>本当にありがとうございます。</h2>
    
    <p class="name">例題 太郎</p>
    
    <div class="social">
      <ul>
        <li><a href="mailto:taro@sample.ac.jp"><FaEnvelopeSquare></FaEnvelopeSquare></a></li>
        <li><a href="https://twitter.com/"><FaTwitterSquare></FaTwitterSquare></a></li>
        <li><a href="https://github.com/"><FaGithubSquare></FaGithubSquare></a></li>
      </ul>
    </div>

    <p class="copyright">&copy; 2021 TARO REIDAI</p>
  </div>
</section>

<style>
.footer {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4A7394;
}
.text {
  background: #fff;
  padding: 5rem;
  min-height: 30vh;
  width: 50vw;
  max-width: 100%;
  letter-spacing: 0.2rem;
  text-align: center;
}
h2 {
  font-size: 2rem;
}
.name {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.copyright {
  font-size: 0.75rem;
}
.social {
  grid-area: social;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.social ul {
  display: flex;
  list-style: none;
}
.social ul li {
  margin: 0 8px;
}
.social ul li a {
  display: inline-block;
  color: #888;
  text-decoration: none;
  transition: all 0.3s;
  width: 48px;
  height: 48px;
}
.social ul li a:hover {
  color: rgb(29,161,242);
}
</style>