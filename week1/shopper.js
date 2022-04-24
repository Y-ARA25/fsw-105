var shopper = {
    firstName: "Yesenia",
    lastName: "Lopez",
    age: 23,
    hasGiftCard: true,
    groceryCart: [" mangoes"," plantains"," milk"," adobo."],
    fullName: function() {
      return this.firstName + " " + this.lastName + " bought: " + this.groceryCart;
    }
  };

  console.log(shopper.fullName());