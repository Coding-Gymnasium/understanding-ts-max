const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

// const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  console.log(enteredAddress);

  // send this to Google's API
}

form.addEventListener("submit", searchAddressHandler);
