import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'

const Comment = () => {
  return (
    <div>
      <h3>Kommentera</h3>
      <form
        method="POST"
        action="YOUR_FORM_URL"
      >
        <input
          name="options[slug]"
          type="hidden"
        />
        <input name="fields[name]" type="text" placeholder="Namn" required />
        <br />
        <br />
        <input
          name="fields[email]"
          type="email"
          placeholder="Email"
          required
        />

        <br />
        <br />

        <textarea name="fields[message]" placeholder="Kommentar" required />

        <br />
        <br />

        <button type="submit">Skicka</button>
      </form>
      <div className="post-single">
        <div className="post-single__inner">
        </div>
      </div>
    </div>
  )
}

export default Comment
