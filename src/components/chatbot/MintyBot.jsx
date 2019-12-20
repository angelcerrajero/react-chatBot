import React from "react";
import ChatBot from "react-simple-chatbot";
function MintyBot(props) {
    const config = {
      width: "300px",
      height: "400px",
      floating: true,
    };
    const steps = [
        {
           id: "Greet",
           message: "Hello, Welcome to our shop",
           trigger: "Ask Name"
        },
        {
           id: "Ask Name",
           message: "Please type your name?",
           trigger: "Waiting user input for name"
        },
        {
           id: "Waiting user input for name",
           user: true,
           trigger: "Asking options to eat"
        },
        {
           id: "Asking options to eat",
           message: "Hi {previousValue}, Please click on what you want!",
           trigger: "Displaying options to eat"
        },
        {
           id: "Displaying options to eat",
           options: [
                      {
                        value: "Breakfast",
                        label: "Breakfast",
                        trigger: "Your ingredients"
                      },
                      { 
                        value: "Lunch",
                        label: "Lunch",
                        trigger: "Lunch Not available"
                      } 
                    ]
        },
        {
           id: "Lunch Not available",
           message: "Sorry, We don't have anything special for Lunch. Would you like to try for Breakfast?",
           trigger: "Asking for Breackfast"
        },
        {
           id: "Asking for Breackfast",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: "Your ingredients"
                      },
                      { 
                        value: "false",
                        label: "No",
                        trigger: "Done"
                      } 
                    ]
        },
        {
           id: "Your ingredients",
           message: "Would you like chocolate in your Lunch?",
           trigger: "Your Lunch"
        },
        {
           id: "Your Lunch",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: "Your Dish with chocolate" 
                      },
                      
                      { 
                        value: "false",
                        label: "No",
                        trigger: "Your Dish"
                      } 
                    ]
        },
        
        {
           id: "Your Dish",
           message: "The Dish of the day for you is:      carrot cake",
           trigger: "Done"
        },

        {
            id: "Your Dish with chocolate",
            message: "The Dish of the day for you is:      chocolat cheese cake",
            trigger: "Done"
         },
 
        
        {
            id: "Done",
            message: "Have a great day !!",
            end: true
        }
];
    
    return <ChatBot steps={steps} {...config} />;
   }

export default MintyBot;