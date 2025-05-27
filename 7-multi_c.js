const arg = process.argv[2];
const count = parseInt(arg);

if (!arg || isNaN(count)) {
  console.log("Missing number of occurrences");
} else if (count > 0) {
  for (let i = 0; i < count; i++) {
    console.log("C is fun");
  }
}
// If count <= 0, do nothing (no output)
