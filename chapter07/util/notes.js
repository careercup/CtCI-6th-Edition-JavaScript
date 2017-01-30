// Create elegant maintainable object-oriented code
// 
// ** Steps to handle object oriented design **
// 
// 1) handle ambiguity by asking clarifying questions
// e.g. who is going to use it and how are they going to use it?
// Know that requirements are not straightforward without extensive context
// 
// 2) define core objects
// e.g. Table, chair, etc.
// 
// 3) analyze relationships
// group to members, inheritance, one-to-many/one-to-one/many-to-many
// test and check the relationships for assumptions
// 
// 4) investigate actions
// consider key actions of objects and how they relate to each other.
// will likely forget some object and need to update design
// 
// ** Design Patterns **
// 
// a) Singleton design pattern
// 
// ensures that a class only has one instance and ensures access to instance through
// the application
// 
// many people dislike the Singleton design pattern 'anti-pattern' as in can interfere
// with unit testing
// 
// b) Factory Method design pattern
// 
// offer interface creating instance of class, with subclass deciding which class to
// instantiate.
// 
// factory method takes a parameter representing which class to instantiate
// 