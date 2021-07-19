<script lang="ts">
  import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte'
  import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte'
  import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte'

  let y
</script>

<svelte:window bind:scrollY={y}/>

<aside class="drawer_main">
  {#if y > 100}
	<input type="checkbox" id="drawer-switch" checked>
  {:else}
	<input type="checkbox" id="drawer-switch">
  {/if}
  
  <div class="drawer">
    <label class="drawer-label" for="drawer-switch"></label>
    <div class="left"></div>
    <div class="bottom"></div>
    <div class="names">
      <h1>TARO REIDAI</h1>
      <p>PORTFOLIO OF TARO REIDAI</p>
      <p>UX Designer / Web Designer / Programmer</p>
    </div>
    <div class="social">
      <ul>
        <li><a href="mailto:taro@sample.ac.jp"><FaEnvelopeSquare></FaEnvelopeSquare></a></li>
        <li><a href="https://twitter.com/"><FaTwitterSquare></FaTwitterSquare></a></li>
        <li><a href="https://github.com/"><FaGithubSquare></FaGithubSquare></a></li>
      </ul>
    </div>
    <h1 class="closed_name">TARO REIDAI</h1>
  </div>
</aside>

<style>
.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;
  height: 100%;
  background-color: white;
  transition: all 0.75s cubic-bezier(.85,0,.15,1);

  display: grid;
  grid-template: 
    "header      header header header" 150px
    "left        main   social right"  1fr
    "left-bottom bottom bottom right"  150px
    / 150px      1fr    250px  200px;

    z-index: 999999;
}
.drawer .drawer-label {
  width: 100px;
  height: 100px;
  position: absolute;
  right: -50px;
  top: 0;
  border-radius: 9999999px;
  background-color: #fff;
}
.drawer .drawer-label::before,
.drawer .drawer-label::after {
  content: "";
  position: absolute;
  top: 37px;
  width: 25px;
  height: 25px;
  border-bottom: 8px solid #000;
  border-right: 8px solid #000;
  transform: rotate( 135deg );
  left: 25px;
  pointer-events: all;
}
.drawer .drawer-label::after {
  left: 50px;
}

.drawer .left {
  grid-area: left;
  border-bottom: 1px solid #000;
}
.drawer .bottom {
  grid-area: bottom;
  border-left: 1px solid #000;
}
.drawer .names {
  grid-area: main;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
}
.drawer .names h1 {
  color: #888;
  font-size: 7rem;
  line-height: 0.9;
  padding-bottom: 1rem;
}
.drawer .names p {
  color: #888;
  font-size: 1.5rem;
}
.drawer .social {
  grid-area: social;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 24px;
  border-bottom: 1px solid #000;
}
.drawer .social ul {
  display: flex;
  list-style: none;
}
.drawer .social ul li {
  margin: 0 8px;
}
.drawer .social ul li a {
  display: inline-block;
  color: #333;
  text-decoration: none;
  transition: all 0.3s;
  width: 48px;
  height: 48px;
}
.drawer .social ul li a:hover {
  color: rgb(29,161,242);
}

.closed_name {
  position: absolute;
  transform: rotate(-90deg);
  font-size: 3rem;
  line-height: 1;
  right: -112px;
  bottom: 130px;
  color: #888;
  visibility: hidden;
}

#drawer-switch {
  display: none;
  visibility: hidden;
}
#drawer-switch:checked + .drawer {
  left: calc(-90% + 75px);
}
#drawer-switch:checked + .drawer .drawer-label::before,
#drawer-switch:checked + .drawer .drawer-label::after {
  transform: rotate( -45deg );
}

#drawer-switch:checked + .drawer .closed_name {
  visibility :visible;
}
</style>