<script>
  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"
</script>

<svelte:head>
  <title>Bombay Street Feast - Home</title>
</svelte:head>

<body>
  <Header />
  <Nav />
  <main>
    <div class="container">
      <img src="promo video image.jpg" alt="food" />
    </div>

    <div class="columns">
      <div class="column is-one-fifth">
        <h2>About Us</h2>
        <a href="/Menu">
          <button class="orderNow">Order Now</button>
        </a>
      </div>
      <div class="column">
        <p class="info">The city of Mumbai is known for its distinctive street food where people gather at the roadside vendor stalls to eat small snacks in the evening. Our concept is just that, we bring you delicious food and drinks as if you were on an vibrant Mumbai Street served by our vendors. Here at Bombay Street Feast we offer an authentic tatse of Indian with our unique street food selection with an amazing western twist and mouth-watering menu of dishes that we encourage you to share - as we do in India.</p>
      </div>
    </div>
  </main>

  <Footer />
</body>

<style>
  .container {
    object-fit: fill;
  }

  body {
    background-color: black;
  }

  button {
    height: 1.5cm;
    width: 5cm;
    margin-left: 0.5cm;
  }

  h2 {
    text-align: center;
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-style: normal;
    color: white;
    font-size: 6ch;
    margin-left: 0.2cm;
  }

  p {
    color: white;
    font-family: "Karma", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2.5ch;
  }

  .info {
    margin-left: 0.7cm;
    margin-top: 0.5cm;
    margin-right: 0.5cm;
  }

  .orderNow {
    font-size: 2.5ch;
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-style: normal;
    color: white;
    background-color: #f27a2d;
  }
</style>
