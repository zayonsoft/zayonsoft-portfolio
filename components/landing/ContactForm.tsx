"use client";
import { IoPaperPlaneOutline } from "react-icons/io5";
import ContactTextarea from "./ContactTextarea";
import { ubuntu } from "./Main";
import { useEffect, useState } from "react";

import MessageModal from "../general/MessageModal";
import { BiLoader } from "react-icons/bi";
import axios from "axios";

export default function ContactForm({}) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formOkay, setFormOkay] = useState<boolean>(false);
  const [extraDetails, setExtraDetails] = useState<string[]>([]);
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const [messageType, setMessageType] = useState<"error" | "success">("error");
  const [loading, setLoading] = useState<boolean>(false);

  function ContactFormSubmitter() {
    const contactURL = process.env.NEXT_PUBLIC_CONTACT_BACKEND_URL;
    if (!formOkay) {
      bindModalError("Incomplete Form");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("body", message);
    setLoading(true);
    if (contactURL) {
      axios
        .post(contactURL, formData)
        .then((response) => {
          if (response.data.detail) {
            bindModalSuccess(response.data.detail);
            setExtraDetails([
              "Thank you for reaching out.",
              "We'll try to get back as soon as possible",
            ]);
          } else {
            bindModalSuccess("Success");
            setExtraDetails([
              "Thank you for reaching out.",
              "We'll try to get back as soon as possible",
            ]);
          }
          resetContactForm();
        })
        .catch((err) => {
          if (err.status) {
            if (err.response) {
              if (err.response.status == 500) {
                setExtraDetails([
                  "Something went wrong on our end. Please try again later.",
                ]);
                bindModalError("Internal Server Error");
              } else {
                console.log(err.response.data.detail);
                if (err.response.data) {
                  setExtraDetails(["Please try again later"]);
                  bindModalError(
                    err.response.data.detail
                      ? err.response.data.detail
                      : "An Error Occured"
                  );
                } else {
                  setExtraDetails(["Please try again later"]);
                  bindModalError("An Error Occured");
                }
              }
            }
          } else {
            bindModalError("Network Error!");
            setExtraDetails([
              "Unable to connect. Check your internet and try again",
              "If the issue persists, try again later.",
            ]);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      bindModalError("A technical error has occurred.");
      setExtraDetails([
        "Don't worry - it's not your fault.",
        "If you are the owner, please contact your IT personnel.",
        `<b class="text-gray-700">Possible cause:</b> A backend endpoint was not configured.`,
      ]);
      setLoading(false);
      return;
    }
    // make The API Call
  }

  function resetContactForm() {
    setEmail("");
    setName("");
    setMessage("");
  }

  function updateEmail(value: string) {
    if (!(loading || modalOpened)) setEmail(value);
  }
  function updateMessage(value: string) {
    if (!(loading || modalOpened)) setMessage(value);
  }
  function updateName(value: string) {
    if (!(loading || modalOpened)) setName(value);
  }

  function bindModalError(message: string) {
    setModalMessage(message);
    setMessageType("error");
    setModalOpened(true);
  }

  function bindModalSuccess(message: string) {
    setModalMessage(message);
    setMessageType("success");
    setModalOpened(true);
  }

  function closeModal() {
    setModalOpened(false);
  }

  useEffect(() => {
    setFormOkay(true); //first clear the previous error
    let internalOkay = true;
    const internalErrorList: string[] = [];
    if (!name.trim()) {
      internalOkay = false;
      internalErrorList.push("Name Cannot be blank!");
    }
    if (!email.trim()) {
      internalOkay = false;
      internalErrorList.push("Email Cannot be blank!");
    }
    if (!email.includes("@")) {
      internalOkay = false;
      internalErrorList.push("Email must be valid!");
    }
    if (!message.trim()) {
      internalOkay = false;
      internalErrorList.push("Message Cannot be left blank");
    }
    if (!modalOpened) {
      setExtraDetails(internalErrorList);
      setFormOkay(internalOkay);
    }
  }, [name, email, message]);

  useEffect(() => {
    if (formOkay) setExtraDetails([]);
  }, [formOkay]);

  return (
    <form
      className="max-w-full grid gap-15"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        ContactFormSubmitter();
      }}
    >
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-20 max-[701px]:gap-10">
        <div className={`grid gap-2.5 ${ubuntu.className} `}>
          <label
            className={`text-[#12F7D6] text-sm font-light`}
            htmlFor="sender-name"
          >
            Your name *
          </label>
          <input
            id="sender-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            className="capitalize text-white font-light w-full placeholder:text-gray-400 placeholder:text-sm placeholder:font-light py-1 outline-none border-b-1 border-b-[#98FAEC] border-l-0"
            value={name}
            onChange={(e) => updateName(e.target.value)}
          />
        </div>
        <div className={`grid gap-2.5 ${ubuntu.className} `}>
          <label
            className={`text-[#12F7D6] text-sm w-fit font-light`}
            htmlFor="sender-mail"
          >
            Your email *
          </label>
          <input
            id="sender-mail"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="text-white font-light placeholder:text-gray-400 placeholder:text-sm placeholder:font-light py-1 outline-none border-b-1 border-b-[#98FAEC] border-l-0"
            value={email}
            onChange={(e) => updateEmail(e.target.value)}
          />
        </div>
      </section>
      <ContactTextarea value={message} setValue={updateMessage} />
      <section>
        <button
          className={`custom-transition flex items-center font-normal m-auto rounded-full text-[#292F36] ${
            loading
              ? "bg-gray-300"
              : "bg-[#12F7D6] hover:bg-[#98FAEC] cursor-pointer"
          } py-2.5 px-6 text-lg gap-2 ${ubuntu.className}`}
        >
          <span>Send Message</span>
          {!loading ? (
            <span>
              <IoPaperPlaneOutline size={22} />
            </span>
          ) : (
            <span className="animate-spin">
              <BiLoader size={22} />
            </span>
          )}
        </button>
      </section>
      <MessageModal
        open={modalOpened}
        message={modalMessage}
        extra_msgs={extraDetails}
        type={messageType}
        modalCloser={closeModal}
      />
    </form>
  );
}
