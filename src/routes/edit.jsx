import React from "react";
import { Form, useLoaderData, redirect } from "react-router-dom";
import { updateContact } from "../Contacts";
// import imageURL from "../../public/horse-8193368_1280 (1).jpg";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export default function EditContact() {
  const { contact } = useLoaderData();

  return (
    <Form method="post" id="contact-form" className="edit-container">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <p>
        <label>
          <span>Twitter</span>
          <input
            type="text"
            name="twitter"
            placeholder="@jack"
            defaultValue={contact.twitter}
          />
        </label>
      </p>
      <p>
        <label>
          <span>Avatar URL</span>
          <input
            placeholder="https://example.com/avatar.jpg"
            aria-label=""
            type="text"
            name="avatar"
            defaultValue={contact.avatar}
          />
        </label>
      </p>
      <p>
        <label>
          <span>Notes</span>
          <textarea name="notes" defaultValue={contact.notes} rows={6} />
        </label>
      </p>

      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}
