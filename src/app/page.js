"use client";
import React, { useState } from 'react';

export default function Home() {
  const [title, setTitle] = useState('Please Complete the form');
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
  });

  const resetInputs = () => {
    setFormData({
      name: "",
      gender: "",
      email: "",
      phone: "",
    })
  }

  const handleFormComplete = async (e) => {
    e.preventDefault();

    try {
      const respone = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
    }

    setTitle('Thank you for your submission');
    resetInputs();
  }

  return (
    <main>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">姓名:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="gender">性别:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">男</option>
          <option value="female">女</option>
        </select>

        <label htmlFor="phone">电话:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={(e) => setPhone(e.target.value)} />

        <label htmlFor="email">邮箱:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setEmail(e.target.value)} />

        <button type="submit" onClick={handleFormComplete}>提交</button>
      </form>
    </main>
  );
}
