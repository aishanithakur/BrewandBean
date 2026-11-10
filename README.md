# Brew & Bean Café ☕

A responsive café website with a table-booking form, built as a front-end practice project.

🔗 **Live site:** https://brewbeann.netlify.app/

## Features
- Sections for Home, About, Menu, Gallery, Reviews, and Contact
- Menu cards with prices
- Table booking form (name, email, date, time, number of people, message)
- Booking details are sent to the owner's email using Formspree
- Mobile friendly layout, scroll animations

## Built With
- HTML, CSS, JavaScript
- Formspree (form handling)
- Netlify (hosting)

## How the Booking Form Works
The form sends a POST request to Formspree. Formspree emails the submitted details to the café owner and shows the visitor a confirmation page. There is no custom backend, so it does not check availability or prevent double bookings.

## About This Project
I built this with AI assistance while learning how websites and forms work. I'm now studying the code to understand it and improve it myself.
The reviews, phone number, and email are placeholder content for demonstration.

## What I Learned
- How HTML forms send data
- How to connect a form to a service like Formspree
- How to deploy a site on Netlify

## Future Improvements
- Form validation and spam protection
- Availability checking for bookings
- Confirmation email to the customer
