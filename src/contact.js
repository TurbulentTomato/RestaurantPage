import "./contact.css";

export function renderContact(content) {
  const contactHeading = document.createElement("h1");
  contactHeading.textContent = "Contact us at:";
  const contactList = document.createElement("ul");
  contactList.innerHTML = `
<li>+91 0000 0000 000</li>
<li>totallyrealemail@totallynotfake.com</li>
`;
  content.append(contactHeading, contactList);
}
