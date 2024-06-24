<script>
  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"
  import MenuItem from "$lib/MenuItem.svelte"

  let items = [
    { name: "Samosas (1pc)", price: 3, image: "/samosa.jpg" },
    { name: "Veg. Pakoras (10pcs)", price: 9, image: "/vegpakora.jpg" },
    { name: "Chicken Lollipop (5pcs)", price: 15, image: "/chickenlollipop.png" },
    { name: "Butter Chicken", price: 20, image: "/butterchicken.png" },
    { name: "Lamb Curry", price: 20, image: "/placeholder.png" },
    { name: "Chilli Chicken", price: 20, image: "/chillichicken.jpg" },
    { name: "Chana Masala", price: 15, image: "/chickenlollipop.png" },
    { name: "Lamb Kebab Wrap", price: 13, image: "/chickenlollipop.png" },
    { name: "Lamb Kebab Salad", price: 13, image: "/chickenlollipop.png" },
    { name: "Chicken Tikka Wrap", price: 13, image: "/chickenlollipop.png" },
    { name: "Chicken Tikka Salad", price: 13, image: "/chickenlollipop.png" },
    { name: "Chicken Chilli Wrap", price: 13, image: "/chickenlollipop.png" },
    { name: "Chicken Chilli Salad", price: 13, image: "/chickenlollipop.png" },
    { name: "Butter Chicken Wrap", price: 13, image: "/chickenlollipop.png" },
    { name: "Butter Chicken Salad", price: 13, image: "/chickenlollipop.png" },
    { name: "Lamb Tikka Wrap", price: 13, image: "/chickenlollipop.png" },
    { name: "Lamb Tikka Salad", price: 13, image: "/chickenlollipop.png" },
    { name: "Fish Wrap", price: 13, image: "/chickenlollipop.png" },
    { name: "Fish Salad", price: 13, image: "/chickenlollipop.png" },
    { name: "Samosa Wrap", price: 13, image: "/chickenlollipop.png" },
    { name: "Samosa Salad", price: 13, image: "/chickenlollipop.png" },
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
