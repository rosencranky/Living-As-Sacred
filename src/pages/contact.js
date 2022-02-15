import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

const Contact = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <Header />
    <div className="section min-h-screen">
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="name" />
        </label>
        <label>
          Message:
          <input type="text" name="name" />
          "I want to sign up "
        </label>
        <input type="submit" value="Submit" />

        <div className="border border-white w-full flex flex-wrap mt-auto">
          <input
            className="flex-1 p-5 md:p-8 bg-transparent text-white font-sans font-bold w-full focus:outline-none ring-white"
            name="_replyto"
            type="email"
            placeholder="Your email address.."
          />
          <div className="w-auto border-l border-white">
            <button
              className="text-center font-bold w-full h-full flex items-center justify-center ring-white md:text-lg px-5 md:px-8 hover:bg-black hover:bg-opacity-10 transition ease-in-out duration-300"
              type="submit"
            >
              Send{" "}
              <span className="hidden md:inline-block">&nbsp;your message</span>
            </button>
          </div>
        </div>
      </form>
    </div>
    <Footer />
  </Layout>
)

export default Contact
