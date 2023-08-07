import "./App.css";
import Form from "./componenet/Form";

function App() {
  const dynamicForm = {
    firstName: {
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      defaultValue: "",
      rules: {
        required: true,
      },
    },
    lastName: {
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
      defaultValue: "",
      rules: {
        required: true,
      },
    },
    gender: {
      label: "Gender",
      type: "radio",
      options: ["Male", "Female"],
      defaultValue: "",
      rules: {
        required: true,
      },
    },
    profession: {
      label: "Profession",
      type: "dropdown",
      options: ["Front-end Developer", "Back-end Developer", "Devops Engineer"],
      defaultValue: "",
      rules: {
        required: true,
      },
    },

    social: [
      {
        label: "Facebook",
        type: "text",
        defaultValue: "",
        rules: {
          required: true,
        },
      },
      {
        label: "Twitter",
        type: "text",
        defaultValue: "",
        rules: {
          required: true,
        },
      },
    ],
    contact: [
      {
        label: "Contact 1",
        type: "number",
        defaultValue: "",
        rules: {
          required: true,
        },
      },
      {
        label: "Contact 2",
        type: "number",
        defaultValue: "",
        rules: {
          required: true,
        },
      },
    ],
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form dynamicForm={dynamicForm} onSubmit={onSubmit} />
      </header>
    </div>
  );
}

export default App;
