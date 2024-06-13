<script>
  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"
</script>

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
        <button class="orderNow">Order Now</button>
      </div>
      <div class="column">
        <p class="info">Liquorice jujubes muffin cake gingerbread chocolate chocolate cake. Gummies cheesecake shortbread bear claw ice cream brownie. Chocolate lemon drops pie cupcake jujubes candy dragée. Candy powder halvah icing dessert cheesecake caramels I love gummi bears. Chocolate croissant cake bonbon chocolate cake. Chupa chups I love cookie fruitcake sweet roll dragée chocolate cookie. Lemon drops liquorice gummi bears I love halvah chupa chups. I love cheesecake bonbon brownie topping pastry liquorice marzipan. Marzipan toffee tart muffin carrot cake biscuit topping toffee pudding. Dragée bear claw ice cream sweet roll candy cake. Tiramisu brownie cake candy pudding ice cream jelly-o muffin. Gummi bears halvah candy sugar plum I love I love tootsie roll. Lollipop I love jelly beans oat cake donut icing gingerbread liquorice. Bear claw wafer I love ice cream gummi bears jelly-o soufflé bear claw lollipop. Halvah oat cake liquorice sesame snaps jelly toffee muffin.</p>
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
