const arg = process.argv[2];
const size = parseInt(arg);

if (!arg || isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) {
  const line = "X".repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(line);
  }
}
// If size <= 0, print nothing
