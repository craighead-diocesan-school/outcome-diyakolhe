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
    { name: "Samosas (1pc)", price: 3.5, image: "/samosa.jpg" },
    { name: "Veg. Pakoras (10pcs)", price: 9, image: "/vegpakora.jpg" },

    { name: "Butter Chicken w/ rice (Regular)", price: 15, image: "/butterchicken.png" },
    { name: "Butter Chicken w/ rice (Large)", price: 20, image: "/butterchicken.png" },

    { name: "Chilli Chicken w/ rice (Regular)", price: 15, image: "/chillichicken.jpg" },
    { name: "Chilli Chicken w/ rice (Large)", price: 20, image: "/chillichicken.jpg" },
    { name: "Chilli Chicken Wrap", price: 15, image: "/chillichickenwrap.png" },

    { name: "Lamb Tikka Wrap", price: 15, image: "/lambtikkawrap.jpg" },
    { name: "Lamb Kebab Wrap", price: 15, image: "/lambkebabwrap.jpg" },

    { name: "Chicken Tikka Wrap", price: 15, image: "/chickentikkawrap.jpg" },
    { name: "Chicken Tikka Salad", price: 15, image: "/chickentikkasalad.jpg" },

    { name: "Fish Wrap", price: 15, image: "/fishwrap.png" },
    { name: "Chicken Burger Combo", price: 14, image: "/chickenburgercombo.jpg" },
    { name: "Crispy Chicken Tenders w/ chips and salad", price: 15, image: "/crispychickentenders.jpg" },
    { name: "Hot Chips", price: 5, image: "/hotchips.jpg" },
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
          {item.name}<br />
          ${item.price}
          <button
            on:click={() => {
              addItem(item)
            }}>+</button
          >
        </p>
      </div>
    {/each}
  </div>

  <p>Order Price: {$orderPrice}</p>

  <Footer />
</body>

<style>
  body {
    background-color: black;
    color: white;
  }

  button {
    margin-bottom: 0.5cm;
  }

  img {
    height: 5cm;
    width: 5cm;
    margin-right: 1cm;
  }

  p {
    color: white;
  }

  .container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
  }
</style>
