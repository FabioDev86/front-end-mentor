# My development log

## 26 Jul 2023
I've created and styled the Description component.  

## 25 Jul 2023
I've created the app using create-next-app and pushed my first commit on GitHub
I've created a basic layout on Figma for the desktop version.

## 26 Jul 2023
I decided to use a Context Provider to share the plicometry spots between siblings components.

## 27 Jul 2023
There where some problems with the formula but now it is done. I forgot to consider the sex, so I will add
two radio button for the choice. After that I will put the calculation in a handler function linked to the button.

I decided to rename the Mesurements component into Data component.

Ok, added the radio, next time I will add the female formula

## 28 Jul 2023
There is a problem. The female formula needs different spots. So the value from the radio button should change 
the input fields.

First I changed the name of the ContextProvider from SpotsProvider to DataProvider. Then the name of the spots from {pectoral, abdomen, quadricep} to {spot1, spot2, spot3} so that they can be for either male or female.

Now that I've added the button I can focus on the styling. 

## 31 Jul 2023
Apparently, using div to group input element is a bad idea. Switching to fieldset.