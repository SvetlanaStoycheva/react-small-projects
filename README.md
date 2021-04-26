## Small React projects made with John Smilga's React tutorial

## Corresponding Tutorial Topics

#### useState

1. Birthday Reminder

- it is a list of birthdays, each person has an image, name and age
- clear all button
- idea: https://www.uidesigndaily.com/posts/sketch-birthdays-list-card-widget-day-1042

#### useEffect and Conditional Rendering

2. Tours

- fetch list of tours, loading option
- for every tour there is a image, name, price, read more/show less button
- remove functionality

3. Reviews

- functionality that allows us to show different reviews; forwards, backwards and random
- using react icons library; npm install react-icons --save

4. Accordion

- there is a list of questions and toggle functionality for the answers
- during toggling we change the icon inside of the button
- idea: https://uidesigndaily.com/posts/sketch-accordion-website-day-1175
- react-icons: npm install react-icons --save

5. Menu

- list of menu items
- dynamically added buttons (the more types you have in the list, the more buttons you'll have). Buttons allow us to filter the list (all, breakfast, lunch, shakes)

6. Tabs

- tabs which display detailed information
- fetch from external Api with built in fetch function

7. Slider

- prev/next button
- auto slide option with setInterval
- in action: https://gatsby-airtable-design-project.netlify.app/

#### Forms

8. Lorem Ipsum Generator

- 'dummy text' generator
- user can determine the number of paragraphs and click button 'generate'. Max paragraph number is 8.
- inspiration: Hipster ipsum https://hipsum.co

9. Color Shades Generator

- user passes in a color, the app returns different tints and shades of the particular color
- by pushing on a certain tint/shade, we copy its value to the clipboard
- error functionality; if the input color doesn't exist
- using data from external library [values.js](https://github.com/noeldelgado/values.js)

10. Grocery Bud

- it is a form, we can add, delete or edit items in the list
- alert functionality, toggling between success and danger, showing alert for 3 sec (setTimeout)
- use of one of the browser Api: the local storage

#### useRef

11. Navbar

- building a navbar, toggling the links position on big and small window, smooth toggling via className/css
- navbar height changes dynamically according to the number of links inside
- using useRef hook

#### useContext

12. Modal And Sidebar

- toggle functionality between modal and sidebar
- add context to the whole app; useContext and context Api
- as an alternative: in order to reduce the imports, we can create a custom hook, that provides access to the AppContext

13. Menus and Submenus

- inspiration: https://stripe.com
- navbar and sidebar (menus/submenus) for large and small screen
- submenus position and width change dynamically

#### useReducer and useContext

14. Cart

- fetching data from external Api, using useReducer
- ability to increase/decrease the amount of the items in the cart
- remove item functionality, clear cart

#### React Router and useCallback

15. Cocktails
