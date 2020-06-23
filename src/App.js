import React from 'react';
import { useForm } from 'react-hook-form'
import './App.css';

function App() {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append("picture", data.picture[0])

    const res = await fetch("http://localhost:4000/picture", {
      method: "POST",
      body: formData
    }).then(res => res.json())
    alert(JSON.stringify(res))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} type="file" name="picture" />
      <button>Submit</button>
    </form>
  );
}

export default App;
