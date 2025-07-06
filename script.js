document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate form submission
  const name = e.target.name.value;
  const attendance = e.target.attendance.value;

  const messageBox = document.getElementById("rsvpMessage");
  messageBox.textContent = `Thank you, ${name}! Your RSVP (${attendance}) has been received. 💌`;

  e.target.reset();
});
