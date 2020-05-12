const minimumFuel = (fuel: number) => (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args) {
    if (this.fuel > fuel) {
      originalMethod.apply(this, args);
    } else {
      console.log("Not enough fuel!");
    }
  };

  return descriptor;
};

class Rocket {
  fuel = 50;

  @minimumFuel(100)
  launchToMars() {
    console.log("Launching to Mars in 3... 2... 1... 🚀");
  }

  @minimumFuel(25)
  launchToMoon() {
    console.log("Launching to Moon in 3... 2... 1... 🚀");
  }
}

const rocket = new Rocket();
rocket.launchToMars();
rocket.launchToMoon();
