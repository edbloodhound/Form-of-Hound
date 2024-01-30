"use client";
import React, { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('Please Complete the form');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleFormComplete = (e) => {
    setTitle('Thank you for your submission');
    setName('');
    setPhone('');
    setEmail('');
  }

  return (
    <main>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">姓名:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="gender">性别:</label>
        <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">男</option>
          <option value="female">女</option>
        </select>

        <label htmlFor="phone">电话:</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label htmlFor="email">邮箱:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <button type="submit" onClick={handleFormComplete}>提交</button>
      </form>
    </main>
  );
}
