/**
 * Generic and classes
 * Make classes more reusable with generic types
 */


/**
 * The following topics are covered
 *   - A simple class
 *   - Adding an interface to a class
 *   - Slight modification leading to unpredictable results
 *   - Generic to the rescue
 */


/**
 * A simple class
 */

/**
 * Engineers with an object-oriented background may associate the concept of generic with classes.
 *   It is a mechanism to generialize a class, to avoid duplicating the definition for each
 *   flavor of a class.
 */

// Three classes
class Human1 {
  public greeting: string = "Hello";
}
class Lion1 {
  public greeting: string = "Grrrrrr";
}
class Tulip1 {
  public greeting: string = "...";
}

class LivingSpecies_1 {
  public species: Human1;

  constructor(species: Human1) {
    this.species = species;
  }
  public sayHello(): void {
    console.log(this.species.greeting);
  }
}
const species1 = new LivingSpecies_1(new Human1());
species1.sayHello();

/**
 * The code above might work even if we pass a different class object, i.e., Lion or Tulip
 *   (which is not considered a good coding practice and may lead to unpredictable results)
 *   to it because TypeScript is structural based and not nominal, which means it does not
 *   rely on the name but on the signature.
 */


/**
 * Adding an interface to our class
 */

/**
 * The code above is fine but would require creating a class 'LivingSpecies_1' for each of the
 *   three species we have (Human, Lion, Tulip). It does not scale well if the number of
 *   classes increases and is not very shareable outside the scope of the application where
 *   the class is created.
 */

/**
 * A step towards reusability is to have an interface that is shared among the species and
 *   used in the common class.
 */

// Three classes that inherit a common one
interface Greeter {
  greeting: string;
}
class Human2 implements Greeter {  // Implement the common interface
  public greeting: string = "Hello";
}
class Lion2 implements Greeter {
  public greeting: string = "Grrrrr";
}
class Tulip2 {
  public greeting: string = "...";
}

class LivingSpecies {
  public species: Greeter;

  constructor(species: Greeter) {
    this.species = species;
  }
  public sayHello(): void {
    console.log(this.species.greeting);
  }
}
const species2 = new LivingSpecies(new Human2());
species2.sayHello();
const species3 = new LivingSpecies(new Lion2());
species3.sayHello();
const species4 = new LivingSpecies(new Tulip2());
species4.sayHello();

/**
 * The code above is working, which might be surprising because 'Tulip2' does not implement the
 *   'Greeter' interface. TypeScript is structural-based, and not nominal, which means it does
 *   not rely on the name but on the signature. 'Tulip2' respects the contract of having a
 *   'greeting' member, hence it transpiles without error. Therefore, in that particular case,
 *   it works without generic. However, a small modification can cause unpredictable results.
 */


/**
 * Slight modification leading to unpredictable results
 */

interface Greeter2 {
  greeting: string;
}
class Human3 implements Greeter2 {
  public humanFunction() {
    console.log("Executing a human function");
  }
  public greeting: string = "Hello";
}
class Lion3 implements Greeter2 {
  public greeting: string = "Grrrrr";
  public lionAttack() {
    console.log("Attacking like a lion");
  }
}
class Tulip3 {
  public greeting: string = "...";
  public lookingGood() {
    console.log("Snazzy flower am I.");
  }
}
class LivingSpecies2 {
  public species: Greeter2;

  constructor(species: Greeter2) {
    this.species = species;
  }
  public getSpecies(): Greeter2 {
    return this.species;
  }
}
const species5 = new LivingSpecies2(new Human1());
// species5.getSpecies().humanFunction();  // Does not compile

/**
 * The code above does not work. THe function does not exist in the type 'Greeter' when we try
 *   to access the type passed by the constructor again. The reason is that we are passing the
 *   type 'Greeter' and underneath, while it has a more narrow type of 'Human' or 'Lion' or
 *   'Tulip', TypeScript follows what is specified to be an object of type 'Greeter'.
 * When returned, the 'Greeter' type is returned because the notion of a more specific type
 *   is gone.
 */


/**
 * Generic to the rescue
 */

/**
 * If we modify the code again, and instead of replying on an interface, we rely on declaring
 *   the member of a generic type, this generic type will be returned and the initial type will
 *   be recovered since it follows along it journey in the class.
 */

interface Greeter {
  greeting: string;
}
class Human implements Greeter {
  public humanFunction() {
    console.log("Executing a human function");
  }
  public greeting: string = "Hello";
}
class Lion implements Greeter {
  public greeting: string = "Grrrrr";
  public lionAttack() {
    console.log("Attacking like a lion");
  }
}
class Tulip {
  public greeting: string = "...";
  public lookingGood() {
    console.log("Snazzy flower am I.");
  }
}
class LivingSepcies<T> {
  public species: T;
  
  constructor(species: T) {
    this.species = species;
  }
  public getSpecies() {
    return this.species;
  }
}
const species6 = new LivingSpecies(new Human());
// species6.getSpecies().humanFunction();  // Doesn't compile
const species7 = new LivingSpecies(new Lion());
// species7.getSpecies().lionAttack();  // Doesn't compile
const species8 = new LivingSpecies(new Tulip());
// species8.getSpecies().lookingGood();  // Doesn't compile

/**
 * As you can see, the change is to the class definition, where we add <T> specifying that it
 *   will hold a generic type 'T'. The name 'T' could be anything. Every reference to 'T' in the
 *   class refers to the type passed in the constructor at the line that reads:
 *   
 *   constructor(species: T) {
 * 
 *   Then, the variable is stored at the line that reads:
 * 
 *   public species: T;
 * 
 *   also as the type 'T' and returned by 'getSpecies'. Once out, on the lines that read:
 * 
 *   species6.getSpecies().humanFunction();
 *   species7.getSpecies().lionAttack();
 *   species8.getSpecies().lookingGood();
 * 
 *   the variable's type is the actual one passed by the parameter during the initialization
 *   of each 'LivingSpecies'.
 */

/**
 * Generic can be used by classes in many other different ways. We are not limited to a single
 *   <T> and can have generic function that introduce their own generic parameter.
 */


export {};