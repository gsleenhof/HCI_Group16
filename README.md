# HCI_Group16

Project Description: Our project allows users to complete a short survey by moving their body according to their answers to our questions, and tracking their position using the Kinect camera. After completing the survey, the user will be shown different events going on around Yale that they would be able to attend (based on their answers), and be able to save the link to the event using a QR code generated for each event.

Problem Space: Students do not know about Yale events that occur outside of their social circles and, thus, miss out on opportunities to support fellow students.

Tasks: 
- Filter by logistics that go into attending events (such as time, ticket information, and location).
- Save info or link about specific event going on that they may be interested in.

Deployment Environment Constraints: We have developed our code to make the interaction as simple and smooth as possible for potential users. Only one user can be "tracked" at a time by our code, so if the user is in a busy hallway or there is lots of traffic behind the user, the tracking may be a little bumpy, but the code will focus on whichever user it closest to the display. Regarding the distance of the user from the display and the physical contrains of the tracking, we have tested our code so that any user picked up by the display will be able to use the display. That being said, being closer to the screen is better, and staying in front of the display the entire time it is being used is suggested.

There are no additional dependecies to run this project outside the scope of the class. That is, you need access to display 2 at Yale University and to be connected to the Yale VPN, but nothing specifically in the code is required.

Collaboration Record:

Gabriel Sleenhof - ggs25: Setup the code with the kinect camera to track users and determine the state of the system based on user movement and state varibles (such as the currentState, and the various timers that track a user's position). Worked with Denny and Ulas to debug tracking code and logic used for the timer and how the system changes based on various states.

Denny Zhang - dsz8: Worked on the css file and html elements references in styles.css to improve the overall look of the display. Particularly making changes towards the end of the project to ensure the screen looked good on a much larger screen for the display, as opposed to the development enviroinment (a laptop screen). Helped gather real Yale data for the database, as opposed to the fake events used in Assignment 4. Helped with final testing/debugging system logic and edge casing. Helped setup html text for each state's screen content.

Sahiti Rachakonda - sr2367: Wrote the functions that choose and display events from database.js based on user's answers and an element of randomness so that new events are displayed each time to a certain degreee. Gathered data for Yale events to include in our database, as well as formatting the data in a way that could easibly be display on the summary screen. Helped making final design decisions and changes when formatting our code to fit on the actual display screen.

Jeffrey Lin - jfl45: Wrote the code used to generate a QR code for each event's link, as well as worked on collecting links for each event. Helped setup html text for each state's screen content, particularly the summary screen so that filter events would be displayed with a QR code, including displaying the QR in the correct card once it was generated.
