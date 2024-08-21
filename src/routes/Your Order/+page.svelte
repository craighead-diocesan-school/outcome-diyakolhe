<script>
  //display the userOrder and other details that they can fill out such as their name etc.
  //button to select if the order is a delivery or a pick up

  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"
  import { userOrder } from "$lib/stores.js"
  import { orderPrice } from "$lib/stores.js"
  import { orders } from "$lib/stores.js"

  let index

  function submitOrder() {
    $orders = [...$orders, $userOrder]
  }

  function addItem(item) {
    $userOrder = [...$userOrder, item]
    $orderPrice = $orderPrice + item.price
  }
  function removeItem(index, item) {
    $userOrder = [...$userOrder.slice(0, index), ...$userOrder.slice(index + 1)]
    $orderPrice = $orderPrice - item.price
  }
  //add function to remove and add items that are already in the cart by linking each function to a + and - button which will be next to each of the items in the cart.
</script>

<body>
  <Header />
  <Nav />
  <main>
    <div class="columns">
      <div class="column">
        {#each $userOrder as item, index}
          <li>
            {item.name} - ${item.price}
            <button
              on:click={() => {
                addItem(item)
              }}>+</button
            >
            <button
              on:click={() => {
                removeItem(index, item)
              }}>-</button
            >
          </li>
        {/each}

        <p>${$orderPrice}<br /></p>
      </div>
      <div class="column">
        <label>
          Name:<br />
          <input type="text" />
        </label><br />
        <label>
          Phone Number:<br />
          <input type="text" />
        </label><br />
        <label>
          Email Address:<br />
          <input type="text" />
        </label><br />
        <label>
          Other Information:<br />
          <input type="text" />
        </label><br />

        <button>Pick Up</button>
        <button>Delivery</button>

        <p>Payment Method</p>
        <button>Cash</button>
        <button>Eftpos</button><br />

        <button on:click={submitOrder}>Submit</button>
      </div>
    </div>

    {#each $orders as order}
      <li>{order}</li>
    {/each}
  </main>

  <Footer />
</body>

<style>
  body {
    background-color: black;
    color: white;
  }

  button {
    font-size: 2ch;
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-style: normal;
    color: white;
    background-color: #f27a2d;
  }

  p {
    color: white;
  }

  label {
    color: white;
  }

  li {
    color: white;
  }
</style>
