const args = process.argv.slice(2);

const timer = function(args) {
  args.forEach((secs) => {
    if (secs > 0 && typeof(secs) !== isNaN) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, 1000 * secs);
    }
  });
};

timer(args);
