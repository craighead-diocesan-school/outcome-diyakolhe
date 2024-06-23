<script>
  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"
  import MenuItem from "$lib/MenuItem.svelte"

  let items = [
    { name: "Chicken Lollipop", price: 15, image: "/chickenlollipop.png" },
    { name: "Butter Chicken", price: 19, image: "/chickenlollipop.png" },
    { name: "Chilli Chicken", price: 19, image: "/chickenlollipop.png" },
    { name: "Butter Chicken", price: 19, image: "/chickenlollipop.png" },
    { name: "Chilli Chicken", price: 19, image: "/chickenlollipop.png" },
  ]
</script>

<body>
  <Header />
  <Nav />
  <div class="container">
    {#each items as item}
      <div class="item">
        <img src={item.image} alt="food" />
        <p>{item.name} ${item.price} <button>Add</button></p>
      </div>
    {/each}
  </div>

  <Footer />
</body>

<style>
  body {
    background-color: black;
  }
  img {
    height: 5cm;
    width: 5cm;
  }

  p {
    color: white;
  }

  .container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
  }
</style>
