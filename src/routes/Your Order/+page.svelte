<script>
  //display the userOrder and other details that they can fill out such as their name etc.
  //button to select if the order is a delivery or a pick up

  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"
  import { userOrder } from "$lib/stores.js"
  import { orderPrice } from "$lib/stores.js"
  import { orders } from "$lib/stores.js"

  function submitOrder() {
    $orders = [...$orders, $userOrder]
    $userOrder = ""
    $orderPrice = 0
  }

  function addItem(item) {
    $orderPrice = orderPrice + item.price
    $userOrder = [...$userOrder, item]
  }
  function removeItem(item) {}
  //add function to remove and add items that are already in the cart by linking each function to a + and - button which will be next to each of the items in the cart.
</script>

<Header />
<Nav />
<div class="columns">
  <div class="column">
    {#each $userOrder as item}
      <li>
        {item} <button on:click={addItem}>+</button><button on:click={removeItem}>-</button>
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

    <button class="button" on:click={submitOrder}>Submit</button>
  </div>
</div>

<p>{$orders}</p>

<Footer />

<style>
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
</style>
