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
  let orderInfo = []
  let name = ""
  let phoneNumber = ""
  let email = ""
  let extraInfo = ""
  let orderMethod = ""
  let paymentMethod = ""

  function addItem(item) {
    $userOrder = [...$userOrder, item]
    $orderPrice = $orderPrice + item.price
  }
  function removeItem(index, item) {
    $userOrder = [...$userOrder.slice(0, index), ...$userOrder.slice(index + 1)]
    $orderPrice = $orderPrice - item.price
  }

  //push the userOrder to a bigger array that will contain all the orders

  function submitOrder() {
    orderInfo = [$userOrder, name, orderMethod, paymentMethod] //add the rest of the details later once it works
    $orders = [...$orders, orderInfo]
    // $userOrder = ""
    // $orderPrice = 0
  }

  function pickUp() {
    orderMethod = "Pick Up"
  }

  function delivery() {
    orderMethod = "Delivery"
    // add a surcharge to the total orderPrice and then disable both button so that it won't keep adding the surcharge onto the order if they keep changing their preference
  }

  function cash() {
    paymentMethod = "Cash"
  }

  function eftpos() {
    paymentMethod = "Eftpos"
  }
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

        <p>Total Order Price: ${$orderPrice}<br /></p>
      </div>
      <div class="column">
        <label>
          Name:<br />
          <input type="text" bind:value={name} />
        </label><br />
        <label>
          Phone Number:<br />
          <input type="text" bind:value={phoneNumber} />
        </label><br />
        <label>
          Email Address:<br />
          <input type="text" bind:value={email} />
        </label><br />
        <label>
          Other Information:<br />
          <input type="text" bind:value={extraInfo} />
        </label><br />

        <button on:click={pickUp}>Pick Up</button>
        <button on:click={delivery}>Delivery</button><br />

        <p>Payment Method</p>
        <button on:click={cash}>Cash</button>
        <button on:click={eftpos}>Eftpos</button><br />

        <button on:click={submitOrder}>Submit Order</button>

        {name}
        {phoneNumber}
        {email}
        {extraInfo}

        <p>Order Method: {orderMethod}</p>
        <p>Payment Method: {paymentMethod}</p>
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
