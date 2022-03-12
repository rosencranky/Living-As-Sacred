import React from "react"
import LayoutPt from "../components/layoutPt"
import SEO from "../components/seo"

export default function ContactPt() {
  return (
    <LayoutPt>
      <SEO title="Contact" />
      <div className="flex justify-center h-90 items-center overflow-y-hidden ">
        <div className="w-full lg:w-1/2 xl:w-8/12 px-4  ">
          <h1 className="text-center top-margin-medium ">Contate-Nos</h1>

          <form
            className=" top-margin-medium z-0 "
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contato"
            action="/contact-success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <label>
              <div className="mt-12  flex justify-center">
                <input
                  className="p-3 md:p-6 bg-beige  border border-darkgreen rounded-xl focus:outline-none ring-white  w-3/4"
                  type="text"
                  name="name"
                  placeholder="Nome"
                  required
                />
              </div>
            </label>

            <label className="">
              <div className="mt-12 flex justify-center">
                <input
                  className=" p-3 md:p-6 bg-beige  border border-darkgreen rounded-xl focus:outline-none ring-white   w-3/4"
                  type="text"
                  name="email"
                  placeholder="Endereço de e-mail"
                  required
                />
              </div>
            </label>

            <label className="">
              {/* Message: */}
              <div className=" border border-darkgreen rounded-xl w-full  mt-12 h-full">
                <textarea
                  className="h-24 p-3 md:p-6 bg-beige text-black rounded-xl  w-full  focus:outline-none outline-none ring-none -mb-1"
                  name="message"
                  type="text"
                  // role="textbox"
                  placeholder="Quer se inscrever na jornada Living as Sacred. Por favor, pode me enviar os dados de pagamento?"
                  required
                />
              </div>
            </label>
            <div className=" mt-12 border-red rounded-xl flex items-center justify-center ">
              <button
                className="border border-green rounded-2xl bg-green hover:bg-beigetext-black px-6 py-3 monotext 
              text-sm 2xl:text-base no-underline  leading-none shadow-sm  ring-white transition ease-in-out duration-300"
                type="submit"
              >
                Mandar
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutPt>
  )
}
