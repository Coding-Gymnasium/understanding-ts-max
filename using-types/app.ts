let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// without this check I would get an error because I can't gurantee userInput would always be a string.
if (typeof userInput === "string") {
  userName = userInput;
}

// Never type

// the function below doesn't return anything. It's called type 'never'
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }; 
}

generateError("An error occurred!", 500);
