<script>
  import { orderPrice } from "$lib/stores.js"
</script>

<header class="hero">
  <div class="top">
    <div class="hero-body">
      <div class="heading">
        <a href="/">
          <img class="logo" src="/logo.png" alt="logo" />
        </a>
        <h1 class="title">Bombay Street Feast</h1>
      </div>
    </div>

    <div class="order">
      <h2 class="cost">${$orderPrice}</h2>
      <a href="/Your Order">
        <img src="cart.png" alt="cart" />
      </a>
    </div>
  </div>
</header>

<style>
  h1 {
    font-size: 10ch;
    color: white;
    font-family: "BenchNine", sans-serif;
    font-weight: 700;
    font-style: normal;
    text-transform: uppercase;
  }

  h2 {
    color: white;
    font-size: 3ch;
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-style: normal;
  }

  header {
    background-color: black;
    height: 17ch;
  }

  .heading {
    display: flex;
    flex-direction: row;
  }

  .logo {
    height: 2cm;
  }

  .title {
    padding-top: 0.1cm;
    padding-left: 0.5cm;
  }

  img {
    height: 5ch;
  }

  .top {
    display: flex;
    flex-direction: row;
    align-items: last baseline;
  }

  .order {
    display: flex;
    flex-direction: row;
    padding-right: 2ch;
  }
</style>
