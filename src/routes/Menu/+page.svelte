<script>
  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"
  import { userOrder } from "$lib/stores.js"
  import { orderPrice } from "$lib/stores.js"

  let index = 0

  function addItem(item) {
    $orderPrice = $orderPrice + item.price
    // item = item.name + item.price
    $userOrder = [...$userOrder, item]
  }

  // let streetFood = [
  //   { name: "Vada Pav (1pc)", price: 8, image: "/vadapav.jpg" },
  //   { name: "Veg. Manchurian", price: "?", image: "/vegmanchurian.jpg" },
  //   { name: "Chicken Lollipop (5pcs)", price: 15, image: "/chickenlollipop.png" },
  //   { name: "Chaat Papdi ", price: "?", image: "/chaatpapdi.jpg" },
  //   { name: "Dahi Puri ", price: "?", image: "/dahipuri.jpg" },
  //   { name: "Pav Bhaji ", price: "?", image: "/pavbhaji.jpg" },
  // ]

  let menuItems = [
    { name: "Samosas (1pc)", price: 3, image: "/samosa.jpg" },
    { name: "Veg. Pakoras (10pcs)", price: 9, image: "/vegpakora.jpg" },
    { name: "Butter Chicken", price: 20, image: "/butterchicken.png" },
    { name: "Chilli Chicken", price: 20, image: "/chillichicken.jpg" },
    { name: "Lamb Tikka Wrap", price: 13, image: "/lambtikkawrap.jpg" },
    { name: "Chicken Tikka Wrap", price: 13, image: "/chickentikkawrap.jpg" },

    // { name: "Lamb Curry", price: 20, image: "/placeholder.png" },
    // { name: "Chana Masala", price: 15, image: "/chickenlollipop.png" },
    // { name: "Lamb Kebab Wrap", price: 13, image: "/chickenlollipop.png" },
    // { name: "Lamb Kebab Salad", price: 13, image: "/chickenlollipop.png" },

    // { name: "Chicken Tikka Salad", price: 13, image: "/chickenlollipop.png" },
    // { name: "Chicken Chilli Wrap", price: 13, image: "/chickenlollipop.png" },
    // { name: "Chicken Chilli Salad", price: 13, image: "/chickenlollipop.png" },
    // { name: "Butter Chicken Wrap", price: 13, image: "/chickenlollipop.png" },
    // { name: "Butter Chicken Salad", price: 13, image: "/chickenlollipop.png" },

    // { name: "Lamb Tikka Salad", price: 13, image: "/chickenlollipop.png" },
    // { name: "Fish Wrap", price: 13, image: "/chickenlollipop.png" },
    // { name: "Fish Salad", price: 13, image: "/chickenlollipop.png" },
    // { name: "Samosa Wrap", price: 13, image: "/chickenlollipop.png" },
    // { name: "Samosa Salad", price: 13, image: "/chickenlollipop.png" },
  ]
</script>

<body>
  <Header />
  <Nav />

  <h2>Standard Menu</h2>

  <div class="container">
    {#each menuItems as item, index}
      <div>
        <img src={item.image} alt="food" />
        <p>
          {item.name} ${item.price}
          <button
            on:click={() => {
              addItem(item)
            }}>+</button
          >
        </p>
      </div>
    {/each}
  </div>

  <p>Order Price: ${$orderPrice}</p>

  <Footer />
</body>

<style>
  body {
    background-color: black;
    color: white;
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
