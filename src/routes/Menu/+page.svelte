<script>
  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"
  import { userOrder } from "$lib/stores.js"
  import { orderPrice } from "$lib/stores.js"

  let index = 0

  function addItem(item) {
    $orderPrice = $orderPrice + item.price

    $userOrder = [...$userOrder, item]
  }

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
    { name: "Hot Chips with sauce(s)", price: 5, image: "/hotchips.jpg" },
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
    font-family: "Karma", serif;
    font-weight: 400;
    font-style: normal;
  }

  .container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
  }

  h2 {
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-style: normal;
    color: white;
    font-size: 2ch;
    padding-left: 1.4cm;
    padding-top: 0.4cm;
    padding-bottom: 0.3cm;
  }
</style>
