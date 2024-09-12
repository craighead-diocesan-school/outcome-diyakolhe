<script>
  //display the userOrder and other details that they can fill out such as their name etc.
  //button to select if the order is a delivery or a pick up

  import Header from "$lib/Header.svelte"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"
  import { userOrder } from "$lib/stores.js"
  import { orderPrice } from "$lib/stores.js"

  import { onMount } from "svelte"

  export let form

  let index
  let orderInfo = []
  let name = ""
  let phoneNumber = ""
  let email = ""
  let extraInfo = ""
  let orderMethod = ""
  let paymentMethod = ""
  let orderStatus = ""
  let orderString = ""

  onMount(async () => {
    $userOrder.forEach((item) => {
      orderString += item.name + "- $" + item.price + ", "
    })
  })

  function addItem(item) {
    $userOrder = [...$userOrder, item]
    $orderPrice = $orderPrice + item.price
  }

  function removeItem(index, item) {
    $userOrder = [...$userOrder.slice(0, index), ...$userOrder.slice(index + 1)]
    $orderPrice = $orderPrice - item.price
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
    $userOrder = []
    $orderPrice = 0
  }
</script>

<svelte:head>
  <title>Bombay Street Feast - Your Order</title>
</svelte:head>

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
              class="add"
              on:click={() => {
                addItem(item)
              }}>+</button
            >
            <button
              class="remove"
              on:click={() => {
                removeItem(index, item)
              }}>-</button
            >
          </li>
        {/each}

        {#if $orderPrice > 0}
          <button on:click={newOrder}>Restart Order</button>
        {/if}

        <p>Total Order Price: ${$orderPrice}<br /></p>
      </div>

      <div class="column">
        <div class="form">
          <fieldset>
            <form method="POST" action="?/sendEmail">
              <div class="input">
                <label for="to">To:</label>
                <input name="to" type="email" value="bombaystreetfeast@gmail.com" />
              </div>

              <div class="input">
                <label for="">Order</label>

                <input name="body" bind:value={orderString} />
              </div>

              <div class="input">
                <label for="name">Name:</label>
                <input name="name" type="text" value="" />
              </div>

              <div class="input">
                <label for="method">Pick Up or Delivery:</label>
                <input name="method" type="text" value="" />
              </div>

              <div class="input">
                <label for="payment">Cash or Eftpos:</label>
                <input name="payment" type="text" value="" />
              </div>

              <div class="input">
                <label for="phone">Phone Number:</label>
                <input name="phone" type="text" value="" />
              </div>
              <div class="input">
                <label for="email">Email:</label>
                <input name="email" type="text" value="" />
              </div>
              <div class="input">
                <label for="address">Address(if delivery):</label>
                <input name="address" type="text" value="" />
              </div>

              <div class="input">
                <label for="other">Other Info:</label>
                <input name="other" type="text" value="" />
              </div>

              <button type="submit">Submit</button>
            </form>
            <p class="success">{form?.success || ""}</p>
          </fieldset>
        </div>
      </div>
    </div>
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

  .add {
    background-color: white;
    color: black;
  }

  .remove {
    background-color: white;
    color: black;
  }

  label {
    color: black;
  }

  p {
    color: white;
    font-family: "Karma", serif;
    font-weight: 400;
    font-style: normal;
  }

  li {
    color: white;
  }
</style>
