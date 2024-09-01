<script>
  //display the userOrder and other details that they can fill out such as their name etc.
  //button to select if the order is a delivery or a pick up

  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"
  import { userOrder } from "$lib/stores.js"
  import { orderPrice } from "$lib/stores.js"

  let index
  let orderInfo = []
  let name = ""
  let phoneNumber = ""
  let email = ""
  let extraInfo = ""
  let orderMethod = ""
  let paymentMethod = ""
  let orderStatus = ""

  function addItem(item) {
    $userOrder = [...$userOrder, item]
    $orderPrice = $orderPrice + item.price
  }
  function removeItem(index, item) {
    $userOrder = [...$userOrder.slice(0, index), ...$userOrder.slice(index + 1)]
    $orderPrice = $orderPrice - item.price
  }

  function submitOrder() {
    orderInfo = [name, phoneNumber, email, extraInfo, orderMethod, paymentMethod]
    orderStatus = "done"
    alert("Your order has succesfully been submitted!")
    //send all order info and userOrder to the business through email

    newOrder()
  }

  function newOrder() {
    orderInfo = []
    name = ""
    phoneNumber = ""
    email = ""
    extraInfo = ""
    orderMethod = ""
    paymentMethod = ""
    orderStatus = ""
    $userOrder = ""
    $orderPrice = 0
  }

  function pickUp() {
    orderMethod = "Pick Up"
  }

  function delivery() {
    $orderPrice = $orderPrice + 5
    orderMethod = "Delivery"

    // add a surcharge to the total orderPrice and then disable both buttons so that it won't keep adding the surcharge onto the order everytime they press the buttons
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
          Other Information (For what time?):<br />
          <input type="text" bind:value={extraInfo} />
        </label><br />

        {#if orderMethod == "Delivery"}
          <button on:click={delivery} disabled>Delivery</button>
          <button on:click={pickUp} disabled>Pick Up</button>
        {:else}
          <button on:click={delivery}>Delivery</button>
          <button on:click={pickUp}>Pick Up</button>
        {/if}

        <p>Payment Method</p>
        <button on:click={cash}>Cash</button>
        <button on:click={eftpos}>Eftpos</button><br />

        <button on:click={submitOrder}>Submit Order</button>

        <p>Order Method: {orderMethod}</p>
        <p>Payment Method: {paymentMethod}</p>
      </div>
    </div>

    {#if orderStatus == "done"}
      <p>Your Order:</p>
      {#each $userOrder as item}
        <li>{item.name} - ${item.price}</li>
      {/each}
      <p>Order Information:</p>
      {orderInfo}
    {/if}
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
