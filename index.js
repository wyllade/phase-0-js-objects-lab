//Write your code here
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

const logAttendeeName = (attendee) => {
  console.log(attendee.name);
}

const logTicketPrice = (attendee) => {
  console.log(attendee.ticketPrice);
}

const updateTicketType = (attendee, newType) => {
  attendee.ticketType = newType;
}
const updateTicketPrice = (attendee, newPrice) => {
  attendee.ticketPrice = newPrice;
}
const removeEventProperty = (attendee) => {
  delete attendee.event;
}

const addCheckedInProperty = (attendee) => {
  attendee.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};