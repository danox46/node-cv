import imgLocation from "/assets/location-icon.png";
import imgPhone from "/assets/phone-icon.png";
import imgEmail from "/assets/email-icon.png";
import imgLinkedin from "/assets/linkedin-icon.png";

const ContactInfo = () => {
  // Object containing contact information
  const contactInfo = [
    {
      image: imgLocation,
      title: "Address",
      text: "123 Anywhere St., Any City",
    },
    {
      image: imgPhone,
      title: "Phone",
      text: "123-456-7890",
      link: "tel:123-456-7890",
    },
    {
      image: imgEmail,
      title: "Email",
      text: "hello@reallygreatsite.com",
      link: "mailto:hello@reallygreatsite.com",
    },
    {
      image: imgLinkedin,
      title: "LinkedIn",
      text: "Carl Smith - LinkedIn",
      link: "https://www.linkedin.com/",
    },
  ];

  // Function to render contact information
  const renderContactInfo = () => {
    return contactInfo.map((info, index) => (
      <div
        key={index}
        className={`column-contact-info__${info.title
          .toLowerCase()
          .replace(" ", "-")}`}>
        {info.image && (
          <div className="flex-row">
            <img src={info.image} alt={`${info.title.toLowerCase()}-icon`} />
            <div>
              <h4>{info.title}</h4>
              {info.link ? (
                <a href={info.link}>{info.text}</a>
              ) : (
                <p>{info.text}</p>
              )}
            </div>
          </div>
        )}
      </div>
    ));
  };

  // Render contact information
  return <div className="contact-info-container">{renderContactInfo()}</div>;
};

export default ContactInfo;
