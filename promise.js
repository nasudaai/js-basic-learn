function main() {
  return Promise.resolve("atai");
}

function log() {
  main().then(value => {
    console.log(value);
  })
}

log();
