       let selectedPrice = 0;

    function selectTicket(element) {
      // Remove 'active' class from all ticket buttons
      const buttons = document.querySelectorAll(".ticket-button");
      buttons.forEach(btn => btn.classList.remove("active"));

      // Add 'active' class to the clicked one
      element.classList.add("active");

      // Get price and update
      selectedPrice = parseInt(element.getAttribute("data-price"));
      document.getElementById("quantity").disabled = false;
      updateTotal();
    }

    function updateTotal() {
      const quantity = parseInt(document.getElementById("quantity").value);
      const total = selectedPrice * quantity;
      document.getElementById("total").textContent = `Total: $${total}`;
    }