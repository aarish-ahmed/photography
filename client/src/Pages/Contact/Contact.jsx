import { useEffect, useState } from "react";
import { API_URL } from "../../Api/api";

const Contact = () => {
  const [contact, setContact] = useState(null);

  const getContact = async () => {
    const res = await fetch(`${API_URL}/app/contact`);
    const data = await res.json();

    if (res.ok) {
      setContact(data);
    }
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-8 px-8 md:px-14 md:flex md:flex-row">
        <div className="image pt-8">
          {contact?.image?.url && (
            <img
              src={contact.image.url}
              className="h-70 w-full md:h-[80%] md:w-260"
              alt="Contact"
            />
          )}
        </div>

        <div className="description flex flex-col gap-14">
          <div className="heading">
            <h1 className="font-bold text-3xl text-orange-500">
              Contact us
            </h1>
          </div>

          {(contact?.studio?.email || contact?.studio?.phone) && (
            <div className="flex flex-col">
              <p className="mb-3 font-bold text-xl text-orange-500">
                STUDIO, EXHIBITIONS, IMAGE LICENCING
              </p>

              {contact?.studio?.email && (
                <a
                  href={`mailto:${contact.studio.email}`}
                  className="w-fit border-b"
                >
                  {contact.studio.email}
                </a>
              )}

              {contact?.studio?.phone && (
                <a
                  href={`tel:${contact.studio.phone}`}
                  className="w-fit border-b"
                >
                  {contact.studio.phone}
                </a>
              )}
            </div>
          )}

          {contact?.printSales?.website && (
            <div>
              <p className="mb-3 font-bold text-xl text-orange-500">
                PRINT SALES
              </p>

              <a
                href={`https://${contact.printSales.website}`}
                className="w-fit border-b"
                target="_blank"
                rel="noreferrer"
              >
                {contact.printSales.website}
              </a>
            </div>
          )}

          {(contact?.socialMedia?.instagram ||
            contact?.socialMedia?.linkedin) && (
            <div className="flex flex-col">
              <p className="mb-3 font-bold text-xl text-orange-500">
                SOCIAL MEDIA
              </p>

              {contact?.socialMedia?.instagram && (
                <a
                  href={contact.socialMedia.instagram}
                  className="w-fit border-b"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              )}

              {contact?.socialMedia?.linkedin && (
                <a
                  href={contact.socialMedia.linkedin}
                  className="w-fit border-b"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              )}
            </div>
          )}

          {(contact?.projectWebsites?.microsculpture ||
            contact?.projectWebsites?.extinctAndEndangered ||
            contact?.projectWebsites?.hiddenBeauty) && (
            <div className="flex flex-col">
              <p className="mb-3 font-bold text-xl text-orange-500">
                PROJECT WEBSITES
              </p>

              {contact?.projectWebsites?.microsculpture && (
                <a
                  href={contact.projectWebsites.microsculpture}
                  className="w-fit border-b"
                  target="_blank"
                  rel="noreferrer"
                >
                  Microsculpture
                </a>
              )}

              {contact?.projectWebsites?.extinctAndEndangered && (
                <a
                  href={contact.projectWebsites.extinctAndEndangered}
                  className="w-fit border-b"
                  target="_blank"
                  rel="noreferrer"
                >
                  Extinct & Endangered
                </a>
              )}

              {contact?.projectWebsites?.hiddenBeauty && (
                <a
                  href={contact.projectWebsites.hiddenBeauty}
                  className="w-fit border-b"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Hidden Beauty of Seeds & Fruits
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="footer bg-gray-100 text-center px-4 mt-5 pt-8 pb-8 md:p-10">
        <p>
          All photography © Copyright Levon Biss 2025. No unauthorised use. For
          all enquiries please email -
          {contact?.studio?.email && (
            <a
              href={`mailto:${contact.studio.email}`}
              className="text-orange-500 border-b"
            >
              {" "}
              {contact.studio.email}
            </a>
          )}
        </p>
      </div>
    </>
  );
};

export default Contact;