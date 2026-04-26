//Do not alter the starter code.
function main(){
//Create your class "User" here with all the properties and methods
  class User {
    #name;
    #email;
    #password;
    #posts;

    constructor(name, email, password) {
      this.#name = name;
      this.#email = email;
      this.#password = password;
      this.#posts = [];
    }

    get getName() {
      return this.#name;
    }

    get getEmail() {
      return this.#email;
    }

    get getPassword() {
      return this.#password;
    }

    set setName(name) {
       this.#name = name;
    }

    set setEmail(email) {
      this.#email = email;
    }

    set setPassword(password) {
      this.#password = password;
    }

    addPost(postObj) {

    }
}
//Create your class "Post" here inheritting the User class with all the properties and methods as mentioned
  const user1 = new User("John", "john@example.com", "password123");
  const post1 = new Post(
    "John", 
    "john@example.com",
    "password123",
    "My first post",
    "Lorem ipsum dolor sit amet",
    "2021-01-01"
  );
  const post2 = new Post(
    "John", 
    "john@example.com",
    "password123",
    "My second post",
    "Consectetur adipiscing elit",
    "2021-01-02"
  );
  
  user1.addPost(post1);
  user1.addPost(post2);
  
  post1.addLike();
  post1.addLike();
  
  user1.displayPosts();
  // Output:
  // Posts by John:
  // - My first post
  // - My second post
  
  post1.displayDetails();
  // Output:
  // Owner: John
  // Title: My first post
  // Content: Loremipsum dolor sit amet
  // Date: 2021-01-01
  // Likes: 2
  return {User,Post};
}
main();