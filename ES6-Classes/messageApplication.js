
  class Message {
      // Define static properties here
      static status = 'offline';
      static totalMessages = 0;

      // Define the constructor to initialize instance variables
      constructor(sender, receiver, messageContent) {
          this.sender = sender;
          this.receiver = receiver;
          this.messageContent = messageContent;
      }

      // Define static method to change the status
      static changeStatus(status) {
          Message.status = status;
          if (Message.status == 'online') {
              console.log("The status has been changed to online");
          } else {
              console.log("The status has been changed to offline");
            }
          
      }

      
      // Define static method to record a message and Increment totalMessages
      static recordMessage() {
          Message.totalMessages++;
      }
      // Define instance method to display details
      displayDetails() {
          console.log(
`Sender: ${this.sender}
Receiver: ${this.receiver}
Message: ${this.messageContent}
Status: ${Message.status}
Total Messages: ${Message.totalMessages}`);
      } 
  }

  

Message.changeStatus("online");
Message.recordMessage();
const myMessage = new Message("John", "Jane", "Hello");
myMessage.displayDetails();