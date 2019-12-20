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
                        value: "Lunch",
                        label: "Lunch",
                        trigger: "Your ingredients"
                      },
                      { 
                        value: "Breakfast",
                        label: "Breakfast",
                        trigger: "Breakfast Not available"
                      } 
                    ]
        },
        {
           id: "Breakfast Not available",
           message: "Sorry, We don't have anything special for Breakfast. Would you like to try for Lunch?",
           trigger: "Asking for Lunch"
        },
        {
           id: "Asking for Lunch",
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
            message: "The Dish of the day for you is:      cheese cake",
            trigger: "Done"
         },
 
        {
           id: "Adding Mushroom in Pizza",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: () => {
                           props.eventHandler("mushroom");
                           return "Asking for Corn in Pizza"  
                         }
                      },
                      { 
                        value: "false",
                        label: "No",
                        trigger: "Asking for Corn in Pizza"
                      } 
                    ]
        },
        {
           id: "Asking for Corn in Pizza",
           message: "Would you like to have corn in your pizza",
           trigger: "Adding Corn in Pizza"
        },
 
        {
           id: "Adding Corn in Pizza",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: () => {
                           props.eventHandler("corn");
                           return "Asking for Veggies in Pizza"  
                         }
                      },
                      { 
                        value: "false",
                        label: "No",
                        trigger: "Asking for Veggies in Pizza"
                      } 
                    ]
        },
         
        {
           id: "Asking for Veggies in Pizza",
           message: "Would you like to have veggies in your pizza",
           trigger: "Adding Veggies in Pizza"
        },
 
        {
           id: "Adding Veggies in Pizza",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: () => {
                           props.eventHandler("veggie");
                           return "Done"  
                         }
                      },
                      { 
                        value: "false",
                        label: "No",
                        trigger: "Done"
                      } 
                    ]
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