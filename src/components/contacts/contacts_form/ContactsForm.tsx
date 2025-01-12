import React, { useState } from "react";
import s from './ContactsForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { resetForm, sendFormData, updateField } from "../../../store/slices/formSlice";

const ContactForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const formData = useSelector((state: RootState) => state.form);
  const { userName, email, question } = formData;

  const [errors, setErrors] = useState({
    userName: false,  
    email: false,
    question: false, 
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
  
    dispatch(updateField({ field: name as keyof typeof formData, value }));
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      userName: !formData.userName.trim(), 
      email: !formData.email.trim(),
      question: !formData.question.trim(), 
    };

    setErrors(newErrors);

    const isValid = !Object.values(newErrors).includes(true);
    if (isValid) {
      alert("Сообщение успешно отправлено");
      dispatch(sendFormData({ userName, email, question }))
        .unwrap()
        .then(() => {
        
        })
        .catch((error) => {
          console.error("Error sending form data:", error);
        });

     
      dispatch(resetForm());
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "30px" }} className={s.form}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "60%",
        }}
      >
        <input
          type="text"
          name="userName" 
          placeholder="Имя"
          value={formData.userName}
          onChange={handleChange}
          style={{
            padding: "10px",
            border: errors.userName ? "1px solid red" : "1px solid #ccc", // Corrected: Check errors.userName
          }}
        />
        {errors.userName && ( 
          <span style={{ color: "red", fontSize: "12px" }}>
            Вы пропустили это поле.
          </span>
        )}

        <input
          type="email"
          name="email" 
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          style={{
            padding: "10px",
            border: errors.email ? "1px solid red" : "1px solid #ccc",
          }}
        />
        {errors.email && (
          <span style={{ color: "red", fontSize: "12px" }}>
            Вы пропустили это поле.
          </span>
        )}

        <button
          type="submit"
          style={{
            backgroundColor: "#0000ff",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Отправить сообщение
        </button>
      </div>

      <div style={{ width: "80%" }}>
        <textarea
          name="question"
          placeholder="Сообщение"
          value={formData.question}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "5px",
            resize: "none",
            height: "91%",
            border: errors.question ? "1px solid red" : "1px solid #ccc", 
          }}
        ></textarea>
        {errors.question && ( 
          <span style={{ color: "red", fontSize: "12px" }}>
            Вы пропустили это поле.
          </span>
        )}
      </div>
    </form>
  );
};

export default ContactForm;