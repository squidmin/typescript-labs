/**
 * enum with values
 * enum can be of 'string' type. In that case, every member requires a value without exception.
 */
enum MyStringEnum {
  ChoiceA = "A",
  ChoiceB = "B",
}

/**
 * A mixed 'enum' value type is acceptable if every member is defined. For example, you can have
 *   one item be an integer and another be a string type. It is recommended not to mix types since
 *   it might be more confusing than pragmatic.
 */
enum MyStringAndNumberEnum {
  ChoiceA, // 0
  ChoiceB = "B",
  ChoiceC = 100,
}

export {};
