<script lang="ts">
  export let title;
  export let text;
</script>

<section class="separator">
  <div class="left"></div>
  <main>
    <div class="maskingtape">
      <span class="title">{ title }</span>
      <h1>{ text }</h1>
    </div>
  </main>
  <div class="left-bottom"></div>
  <div class="footer"></div>
</section>

<style>
  .separator {
    width: 100%;

    display: grid;
    grid-template: 
      "left        main   " 1fr
      "left-bottom footer " 150px
      / 150px      1fr    ;

    background: #4A7394;
  }

  .separator h1 {
    color: #888;
    font-size: 6rem;
    line-height: 1;
    transform: rotate(-1deg);
  }
  .left {
    grid-area: left;
    border-bottom: 1px solid #fff;
  }
  main {
    grid-area: main;
    display: flex;
    align-items: flex-end;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    padding: 3rem;
  }
  .maskingtape {
    position: relative;
    background-color: #fff;
    background: repeating-linear-gradient(-45deg, #edf5f4, #edf5f4 10px, #f6faf9 0, #f6faf9 20px);
    padding: 2rem 4rem;
    transform: rotate(1deg);
  }
  .title {
    position: absolute;
    top: -1rem;
    left: -1rem;
    background-color: rgba(255,255,255,.3);
    border-left: 4px solid #8BC6CA;
    padding: 0.25em 2em;
    color: #454545;
    transform: rotate(-3deg);
  }
  .left-bottom {
    grid-area: left-bottom;
  }
  .footer {
    grid-area: footer;
    border-left: 1px solid #fff;
  }
</style>