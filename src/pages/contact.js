import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { navigate } from "gatsby-link"

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    })

    const encode = (data) => {
      const {name, email, message} = data
      return `form-name=contact&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
    }

    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: encode(formState)
        })
        setFormState({
            name: "",
            email: "",
            message: ""
        })
        navigate('/')
    }

    return (
        <Layout>
            <Head page="Contact" />
            <h1>Contact</h1>
            <form name="contact" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <label>
                    Name
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Johnny Appleseed"
                        onChange={handleChange}
                        value={formState.name} 
                    />
                </label>
                <label>
                    Email
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="johnny@apple.com"
                        onChange={handleChange}
                        value={formState.email}
                    />
                </label>
                <label>
                    Message
                    <textarea 
                        name="message" 
                        placeholder="Hey what's up?"
                        onChange={handleChange}
                        value={formState.message}
                    ></textarea>
                </label>
                <input type="submit" value="Contact Me" />
            </form>
        </Layout>
    )
}

export default Contact